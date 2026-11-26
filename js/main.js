(function () {
  "use strict";

  const D = window.DATOS;
  const META = D.meta;
  const P = META.periodo;
  const CFG = META.config;
  const MES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const MESC = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  const DIASC = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];
  const CLAVE = { ingreso: "ing", fijo: "fij", variable: "vari" };
  const TIPO_TXT = { ingreso: "Ingreso", fijo: "Gasto fijo", variable: "Gasto variable" };
  const TIPOS = ["ingreso", "fijo", "variable"];
  const C = { ing: "#2fa57b", fij: "#15513c", vari: "#8cb369", def: "#c4533b", sup: "#1d9a6c", atip: "#d9a21b", tx: "#4b5f54", linea: "#d3e0d6", tinta: "#14241c", grid: "#e6efe8", papel: "#fbfdfa" };
  const OSCUROS = ["#15513c", "#1c7a58", "#5f7a52", "#2a8f6a", "#3d6b4f", "#6b8f4e", "#0e3a2b", "#2fa57b"];
  const MESES_COLOR = ["#bfe8d2", "#2fa57b", "#0e3a2b"];
  const FUENTE = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

  const $ = (id) => document.getElementById(id);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const moneda = new Intl.NumberFormat(META.locale, { style: "currency", currency: META.moneda, maximumFractionDigits: 0 });
  const fm = (n) => moneda.format(Math.round(n));
  const pc = (n, d = 0) => (Number.isFinite(n) ? (n * 100).toFixed(d).replace(".", ",") + " %" : "—");
  const ab = (v) => (Math.abs(v) >= 1000 ? (v / 1000).toLocaleString(META.locale) + " mil" : String(v));

  const aFecha = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const aIso = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const suma = (s, n) => { const d = aFecha(s); d.setDate(d.getDate() + n); return aIso(d); };
  const dow = (s) => (aFecha(s).getDay() + 6) % 7;
  const lunes = (s) => suma(s, -dow(s));
  const qDe = (s) => (Number(s.slice(8)) <= 15 ? 1 : 2);
  const momento = (s) => { const d = Number(s.slice(8)); return d <= 10 ? 0 : d <= 20 ? 1 : 2; };
  const corto = (s) => { const d = aFecha(s); return d.getDate() + " " + MESC[d.getMonth()]; };
  const fechaTxt = (s) => { const d = aFecha(s); return d.getDate() + " " + MESC[d.getMonth()] + " " + d.getFullYear(); };
  const mesNombre = (m) => cap(MES[Number(m.slice(5)) - 1]);
  const rangoDias = (a, b) => { const o = []; for (let s = a; s <= b; s = suma(s, 1)) o.push(s); return o; };
  const unicos = (a) => [...new Set(a)];
  const signo = (n) => (n > 0 ? "+" : n < 0 ? "−" : "") + fm(Math.abs(n));

  const ord = (a) => [...a].sort((x, y) => x - y);
  const quant = (a, p) => { const i = (a.length - 1) * p, l = Math.floor(i), h = Math.ceil(i); return a[l] + (a[h] - a[l]) * (i - l); };
  const media = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  const desv = (a) => { const m = media(a); return Math.sqrt(media(a.map((x) => (x - m) ** 2))); };

  const TIPO_MAP = { ingreso: "ingreso", ingresos: "ingreso", fijo: "fijo", fijos: "fijo", variable: "variable", variables: "variable" };
  const limpia = (s) => String(s).trim().replace(/\s+/g, " ");
  const CAT = new Map(D.catalogo.map((c) => [limpia(c.concepto).toLowerCase(), c]));

  const MOV = D.movimientos
    .map((r, i) => {
      const tipo = TIPO_MAP[limpia(r.tipo).toLowerCase()];
      const monto = Number(r.monto);
      const fecha = limpia(r.fecha);
      if (!tipo || !Number.isFinite(monto) || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
        console.warn("Movimiento omitido por formato inválido:", r);
        return null;
      }
      const ref = CAT.get(limpia(r.concepto).toLowerCase());
      return { id: i, fecha, tipo, concepto: ref ? ref.concepto : cap(limpia(r.concepto)), categoria: ref ? ref.categoria : "Sin categoría", monto, nota: r.nota ? limpia(r.nota) : "", mes: fecha.slice(0, 7), dow: dow(fecha), semana: lunes(fecha), quincena: qDe(fecha), momento: momento(fecha), atipico: false };
    })
    .filter(Boolean)
    .sort((a, b) => (a.fecha < b.fecha ? -1 : a.fecha > b.fecha ? 1 : a.id - b.id));

  const baseAtip = MOV.filter((r) => (CFG.atipicos.soloVariables ? r.tipo === "variable" : r.tipo !== "ingreso"));
  const ordenAtip = ord(baseAtip.map((r) => r.monto));
  const Q1 = ordenAtip.length ? quant(ordenAtip, 0.25) : 0;
  const Q3 = ordenAtip.length ? quant(ordenAtip, 0.75) : 0;
  const LIM = Q3 + CFG.atipicos.factor * (Q3 - Q1);
  baseAtip.forEach((r) => { r.atipico = r.monto > LIM; });

  const SEMANAS_DATOS = unicos(rangoDias(P.inicio, P.fin).map(lunes));
  const limitesSemana = (l) => [l < P.inicio ? P.inicio : l, suma(l, 6) > P.fin ? P.fin : suma(l, 6)];
  const limitesMes = (m) => {
    const a = m + "-01";
    const f = aFecha(a);
    const b = aIso(new Date(f.getFullYear(), f.getMonth() + 1, 0));
    return [a < P.inicio ? P.inicio : a, b > P.fin ? P.fin : b];
  };
  const MESES_DATOS = unicos(rangoDias(P.inicio, P.fin).map((d) => d.slice(0, 7)));

  const base = () => ({ inicio: P.inicio, fin: P.fin, quincena: 0, tipos: new Set(TIPOS), concepto: "", atipicos: "todos", montoMin: 0, buscar: "" });
  let E = base();

  function filtrar() {
    const q = E.buscar.trim().toLowerCase();
    return MOV.filter((r) =>
      r.fecha >= E.inicio && r.fecha <= E.fin &&
      (!E.quincena || r.quincena === E.quincena) &&
      E.tipos.has(r.tipo) &&
      (!E.concepto || r.concepto === E.concepto) &&
      (E.atipicos === "todos" || (E.atipicos === "solo" ? r.atipico : !r.atipico)) &&
      r.monto >= E.montoMin &&
      (!q || (r.concepto + " " + r.nota + " " + r.categoria).toLowerCase().includes(q))
    );
  }

  function resumen(rows, dias, dm) {
    const s = (t) => rows.reduce((a, r) => (r.tipo === t ? a + r.monto : a), 0);
    const ing = s("ingreso"), fij = s("fijo"), vari = s("variable"), gas = fij + vari, bal = ing - gas;
    let sin = 0, racha = 0, max = 0;
    dias.forEach((d) => { if (dm.get(d).vari === 0) { sin++; racha++; max = Math.max(max, racha); } else racha = 0; });
    return { ing, fij, vari, gas, bal, tasa: ing ? bal / ing : NaN, peso: ing ? fij / ing : NaN, dias: dias.length, varDia: dias.length ? vari / dias.length : 0, sin, racha: max, nAtip: rows.filter((r) => r.atipico).length, n: rows.length, nIng: rows.filter((r) => r.tipo === "ingreso").length };
  }

  function construye(rows, dias) {
    const dm = new Map(dias.map((d) => [d, { ing: 0, fij: 0, vari: 0 }]));
    rows.forEach((r) => { const o = dm.get(r.fecha); if (o) o[CLAVE[r.tipo]] += r.monto; });
    const semanas = unicos(dias.map(lunes));
    const sm = new Map(semanas.map((l) => [l, { ing: 0, fij: 0, vari: 0 }]));
    const meses = unicos(dias.map((d) => d.slice(0, 7)));
    const mm = new Map(meses.map((m) => [m, { ing: 0, fij: 0, vari: 0, q1: 0, q2: 0 }]));
    rows.forEach((r) => {
      const k = CLAVE[r.tipo];
      sm.get(r.semana)[k] += r.monto;
      const m = mm.get(r.mes);
      m[k] += r.monto;
      if (r.tipo === "variable") m["q" + r.quincena] += r.monto;
    });
    return { rows, dias, dm, semanas, sm, meses, mm, res: resumen(rows, dias, dm) };
  }

  function contexto() {
    const dias = rangoDias(E.inicio, E.fin).filter((d) => !E.quincena || qDe(d) === E.quincena);
    return construye(filtrar(), dias);
  }

  function porConcepto(rows, soloGasto) {
    const m = new Map();
    rows.forEach((r) => {
      if (soloGasto && r.tipo === "ingreso") return;
      const k = r.tipo + "|" + r.concepto;
      let o = m.get(k);
      if (!o) { o = { concepto: r.concepto, tipo: r.tipo, categoria: r.categoria, n: 0, total: 0, montos: [] }; m.set(k, o); }
      o.n++; o.total += r.monto; o.montos.push(r.monto);
    });
    return [...m.values()].map((o) => ({ ...o, prom: o.total / o.n, min: Math.min(...o.montos), max: Math.max(...o.montos) })).sort((a, b) => b.total - a.total);
  }

  const inst = {};
  const tip = (e = {}) => ({ backgroundColor: "#fff", borderColor: C.linea, borderWidth: 1, textStyle: { color: C.tinta }, extraCssText: "border-radius:12px;box-shadow:0 8px 24px rgba(14,58,43,.18)", ...e });
  const ejeX = (e = {}) => ({ axisLine: { lineStyle: { color: C.linea } }, axisTick: { show: false }, axisLabel: { color: C.tx }, ...e });
  const ejeY = (e = {}) => ({ type: "value", splitLine: { lineStyle: { color: C.grid } }, axisLabel: { color: C.tx, formatter: ab }, ...e });
  const leyenda = (e = {}) => ({ top: 0, icon: "circle", textStyle: { color: C.tx }, ...e });

  function dibujar(id, opt) {
    const el = $(id);
    if (!el) return;
    if (!inst[id]) {
      inst[id] = echarts.init(el);
      if (window.ResizeObserver) new ResizeObserver(() => inst[id].resize()).observe(el);
    }
    const final = opt || { graphic: { type: "text", left: "center", top: "middle", style: { text: "Sin datos con los filtros actuales", fill: C.tx, fontSize: 14 } }, series: [] };
    inst[id].setOption({ textStyle: { fontFamily: FUENTE }, ...final }, true);
  }

  const lec = (id, html) => { const el = $(id); if (el) el.innerHTML = html || ""; };

  function kpi(id, valor, nota) {
    const e = $(id);
    e.querySelector(".kpi-valor").textContent = valor;
    e.querySelector(".kpi-nota").textContent = nota;
  }

  function spark(id, serie, color) {
    if (!serie.length) return dibujar(id, { series: [] });
    dibujar(id, {
      animationDuration: 400,
      grid: { left: 0, right: 0, top: 8, bottom: 0 },
      xAxis: { type: "category", show: false, boundaryGap: false, data: serie.map((_, i) => i) },
      yAxis: { type: "value", show: false, min: Math.min(0, ...serie) },
      series: [{ type: "line", data: serie, smooth: 0.3, showSymbol: false, lineStyle: { width: 2.5, color }, areaStyle: { color, opacity: 0.15 } }]
    });
  }

  function renderKpis(c) {
    const r = c.res;
    const sem = (k) => c.semanas.map((l) => c.sm.get(l)[k]);
    kpi("kpi-ingresos", fm(r.ing), r.nIng + " pagos · " + fm(c.semanas.length ? r.ing / c.semanas.length : 0) + " por semana");
    kpi("kpi-fijos", fm(r.fij), pc(r.peso) + " del ingreso");
    kpi("kpi-variables", fm(r.vari), fm(r.varDia) + " por día");
    kpi("kpi-balance", signo(r.bal), r.bal > 0 ? "Superávit del periodo" : r.bal < 0 ? "Déficit del periodo" : "Sin diferencia");
    kpi("kpi-tasa-ahorro", pc(r.tasa, 1), "Del ingreso, lo que se quedó");
    kpi("kpi-peso-fijos", pc(r.peso, 1), "Del ingreso ya comprometido");
    kpi("kpi-variable-diario", fm(r.varDia), "Promedio diario");
    kpi("kpi-dias-sin-gasto", r.sin + " de " + r.dias, "Mejor racha: " + r.racha + (r.racha === 1 ? " día" : " días"));
    kpi("kpi-atipicos", String(r.nAtip), "Umbral: " + fm(LIM) + " por gasto");
    kpi("kpi-movimientos", String(r.n), r.nIng + " ingresos · " + (r.n - r.nIng) + " gastos");
    spark("spark-ingresos", sem("ing"), C.ing);
    spark("spark-fijos", sem("fij"), C.fij);
    spark("spark-variables", sem("vari"), C.vari);
    spark("spark-balance", c.semanas.map((l) => { const o = c.sm.get(l); return o.ing - o.fij - o.vari; }), r.bal < 0 ? C.def : C.sup);
  }

  function renderVeredicto(c) {
    const r = c.res;
    const sinDatos = !r.n || (!r.ing && !r.gas);
    const parcial = TIPOS.some((t) => !E.tipos.has(t)) || E.concepto || E.atipicos !== "todos" || E.montoMin > 0 || E.buscar;
    const estado = sinDatos ? "neutral" : r.bal > 0 ? "superavit" : r.bal < 0 ? "deficit" : "neutral";
    let titulo, detalle;
    if (sinDatos) {
      titulo = "No hay movimientos con los filtros actuales";
      detalle = "Ajusta el periodo, el tipo de movimiento o el concepto para ver el balance.";
    } else if (parcial) {
      titulo = "Balance parcial de " + signo(r.bal);
      detalle = "Hay filtros activos, así que esta cifra no representa el balance completo del periodo.";
    } else if (r.bal > 0) {
      titulo = "Este periodo cerró con un superávit de " + fm(r.bal);
      detalle = "Por cada 100 pesos que entraron gastaste " + Math.round((r.gas / r.ing) * 100) + ". Los gastos fijos se llevaron " + pc(r.peso) + " del ingreso y la tasa de ahorro fue de " + pc(r.tasa, 1) + ".";
    } else if (r.bal < 0) {
      titulo = "Este periodo cerró con un déficit de " + fm(-r.bal);
      detalle = r.ing ? "Los gastos superaron al ingreso: por cada 100 pesos que entraron gastaste " + Math.round((r.gas / r.ing) * 100) + ". Los fijos solos representaron " + pc(r.peso) + " del ingreso." : "Hubo gastos y ningún ingreso en el periodo.";
    } else {
      titulo = "Este periodo cerró en equilibrio";
      detalle = "Los ingresos y los gastos fueron iguales.";
    }
    $("veredicto").dataset.estado = estado;
    $("kpi-balance").dataset.estado = estado;
    $("veredicto-titulo").textContent = titulo;
    $("veredicto-detalle").textContent = detalle;
    $("medidor-barra").style.width = (r.ing ? Math.min(100, (r.gas / r.ing) * 100) : 0) + "%";
    $("medidor-nota").textContent = r.ing ? "Los gastos equivalen al " + pc(r.gas / r.ing) + " del ingreso" : "Sin ingresos en este filtro";
    $("hero-balance").textContent = sinDatos ? "—" : signo(r.bal);
    const he = $("hero-estado");
    he.dataset.estado = estado;
    he.textContent = sinDatos ? "Sin datos" : parcial ? "Balance parcial" : estado === "superavit" ? "Superávit" : estado === "deficit" ? "Déficit" : "Equilibrio";
  }

  function renderDona(c) {
    const { fij, vari, gas } = c.res;
    if (!gas) { dibujar("ch-dona", null); return lec("lec-dona", ""); }
    dibujar("ch-dona", {
      tooltip: tip({ trigger: "item", formatter: (p) => p.name + "<br><b>" + fm(p.value) + "</b> · " + pc(p.percent / 100, 1) }),
      legend: leyenda({ top: "auto", bottom: 0 }),
      graphic: { type: "text", left: "center", top: "37%", style: { text: fm(gas) + "\nen gastos", textAlign: "center", fill: C.tinta, fontSize: 20, fontWeight: 700, lineHeight: 26 } },
      series: [{ type: "pie", radius: ["54%", "78%"], center: ["50%", "45%"], label: { show: false }, itemStyle: { borderColor: C.papel, borderWidth: 4, borderRadius: 10 }, emphasis: { scaleSize: 6 }, data: [{ name: "Gastos fijos", value: fij, itemStyle: { color: C.fij } }, { name: "Gastos variables", value: vari, itemStyle: { color: C.vari } }] }]
    });
    lec("lec-dona", "Los gastos <strong>fijos</strong> son el " + pc(fij / gas) + " de lo gastado y los <strong>variables</strong> el " + pc(vari / gas) + ".");
  }

  function renderTreemap(c) {
    const g = porConcepto(c.rows, true);
    if (!g.length) { dibujar("ch-treemap", null); return lec("lec-treemap", ""); }
    const cats = new Map();
    g.forEach((x) => { if (!cats.has(x.categoria)) cats.set(x.categoria, []); cats.get(x.categoria).push(x); });
    const data = [...cats].map(([n, hijos], i) => {
      const color = OSCUROS[i % OSCUROS.length];
      return { name: n, itemStyle: { color }, children: hijos.map((h) => ({ name: h.concepto, value: h.total, itemStyle: { color } })) };
    });
    dibujar("ch-treemap", {
      tooltip: tip({ formatter: (p) => esc(p.name) + "<br><b>" + fm(p.value) + "</b>" }),
      series: [{
        type: "treemap", roam: false, nodeClick: false, breadcrumb: { show: false }, left: 0, right: 0, top: 0, bottom: 0,
        upperLabel: { show: true, height: 26, color: "#fff", fontWeight: 600 },
        label: { show: true, formatter: (p) => "{n|" + p.name + "}\n{v|" + fm(p.value) + "}", rich: { n: { color: "#fff", fontWeight: 700, fontSize: 13 }, v: { color: "rgba(255,255,255,.85)", fontSize: 12 } } },
        itemStyle: { borderColor: C.papel, borderWidth: 3, gapWidth: 3, borderRadius: 8 },
        levels: [{ itemStyle: { borderWidth: 0, gapWidth: 5 } }, { itemStyle: { gapWidth: 2, borderRadius: 6 } }],
        data
      }]
    });
    const tot = g.reduce((a, x) => a + x.total, 0);
    const catTop = [...cats].map(([n, h]) => [n, h.reduce((a, x) => a + x.total, 0)]).sort((a, b) => b[1] - a[1])[0];
    lec("lec-treemap", "El concepto más pesado es <strong>" + esc(g[0].concepto) + "</strong> (" + pc(g[0].total / tot) + " del gasto) y la categoría dominante es <strong>" + esc(catTop[0]) + "</strong> con " + pc(catTop[1] / tot) + ".");
  }

  function renderBarrasTipo(c, id, tipo, color) {
    const g = porConcepto(c.rows, true).filter((x) => x.tipo === tipo);
    if (!g.length) return dibujar(id, null);
    dibujar(id, {
      grid: { left: 8, right: 70, top: 8, bottom: 8, containLabel: true },
      tooltip: tip({ trigger: "item", formatter: (p) => { const x = g[p.dataIndex]; return esc(x.concepto) + "<br><b>" + fm(x.total) + "</b><br>" + x.n + " veces · promedio " + fm(x.prom); } }),
      xAxis: ejeY({ show: false }),
      yAxis: ejeX({ type: "category", inverse: true, data: g.map((x) => x.concepto), axisLabel: { color: C.tinta } }),
      series: [{ type: "bar", data: g.map((x) => x.total), barMaxWidth: 22, itemStyle: { color, borderRadius: [0, 8, 8, 0] }, label: { show: true, position: "right", color: C.tx, formatter: (p) => fm(p.value) } }]
    });
  }

  function renderSankey(c) {
    const { ing, fij, vari, gas, bal } = c.res;
    if (!ing && !gas) return dibujar("ch-sankey", null);
    const links = [];
    const add = (s, t, v) => { if (v > 0) links.push({ source: s, target: t, value: v }); };
    if (bal >= 0) {
      add("Ingresos", "Gastos fijos", fij); add("Ingresos", "Gastos variables", vari); add("Ingresos", "Ahorro", bal);
    } else {
      const k = ing / gas;
      add("Ingresos", "Gastos fijos", fij * k); add("Ingresos", "Gastos variables", vari * k);
      add("Déficit", "Gastos fijos", fij * (1 - k)); add("Déficit", "Gastos variables", vari * (1 - k));
    }
    const cat = new Map();
    c.rows.forEach((r) => { if (r.tipo !== "ingreso") { const k = r.tipo + "|" + r.categoria; cat.set(k, (cat.get(k) || 0) + r.monto); } });
    cat.forEach((v, k) => { const [t, n] = k.split("|"); add(t === "fijo" ? "Gastos fijos" : "Gastos variables", n, v); });
    const nombres = unicos(links.flatMap((l) => [l.source, l.target]));
    const color = { Ingresos: C.ing, "Gastos fijos": C.fij, "Gastos variables": C.vari, Ahorro: C.sup, Déficit: C.def };
    dibujar("ch-sankey", {
      tooltip: tip({ trigger: "item", formatter: (p) => (p.dataType === "edge" ? esc(p.data.source) + " → " + esc(p.data.target) + "<br><b>" + fm(p.data.value) + "</b>" : esc(p.name) + "<br><b>" + fm(p.value) + "</b>") }),
      series: [{
        type: "sankey", left: 10, right: 110, top: 10, bottom: 10, nodeGap: 14, nodeWidth: 18, draggable: false, emphasis: { focus: "adjacency" },
        lineStyle: { color: "gradient", curveness: 0.5, opacity: 0.45 },
        label: { color: C.tinta, fontWeight: 600 },
        data: nombres.map((n) => ({ name: n, itemStyle: { color: color[n] || "#9db8a5" } })),
        links
      }]
    });
  }

  function renderSaldo(c) {
    let acc = 0;
    const serie = c.dias.map((d) => { const o = c.dm.get(d); acc += o.ing - o.fij - o.vari; return [d, acc]; });
    if (!c.res.n) { dibujar("ch-saldo-acumulado", null); return lec("lec-saldo", ""); }
    const area = (n, f, color) => ({ name: n, type: "line", data: serie.map((x) => [x[0], f(x[1])]), showSymbol: false, silent: true, lineStyle: { width: 0 }, areaStyle: { color, opacity: 0.22 }, tooltip: { show: false }, z: 1 });
    dibujar("ch-saldo-acumulado", {
      grid: { left: 8, right: 24, top: 36, bottom: 40, containLabel: true },
      tooltip: tip({ trigger: "axis", formatter: (ps) => { const p = ps.find((x) => x.seriesName === "Saldo"); return corto(p.value[0]) + "<br>Saldo: <b>" + signo(p.value[1]) + "</b>"; } }),
      dataZoom: [{ type: "inside" }],
      xAxis: ejeX({ type: "time", axisLabel: { color: C.tx, formatter: (v) => corto(aIso(new Date(v))) } }),
      yAxis: ejeY(),
      series: [
        area("Superávit", (v) => Math.max(v, 0), C.sup),
        area("Déficit", (v) => Math.min(v, 0), C.def),
        {
          name: "Saldo", type: "line", data: serie, smooth: 0.2, showSymbol: false, lineStyle: { width: 3, color: C.fij }, itemStyle: { color: C.fij }, z: 3,
          markLine: { silent: true, symbol: "none", label: { show: false }, lineStyle: { color: C.tx, type: "dashed" }, data: [{ yAxis: 0 }] },
          markPoint: { symbolSize: 54, label: { color: "#fff", fontSize: 10, formatter: (p) => ab(Math.round(p.value)) }, data: [{ type: "max", name: "Máximo", itemStyle: { color: C.sup } }, { type: "min", name: "Mínimo", itemStyle: { color: C.def } }] }
        }
      ]
    });
    const min = serie.reduce((a, b) => (b[1] < a[1] ? b : a));
    let cruce = null;
    for (let i = 1; i < serie.length; i++) if (serie[i - 1][1] >= 0 && serie[i][1] < 0) { cruce = serie[i][0]; break; }
    lec("lec-saldo", "El saldo cierra en <strong>" + signo(acc) + "</strong>. Su punto más bajo fue <strong>" + signo(min[1]) + "</strong> el " + fechaTxt(min[0]) + (cruce ? " y pasó a negativo el " + fechaTxt(cruce) + "." : min[1] < 0 ? "." : " sin llegar a cero."));
  }

  function renderSemanal(c) {
    if (!c.res.n) return dibujar("ch-ingresos-semanal", null);
    const v = c.semanas.map((l) => c.sm.get(l));
    dibujar("ch-ingresos-semanal", {
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", formatter: (ps) => "Semana del " + corto(c.semanas[ps[0].dataIndex]) + ps.map((p) => "<br>" + p.marker + p.seriesName + ": <b>" + fm(p.value) + "</b>").join("") }),
      xAxis: ejeX({ type: "category", data: c.semanas.map(corto) }),
      yAxis: ejeY(),
      series: [
        { name: "Ingresos", type: "bar", data: v.map((o) => o.ing), itemStyle: { color: C.ing, borderRadius: [6, 6, 0, 0] }, barMaxWidth: 22 },
        { name: "Gastos", type: "bar", data: v.map((o) => o.fij + o.vari), itemStyle: { color: C.fij, borderRadius: [6, 6, 0, 0] }, barMaxWidth: 22 },
        { name: "Balance", type: "line", data: v.map((o) => o.ing - o.fij - o.vari), symbolSize: 9, lineStyle: { width: 2, color: C.atip }, itemStyle: { color: C.atip } }
      ]
    });
  }

  function renderMensual(c) {
    if (!c.res.n) return dibujar("ch-ingresos-mensual", null);
    const v = c.meses.map((m) => c.mm.get(m));
    dibujar("ch-ingresos-mensual", {
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", axisPointer: { type: "shadow" }, formatter: (ps) => esc(ps[0].axisValue) + ps.map((p) => "<br>" + p.marker + p.seriesName + ": <b>" + signo(p.value) + "</b>").join("") }),
      xAxis: ejeX({ type: "category", data: c.meses.map(mesNombre) }),
      yAxis: ejeY(),
      series: [
        { name: "Ingresos", type: "bar", data: v.map((o) => o.ing), itemStyle: { color: C.ing, borderRadius: [6, 6, 0, 0] }, barMaxWidth: 36 },
        { name: "Balance", type: "bar", data: v.map((o) => ({ value: o.ing - o.fij - o.vari, itemStyle: { color: o.ing - o.fij - o.vari >= 0 ? C.sup : C.def, borderRadius: [6, 6, 0, 0] } })), barMaxWidth: 36, label: { show: true, position: "top", color: C.tx, formatter: (p) => signo(p.value) } }
      ]
    });
  }

  function renderTasas(c) {
    if (!c.res.n) return dibujar("ch-tasas-mensuales", null);
    const v = c.meses.map((m) => c.mm.get(m));
    const serie = (f) => v.map((o) => (o.ing ? Math.round(f(o) * 1000) / 10 : null));
    dibujar("ch-tasas-mensuales", {
      grid: { left: 8, right: 24, top: 40, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", formatter: (ps) => esc(ps[0].axisValue) + ps.map((p) => "<br>" + p.marker + p.seriesName + ": <b>" + (p.value == null ? "—" : String(p.value).replace(".", ",") + " %") + "</b>").join("") }),
      xAxis: ejeX({ type: "category", data: c.meses.map(mesNombre), boundaryGap: false }),
      yAxis: ejeY({ axisLabel: { color: C.tx, formatter: (x) => x + " %" } }),
      series: [
        { name: "Tasa de ahorro", type: "line", smooth: 0.25, symbolSize: 11, data: serie((o) => (o.ing - o.fij - o.vari) / o.ing), lineStyle: { width: 3, color: C.sup }, itemStyle: { color: C.sup }, markLine: { silent: true, symbol: "none", label: { show: false }, lineStyle: { color: C.def, type: "dashed" }, data: [{ yAxis: 0 }] } },
        { name: "Peso de los fijos", type: "line", smooth: 0.25, symbolSize: 11, data: serie((o) => o.fij / o.ing), lineStyle: { width: 3, color: C.fij }, itemStyle: { color: C.fij } }
      ]
    });
  }

  function renderHeatmap(c) {
    if (!c.res.n) return dibujar("ch-heatmap-dia", null);
    const data = c.dias.map((d) => [c.semanas.indexOf(lunes(d)), dow(d), c.dm.get(d).vari, d]);
    const max = Math.max(1, ...data.map((x) => x[2]));
    dibujar("ch-heatmap-dia", {
      grid: { left: 8, right: 12, top: 8, bottom: 56, containLabel: true },
      tooltip: tip({ formatter: (p) => cap(DIAS[p.value[1]]) + " " + corto(p.value[3]) + "<br><b>" + fm(p.value[2]) + "</b>" }),
      xAxis: ejeX({ type: "category", data: c.semanas.map(corto), splitArea: { show: false }, axisLabel: { color: C.tx, interval: "auto" } }),
      yAxis: ejeX({ type: "category", data: DIASC.map(cap), inverse: true, axisLine: { show: false } }),
      visualMap: { min: 0, max, calculable: false, orient: "horizontal", left: "center", bottom: 0, itemWidth: 14, itemHeight: 160, textStyle: { color: C.tx }, formatter: (v) => fm(v), inRange: { color: ["#eef7f0", "#9ed6b6", "#2fa57b", "#0e3a2b"] } },
      series: [{ type: "heatmap", data, itemStyle: { borderColor: C.papel, borderWidth: 3, borderRadius: 6 }, emphasis: { itemStyle: { borderColor: C.atip } } }]
    });
  }

  function renderDiaSemana(c) {
    if (!c.res.n) return dibujar("ch-dia-semana", null);
    const prom = DIASC.map((_, i) => { const ds = c.dias.filter((d) => dow(d) === i); return ds.length ? ds.reduce((a, d) => a + c.dm.get(d).vari, 0) / ds.length : 0; });
    const imax = prom.indexOf(Math.max(...prom));
    dibujar("ch-dia-semana", {
      tooltip: tip({ trigger: "item", formatter: (p) => cap(DIAS[p.dataIndex]) + "<br><b>" + fm(p.value) + "</b> en promedio" }),
      polar: { radius: ["16%", "78%"], center: ["50%", "52%"] },
      angleAxis: { type: "category", data: DIASC.map(cap), axisLine: { lineStyle: { color: C.linea } }, axisLabel: { color: C.tx }, axisTick: { show: false } },
      radiusAxis: { axisLabel: { show: false }, axisLine: { show: false }, axisTick: { show: false }, splitLine: { lineStyle: { color: C.grid } } },
      series: [{ type: "bar", coordinateSystem: "polar", roundCap: true, data: prom.map((v, i) => ({ value: Math.round(v), itemStyle: { color: i === imax ? C.atip : i >= 5 ? C.ing : C.fij } })) }]
    });
  }

  function renderCalendario(c) {
    if (!c.res.n && !c.dias.length) { dibujar("ch-calendario", null); return lec("lec-calendario", ""); }
    const data = c.dias.map((d) => [d, c.dm.get(d).vari]);
    const max = Math.max(1, ...data.map((x) => x[1]));
    dibujar("ch-calendario", {
      tooltip: tip({ formatter: (p) => cap(DIAS[dow(p.value[0])]) + " " + corto(p.value[0]) + "<br><b>" + fm(p.value[1]) + "</b> en gasto variable" }),
      visualMap: { min: 0, max, calculable: false, orient: "horizontal", left: "center", bottom: 0, itemWidth: 14, itemHeight: 160, textStyle: { color: C.tx }, formatter: (v) => fm(v), inRange: { color: ["#eef7f0", "#9ed6b6", "#2fa57b", "#0e3a2b"] } },
      calendar: {
        range: [E.inicio, E.fin], top: 34, left: 40, right: 12, bottom: 56, cellSize: ["auto", "auto"], orient: "horizontal",
        itemStyle: { borderWidth: 3, borderColor: C.papel, color: "#f3f7f0" }, yearLabel: { show: false },
        dayLabel: { firstDay: 1, nameMap: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], color: C.tx },
        monthLabel: { nameMap: MESES_DATOS.length ? MES.map(cap) : MES, color: C.tinta, fontWeight: 600 },
        splitLine: { lineStyle: { color: C.linea } }
      },
      series: [{ type: "heatmap", coordinateSystem: "calendar", data, label: { show: true, color: C.tx, fontSize: 10, formatter: (p) => aFecha(p.value[0]).getDate() } }]
    });
    const mejor = data.reduce((a, b) => (b[1] > a[1] ? b : a), ["", 0]);
    lec("lec-calendario", "Hubo <strong>" + c.res.sin + " días sin gasto variable</strong> de " + c.res.dias + ", con una mejor racha de " + c.res.racha + (c.res.racha === 1 ? " día" : " días") + (mejor[1] ? ". El día de mayor gasto fue el " + fechaTxt(mejor[0]) + " con " + fm(mejor[1]) + "." : "."));
  }

  function renderQuincena(c) {
    if (!c.res.vari) { dibujar("ch-quincena", null); return; }
    const v = c.meses.map((m) => c.mm.get(m));
    dibujar("ch-quincena", {
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", axisPointer: { type: "shadow" }, formatter: (ps) => esc(ps[0].axisValue) + ps.map((p) => "<br>" + p.marker + p.seriesName + ": <b>" + fm(p.value) + "</b>").join("") }),
      xAxis: ejeX({ type: "category", data: c.meses.map(mesNombre) }),
      yAxis: ejeY(),
      series: [
        { name: "Primera quincena", type: "bar", data: v.map((o) => o.q1), itemStyle: { color: "#9db8a5", borderRadius: [6, 6, 0, 0] }, barMaxWidth: 30 },
        { name: "Segunda quincena", type: "bar", data: v.map((o) => o.q2), itemStyle: { color: C.fij, borderRadius: [6, 6, 0, 0] }, barMaxWidth: 30 }
      ]
    });
  }

  function renderMomento(c) {
    const t = [0, 0, 0];
    c.rows.forEach((r) => { if (r.tipo === "variable") t[r.momento] += r.monto; });
    if (!t[0] && !t[1] && !t[2]) return dibujar("ch-momento-mes", null);
    const n = ["Días 1 a 10", "Días 11 a 20", "Día 21 en adelante"];
    dibujar("ch-momento-mes", {
      tooltip: tip({ trigger: "item", formatter: (p) => esc(p.name) + "<br><b>" + fm(p.value) + "</b> · " + pc(p.percent / 100, 1) }),
      legend: leyenda({ top: "auto", bottom: 0 }),
      series: [{ type: "pie", roseType: "radius", radius: ["18%", "72%"], center: ["50%", "46%"], itemStyle: { borderColor: C.papel, borderWidth: 3, borderRadius: 8 }, label: { color: C.tx, formatter: (p) => fm(p.value) }, data: t.map((v, i) => ({ name: n[i], value: v, itemStyle: { color: ["#9db8a5", C.ing, C.fij][i] } })) }]
    });
  }

  function renderDispersion(c) {
    const v = c.rows.filter((r) => r.tipo === "variable");
    if (!v.length) return dibujar("ch-dispersion", null);
    const pt = (r) => ({ value: [r.fecha, r.monto, r.concepto, r.nota], symbolSize: Math.min(34, 8 + Math.sqrt(r.monto) * 0.9) });
    dibujar("ch-dispersion", {
      grid: { left: 8, right: 24, top: 24, bottom: 8, containLabel: true },
      tooltip: tip({ trigger: "item", formatter: (p) => esc(p.value[2]) + "<br>" + corto(p.value[0]) + " · <b>" + fm(p.value[1]) + "</b>" + (p.value[3] ? "<br>" + esc(p.value[3]) : "") }),
      xAxis: ejeX({ type: "time", min: E.inicio, max: E.fin, axisLabel: { color: C.tx, formatter: (x) => corto(aIso(new Date(x))) } }),
      yAxis: ejeY(),
      series: [
        { name: "Habituales", type: "scatter", data: v.filter((r) => !r.atipico).map(pt), itemStyle: { color: C.vari, opacity: 0.6 }, markLine: { silent: true, symbol: "none", lineStyle: { color: C.atip, type: "dashed" }, label: { formatter: "Umbral atípico " + fm(LIM), color: "#8a6200" }, data: [{ yAxis: LIM }] } },
        { name: "Atípicos", type: "scatter", data: v.filter((r) => r.atipico).map(pt), itemStyle: { color: C.atip, borderColor: "#8a6200", borderWidth: 1.5 }, label: { show: true, position: "top", color: "#8a6200", formatter: (p) => p.value[2] } }
      ]
    });
  }

  function renderBoxplot(c) {
    const g = porConcepto(c.rows, true).filter((x) => x.tipo === "variable" && x.n >= 3);
    if (!g.length) return dibujar("ch-boxplot", null);
    const st = g.map((x) => { const o = ord(x.montos); return { nombre: x.concepto, v: [o[0], quant(o, 0.25), quant(o, 0.5), quant(o, 0.75), o[o.length - 1]] }; }).sort((a, b) => a.v[2] - b.v[2]);
    dibujar("ch-boxplot", {
      grid: { left: 8, right: 24, top: 8, bottom: 8, containLabel: true },
      tooltip: tip({ trigger: "item", formatter: (p) => { const s = st[p.dataIndex]; return esc(s.nombre) + "<br>Mínimo " + fm(s.v[0]) + "<br>Típico bajo " + fm(s.v[1]) + "<br>Mediana <b>" + fm(s.v[2]) + "</b><br>Típico alto " + fm(s.v[3]) + "<br>Máximo " + fm(s.v[4]); } }),
      xAxis: ejeY({ type: "value" }),
      yAxis: ejeX({ type: "category", data: st.map((s) => s.nombre), axisLabel: { color: C.tinta } }),
      series: [{ type: "boxplot", data: st.map((s) => s.v), itemStyle: { color: "#cfe9d9", borderColor: C.fij, borderWidth: 2 } }]
    });
  }

  function renderVolatilidad(c) {
    const g = porConcepto(c.rows, true).filter((x) => x.tipo === "variable" && x.n >= 3).map((x) => ({ n: x.concepto, cv: desv(x.montos) / x.prom })).sort((a, b) => b.cv - a.cv);
    if (!g.length) return dibujar("ch-volatilidad", null);
    dibujar("ch-volatilidad", {
      grid: { left: 8, right: 60, top: 8, bottom: 8, containLabel: true },
      tooltip: tip({ trigger: "item", formatter: (p) => esc(g[p.dataIndex].n) + "<br>Variación: <b>" + pc(p.value) + "</b> del monto promedio" }),
      xAxis: ejeY({ show: false }),
      yAxis: ejeX({ type: "category", inverse: true, data: g.map((x) => x.n), axisLabel: { color: C.tinta } }),
      series: [{ type: "bar", data: g.map((x) => ({ value: x.cv, itemStyle: { color: x.cv >= 0.6 ? C.atip : C.vari, borderRadius: [0, 8, 8, 0] } })), barMaxWidth: 20, label: { show: true, position: "right", color: C.tx, formatter: (p) => pc(p.value) } }]
    });
  }

  function renderListaAtipicos(c) {
    const a = c.rows.filter((r) => r.atipico).sort((x, y) => y.monto - x.monto);
    $("lista-atipicos").innerHTML = a.map((r) => '<li class="atipico"><strong>' + esc(r.concepto) + "</strong><span class=\"monto\">" + fm(r.monto) + "</span><small>" + esc(cap(DIAS[r.dow])) + " " + fechaTxt(r.fecha) + (r.nota ? " · " + esc(r.nota) : "") + " · " + (r.monto / LIM).toFixed(1).replace(".", ",") + " veces el umbral</small></li>").join("");
    $("vacio-atipicos").hidden = a.length > 0;
  }

  function renderPareto(c) {
    const g = porConcepto(c.rows, true);
    if (!g.length) { dibujar("ch-pareto", null); return lec("lec-pareto", ""); }
    const tot = g.reduce((a, x) => a + x.total, 0);
    let acc = 0;
    const cum = g.map((x) => { acc += x.total; return acc / tot; });
    const k = cum.findIndex((x) => x >= 0.8) + 1;
    dibujar("ch-pareto", {
      grid: { left: 8, right: 8, top: 36, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", axisPointer: { type: "shadow" }, formatter: (ps) => esc(ps[0].axisValue) + "<br>" + ps[0].marker + "Monto: <b>" + fm(ps[0].value) + "</b><br>" + ps[1].marker + "Acumulado: <b>" + pc(ps[1].value / 100, 1) + "</b>" }),
      xAxis: ejeX({ type: "category", data: g.map((x) => x.concepto), axisLabel: { color: C.tx, interval: 0, rotate: 40 } }),
      yAxis: [ejeY(), ejeY({ min: 0, max: 100, splitLine: { show: false }, axisLabel: { color: C.tx, formatter: (x) => x + " %" } })],
      series: [
        { name: "Monto", type: "bar", data: g.map((x, i) => ({ value: x.total, itemStyle: { color: i < k ? C.fij : "#b9cdc0", borderRadius: [6, 6, 0, 0] } })), barMaxWidth: 28 },
        { name: "Acumulado", type: "line", yAxisIndex: 1, data: cum.map((x) => Math.round(x * 1000) / 10), symbolSize: 8, lineStyle: { width: 3, color: C.atip }, itemStyle: { color: C.atip }, markLine: { silent: true, symbol: "none", label: { formatter: "80 %", color: C.tx }, lineStyle: { color: C.tx, type: "dashed" }, data: [{ yAxis: 80 }] } }
      ]
    });
    lec("lec-pareto", "<strong>" + k + " de " + g.length + " conceptos</strong> (" + pc(k / g.length) + ") concentran el " + pc(cum[k - 1]) + " del gasto. Encabeza <strong>" + esc(g[0].concepto) + "</strong> con " + pc(g[0].total / tot) + ".");
  }

  function renderFrecuencia(c) {
    const g = porConcepto(c.rows, true).sort((a, b) => b.n - a.n || b.total - a.total).slice(0, 12);
    if (!g.length) return dibujar("ch-frecuencia", null);
    dibujar("ch-frecuencia", {
      grid: { left: 8, right: 50, top: 8, bottom: 8, containLabel: true },
      tooltip: tip({ trigger: "item", formatter: (p) => esc(g[p.dataIndex].concepto) + "<br><b>" + g[p.dataIndex].n + " veces</b><br>Promedio " + fm(g[p.dataIndex].prom) }),
      xAxis: ejeY({ show: false }),
      yAxis: ejeX({ type: "category", inverse: true, data: g.map((x) => x.concepto), axisLabel: { color: C.tinta } }),
      series: [{ type: "bar", data: g.map((x) => ({ value: x.n, itemStyle: { color: x.tipo === "fijo" ? C.fij : C.vari, borderRadius: [0, 8, 8, 0] } })), barMaxWidth: 18, label: { show: true, position: "right", color: C.tx } }]
    });
  }

  function esHormiga(x) { return x.tipo === "variable" && x.prom <= CFG.hormiga.montoMaximoUnitario && x.n >= CFG.hormiga.frecuenciaMinima; }

  function renderFrecImpacto(c) {
    const g = porConcepto(c.rows, true);
    if (!g.length) { dibujar("ch-frecuencia-impacto", null); return lec("lec-hormiga", ""); }
    const pt = (x) => ({ value: [x.n, x.total, x.prom, x.concepto], symbolSize: Math.max(14, Math.min(58, 10 + Math.sqrt(x.prom) * 1.8)) });
    const grupos = [["Gastos hormiga", g.filter(esHormiga), C.atip], ["Fijos", g.filter((x) => x.tipo === "fijo"), C.fij], ["Variables", g.filter((x) => x.tipo === "variable" && !esHormiga(x)), C.vari]];
    const mx = quant(ord(g.map((x) => x.n)), 0.5), my = quant(ord(g.map((x) => x.total)), 0.5);
    dibujar("ch-frecuencia-impacto", {
      grid: { left: 8, right: 40, top: 40, bottom: 28, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "item", formatter: (p) => esc(p.value[3]) + "<br>" + p.value[0] + " veces · total <b>" + fm(p.value[1]) + "</b><br>Promedio por gasto " + fm(p.value[2]) }),
      xAxis: ejeX({ type: "value", name: "Veces registrado", nameLocation: "middle", nameGap: 28, nameTextStyle: { color: C.tx }, splitLine: { lineStyle: { color: C.grid } }, axisLabel: { color: C.tx } }),
      yAxis: ejeY({ type: "log", name: "Monto total", nameTextStyle: { color: C.tx } }),
      series: grupos.map(([n, d, col], i) => ({
        name: n, type: "scatter", data: d.map(pt), itemStyle: { color: col, opacity: 0.8, borderColor: "#fff", borderWidth: 2 },
        label: { show: true, position: "right", color: C.tinta, fontSize: 11, formatter: (p) => p.value[3] },
        markLine: i === 0 ? { silent: true, symbol: "none", label: { show: false }, lineStyle: { color: "#9db8a5", type: "dashed" }, data: [{ xAxis: mx }, { yAxis: my }] } : undefined
      }))
    });
    const h = g.filter(esHormiga);
    const vari = g.filter((x) => x.tipo === "variable").reduce((a, x) => a + x.total, 0);
    const suma = h.reduce((a, x) => a + x.total, 0);
    lec("lec-hormiga", h.length ? "Los gastos hormiga (<strong>" + h.map((x) => esc(x.concepto)).join(", ") + "</strong>) suman <strong>" + fm(suma) + "</strong>, el " + pc(vari ? suma / vari : NaN) + " del gasto variable, con montos de " + fm(CFG.hormiga.montoMaximoUnitario) + " o menos por vez." : "Ningún concepto cumple la definición de gasto hormiga (promedio de " + fm(CFG.hormiga.montoMaximoUnitario) + " o menos y " + CFG.hormiga.frecuenciaMinima + " o más registros) con los filtros actuales.");
  }

  function renderMesVsMes(c) {
    const g = porConcepto(c.rows, true);
    const conceptos = unicos(g.map((x) => x.concepto));
    if (!conceptos.length) { dibujar("ch-mes-vs-mes", null); return lec("lec-mes-vs-mes", ""); }
    const val = (m, n) => c.rows.filter((r) => r.mes === m && r.tipo !== "ingreso" && r.concepto === n).reduce((a, r) => a + r.monto, 0);
    const top = conceptos.slice(0, 10);
    dibujar("ch-mes-vs-mes", {
      grid: { left: 8, right: 16, top: 40, bottom: 8, containLabel: true },
      legend: leyenda(),
      tooltip: tip({ trigger: "axis", axisPointer: { type: "shadow" }, formatter: (ps) => esc(ps[0].axisValue) + ps.map((p) => "<br>" + p.marker + p.seriesName + ": <b>" + fm(p.value) + "</b>").join("") }),
      xAxis: ejeX({ type: "category", data: top, axisLabel: { color: C.tx, interval: 0, rotate: top.length > 7 ? 25 : 0 } }),
      yAxis: ejeY(),
      series: c.meses.map((m, i) => ({ name: mesNombre(m), type: "bar", data: top.map((n) => val(m, n)), itemStyle: { color: MESES_COLOR[i % MESES_COLOR.length], borderRadius: [5, 5, 0, 0] }, barMaxWidth: 20 }))
    });
    if (c.meses.length < 2) return lec("lec-mes-vs-mes", "Selecciona dos o más meses para ver qué conceptos subieron o bajaron.");
    const a = c.meses[0], b = c.meses[c.meses.length - 1];
    const d = conceptos.map((n) => ({ n, d: val(b, n) - val(a, n) })).sort((x, y) => y.d - x.d);
    const sube = d[0], baja = d[d.length - 1];
    lec("lec-mes-vs-mes", "De " + mesNombre(a).toLowerCase() + " a " + mesNombre(b).toLowerCase() + ", el mayor aumento fue en <strong>" + esc(sube.n) + "</strong> (" + signo(sube.d) + ") y la mayor reducción en <strong>" + esc(baja.n) + "</strong> (" + signo(baja.d) + ").");
  }

  const IDIOMA = {
    search: { placeholder: "Buscar en la tabla" },
    sort: { sortAsc: "Ordenar de menor a mayor", sortDesc: "Ordenar de mayor a menor" },
    pagination: { previous: "Anterior", next: "Siguiente", navigate: (p, t) => "Página " + p + " de " + t, page: (p) => "Página " + p, showing: "Mostrando del", of: "de", to: "al", results: () => "registros" },
    loading: "Cargando", noRecordsFound: "Sin registros con los filtros actuales", error: "No se pudieron cargar los datos"
  };
  const grids = {};
  const html = (s) => gridjs.html(s);
  const dinero = { formatter: (x) => fm(x) };
  const etiqueta = (t) => html('<span class="etiqueta-tipo ' + t + '">' + TIPO_TXT[t] + "</span>");

  function tabla(id, columns, data) {
    if (!grids[id]) grids[id] = new gridjs.Grid({ columns, data, sort: true, search: true, pagination: { limit: 10 }, language: IDIOMA }).render($(id));
    else grids[id].updateConfig({ data }).forceRender();
  }

  function renderTablas(c) {
    tabla("tabla-movimientos", [{ name: "Fecha", formatter: fechaTxt }, "Día", { name: "Tipo", formatter: etiqueta }, "Concepto", "Categoría", { name: "Monto", ...dinero }, { name: "Marca", formatter: (x) => (x ? html('<span class="etiqueta-tipo atipico">' + x + "</span>") : "") }, "Nota"],
      c.rows.map((r) => [r.fecha, cap(DIAS[r.dow]), r.tipo, r.concepto, r.categoria, r.monto, r.atipico ? "Atípico" : "", r.nota]));
    const gas = c.res.gas;
    tabla("tabla-conceptos", [{ name: "Tipo", formatter: etiqueta }, "Concepto", "Categoría", "Veces", { name: "Total", ...dinero }, { name: "Promedio", ...dinero }, { name: "Mínimo", ...dinero }, { name: "Máximo", ...dinero }, { name: "% del gasto", formatter: (x) => (x == null ? "—" : x.toFixed(1).replace(".", ",") + " %") }],
      porConcepto(c.rows, false).map((x) => [x.tipo, x.concepto, x.categoria, x.n, x.total, Math.round(x.prom), x.min, x.max, x.tipo === "ingreso" || !gas ? null : (x.total / gas) * 100]));
    let acs = 0;
    tabla("tabla-semanas", [{ name: "Semana", formatter: (x) => "Del " + corto(x) + " al " + corto(suma(x, 6)) }, { name: "Ingresos", ...dinero }, { name: "Fijos", ...dinero }, { name: "Variables", ...dinero }, { name: "Balance", formatter: signo }, { name: "Saldo acumulado", formatter: signo }],
      c.semanas.map((l) => { const o = c.sm.get(l), b = o.ing - o.fij - o.vari; acs += b; return [l, o.ing, o.fij, o.vari, b, acs]; }));
    let acd = 0;
    tabla("tabla-dias", [{ name: "Fecha", formatter: fechaTxt }, "Día", { name: "Ingresos", ...dinero }, { name: "Fijos", ...dinero }, { name: "Variables", ...dinero }, { name: "Balance", formatter: signo }, { name: "Saldo acumulado", formatter: signo }],
      c.dias.map((d) => { const o = c.dm.get(d), b = o.ing - o.fij - o.vari; acd += b; return [d, cap(DIAS[dow(d)]), o.ing, o.fij, o.vari, b, acd]; }));
    tabla("tabla-atipicos", [{ name: "Fecha", formatter: fechaTxt }, "Concepto", { name: "Monto", ...dinero }, { name: "Veces el umbral", formatter: (x) => x.toFixed(1).replace(".", ",") }, "Nota"],
      c.rows.filter((r) => r.atipico).sort((a, b) => b.monto - a.monto).map((r) => [r.fecha, r.concepto, r.monto, r.monto / LIM, r.nota]));
  }

  function esMesExacto() {
    const m = E.inicio.slice(0, 7);
    if (m !== E.fin.slice(0, 7)) return "";
    const [a, b] = limitesMes(m);
    return E.inicio === a && E.fin === b && !(a === P.inicio && b === P.fin && MESES_DATOS.length === 1) ? m : "";
  }

  function esSemanaExacta() {
    const l = lunes(E.inicio);
    const [a, b] = limitesSemana(l);
    return E.inicio === a && E.fin === b ? l : "";
  }

  function presetActual() {
    if (E.quincena) return E.quincena === 1 ? "q1" : "q2";
    if (E.inicio === P.inicio && E.fin === P.fin) return "trimestre";
    if (esMesExacto()) return "mes";
    if (esSemanaExacta()) return "semana";
    if (E.fin === P.fin && E.inicio === suma(P.fin, -29)) return "ultimos30";
    if (E.fin === P.fin && E.inicio === suma(P.fin, -6)) return "ultimos7";
    return "personalizado";
  }

  function etiquetaRango() {
    if (E.inicio === P.inicio && E.fin === P.fin) return "Trimestre completo";
    const m = esMesExacto();
    if (m) return mesNombre(m) + " " + m.slice(0, 4);
    return corto(E.inicio) + " – " + corto(E.fin);
  }

  function chips() {
    const l = [];
    const full = E.inicio === P.inicio && E.fin === P.fin;
    if (!full) l.push([etiquetaRango(), () => { E.inicio = P.inicio; E.fin = P.fin; }]);
    if (E.quincena) l.push([E.quincena === 1 ? "Primera quincena" : "Segunda quincena", () => { E.quincena = 0; }]);
    if (TIPOS.some((t) => !E.tipos.has(t))) l.push(["Solo " + TIPOS.filter((t) => E.tipos.has(t)).map((t) => TIPO_TXT[t].toLowerCase() + "s").join(" y "), () => { E.tipos = new Set(TIPOS); }]);
    if (E.concepto) l.push(["Concepto: " + E.concepto, () => { E.concepto = ""; }]);
    if (E.atipicos !== "todos") l.push([E.atipicos === "solo" ? "Solo atípicos" : "Sin atípicos", () => { E.atipicos = "todos"; }]);
    if (E.montoMin > 0) l.push(["Desde " + fm(E.montoMin), () => { E.montoMin = 0; $("f-monto").value = 0; }]);
    if (E.buscar.trim()) l.push(["Búsqueda: " + E.buscar.trim(), () => { E.buscar = ""; $("f-buscar").value = ""; }]);
    return l;
  }

  let chipsActuales = [];

  function sincronizarUI() {
    $("f-inicio").value = E.inicio;
    $("f-fin").value = E.fin;
    const m = E.inicio === P.inicio && E.fin === P.fin ? "todo" : esMesExacto();
    document.querySelectorAll('input[name="f-mes"]').forEach((r) => { r.checked = r.value === m; });
    $("f-preset").value = presetActual();
    $("f-semana").value = esSemanaExacta() && !E.quincena ? esSemanaExacta() : "";
    $("f-concepto").value = E.concepto;
    $("f-atipicos").value = E.atipicos;
    TIPOS.forEach((t) => { $("tipo-" + t).checked = E.tipos.has(t); });
    $("contexto-activo").textContent = etiquetaRango() + (E.quincena ? " · " + (E.quincena === 1 ? "1.ª" : "2.ª") + " quincena" : "");
    chipsActuales = chips();
    const ul = $("filtros-activos");
    ul.innerHTML = "";
    chipsActuales.forEach(([t], i) => {
      const li = document.createElement("li");
      li.className = "chip";
      const sp = document.createElement("span");
      sp.textContent = t;
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.i = String(i);
      b.setAttribute("aria-label", "Quitar filtro " + t);
      b.textContent = "×";
      li.append(sp, b);
      ul.append(li);
    });
  }

  const RENDERS = [renderKpis, renderVeredicto, renderDona, renderTreemap, (c) => renderBarrasTipo(c, "ch-fijos", "fijo", C.fij), (c) => renderBarrasTipo(c, "ch-variables", "variable", C.vari), renderSankey, renderSaldo, renderSemanal, renderMensual, renderTasas, renderHeatmap, renderDiaSemana, renderCalendario, renderQuincena, renderMomento, renderDispersion, renderBoxplot, renderVolatilidad, renderListaAtipicos, renderPareto, renderFrecuencia, renderFrecImpacto, renderMesVsMes, renderTablas];

  function actualizar() {
    sincronizarUI();
    const c = contexto();
    RENDERS.forEach((f, i) => { try { f(c); } catch (e) { console.error("Error en el bloque " + i, e); } });
  }

  function poblarControles() {
    const sel = $("f-concepto");
    const conocidos = new Map();
    MOV.forEach((r) => conocidos.set(r.tipo + "|" + r.concepto, r));
    TIPOS.forEach((t) => {
      const nombres = unicos([...conocidos.values()].filter((r) => r.tipo === t).map((r) => r.concepto)).sort((a, b) => a.localeCompare(b, META.locale));
      if (!nombres.length) return;
      const g = document.createElement("optgroup");
      g.label = t === "ingreso" ? "Ingresos" : t === "fijo" ? "Gastos fijos" : "Gastos variables";
      nombres.forEach((n) => { const o = document.createElement("option"); o.value = n; o.textContent = n; g.append(o); });
      sel.append(g);
    });
    const sw = $("f-semana");
    SEMANAS_DATOS.forEach((l) => { const [a, b] = limitesSemana(l); const o = document.createElement("option"); o.value = l; o.textContent = corto(a) + " al " + corto(b); sw.append(o); });
    ["f-inicio", "f-fin"].forEach((id) => { $(id).min = P.inicio; $(id).max = P.fin; });
    $("hero-periodo").textContent = META.subtitulo;
    $("pie-origen").textContent = "Dashboard personal y estático: todo se calcula en tu navegador. " + META.origen;
  }

  function pegarRango(cambio) {
    const clamp = (v) => (v < P.inicio ? P.inicio : v > P.fin ? P.fin : v);
    let a = $("f-inicio").value ? clamp($("f-inicio").value) : E.inicio;
    let b = $("f-fin").value ? clamp($("f-fin").value) : E.fin;
    if (a > b) { if (cambio === "inicio") b = a; else a = b; }
    E.inicio = a; E.fin = b;
  }

  function enlazarEventos() {
    document.querySelectorAll('input[name="f-mes"]').forEach((r) => r.addEventListener("change", () => {
      if (!r.checked) return;
      if (r.value === "todo") { E.inicio = P.inicio; E.fin = P.fin; } else { [E.inicio, E.fin] = limitesMes(r.value); }
      actualizar();
    }));
    $("f-preset").addEventListener("change", (ev) => {
      const v = ev.target.value;
      if (v === "personalizado") { $("f-inicio").focus(); return; }
      if (v === "q1" || v === "q2") { E.quincena = v === "q1" ? 1 : 2; return actualizar(); }
      E.quincena = 0;
      if (v === "trimestre") { E.inicio = P.inicio; E.fin = P.fin; }
      else if (v === "mes") { [E.inicio, E.fin] = limitesMes(E.inicio.slice(0, 7)); }
      else if (v === "semana") { [E.inicio, E.fin] = limitesSemana(lunes(E.inicio)); }
      else if (v === "ultimos30") { E.inicio = suma(P.fin, -29) < P.inicio ? P.inicio : suma(P.fin, -29); E.fin = P.fin; }
      else if (v === "ultimos7") { E.inicio = suma(P.fin, -6); E.fin = P.fin; }
      actualizar();
    });
    $("f-semana").addEventListener("change", (ev) => {
      if (!ev.target.value) { E.inicio = P.inicio; E.fin = P.fin; } else { [E.inicio, E.fin] = limitesSemana(ev.target.value); }
      E.quincena = 0;
      actualizar();
    });
    $("f-inicio").addEventListener("change", () => { pegarRango("inicio"); actualizar(); });
    $("f-fin").addEventListener("change", () => { pegarRango("fin"); actualizar(); });
    TIPOS.forEach((t) => $("tipo-" + t).addEventListener("change", (ev) => {
      const sel = new Set(TIPOS.filter((x) => $("tipo-" + x).checked));
      if (!sel.size) { ev.target.checked = true; return; }
      E.tipos = sel;
      actualizar();
    }));
    $("f-concepto").addEventListener("change", (ev) => { E.concepto = ev.target.value; actualizar(); });
    $("f-atipicos").addEventListener("change", (ev) => { E.atipicos = ev.target.value; actualizar(); });
    let t1, t2;
    $("f-monto").addEventListener("input", (ev) => { clearTimeout(t1); t1 = setTimeout(() => { E.montoMin = Math.max(0, Number(ev.target.value) || 0); actualizar(); }, 250); });
    $("f-buscar").addEventListener("input", (ev) => { clearTimeout(t2); t2 = setTimeout(() => { E.buscar = ev.target.value; actualizar(); }, 250); });
    $("f-reiniciar").addEventListener("click", () => { E = base(); $("f-monto").value = 0; $("f-buscar").value = ""; actualizar(); });
    $("filtros-activos").addEventListener("click", (ev) => {
      const b = ev.target.closest("button");
      if (!b) return;
      chipsActuales[Number(b.dataset.i)][1]();
      actualizar();
    });
    const radios = document.querySelectorAll('.tabs > input[name="vista"]');
    const marcar = () => radios.forEach((r) => { const l = document.querySelector('.tab-etiquetas label[for="' + r.id + '"]'); if (l) l.setAttribute("aria-selected", String(r.checked)); });
    radios.forEach((r) => r.addEventListener("change", marcar));
    marcar();
  }

  function resaltar(id) {
    const t = $(id);
    if (!t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (t.closest(".card, .kpi") || t).animate([{ boxShadow: "0 0 0 0 rgba(47,165,123,.75)" }, { boxShadow: "0 0 0 16px rgba(47,165,123,0)" }], { duration: 1000 });
  }

  function renderFichas() {
    const total = construye(MOV, rangoDias(P.inicio, P.fin)).res;
    const vivos = { "kpi-tasa-ahorro": () => "Hoy: " + pc(total.tasa, 1), "kpi-variable-diario": () => "Hoy: " + fm(total.varDia) + " por día" };
    [["ficha-analisis", "analisis"], ["ficha-objetivos", "objetivos"], ["ficha-aprendizajes", "aprendizajes"]].forEach(([id, k]) => {
      const f = D.fichas[k];
      const art = $(id);
      art.querySelector("h3").textContent = f.titulo;
      art.querySelector("header p").textContent = f.subtitulo;
      art.querySelector(".ficha-items").innerHTML = f.items.map((it) => {
        const vivo = k === "objetivos" && vivos[it.evidencia] ? '<span class="ficha-meta">' + esc(vivos[it.evidencia]()) + "</span>" : "";
        return '<li class="ficha-item"><h4>' + esc(it.titulo) + "</h4><p>" + esc(it.texto) + "</p>" +
          (it.meta ? '<span class="ficha-meta">' + esc(it.meta) + (it.plazo ? " · " + esc(it.plazo) : "") + "</span>" : "") + vivo +
          (it.evidencia ? '<a class="ficha-evidencia" href="#' + esc(it.evidencia) + '" data-ev="' + esc(it.evidencia) + '">Ver la evidencia</a>' : "") + "</li>";
      }).join("");
    });
    document.querySelector(".seccion-fichas").addEventListener("click", (ev) => {
      const a = ev.target.closest("[data-ev]");
      if (a) setTimeout(() => resaltar(a.dataset.ev), 450);
    });
  }

  const calc = new Map(porConcepto(MOV, false).map((o) => [o.tipo + "|" + o.concepto, o]));
  (D.totalesPorConcepto || []).forEach((t) => {
    const o = calc.get(t.tipo + "|" + t.concepto);
    if (!o || o.total !== t.total || o.n !== t.movimientos) console.warn("totalesPorConcepto no coincide con los movimientos para:", t.concepto);
  });

  poblarControles();
  enlazarEventos();
  renderFichas();
  actualizar();
})();
