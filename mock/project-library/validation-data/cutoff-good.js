const cutoffgood = {
  status: 200,
  message: 'success',
  data: {
    'cutoffgood': [
      {
        'scorearea': '[800,900]',
        'areaprople': 500,
        'totalpeople': 500,
        'goodnum': 490,
        'totalgoodnum': 490,
        'goorate': '28.99%',
        'badnum': 10,
        'totalbadnum': 10,
        'badrate': '0.85%',
        'recalration': '0.85%',
        'precision': '98.00%'
      },
      {
        'scorearea': '[700,800)',
        'areaprople': 600,
        'totalpeople': 1100,
        'goodnum': 550,
        'totalgoodnum': 1040,
        'goorate': '61.54%',
        'badnum': 50,
        'totalbadnum': 60,
        'badrate': '5.13%',
        'recalration': '5.13%',
        'precision': '94.55%'
      },
      {
        'scorearea': '[600,700)',
        'areaprople': 670,
        'totalpeople': 1770,
        'goodnum': 500,
        'totalgoodnum': 1540,
        'goorate': '91.12%',
        'badnum': 170,
        'totalbadnum': 230,
        'badrate': '19.66%',
        'recalration': '19.66%',
        'precision': '87.01%'
      },
      {
        'scorearea': '[500,600)',
        'areaprople': 250,
        'totalpeople': 2020,
        'goodnum': 120,
        'totalgoodnum': 1660,
        'goorate': '98.22%',
        'badnum': 130,
        'totalbadnum': 360,
        'badrate': '30.77%',
        'recalration': '30.77%',
        'precision': '82.18%'
      },
      {
        'scorearea': '[400,500)',
        'areaprople': 480,
        'totalpeople': 2500,
        'goodnum': 20,
        'totalgoodnum': 1680,
        'goorate': '99.41%',
        'badnum': 440,
        'totalbadnum': 800,
        'badrate': '68.38%',
        'recalration': '68.38%',
        'precision': '67.20%'
      },
      {
        'scorearea': '[300,400)',
        'areaprople': 380,
        'totalpeople': 2860,
        'goodnum': 10,
        'totalgoodnum': 1690,
        'goorate': '100.00%',
        'badnum': 370,
        'totalbadnum': 1170,
        'badrate': '100.00%',
        'recalration': '100.00%',
        'precision': '59.09%'
      }
    ]
  }
}
export default {
  url: '/monitor/cutoff-good',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: cutoffgood
    }
  }
}
