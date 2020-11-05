const cutoffbad = {
  status: 200,
  message: 'success',
  data: {
    'cutoffbad': [
      {
        'scorearea': '[300,400)',
        'areaprople': 380,
        'totalpeople': 380,
        'goodnum': 10,
        'totalgoodnum': 10,
        'goorate': '0.61%',
        'badnum': 370,
        'totalbadnum': 370,
        'badrate': '31.62%',
        'recalration': '31.62%',
        'precision': '97.36%'
      },
      {
        'scorearea': '[400,500)',
        'areaprople': 480,
        'totalpeople': 840,
        'goodnum': 20,
        'totalgoodnum': 30,
        'goorate': '1.82%',
        'badnum': 440,
        'totalbadnum': 810,
        'badrate': '69.23%',
        'recalration': '69.23%',
        'precision': '96.42%'
      },
      {
        'scorearea': '[500,600)',
        'areaprople': 250,
        'totalpeople': 1090,
        'goodnum': 120,
        'totalgoodnum': 150,
        'goorate': '9.10%',
        'badnum': 130,
        'totalbadnum': 940,
        'badrate': '80.34%',
        'recalration': '80.34%',
        'precision': '86.24%'
      },
      {
        'scorearea': '[600,700)',
        'areaprople': 670,
        'totalpeople': 1760,
        'goodnum': 500,
        'totalgoodnum': 650,
        'goorate': '39.39%',
        'badnum': 170,
        'totalbadnum': 1110,
        'badrate': '94.49%',
        'recalration': '94.49%',
        'precision': '63.07%'
      },
      {
        'scorearea': '[700,800)',
        'areaprople': 600,
        'totalpeople': 2360,
        'goodnum': 550,
        'totalgoodnum': 1200,
        'goorate': '72.73%',
        'badnum': 50,
        'totalbadnum': 1160,
        'badrate': '99.15%',
        'recalration': '99.15%',
        'precision': '49.15%'
      },
      {
        'scorearea': '[800,900]',
        'areaprople': 500,
        'totalpeople': 2860,
        'goodnum': 490,
        'totalgoodnum': 1650,
        'goorate': '100%',
        'badnum': 10,
        'totalbadnum': 1170,
        'badrate': '100%',
        'recalration': '100%',
        'precision': '40.91%'
      }
    ]
  }
}
export default {
  url: '/monitor/cutoff-bad',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: cutoffbad
    }
  }
}
