window.DATOS = {
  meta: {
    "titulo": "Mi trimestre en números",
    "subtitulo": "Agosto a octubre de 2026",
    "moneda": "MXN",
    "locale": "es-MX",
    "periodo": {
      "inicio": "2026-08-01",
      "fin": "2026-10-31"
    },
    "inicioSemana": "lunes",
    "origen": "Datos sintéticos de ejemplo. Reemplaza los movimientos por tus registros reales.",
    "config": {
      "atipicos": {
        "metodo": "iqr",
        "factor": 4,
        "soloVariables": true
      },
      "hormiga": {
        "montoMaximoUnitario": 100,
        "frecuenciaMinima": 8
      }
    }
  },
  catalogo: [
    {
      "concepto": "Apoyo familiar",
      "tipo": "ingreso",
      "categoria": "Otros ingresos"
    },
    {
      "concepto": "Honorarios",
      "tipo": "ingreso",
      "categoria": "Trabajo independiente"
    },
    {
      "concepto": "Venta de artículos",
      "tipo": "ingreso",
      "categoria": "Otros ingresos"
    },
    {
      "concepto": "Celular",
      "tipo": "fijo",
      "categoria": "Servicios"
    },
    {
      "concepto": "Gimnasio",
      "tipo": "fijo",
      "categoria": "Bienestar"
    },
    {
      "concepto": "Internet",
      "tipo": "fijo",
      "categoria": "Servicios"
    },
    {
      "concepto": "Renta",
      "tipo": "fijo",
      "categoria": "Vivienda"
    },
    {
      "concepto": "Seguro médico",
      "tipo": "fijo",
      "categoria": "Salud"
    },
    {
      "concepto": "Streaming",
      "tipo": "fijo",
      "categoria": "Ocio"
    },
    {
      "concepto": "Café",
      "tipo": "variable",
      "categoria": "Alimentación"
    },
    {
      "concepto": "Comida fuera",
      "tipo": "variable",
      "categoria": "Alimentación"
    },
    {
      "concepto": "Consulta dental",
      "tipo": "variable",
      "categoria": "Salud"
    },
    {
      "concepto": "Despensa",
      "tipo": "variable",
      "categoria": "Alimentación"
    },
    {
      "concepto": "Farmacia",
      "tipo": "variable",
      "categoria": "Salud"
    },
    {
      "concepto": "Hogar e higiene",
      "tipo": "variable",
      "categoria": "Vivienda"
    },
    {
      "concepto": "Ocio",
      "tipo": "variable",
      "categoria": "Ocio"
    },
    {
      "concepto": "Regalo de cumpleaños",
      "tipo": "variable",
      "categoria": "Ocio"
    },
    {
      "concepto": "Reparación de bicicleta",
      "tipo": "variable",
      "categoria": "Imprevistos"
    },
    {
      "concepto": "Reparación de laptop",
      "tipo": "variable",
      "categoria": "Imprevistos"
    },
    {
      "concepto": "Ropa",
      "tipo": "variable",
      "categoria": "Personal"
    },
    {
      "concepto": "Snacks",
      "tipo": "variable",
      "categoria": "Alimentación"
    },
    {
      "concepto": "Transporte",
      "tipo": "variable",
      "categoria": "Movilidad"
    }
  ],
  movimientos: [
    { fecha: "2026-08-01", tipo: "fijo", concepto: "Renta", monto: 6500 },
    { fecha: "2026-08-01", tipo: "variable", concepto: "Despensa", monto: 400 },
    { fecha: "2026-08-02", tipo: "ingreso", concepto: "Honorarios", monto: 3000 },
    { fecha: "2026-08-02", tipo: "variable", concepto: "Snacks", monto: 55 },
    { fecha: "2026-08-03", tipo: "fijo", concepto: "Gimnasio", monto: 450 },
    { fecha: "2026-08-03", tipo: "variable", concepto: "Snacks", monto: 40 },
    { fecha: "2026-08-04", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-08-04", tipo: "variable", concepto: "Snacks", monto: 45 },
    { fecha: "2026-08-05", tipo: "fijo", concepto: "Internet", monto: 399 },
    { fecha: "2026-08-05", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-08-06", tipo: "ingreso", concepto: "Honorarios", monto: 4200 },
    { fecha: "2026-08-06", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-08-06", tipo: "variable", concepto: "Café", monto: 65 },
    { fecha: "2026-08-07", tipo: "variable", concepto: "Despensa", monto: 170 },
    { fecha: "2026-08-07", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-07", tipo: "variable", concepto: "Café", monto: 50 },
    { fecha: "2026-08-08", tipo: "fijo", concepto: "Celular", monto: 250 },
    { fecha: "2026-08-08", tipo: "variable", concepto: "Despensa", monto: 620 },
    { fecha: "2026-08-08", tipo: "variable", concepto: "Comida fuera", monto: 220 },
    { fecha: "2026-08-09", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-08-11", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-11", tipo: "variable", concepto: "Café", monto: 45 },
    { fecha: "2026-08-12", tipo: "fijo", concepto: "Streaming", monto: 219 },
    { fecha: "2026-08-12", tipo: "variable", concepto: "Transporte", monto: 85 },
    { fecha: "2026-08-12", tipo: "variable", concepto: "Café", monto: 45 },
    { fecha: "2026-08-12", tipo: "variable", concepto: "Snacks", monto: 55 },
    { fecha: "2026-08-13", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-14", tipo: "ingreso", concepto: "Honorarios", monto: 3000 },
    { fecha: "2026-08-14", tipo: "variable", concepto: "Café", monto: 70 },
    { fecha: "2026-08-15", tipo: "fijo", concepto: "Seguro médico", monto: 520 },
    { fecha: "2026-08-15", tipo: "variable", concepto: "Despensa", monto: 560 },
    { fecha: "2026-08-15", tipo: "variable", concepto: "Comida fuera", monto: 160 },
    { fecha: "2026-08-15", tipo: "variable", concepto: "Ocio", monto: 440 },
    { fecha: "2026-08-16", tipo: "variable", concepto: "Hogar e higiene", monto: 120 },
    { fecha: "2026-08-17", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-08-17", tipo: "variable", concepto: "Café", monto: 60 },
    { fecha: "2026-08-18", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-18", tipo: "variable", concepto: "Café", monto: 75 },
    { fecha: "2026-08-18", tipo: "variable", concepto: "Comida fuera", monto: 260 },
    { fecha: "2026-08-18", tipo: "variable", concepto: "Farmacia", monto: 250 },
    { fecha: "2026-08-19", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-08-19", tipo: "variable", concepto: "Snacks", monto: 60 },
    { fecha: "2026-08-19", tipo: "variable", concepto: "Reparación de laptop", monto: 2400, nota: "Se dañó la pantalla" },
    { fecha: "2026-08-20", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-08-20", tipo: "variable", concepto: "Café", monto: 45 },
    { fecha: "2026-08-21", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-08-22", tipo: "variable", concepto: "Despensa", monto: 580 },
    { fecha: "2026-08-23", tipo: "ingreso", concepto: "Honorarios", monto: 5600 },
    { fecha: "2026-08-23", tipo: "variable", concepto: "Ocio", monto: 300 },
    { fecha: "2026-08-24", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-25", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-08-26", tipo: "variable", concepto: "Café", monto: 70 },
    { fecha: "2026-08-27", tipo: "variable", concepto: "Despensa", monto: 150 },
    { fecha: "2026-08-27", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-08-28", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-08-28", tipo: "variable", concepto: "Café", monto: 50 },
    { fecha: "2026-08-29", tipo: "ingreso", concepto: "Honorarios", monto: 2400 },
    { fecha: "2026-08-29", tipo: "variable", concepto: "Despensa", monto: 500 },
    { fecha: "2026-08-30", tipo: "variable", concepto: "Despensa", monto: 160 },
    { fecha: "2026-08-30", tipo: "variable", concepto: "Comida fuera", monto: 230 },
    { fecha: "2026-08-31", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-08-31", tipo: "variable", concepto: "Comida fuera", monto: 160 },
    { fecha: "2026-09-01", tipo: "fijo", concepto: "Renta", monto: 6500 },
    { fecha: "2026-09-01", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-09-02", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-03", tipo: "fijo", concepto: "Gimnasio", monto: 450 },
    { fecha: "2026-09-03", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-04", tipo: "ingreso", concepto: "Honorarios", monto: 2500 },
    { fecha: "2026-09-04", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-04", tipo: "variable", concepto: "Hogar e higiene", monto: 130 },
    { fecha: "2026-09-05", tipo: "fijo", concepto: "Internet", monto: 399 },
    { fecha: "2026-09-05", tipo: "variable", concepto: "Despensa", monto: 500 },
    { fecha: "2026-09-05", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-09-06", tipo: "variable", concepto: "Farmacia", monto: 220 },
    { fecha: "2026-09-07", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-09-07", tipo: "variable", concepto: "Comida fuera", monto: 210 },
    { fecha: "2026-09-08", tipo: "fijo", concepto: "Celular", monto: 250 },
    { fecha: "2026-09-08", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-09-08", tipo: "variable", concepto: "Comida fuera", monto: 170 },
    { fecha: "2026-09-08", tipo: "variable", concepto: "Snacks", monto: 40 },
    { fecha: "2026-09-09", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-09", tipo: "variable", concepto: "Snacks", monto: 50 },
    { fecha: "2026-09-10", tipo: "ingreso", concepto: "Venta de artículos", monto: 600 },
    { fecha: "2026-09-10", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-10", tipo: "variable", concepto: "Café", monto: 60 },
    { fecha: "2026-09-12", tipo: "fijo", concepto: "Streaming", monto: 219 },
    { fecha: "2026-09-12", tipo: "variable", concepto: "Despensa", monto: 460 },
    { fecha: "2026-09-13", tipo: "variable", concepto: "Comida fuera", monto: 160 },
    { fecha: "2026-09-13", tipo: "variable", concepto: "Regalo de cumpleaños", monto: 1100, nota: "Cumpleaños de familiar" },
    { fecha: "2026-09-14", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-09-15", tipo: "fijo", concepto: "Seguro médico", monto: 520 },
    { fecha: "2026-09-15", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-09-16", tipo: "variable", concepto: "Café", monto: 70 },
    { fecha: "2026-09-16", tipo: "variable", concepto: "Snacks", monto: 55 },
    { fecha: "2026-09-17", tipo: "ingreso", concepto: "Honorarios", monto: 4800 },
    { fecha: "2026-09-17", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-17", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-09-18", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-09-19", tipo: "variable", concepto: "Despensa", monto: 440 },
    { fecha: "2026-09-19", tipo: "variable", concepto: "Hogar e higiene", monto: 190 },
    { fecha: "2026-09-20", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-09-20", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-09-21", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-09-21", tipo: "variable", concepto: "Comida fuera", monto: 220 },
    { fecha: "2026-09-22", tipo: "ingreso", concepto: "Honorarios", monto: 3500 },
    { fecha: "2026-09-22", tipo: "variable", concepto: "Despensa", monto: 130 },
    { fecha: "2026-09-22", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-22", tipo: "variable", concepto: "Farmacia", monto: 90 },
    { fecha: "2026-09-22", tipo: "variable", concepto: "Hogar e higiene", monto: 120 },
    { fecha: "2026-09-23", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-24", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-09-25", tipo: "variable", concepto: "Despensa", monto: 190 },
    { fecha: "2026-09-25", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-09-25", tipo: "variable", concepto: "Comida fuera", monto: 270 },
    { fecha: "2026-09-25", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-09-26", tipo: "variable", concepto: "Despensa", monto: 440 },
    { fecha: "2026-09-26", tipo: "variable", concepto: "Snacks", monto: 55 },
    { fecha: "2026-09-27", tipo: "variable", concepto: "Ocio", monto: 150 },
    { fecha: "2026-09-27", tipo: "variable", concepto: "Consulta dental", monto: 1800, nota: "Limpieza y revisión" },
    { fecha: "2026-09-28", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-09-28", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-09-28", tipo: "variable", concepto: "Hogar e higiene", monto: 120 },
    { fecha: "2026-09-29", tipo: "variable", concepto: "Despensa", monto: 190 },
    { fecha: "2026-09-29", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-09-30", tipo: "ingreso", concepto: "Honorarios", monto: 3200 },
    { fecha: "2026-09-30", tipo: "variable", concepto: "Despensa", monto: 180 },
    { fecha: "2026-09-30", tipo: "variable", concepto: "Transporte", monto: 85 },
    { fecha: "2026-09-30", tipo: "variable", concepto: "Café", monto: 75 },
    { fecha: "2026-09-30", tipo: "variable", concepto: "Comida fuera", monto: 130 },
    { fecha: "2026-10-01", tipo: "fijo", concepto: "Renta", monto: 6500 },
    { fecha: "2026-10-01", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-10-01", tipo: "variable", concepto: "Café", monto: 50 },
    { fecha: "2026-10-02", tipo: "ingreso", concepto: "Honorarios", monto: 5200 },
    { fecha: "2026-10-02", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-10-02", tipo: "variable", concepto: "Café", monto: 75 },
    { fecha: "2026-10-03", tipo: "fijo", concepto: "Gimnasio", monto: 450 },
    { fecha: "2026-10-03", tipo: "variable", concepto: "Despensa", monto: 520 },
    { fecha: "2026-10-03", tipo: "variable", concepto: "Comida fuera", monto: 150 },
    { fecha: "2026-10-04", tipo: "variable", concepto: "Comida fuera", monto: 100 },
    { fecha: "2026-10-05", tipo: "fijo", concepto: "Internet", monto: 399 },
    { fecha: "2026-10-05", tipo: "variable", concepto: "Café", monto: 70 },
    { fecha: "2026-10-06", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-10-06", tipo: "variable", concepto: "Café", monto: 60 },
    { fecha: "2026-10-07", tipo: "variable", concepto: "Despensa", monto: 190 },
    { fecha: "2026-10-07", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-10-08", tipo: "fijo", concepto: "Celular", monto: 250 },
    { fecha: "2026-10-08", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-10-08", tipo: "variable", concepto: "Café", monto: 50 },
    { fecha: "2026-10-08", tipo: "variable", concepto: "Snacks", monto: 55 },
    { fecha: "2026-10-09", tipo: "variable", concepto: "Ropa", monto: 1350, nota: "Chamarra y tenis" },
    { fecha: "2026-10-10", tipo: "variable", concepto: "Despensa", monto: 440 },
    { fecha: "2026-10-10", tipo: "variable", concepto: "Snacks", monto: 35 },
    { fecha: "2026-10-11", tipo: "ingreso", concepto: "Honorarios", monto: 3500 },
    { fecha: "2026-10-11", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-10-12", tipo: "fijo", concepto: "Streaming", monto: 219 },
    { fecha: "2026-10-12", tipo: "variable", concepto: "Despensa", monto: 110 },
    { fecha: "2026-10-14", tipo: "variable", concepto: "Despensa", monto: 90 },
    { fecha: "2026-10-14", tipo: "variable", concepto: "Transporte", monto: 85 },
    { fecha: "2026-10-15", tipo: "ingreso", concepto: "Apoyo familiar", monto: 1500 },
    { fecha: "2026-10-15", tipo: "fijo", concepto: "Seguro médico", monto: 520 },
    { fecha: "2026-10-15", tipo: "variable", concepto: "Café", monto: 50 },
    { fecha: "2026-10-16", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-10-16", tipo: "variable", concepto: "Café", monto: 70 },
    { fecha: "2026-10-16", tipo: "variable", concepto: "Hogar e higiene", monto: 210 },
    { fecha: "2026-10-17", tipo: "variable", concepto: "Despensa", monto: 410 },
    { fecha: "2026-10-17", tipo: "variable", concepto: "Ocio", monto: 310 },
    { fecha: "2026-10-17", tipo: "variable", concepto: "Snacks", monto: 40 },
    { fecha: "2026-10-19", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-10-20", tipo: "ingreso", concepto: "Honorarios", monto: 4000 },
    { fecha: "2026-10-20", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-10-21", tipo: "variable", concepto: "Transporte", monto: 60 },
    { fecha: "2026-10-22", tipo: "variable", concepto: "Café", monto: 60 },
    { fecha: "2026-10-23", tipo: "variable", concepto: "Transporte", monto: 52 },
    { fecha: "2026-10-24", tipo: "variable", concepto: "Despensa", monto: 280 },
    { fecha: "2026-10-24", tipo: "variable", concepto: "Reparación de bicicleta", monto: 780, nota: "Llantas y frenos" },
    { fecha: "2026-10-25", tipo: "variable", concepto: "Comida fuera", monto: 200 },
    { fecha: "2026-10-26", tipo: "variable", concepto: "Transporte", monto: 45 },
    { fecha: "2026-10-27", tipo: "variable", concepto: "Café", monto: 75 },
    { fecha: "2026-10-28", tipo: "ingreso", concepto: "Honorarios", monto: 3600 },
    { fecha: "2026-10-28", tipo: "variable", concepto: "Transporte", monto: 85 },
    { fecha: "2026-10-28", tipo: "variable", concepto: "Snacks", monto: 25 },
    { fecha: "2026-10-29", tipo: "variable", concepto: "Despensa", monto: 160 },
    { fecha: "2026-10-29", tipo: "variable", concepto: "Transporte", monto: 38 },
    { fecha: "2026-10-30", tipo: "variable", concepto: "Despensa", monto: 110 },
    { fecha: "2026-10-30", tipo: "variable", concepto: "Transporte", monto: 85 },
    { fecha: "2026-10-30", tipo: "variable", concepto: "Snacks", monto: 50 },
    { fecha: "2026-10-31", tipo: "variable", concepto: "Despensa", monto: 440 },
    { fecha: "2026-10-31", tipo: "variable", concepto: "Comida fuera", monto: 280 }
  ],
  totalesPorConcepto: [
    {
      "tipo": "ingreso",
      "concepto": "Honorarios",
      "movimientos": 13,
      "total": 48500
    },
    {
      "tipo": "ingreso",
      "concepto": "Apoyo familiar",
      "movimientos": 1,
      "total": 1500
    },
    {
      "tipo": "ingreso",
      "concepto": "Venta de artículos",
      "movimientos": 1,
      "total": 600
    },
    {
      "tipo": "fijo",
      "concepto": "Renta",
      "movimientos": 3,
      "total": 19500
    },
    {
      "tipo": "fijo",
      "concepto": "Seguro médico",
      "movimientos": 3,
      "total": 1560
    },
    {
      "tipo": "fijo",
      "concepto": "Gimnasio",
      "movimientos": 3,
      "total": 1350
    },
    {
      "tipo": "fijo",
      "concepto": "Internet",
      "movimientos": 3,
      "total": 1197
    },
    {
      "tipo": "fijo",
      "concepto": "Celular",
      "movimientos": 3,
      "total": 750
    },
    {
      "tipo": "fijo",
      "concepto": "Streaming",
      "movimientos": 3,
      "total": 657
    },
    {
      "tipo": "variable",
      "concepto": "Despensa",
      "movimientos": 29,
      "total": 8720
    },
    {
      "tipo": "variable",
      "concepto": "Comida fuera",
      "movimientos": 15,
      "total": 2920
    },
    {
      "tipo": "variable",
      "concepto": "Transporte",
      "movimientos": 52,
      "total": 2696
    },
    {
      "tipo": "variable",
      "concepto": "Reparación de laptop",
      "movimientos": 1,
      "total": 2400
    },
    {
      "tipo": "variable",
      "concepto": "Consulta dental",
      "movimientos": 1,
      "total": 1800
    },
    {
      "tipo": "variable",
      "concepto": "Ropa",
      "movimientos": 1,
      "total": 1350
    },
    {
      "tipo": "variable",
      "concepto": "Café",
      "movimientos": 22,
      "total": 1340
    },
    {
      "tipo": "variable",
      "concepto": "Ocio",
      "movimientos": 4,
      "total": 1200
    },
    {
      "tipo": "variable",
      "concepto": "Regalo de cumpleaños",
      "movimientos": 1,
      "total": 1100
    },
    {
      "tipo": "variable",
      "concepto": "Hogar e higiene",
      "movimientos": 6,
      "total": 890
    },
    {
      "tipo": "variable",
      "concepto": "Snacks",
      "movimientos": 19,
      "total": 785
    },
    {
      "tipo": "variable",
      "concepto": "Reparación de bicicleta",
      "movimientos": 1,
      "total": 780
    },
    {
      "tipo": "variable",
      "concepto": "Farmacia",
      "movimientos": 3,
      "total": 560
    }
  ],
  fichas: {
    "analisis": {
      "titulo": "Análisis personal",
      "subtitulo": "Lo que descubrí sobre mis hábitos, gastos y preocupaciones",
      "items": [
        {
          "titulo": "Mis gastos fijos pesan más de lo que creía",
          "texto": "Entre renta, servicios y suscripciones, más de la mitad de lo que entra ya está comprometido antes de que empiece el mes.",
          "evidencia": "kpi-peso-fijos"
        },
        {
          "titulo": "Los gastos hormiga no son tan chicos",
          "texto": "Café, snacks y transporte pasan desapercibidos uno a uno, pero sumados rivalizan con una despensa completa.",
          "evidencia": "ch-frecuencia-impacto"
        },
        {
          "titulo": "El fin de semana es mi punto débil",
          "texto": "Sábados y domingos concentran la despensa grande, las salidas a comer y el ocio.",
          "evidencia": "ch-heatmap-dia"
        },
        {
          "titulo": "Mi ingreso irregular me inquieta",
          "texto": "Un mes con pocos pagos se nota de inmediato en el saldo, y los gastos fijos no esperan.",
          "evidencia": "ch-saldo-acumulado"
        }
      ]
    },
    "objetivos": {
      "titulo": "Objetivos financieros",
      "subtitulo": "Metas concretas que salen de estos tres meses",
      "items": [
        {
          "titulo": "Apartar el 10 % de cada ingreso",
          "texto": "Separarlo el mismo día en que llega, antes de pagar cualquier otra cosa.",
          "meta": "10 % de tasa de ahorro",
          "plazo": "Desde noviembre",
          "evidencia": "kpi-tasa-ahorro"
        },
        {
          "titulo": "Tope de gasto variable diario",
          "texto": "Mantener el promedio diario por debajo del nivel de mis mejores semanas.",
          "meta": "190 pesos por día",
          "plazo": "Próximo trimestre",
          "evidencia": "kpi-variable-diario"
        },
        {
          "titulo": "Comer fuera dos veces por semana",
          "texto": "Cambiar parte de las salidas del fin de semana por cocinar en casa.",
          "meta": "2 salidas por semana",
          "plazo": "Un mes de prueba",
          "evidencia": "ch-mes-vs-mes"
        },
        {
          "titulo": "Fondo para imprevistos",
          "texto": "Reservar un monto mensual para reparaciones, salud y regalos, que aparecen siempre.",
          "meta": "Un mes de gastos fijos",
          "plazo": "Seis meses",
          "evidencia": "ch-dispersion"
        }
      ]
    },
    "aprendizajes": {
      "titulo": "¿Qué aprendí?",
      "subtitulo": "Conclusiones del ejercicio de registrar y analizar",
      "items": [
        {
          "titulo": "Anotar cambia lo que hago",
          "texto": "Saber que iba a escribir cada gasto me hizo pensarlo dos veces antes de comprar.",
          "evidencia": "ch-calendario"
        },
        {
          "titulo": "Los imprevistos son parte del plan",
          "texto": "Los gastos atípicos no fueron errores: fueron previsibles en conjunto aunque no en fecha.",
          "evidencia": "lista-atipicos"
        },
        {
          "titulo": "Un mes bueno no compensa uno malo sin colchón",
          "texto": "El saldo acumulado muestra que el superávit de un mes se evapora en el siguiente si no lo separo.",
          "evidencia": "ch-saldo-acumulado"
        }
      ]
    }
  }
};
