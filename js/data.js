window.DATOS = {
  meta: {
    "titulo": "Desglose de mis finanzas en estos 3 meses",
    "subtitulo": "Septiembte a Noviembre de 2026",
    "moneda": "MXN",
    "locale": "es-MX",
    "periodo": {
      "inicio": "2026-09-02",
      "fin": "2026-11-30"
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
      "categoria": "Ingresos principales"
    },
    {
      "concepto": "Beca",
      "tipo": "ingreso",
      "categoria": "Apoyos escolares"
    },
    {
      "concepto": "Pago de préstamo",
      "tipo": "ingreso",
      "categoria": "Préstamos dados"
    },
    {
      "concepto": "Transporte",
      "tipo": "fijo",
      "categoria": "Movilidad"
    },
    {
      "concepto": "Spotify",
      "tipo": "fijo",
      "categoria": "Ocio"
    },
    {
      "concepto": "Corte de pelo",
      "tipo": "fijo",
      "categoria": "Necesidades básicas"
    },
    {
      "concepto": "Préstamo dado",
      "tipo": "variable",
      "categoria": "Imprevistos"
    },
    {
      "concepto": "Préstamo pagado",
      "tipo": "variable",
      "categoria": "Imprevistos"
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
      "concepto": "Pérdidas",
      "tipo": "variable",
      "categoria": "Imprevistos"
    },
    {
      "concepto": "Despensa",
      "tipo": "variable",
      "categoria": "Necesidades básicas"
    },
    {
      "concepto": "Material escolar",
      "tipo": "variable",
      "categoria": "Educación"
    },
    {
      "concepto": "Gastos imprevistos",
      "tipo": "variable",
      "categoria": "Imprevistos"
    },
    {
      "concepto": "Transporte a casa",
      "tipo": "variable",
      "categoria": "Movilidad"
    },
    {
      "concepto": "Comida",
      "tipo": "variable",
      "categoria": "Alimentación"
    },
    {
      "concepto": "Snacks",
      "tipo": "variable",
      "categoria": "Alimentación"
    }
  ],
  movimientos: [
    { fecha: "2026-09-02", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-02", tipo: "variable", concepto: "Material escolar", monto: 65 },
    { fecha: "2026-09-02", tipo: "variable", concepto: "Despensa", monto: 63 },
    { fecha: "2026-09-02", tipo: "ingreso", concepto: "Apoyo familiar", monto: 2800 },
    { fecha: "2026-09-03", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-04", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-04", tipo: "variable", concepto: "Snacks", monto: 15 },
    { fecha: "2026-09-04", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-09-04", tipo: "variable", concepto: "Comida fuera", monto: 45 },
    { fecha: "2026-09-05", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-05", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-05", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-06", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-06", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-06", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-07", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-07", tipo: "variable", concepto: "Despensa", monto: 70 },
    { fecha: "2026-09-08", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-08", tipo: "variable", concepto: "Snacks", monto: 12 },
    { fecha: "2026-09-08", tipo: "variable", concepto: "Material escolar", monto: 2 },
    { fecha: "2026-09-09", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-09", tipo: "fijo", concepto: "Spotify", monto: 74 },
    { fecha: "2026-09-09", tipo: "variable", concepto: "Despensa", monto: 110 },
    { fecha: "2026-09-10", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-10", tipo: "variable", concepto: "Café", monto: 15 },
    { fecha: "2026-09-11", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-11", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-09-12", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-12", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-12", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-13", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-13", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-13", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-14", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-14", tipo: "variable", concepto: "Despensa", monto: 250 },
    { fecha: "2026-09-14", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-09-15", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-15", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-15", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-16", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-16", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-16", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-17", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-17", tipo: "variable", concepto: "Snacks", monto: 10 },
    { fecha: "2026-09-17", tipo: "variable", concepto: "Gastos imprevistos", monto: 21 },
    { fecha: "2026-09-18", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-18", tipo: "variable", concepto: "Despensa", monto: 115 },
    { fecha: "2026-09-19", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-19", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-19", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-20", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-20", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-20", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-21", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-21", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-09-21", tipo: "variable", concepto: "Pérdidas", monto: 50 },
    { fecha: "2026-09-22", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-23", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-23", tipo: "variable", concepto: "Gastos imprevistos", monto: 10, nota: "Un gasto de transporte por una salida"},
    { fecha: "2026-09-23", tipo: "variable", concepto: "Comida fuera", monto: 200 },
    { fecha: "2026-09-24", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-24", tipo: "variable", concepto: "Transporte a casa", monto: 255 },
    { fecha: "2026-09-24", tipo: "variable", concepto: "Comida fuera", monto: 40 },
    { fecha: "2026-09-24", tipo: "variable", concepto: "Snacks", monto: 70 },
    { fecha: "2026-09-25", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-25", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-25", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-26", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-26", tipo: "variable", concepto: "Préstamo dado", monto: 50 },
    { fecha: "2026-09-26", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-09-27", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-09-27", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-09-27", tipo: "ingreso", concepto: "Apoyo familiar", monto: 150 },
    { fecha: "2026-09-28", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-28", tipo: "variable", concepto: "Despensa", monto: 150 },
    { fecha: "2026-09-29", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-09-29", tipo: "variable", concepto: "Comida fuera", monto: 65 },
    { fecha: "2026-09-30", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-01", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-02", tipo: "variable", concepto: "Transporte a casa", monto: 228 },
    { fecha: "2026-10-02", tipo: "ingreso", concepto: "Apoyo familiar", monto: 1000 },
    { fecha: "2026-10-03", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-03", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-03", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-04", tipo: "ingreso", concepto: "Pago de préstamo", monto: 150 },
    { fecha: "2026-10-04", tipo: "variable", concepto: "Snacks", monto: 50 },
    { fecha: "2026-10-05", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-05", tipo: "variable", concepto: "Despensa", monto: 50 },
    { fecha: "2026-10-06", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-07", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-07", tipo: "variable", concepto: "Snacks", monto: 75 },
    { fecha: "2026-10-08", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-08", tipo: "variable", concepto: "Comida fuera", monto: 65 },
    { fecha: "2026-10-08", tipo: "variable", concepto: "Despensa", monto: 85 },
    { fecha: "2026-10-09", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-09", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-10-10", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-10", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-10", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-11", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-11", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-11", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-12", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-12", tipo: "fijo", concepto: "Corte de pelo", monto: 100 },
    { fecha: "2026-10-12", tipo: "variable", concepto: "Despensa", monto: 120 },
    { fecha: "2026-10-12", tipo: "variable", concepto: "Café", monto: 25 },
    { fecha: "2026-10-13", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-14", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-15", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-15", tipo: "ingreso", concepto: "Apoyo familiar", monto: 2500 },
    { fecha: "2026-10-16", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-16", tipo: "variable", concepto: "Despensa", monto: 150 },
    { fecha: "2026-10-16", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-17", tipo: "variable", concepto: "Despensa", monto: 50 },
    { fecha: "2026-10-18", tipo: "variable", concepto: "Snacks", monto: 50 },
    { fecha: "2026-10-19", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-19", tipo: "variable", concepto: "Snacks", monto: 20 },
    { fecha: "2026-10-19", tipo: "variable", concepto: "Gastos imprevistos", monto: 15, nota: "Un gasto para la compra de una nueva tarjeta de metro" },
    { fecha: "2026-10-20", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-20", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-21", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-21", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-21", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-21", tipo: "variable", concepto: "Comida fuera", monto: 70 },
    { fecha: "2026-10-23", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-23", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-24", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-24", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-24", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-25", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-25", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-25", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-26", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-26", tipo: "variable", concepto: "Despensa", monto: 130 },
    { fecha: "2026-10-27", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-27", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-28", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-28", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-10-29", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-10-29", tipo: "variable", concepto: "Transporte a casa", monto: 216 },
    { fecha: "2026-10-29", tipo: "variable", concepto: "Comida fuera", monto: 200 },
    { fecha: "2026-10-30", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-10-30", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-10-30", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-10-31", tipo: "variable", concepto: "Comida fuera", monto: 30 },
    { fecha: "2026-11-01", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-11-01", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-11-01", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-11-02", tipo: "variable", concepto: "Transporte a casa", monto: 232 },
    { fecha: "2026-11-03", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-03", tipo: "variable", concepto: "Comida fuera", monto: 100 },
    { fecha: "2026-11-04", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-04", tipo: "variable", concepto: "Comida fuera", monto: 100 },
    { fecha: "2026-11-05", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-05", tipo: "variable", concepto: "Despensa", monto: 120 },
    { fecha: "2026-11-05", tipo: "variable", concepto: "Gastos imprevistos", monto: 22, nota: "Un gasto en transporte para el museo" },
    { fecha: "2026-11-05", tipo: "variable", concepto: "Snacks", monto: 20 },
    { fecha: "2026-11-07", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-11-07", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-11-07", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-11-08", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-11-08", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-11-08", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-11-09", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-09", tipo: "variable", concepto: "Snacks", monto: 10 },
    { fecha: "2026-11-10", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-10", tipo: "variable", concepto: "Snacks", monto: 10 },
    { fecha: "2026-11-11", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-11", tipo: "variable", concepto: "Despensa", monto: 120 },
    { fecha: "2026-11-11", tipo: "variable", concepto: "Café", monto: 32 },
    { fecha: "2026-11-12", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-12", tipo: "variable", concepto: "Café", monto: 32 },
    { fecha: "2026-11-13", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-13", tipo: "variable", concepto: "Transporte a casa", monto: 230 },
    { fecha: "2026-11-13", tipo: "variable", concepto: "Comida fuera", monto: 50 },
    { fecha: "2026-11-13", tipo: "ingreso", concepto: "Apoyo familiar", monto: 1000 },
    { fecha: "2026-11-14", tipo: "fijo", concepto: "Spotify", monto: 22 },
    { fecha: "2026-11-15", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-11-15", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-11-15", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-11-16", tipo: "variable", concepto: "Transporte a casa", monto: 230 },
    { fecha: "2026-11-17", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-17", tipo: "variable", concepto: "Snacks", monto: 10 },
    { fecha: "2026-11-17", tipo: "variable", concepto: "Despensa", monto: 150 },
    { fecha: "2026-11-18", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-18", tipo: "variable", concepto: "Comida fuera", monto: 38 },
    { fecha: "2026-11-19", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-19", tipo: "variable", concepto: "Despensa", monto: 50 },
    { fecha: "2026-11-20", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-21", tipo: "variable", concepto: "Gastos imprevistos", monto: 18, nota: "Un gasto en transporte para ir por mi tarjeta de la beca de transporte" },
    { fecha: "2026-11-22", tipo: "fijo", concepto: "Transporte", monto: 0 },
    { fecha: "2026-11-22", tipo: "variable", concepto: "Despensa", monto: 0 },
    { fecha: "2026-11-22", tipo: "ingreso", concepto: "Apoyo familiar", monto: 0 },
    { fecha: "2026-11-23", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-23", tipo: "variable", concepto: "Despensa", monto: 100 },
    { fecha: "2026-11-23", tipo: "variable", concepto: "Café", monto: 32 },
    { fecha: "2026-11-24", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-25", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-25", tipo: "variable", concepto: "Comida fuera", monto: 45 },
    { fecha: "2026-11-25", tipo: "variable", concepto: "Snacks", monto: 20 },
    { fecha: "2026-11-26", tipo: "fijo", concepto: "Transporte", monto: 22 },
    { fecha: "2026-11-26", tipo: "fijo", concepto: "Spotify", monto: 40 },
    { fecha: "2026-11-26", tipo: "variable", concepto: "Gastos imprevistos", monto: 175, nota: "Suscripcion de Claude para una tarea" },
    { fecha: "2026-11-27", tipo: "fijo", concepto: "Transporte", monto: 22 },
  ],
  totalesPorConcepto: [
    { tipo: "ingreso",  concepto: "Apoyo familiar",   movimientos: 26, total: 7450 },
    { tipo: "ingreso",  concepto: "Pago de préstamo", movimientos: 1,  total: 150  },

    { tipo: "fijo",     concepto: "Transporte",       movimientos: 77, total: 1210 },
    { tipo: "fijo",     concepto: "Spotify",          movimientos: 3,  total: 136  },
    { tipo: "fijo",     concepto: "Corte de pelo",    movimientos: 1,  total: 100  },

    { tipo: "variable", concepto: "Despensa",           movimientos: 41, total: 2183 },
    { tipo: "variable", concepto: "Comida fuera",       movimientos: 21, total: 1448 },
    { tipo: "variable", concepto: "Transporte a casa",  movimientos: 6,  total: 1391 },
    { tipo: "variable", concepto: "Café",               movimientos: 5,  total: 136  },
    { tipo: "variable", concepto: "Snacks",             movimientos: 13, total: 372  },
    { tipo: "variable", concepto: "Gastos imprevistos", movimientos: 6,  total: 261  },
    { tipo: "variable", concepto: "Material escolar",   movimientos: 2,  total: 67   },
    { tipo: "variable", concepto: "Préstamo dado",      movimientos: 1,  total: 50   },
    { tipo: "variable", concepto: "Pérdidas",           movimientos: 1,  total: 50   }
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
