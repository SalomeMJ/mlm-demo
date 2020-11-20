import Mock from 'mockjs'
import { param2Obj } from '../src/utils'

import user from './user'
// import activation from './activation'
import role from './role'
import nav from './nav/index.js'
import projectLibrary from './project-library/index'
import projectDetail from './project-library/detail'
import assetPool from './model-asset/asset-pool'
import developRecord from './project-library/model-record/develop-record'
import usingRecord from './project-library/model-record/using-record'
import valitationRecord from './project-library/model-record/validation-record'
import validationData from './project-library/validation-data/validation-data'
import validationDetail from './project-library/validation-data/validation-detail'
import validationScore from './project-library/validation-data/validation-score'
import modelResult from './project-library/validation-data/model-result'
import approvalMatch from './project-library/validation-data/approval-match'
import scoreOverview from './project-library/validation-data/score-overview'
import featureAnalysis from './project-library/validation-data/feature-analysis'
import featureImportance from './project-library/validation-data/feature-importance'
import cutoffbad from './project-library/validation-data/cutoff-bad'
import cutoffgood from './project-library/validation-data/cutoff-good'
import dataSample from './project-library/validation-data/data-sample'
import datasetDetail from './project-library/validation-data/detaset-detail'
import modelDetail from './project-library/validation-data/model-detail'
import univariate from './project-library/validation-data/univariate'
import usingData from './project-library/using-event/using-event'
import eventWarningRule from './project-library/using-event/warning-rule'
import eventSituation from './project-library/using-event/event-situation'
import warningRule from './project-library/warning-rule/warning-rule'
import warningRuledetail from './project-library/warning-rule/warning-ruledetail'
import touchRecord from './project-library/warning-rule/touch-record'
import operation from './project-library/warning-rule/operation'
import nuclearList from './nuclearsign-center/nuclear-list'
import modelStrategy from './model-market/model-strategy'
import approvalResult from './model-market/approval-result'
import workflow from './project-library/project-configuration/workflow'
import approvalflow from './project-library/project-configuration/approvalflow'
import modelRegister from './project-library/project-configuration/model-register'
import projectField from './project-library/project-configuration/project-field'
import users from './system/user'
import article from './article'
import search from './remote-search'

const mocks = [
  ...user,
  // ...activation,
  ...role,
  nav,
  projectLibrary,
  projectDetail,
  assetPool,
  developRecord,
  usingRecord,
  valitationRecord,
  validationData,
  validationDetail,
  validationScore,
  modelResult,
  approvalMatch,
  scoreOverview,
  featureAnalysis,
  featureImportance,
  cutoffbad,
  cutoffgood,
  dataSample,
  datasetDetail,
  modelDetail,
  univariate,
  usingData,
  eventWarningRule,
  eventSituation,
  warningRule,
  warningRuledetail,
  touchRecord,
  operation,
  nuclearList,
  modelStrategy,
  approvalResult,
  workflow,
  approvalflow,
  modelRegister,
  projectField,
  users,
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
          body: JSON.parse(JSON.stringify(body)),
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
