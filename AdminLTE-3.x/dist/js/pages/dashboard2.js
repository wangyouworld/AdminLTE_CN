/* global Chart:false */

$(function () {
  'use strict'

  /* ChartJS
   * -------
   * 在这里，我们将使用 ChartJS 创建一些图表
   */

  //-----------------------
  // - 月销售额图表 -
  //-----------------------

  // 使用 jQuery .get() 方法获取内容。
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

  var salesChartData = {
    labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
    datasets: [
      {
        label: '数字商品',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: '电子产品',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

  var salesChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  // 这将获取 jQuery 中的第一个返回的节点。
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: salesChartData,
    options: salesChartOptions
  }
  )

  //---------------------------
  // - 月销售额图表结束 -
  //---------------------------

  //-------------
  // - 饼形图 -
  //-------------
  // 使用 jQuery .get() 方法获取内容。
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
  var pieData = {
    labels: [
      'Chrome',
      'IE',
      'FireFox',
      'Safari',
      'Opera',
      'Navigator'
    ],
    datasets: [
      {
        data: [700, 500, 400, 600, 300, 100],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
      }
    ]
  }
  var pieOptions = {
    legend: {
      display: false
    }
  }
  // 创建饼形图或环形图
  // 你可以使用以下方法在此之间进行切换。
  // eslint-disable-next-line no-unused-vars
  var pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions
  })

  //-----------------
  // - 结束饼形图 -
  //-----------------

  /* jVector 地图
   * ------------
   * 使用用标记创建世界地图
   */
  $('#world-map-markers').mapael({
    map: {
      name: 'usa_states',
      zoom: {
        enabled: true,
        maxLevel: 10
      }
    }
  })

  // $('#world-map-markers').vectorMap({
  //   map              : 'world_en',
  //   normalizeFunction: 'polynomial',
  //   hoverOpacity     : 0.7,
  //   hoverColor       : false,
  //   backgroundColor  : 'transparent',
  //   regionStyle      : {
  //     initial      : {
  //       fill            : 'rgba(210, 214, 222, 1)',
  //       'fill-opacity'  : 1,
  //       stroke          : 'none',
  //       'stroke-width'  : 0,
  //       'stroke-opacity': 1
  //     },
  //     hover        : {
  //       'fill-opacity': 0.7,
  //       cursor        : 'pointer'
  //     },
  //     selected     : {
  //       fill: 'yellow'
  //     },
  //     selectedHover: {}
  //   },
  //   markerStyle      : {
  //     initial: {
  //       fill  : '#00a65a',
  //       stroke: '#111'
  //     }
  //   },
  //   markers          : [
  //     {
  //       latLng: [41.90, 12.45],
  //       name  : '梵蒂冈'
  //     },
  //     {
  //       latLng: [43.73, 7.41],
  //       name  : '摩纳哥'
  //     },
  //     {
  //       latLng: [-0.52, 166.93],
  //       name  : '瑙鲁'
  //     },
  //     {
  //       latLng: [-8.51, 179.21],
  //       name  : '图瓦卢'
  //     },
  //     {
  //       latLng: [43.93, 12.46],
  //       name  : '圣马力诺'
  //     },
  //     {
  //       latLng: [47.14, 9.52],
  //       name  : '列支敦士登'
  //     },
  //     {
  //       latLng: [7.11, 171.06],
  //       name  : '马绍尔群岛'
  //     },
  //     {
  //       latLng: [17.3, -62.73],
  //       name  : '圣基茨和尼维斯'
  //     },
  //     {
  //       latLng: [3.2, 73.22],
  //       name  : '马尔代夫'
  //     },
  //     {
  //       latLng: [35.88, 14.5],
  //       name  : '马耳他'
  //     },
  //     {
  //       latLng: [12.05, -61.75],
  //       name  : '格林纳达'
  //     },
  //     {
  //       latLng: [13.16, -61.23],
  //       name  : '圣文森特和格林纳丁斯'
  //     },
  //     {
  //       latLng: [13.16, -59.55],
  //       name  : '巴巴多斯'
  //     },
  //     {
  //       latLng: [17.11, -61.85],
  //       name  : '安提瓜和巴布达'
  //     },
  //     {
  //       latLng: [-4.61, 55.45],
  //       name  : '塞舌尔'
  //     },
  //     {
  //       latLng: [7.35, 134.46],
  //       name  : '帕劳'
  //     },
  //     {
  //       latLng: [42.5, 1.51],
  //       name  : '安道尔'
  //     },
  //     {
  //       latLng: [14.01, -60.98],
  //       name  : '圣卢西亚'
  //     },
  //     {
  //       latLng: [6.91, 158.18],
  //       name  : '密克罗尼西亚联邦'
  //     },
  //     {
  //       latLng: [1.3, 103.8],
  //       name  : '新加坡'
  //     },
  //     {
  //       latLng: [1.46, 173.03],
  //       name  : '基里巴斯'
  //     },
  //     {
  //       latLng: [-21.13, -175.2],
  //       name  : '汤加'
  //     },
  //     {
  //       latLng: [15.3, -61.38],
  //       name  : '多米尼克'
  //     },
  //     {
  //       latLng: [-20.2, 57.5],
  //       name  : '毛里求斯'
  //     },
  //     {
  //       latLng: [26.02, 50.55],
  //       name  : '巴林'
  //     },
  //     {
  //       latLng: [0.33, 6.73],
  //       name  : '圣多美和普林西比'
  //     }
  //   ]
  // })
})

// lgtm [js/unused-local-variable]
