webpackJsonp([2],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var vue_1 = __webpack_require__(1);
var vuex_1 = __webpack_require__(22);
var api_1 = __webpack_require__(17);
vue_1.default.use(vuex_1.default);
var store = new vuex_1.default.Store({
    state: {
        count: 0,
        content: ''
    },
    mutations: {
        'add': function (state) {
            state.count++;
        },
        'updateContent': function (state, payload) {
            state.content = payload.content;
        }
    },
    getters: {
        'doubleCount': function (state) {
            return state.count * 2;
        }
    },
    actions: {
        'getContent': function (_a, payload) {
            var commit = _a.commit;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var res;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, api_1.default.getPackage(payload)];
                        case 1:
                            res = _b.sent();
                            if (res instanceof Error) {
                                return [2 /*return*/, Promise.reject(res)];
                            }
                            commit('updateContent', {
                                content: res.content
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
    }
});
exports.default = store;


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(23);
var axios_1 = __webpack_require__(6);
exports.default = {
    getPackage: function () {
        return http_1.default.get('/post/1', {}, 'https://jsonplaceholder.typicode.com');
    },
    http: http_1.default,
    axios: axios_1.default
};


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__(1);
var store_1 = __webpack_require__(16);
var App_vue_1 = __webpack_require__(47);
var router_1 = __webpack_require__(50);
var svgicon = __webpack_require__(14);
__webpack_require__(53);
// import all icons
__webpack_require__(54);
vue_1.default.use(svgicon, {
    tagName: 'icon'
});
new vue_1.default({
    el: '#app',
    store: store_1.default,
    router: router_1.default,
    render: function (h) { return h(App_vue_1.default); }
});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(4);
var axios_1 = __webpack_require__(6);
var qs = __webpack_require__(42);
var env_1 = __webpack_require__(45);
var HTTPERROR;
(function (HTTPERROR) {
    HTTPERROR[HTTPERROR["LOGICERROR"] = 0] = "LOGICERROR";
    HTTPERROR[HTTPERROR["TIMEOUTERROR"] = 1] = "TIMEOUTERROR";
    HTTPERROR[HTTPERROR["NETWORKERROR"] = 2] = "NETWORKERROR";
})(HTTPERROR || (HTTPERROR = {}));
var DEFAULTCONFIG = {
    baseURL: env_1.default.baseURL
};
var isSuccess = function (res) { return res.code !== undefined && res.code !== null && Number(res.code) === 1; };
var resFormat = function (res) { return res.data || {}; };
var http = {};
var methods = ['get', 'post', 'put', 'delete'];
methods.forEach(function (v) {
    http[v] = function (url, data, baseUrl) {
        var axiosConfig = {
            method: v,
            url: url,
            baseURL: baseUrl || DEFAULTCONFIG.baseURL
        };
        var instance = axios_1.default.create(DEFAULTCONFIG);
        // Add a request interceptor
        instance.interceptors.request.use(function (cfg) {
            var ts = Date.now() / 1000;
            var queryData = {
                ts: ts
            };
            // cfg.url += `&${qs.stringify(queryData)}`
            cfg.params = tslib_1.__assign({}, cfg.params, queryData);
            // if (cfg.url.indexOf('http://rap') !== 0) cfg.url += typeof window === 'undefined' ? `&token=${ctx.req.session.staffInfo.token}` : `&token=${cookie().getItem('token')}`;
            return cfg;
        }, function (error) { return Promise.reject(error); });
        // Add a response interceptor
        instance.interceptors.response.use(function (response) {
            if (!isSuccess(response.data)) {
                var _err = {
                    msg: response.data.msg,
                    code: response.data.code,
                    type: HTTPERROR[HTTPERROR.LOGICERROR],
                    config: response.config
                };
                // cbLogicError && cbLogicError.call(null, _err);
                return Promise.reject(_err);
            }
            return resFormat(response.data);
        }, function (error) {
            var _err = {
                msg: error.message || '网络故障',
                type: /^timeout of/.test(error.message) ? HTTPERROR[HTTPERROR.TIMEOUTERROR] : HTTPERROR[HTTPERROR.NETWORKERROR],
                config: error.config
            };
            // cbNetworkError && cbNetworkError.call(null, _err);
            return Promise.reject(_err);
        });
        if (v === 'get') {
            axiosConfig.params = data;
        }
        else if (data instanceof FormData) {
            axiosConfig.data = data;
        }
        else {
            axiosConfig.data = qs.stringify(data);
        }
        axiosConfig.startTime = new Date();
        return instance.request(axiosConfig).then(function (res) { return res; }).catch(function (err) { return Promise.reject({
            err: err,
            stack: err.msg || err.stack || ''
        }); });
    };
});
exports.default = http;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dev_1 = __webpack_require__(46);
dev_1.default.env = 'qa';
exports.default = dev_1.default;


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    env: 'dev',
    baseURL: '',
};


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  data () {
    return {
      transitionName: 'slide-left',
      isPlay: true
    }
  },

  methods: {
    playAudio() {
      const audio =document.querySelector('#bgm_audio');
      this.isPlay = !this.isPlay;

      if(this.isPlay) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5eba3612","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"bgm-btn",class:{play: _vm.isPlay},on:{"click":_vm.playAudio}}),_vm._v(" "),_c('audio',{staticStyle:{"display":"none","width":"0","height":"0"},attrs:{"id":"bgm_audio","src":"http://jiangsu.sinaimg.cn/zt/s/yxqxwspds/mobile/bgmcut.mp3","autoplay":"autoplay","loop":""}}),_vm._v(" "),_c('transition',{attrs:{"name":"fadeIn","enter-active-class":"fadeInUp","leave-active-class":"fadeOutUp"}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__(1);
var vue_router_1 = __webpack_require__(51);
// routes
var home_1 = __webpack_require__(52);
vue_1.default.use(vue_router_1.default);
var routes = [];
exports.default = new vue_router_1.default({
    routes: routes
        .concat(home_1.default)
});


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * home module router
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getView(viewName) {
    return function (resolve, reject) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            var map = {
                'loading': __webpack_require__(58),
                'home': __webpack_require__(18),
                'myLoveLetter': __webpack_require__(59),
                'write': __webpack_require__(60),
                'sendOut': __webpack_require__(61),
                'watchMovie': __webpack_require__(62),
                'defaultView': __webpack_require__(18)
            };
            resolve(map[viewName]);
        }).bind(null, __webpack_require__)).catch(reject);
    };
}
var routes = [
    {
        name: '/',
        path: '/',
        redirect: '/loading'
    },
    {
        name: 'loading',
        path: '/loading'
    },
    {
        name: 'home',
        path: '/home'
    },
    {
        name: 'myLoveLetter',
        path: '/myLoveLetter'
    },
    {
        name: 'write',
        path: '/write'
    },
    {
        name: 'sendOut',
        path: '/sendOut'
    },
    {
        name: 'watchMovie',
        path: '/watchMovie'
    },
    {
        name: 'defaultView',
        path: '*'
    }
    // {
    //   name: 'todo',
    //   path: '/todo/:filter?'
    // },
    // {
    //   name: 'scoped',
    //   path: '/scoped'
    // }
];
routes.forEach(function (v) {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name);
    }
});
exports.default = routes;


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var icon = __webpack_require__(14)
icon.register({
  'vue': {
    width: 400,
    height: 400,
    viewBox: '0 0 400 400',
    data: '<path pid="0" d="M237.417 86.655l-30.226 52.352-30.225-52.352H76.311l130.88 226.69 130.88-226.69z"/><path pid="1" d="M237.417 86.655l-30.226 52.352-30.225-52.352h-48.303l78.528 136.014L285.72 86.655z"/>'
  }
})


/***/ })

},[19]);