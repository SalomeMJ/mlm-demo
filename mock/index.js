import Mock from 'mockjs'
import { param2Obj } from '../src/utils'

import user from './user'
import activation from './activation'
import role from './role'
import nav from './nav/index.js'
import modelStability from './model-stability/index.js'
import modelRule from './model-stability/model-rule.js'
import modelCen from './model-stability/model-cen.js'
import modelApproval from './model-stability/model-approval.js'
import modelLoan from './model-stability/model-loan.js'
import modelStrategy from './model-stability/model-strategy.js'
import scoreOverview from './model-stability/score-overview.js'
import featureAnalysis from './model-stability/feature-analysis.js'
import approvalResult from './model-stability/approval-result.js'
import modelResult from './model-stability/model-result.js'
import ruleAnalysis from './model-stability/rule-analysis.js'
import article from './article'
import search from './remote-search'
// import personalReport from './model/personal-report/personal-report'
// import model from './model'
// import trainReport from './model/train-report/train-report.js'

const mocks = [
  ...user,
  ...activation,
  ...role,
  nav,
  modelStability,
  modelRule,
  modelCen,
  modelApproval,
  modelLoan,
  modelStrategy,
  scoreOverview,
  featureAnalysis,
  approvalResult,
  modelResult,
  ruleAnalysis,
  ...article,
  ...search,
  ...search
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

export default mocks
