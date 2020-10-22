const navList = {
  status: 200,
  message: 'success',
  data: {
    'onlineMenu': [
      {
        name: 'Dashboard',
        icon: 'iconDashboard',
        path: '/dashboard'
      },
      { name: '监控预警中心',
        icon: 'iconmonititor',
        child: [
          { name: '监控中心', path: '/monitor-cent' },
          { name: '预警规则', path: '/monitor-rule' },
          { name: '模型指标分析', path: '/monitor-summary' },
          { name: '规则集命中分析', path: '/monitor-model' }
        ]
      }, { name: '策略管理',
        icon: 'icononline-strategy',
        child: [
          { name: '策略管理', path: '/monitor-cent' }
        ]
      }, { name: '申请单管理',
        icon: 'iconapplication',
        child: [
          { name: '申请单列表', path: '/monitor-model' }
        ]
      }
    ],
    'offlineMenu': [
      { name: '模型实验室',
        icon: 'iconmodel',
        child: [
          { name: '表现数据分析', path: '/model-mgmt/data-analysis' },
          { name: '特征库', path: '/model-mgmt/feature-list' },
          { name: '数据集', path: '/model-mgmt/data-set' },
          { name: '模型搭建', path: '/model-mgmt/model-build' }
        ]
      }, { name: '规则生成池',
        icon: 'iconrule',
        child: [
          { name: '规则库', path: '/monitor-cent' },
          { name: '规则集', path: '/monitor-summary' },
          { name: '规则字段', path: '/monitor-model' }
        ]
      }, { name: '策略工作台',
        icon: 'iconoffline-strategy',
        child: [
          { name: '策略画布', path: '/monitor-cent' }
        ]
      }, { name: '沙盘模拟仓',
        icon: 'iconsand',
        child: [
          { name: '测试数据集', path: '/monitor-cent' },
          { name: '模拟验证', path: '/monitor-summary' },
          { name: '结果评估', path: '/monitor-model' },
          { name: '结果对比', path: '/monitor-summary' }
        ]
      }, { name: '耗时任务管理',
        icon: 'iconcosuming',
        child: [
          { name: '耗时任务', path: '/monitor-summary' }
        ]
      }
    ]
  }
}
export default {
  url: '/user/nav',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: navList
    }
  }
}
