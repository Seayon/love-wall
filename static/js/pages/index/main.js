global.webpackJsonp([3],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msgAll: {},
      postMsg: {
        nickA: "",
        nameA: "",
        mateA: "0",
        aisAon: "1",
        nameB: "",
        mateB: "1",
        loveContent: "",
        date: new Date().toLocaleDateString(),
        praise: 0,
        guessOk: 0,
        guessAll: 0,
        comment: []
      },
      postMsgBak: {
        nickA: "",
        nameA: "",
        mateA: "0",
        aisAon: "1",
        nameB: "",
        mateB: "1",
        loveContent: "",
        date: new Date().toLocaleDateString(),
        praise: 0,
        guessOk: 0,
        guessAll: 0,
        comment: []
      },
      arrayOk: ["是", "否"],
      array: ["男", "女"],
      controlShow: 0,
      guessOk: 0,
      guessAll: 0,
      guessName: "",
      listComment: "",
      isBannerShow: 0,
      isLoading: 0,
      isGuess: 0,
      isComment: 0,
      headBg: [],
      headUl: [],
      isCheckLi: 0,
      loveAll: [],
      loveNM: [],
      loveSM: [],
      isErr: "",
      isErrShow: 0,
      isUpEnd: false,
      idComment: "",
      postComment: "",
      guessId: ''
    };
  },


  components: {},

  methods: {
    msgShow: function msgShow(data) {
      return this.$http.get("https://love.app.api00.cn/api/" + data);
    },
    goRefresh: function goRefresh() {
      var _this = this;

      this.$http.all([this.msgShow("all"), this.msgShow("anonymous"), this.msgShow("real"), this.msgShow("msgAll")]).then(this.$http.spread(function (a, b, c, d) {
        _this.loveAll = a.data;
        _this.loveNM = b.data;
        _this.loveSM = c.data;
        _this.msgAll = d.data;
        _this.isLoading = 0;
      }));
    },

    showMsgErr: function showMsgErr(data) {
      var _this2 = this;

      this.isErr = data;
      this.isErrShow = 1;
      setTimeout(function () {
        _this2.isErrShow = 0;
      }, 1000);
    },
    goTop: function goTop(e) {
      // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        });
      } else {
        wx.showModal({
          title: "提示",
          content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
      }
    },
    clickLiHandel: function clickLiHandel(data) {
      this.isCheckLi = data;
    },
    showLoveAll: function showLoveAll() {},
    isUp: function isUp(id) {
      var _this3 = this;

      // console.log(id);
      if (this.isUpEnd == false) {
        this.isLoading = 1;
        this.$http.post("https://love.app.api00.cn/api/isUp", { id: id }).then(function (data) {
          if (data.data.err == 0) {
            _this3.goRefresh();
            _this3.isUpEnd = true;
            _this3.showMsgErr("谢谢点赞");
          }
        });
      } else {
        this.showMsgErr("您已点过赞了");
      }
    },
    guessNameHandel: function guessNameHandel(id, ok, all) {
      this.guessOk = ok;
      this.guessAll = all;
      this.guessId = id;
      this.isGuess = 1;
    },
    guessStart: function guessStart() {
      var _this4 = this;

      // console.log(this.guessName);
      this.$http.post('https://love.app.api00.cn/api/guess', { id: this.guessId, nameA: this.guessName }).then(function (data) {
        if (data.data.err == 0) {
          _this4.isGuess = 0;
          _this4.showMsgErr('相似度为' + data.data.msg + '%');
          _this4.guessName = '';
        } else {
          _this4.isGuess = 0;
          _this4.showMsgErr('数据库炸了');
        }
        _this4.goRefresh();
      });
    },
    commentHandel: function commentHandel(id, comment) {
      this.listComment = comment;
      this.isComment = 1;
      // console.log(id)
      this.idComment = id;
      // console.log(this.listComment);
    },
    postComHandel: function postComHandel() {
      var _this5 = this;

      // console.log(this.postComment)
      this.$http.post("https://love.app.api00.cn/api/comment", {
        id: this.idComment,
        comment: this.postComment,
        date: new Date().toLocaleDateString()
      }).then(function (data) {
        if (data.data.err == 0) {
          _this5.showMsgErr(data.data.msg);
          _this5.goRefresh();
        } else {
          _this5.showMsgErr("出错了哦");
        }
        _this5.postComment = "";
        _this5.isComment = 0;
      });
    },
    clearBlack: function clearBlack() {
      this.isGuess = 0;
      this.isComment = 0;
    },
    bindPickerOneChange: function bindPickerOneChange(e) {
      this.postMsg.mateA = e.mp.detail.value;
    },
    bindPickerTwoChange: function bindPickerTwoChange(e) {
      this.postMsg.mateB = e.mp.detail.value;
    },
    bindPickerThrChange: function bindPickerThrChange(e) {
      this.postMsg.aisAon = e.mp.detail.value;
    },
    postMyMsgHandel: function postMyMsgHandel() {
      var _this6 = this;

      this.isLoading = 1;
      this.$http.post("https://love.app.api00.cn/api/postLove", this.postMsg).then(function (data) {
        if (data.data.err == 1) {
          _this6.isLoading = 0;
          _this6.showMsgErr(data.data.msg);
        } else {
          _this6.$http.all([_this6.msgShow("all"), _this6.msgShow("anonymous"), _this6.msgShow("real"), _this6.msgShow("msgAll")]).then(_this6.$http.spread(function (a, b, c, d) {
            _this6.loveAll = a.data;
            _this6.loveNM = b.data;
            _this6.loveSM = c.data;
            _this6.msgAll = d.data;
            _this6.isLoading = 0;
            _this6.postMsg = _this6.postMsgBak;
            _this6.isCheckLi = 0;
            _this6.goTop();
          }));
        }
      });
    }
  },

  created: function created() {
    var _this7 = this;

    this.isLoading = 1;
    this.$http.all([this.msgShow("listBanner"), this.msgShow("ulText"), this.msgShow("all"), this.msgShow("control"), this.msgShow("anonymous"), this.msgShow("real"), this.msgShow("msgAll")]).then(this.$http.spread(function (a, b, c, d, e, f, g) {
      _this7.headBg = a.data;
      _this7.headUl = b.data;
      _this7.loveAll = c.data;
      _this7.controlShow = d.data;
      _this7.loveNM = e.data;
      _this7.loveSM = f.data;
      _this7.msgAll = g.data;
      _this7.isLoading = 0;
      setInterval(function () {
        if (_this7.isBannerShow < _this7.headBg.length - 1) {
          _this7.isBannerShow++;
        } else {
          _this7.isBannerShow = 0;
        }
      }, 3000);
    }));
  }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-banner"
  }, _vm._l((_vm.headBg), function(x, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isBannerShow == index),
        expression: "isBannerShow==index"
      }],
      key: index,
      style: ({
        backgroundImage: 'url(' + x.src + ')'
      })
    })
  })), _vm._v(" "), _c('ul', {
    staticClass: "header-ul"
  }, _vm._l((_vm.headUl), function(x, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.isCheckLi == index
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickLiHandel(index)
        }
      }
    }, [_vm._v(_vm._s(x.src))])
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "main"
  }, [_c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCheckLi == 0),
      expression: "isCheckLi==0"
    }],
    staticClass: "main-all"
  }, _vm._l((_vm.loveAll), function(x, index) {
    return _c('div', {
      key: index,
      staticClass: "main-cell"
    }, [_c('section', [(x.aisAon == 0) ? _c('div', {
      class: {
        boy: x.mateA == 0, girl: x.mateA == 1
      }
    }, [_vm._v(_vm._s(x.nickA))]) : _c('div', {
      class: {
        boy: x.mateA == 0, girl: x.mateA == 1
      }
    }, [_vm._v(_vm._s(x.nameA))]), _vm._v(" "), _c('div'), _vm._v(" "), _c('div', {
      class: {
        boy: x.mateB == 0, girl: x.mateB == 1
      }
    }, [_vm._v(_vm._s(x.nameB))])]), _vm._v(" "), _c('section', [_vm._v("\n          " + _vm._s(x.loveContent) + "\n          "), _c('small', {
      staticClass: "main-cell-date"
    }, [_vm._v(_vm._s(x.date))])], 1), _vm._v(" "), _c('section', [_c('div', {
      staticClass: "fa fa-heart-o",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.isUp(x._id)
        }
      }
    }, [_vm._v(" " + _vm._s(x.praise))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-paper-plane-o",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.guessNameHandel(x._id, x.guessOk, x.guessAll)
        }
      }
    }, [_vm._v(" " + _vm._s(x.guessOk) + "/" + _vm._s(x.guessAll))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-comment-o",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.commentHandel(x._id, x.comment)
        }
      }
    }, [_vm._v(" " + _vm._s(x.comment.length))])])], 1)
  })), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCheckLi == 1),
      expression: "isCheckLi==1"
    }],
    staticClass: "main-all"
  }, _vm._l((_vm.loveNM), function(x, index) {
    return _c('div', {
      key: index,
      staticClass: "main-cell"
    }, [_c('section', [_c('div', {
      staticClass: "anonymity"
    }, [_vm._v(_vm._s(x.nickA))]), _vm._v(" "), _c('div'), _vm._v(" "), _c('div', {
      staticClass: "anonymity"
    }, [_vm._v(_vm._s(x.nameB))])]), _vm._v(" "), _c('section', [_vm._v("\n          " + _vm._s(x.loveContent) + "\n          "), _c('small', {
      staticClass: "main-cell-date"
    }, [_vm._v(_vm._s(x.date))])], 1), _vm._v(" "), _c('section', [_c('div', {
      staticClass: "fa fa-heart-o",
      attrs: {
        "eventid": '4-' + index
      },
      on: {
        "click": function($event) {
          _vm.isUp(x._id)
        }
      }
    }, [_vm._v(" " + _vm._s(x.praise))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-paper-plane-o",
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.guessNameHandel(x._id, x.guessOk, x.guessAll)
        }
      }
    }, [_vm._v(" " + _vm._s(x.guessOk) + "/" + _vm._s(x.guessAll))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-comment-o",
      attrs: {
        "eventid": '6-' + index
      },
      on: {
        "click": function($event) {
          _vm.commentHandel(x._id, x.comment)
        }
      }
    }, [_vm._v(" " + _vm._s(x.comment.length))])])], 1)
  })), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCheckLi == 2),
      expression: "isCheckLi==2"
    }],
    staticClass: "main-all"
  }, _vm._l((_vm.loveSM), function(x, index) {
    return _c('div', {
      key: index,
      staticClass: "main-cell"
    }, [_c('section', [_c('div', {
      class: {
        boy: x.mateA == 0, girl: x.mateA == 1
      }
    }, [_vm._v(_vm._s(x.nameA))]), _vm._v(" "), _c('div'), _vm._v(" "), _c('div', {
      class: {
        boy: x.mateB == 0, girl: x.mateB == 1
      }
    }, [_vm._v(_vm._s(x.nameB))])]), _vm._v(" "), _c('section', [_vm._v("\n          " + _vm._s(x.loveContent) + "\n          "), _c('small', {
      staticClass: "main-cell-date"
    }, [_vm._v(_vm._s(x.date))])], 1), _vm._v(" "), _c('section', [_c('div', {
      staticClass: "fa fa-heart-o",
      attrs: {
        "eventid": '7-' + index
      },
      on: {
        "click": function($event) {
          _vm.isUp(x._id)
        }
      }
    }, [_vm._v(" " + _vm._s(x.praise))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-paper-plane-o",
      attrs: {
        "eventid": '8-' + index
      },
      on: {
        "click": function($event) {
          _vm.guessNameHandel(x._id, x.guessOk, x.guessAll)
        }
      }
    }, [_vm._v(" " + _vm._s(x.guessOk) + "/" + _vm._s(x.guessAll))]), _vm._v(" "), _c('div', {
      staticClass: "fa fa-comment-o",
      attrs: {
        "eventid": '9-' + index
      },
      on: {
        "click": function($event) {
          _vm.commentHandel(x._id, x.comment)
        }
      }
    }, [_vm._v(" " + _vm._s(x.comment.length))])])], 1)
  })), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCheckLi == 3),
      expression: "isCheckLi==3"
    }]
  }, [_c('div', [_c('section', {
    staticClass: "com-cell com-cell-boy"
  }, [_c('label', {
    staticClass: "com-cell-label com-cell-label-boy"
  }, [_vm._v(_vm._s(_vm.msgAll.titleA))]), _vm._v(" "), _c('p', {
    staticClass: "nick-a"
  }, [_vm._v(_vm._s(_vm.msgAll.nickA) + ":")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postMsg.nickA),
      expression: "postMsg.nickA"
    }],
    staticClass: "nick-input-b",
    attrs: {
      "type": "text",
      "placeholder": _vm.msgAll.nickAP,
      "eventid": '10'
    },
    domProps: {
      "value": (_vm.postMsg.nickA)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postMsg.nickA = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name-a"
  }, [_vm._v(_vm._s(_vm.msgAll.nameA) + ":")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postMsg.nameA),
      expression: "postMsg.nameA"
    }],
    staticClass: "nick-input-b",
    attrs: {
      "type": "text",
      "placeholder": _vm.msgAll.nameAP,
      "eventid": '11'
    },
    domProps: {
      "value": (_vm.postMsg.nameA)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postMsg.nameA = $event.target.value
      }
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.postMsg.mateA,
      "range": _vm.arrayOk,
      "eventid": '12'
    },
    on: {
      "change": _vm.bindPickerThrChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.msgAll.aisAon) + "：" + _vm._s(_vm.arrayOk[_vm.postMsg.aisAon]) + "\n            ")])]), _vm._v(" "), _c('small', {
    staticClass: "nick-sm"
  }, [_vm._v(_vm._s(_vm.msgAll.look))]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.postMsg.aisAon,
      "range": _vm.array,
      "eventid": '13'
    },
    on: {
      "change": _vm.bindPickerOneChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.msgAll.mateA) + "：" + _vm._s(_vm.array[_vm.postMsg.mateA]) + "\n            ")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "com-cell com-cell-girl"
  }, [_c('label', {
    staticClass: "com-cell-label com-cell-label-girl"
  }, [_vm._v(_vm._s(_vm.msgAll.titleB))]), _vm._v(" "), _c('p', {
    staticClass: "name-b"
  }, [_vm._v(_vm._s(_vm.msgAll.nameB) + ":")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postMsg.nameB),
      expression: "postMsg.nameB"
    }],
    staticClass: "nick-input-g",
    attrs: {
      "type": "text",
      "placeholder": _vm.msgAll.nameBP,
      "eventid": '14'
    },
    domProps: {
      "value": (_vm.postMsg.nameB)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postMsg.nameB = $event.target.value
      }
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.postMsg.mateB,
      "range": _vm.array,
      "eventid": '15'
    },
    on: {
      "change": _vm.bindPickerTwoChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n              " + _vm._s(_vm.msgAll.mateB) + "：" + _vm._s(_vm.array[_vm.postMsg.mateB]) + "\n            ")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "com-cell com-cell-black"
  }, [_c('label', {
    staticClass: "com-cell-label com-cell-label-black"
  }, [_vm._v(_vm._s(_vm.msgAll.titleC))]), _vm._v(" "), _c('div', {
    staticClass: "com-div"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postMsg.loveContent),
      expression: "postMsg.loveContent"
    }],
    staticClass: "com-text",
    attrs: {
      "name": "love",
      "id": "",
      "cols": "30",
      "rows": "10",
      "eventid": '16'
    },
    domProps: {
      "value": (_vm.postMsg.loveContent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postMsg.loveContent = $event.target.value
      }
    }
  })])], 1), _vm._v(" "), _c('button', {
    staticClass: "com-button",
    attrs: {
      "eventid": '17'
    },
    on: {
      "click": function($event) {
        _vm.postMyMsgHandel()
      }
    }
  }, [_vm._v(_vm._s(_vm.msgAll.post))])], 1)])], 1), _vm._v(" "), _c('section', {
    staticClass: "footer"
  }, [_c('footer', {
    staticClass: "footer"
  }, [_vm._v("© " + _vm._s(_vm.msgAll.footer) + " 版权所有")])], 1), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading == 1),
      expression: "isLoading == 1"
    }],
    staticClass: "loading"
  }), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isErrShow == 1),
      expression: "isErrShow == 1"
    }],
    staticClass: "error"
  }, [_vm._v("\n    " + _vm._s(_vm.isErr) + "\n  ")]), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isGuess == 1 || _vm.isComment == 1),
      expression: "isGuess==1 || isComment==1"
    }],
    staticClass: "black",
    attrs: {
      "eventid": '18'
    },
    on: {
      "click": function($event) {
        _vm.clearBlack()
      }
    }
  }), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isGuess == 1),
      expression: "isGuess==1"
    }],
    staticClass: "guess"
  }, [_c('h3', {
    staticClass: "guess-title"
  }, [_vm._v("猜一猜")]), _vm._v(" "), _c('h5', {
    staticClass: "guess-small"
  }, [_vm._v("已猜中" + _vm._s(_vm.guessOk) + "次，被猜" + _vm._s(_vm.guessAll) + "次")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.guessName),
      expression: "guessName"
    }],
    staticClass: "guess-input",
    attrs: {
      "type": "text",
      "placeholder": "猜一猜发起者的名字",
      "eventid": '19'
    },
    domProps: {
      "value": (_vm.guessName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.guessName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "guess-button",
    attrs: {
      "eventid": '20'
    },
    on: {
      "click": function($event) {
        _vm.guessStart()
      }
    }
  }, [_vm._v("开始猜测")])], 1), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isComment == 1),
      expression: "isComment==1"
    }],
    staticClass: "comment"
  }, [_c('h3', {
    staticClass: "comment-title"
  }, [_vm._v("评论")]), _vm._v(" "), _c('div', _vm._l((_vm.listComment), function(x, index) {
    return _c('p', {
      key: index,
      staticClass: "comment-p"
    }, [_c('span', [_vm._v("第" + _vm._s(index + 1) + "楼:")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(x.content))])])
  })), _vm._v(" "), _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listComment.length < 10),
      expression: "listComment.length<10"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.postComment),
      expression: "postComment"
    }],
    staticClass: "comment-input",
    attrs: {
      "type": "text",
      "placeholder": "我也要评论",
      "eventid": '21'
    },
    domProps: {
      "value": (_vm.postComment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postComment = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listComment.length >= 10),
      expression: "listComment.length>=10"
    }],
    staticClass: "comment-input",
    attrs: {
      "type": "text",
      "value": "评论已关闭",
      "disabled": "disabled"
    }
  }), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listComment.length < 10),
      expression: "listComment.length<10"
    }],
    staticClass: "comment-button",
    attrs: {
      "eventid": '22'
    },
    on: {
      "click": function($event) {
        _vm.postComHandel()
      }
    }
  }, [_vm._v("开始评论")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listComment.length >= 10),
      expression: "listComment.length>=10"
    }],
    staticClass: "comment-button",
    attrs: {
      "eventid": '23'
    },
    on: {
      "click": function($event) {
        _vm.isComment = 0
      }
    }
  }, [_vm._v("评论已关闭")])], 1), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controlShow == 1),
      expression: "controlShow==1"
    }],
    staticClass: "control"
  }, [_c('p', [_vm._v("我生君未生，君生我已老。")]), _vm._v(" "), _c('p', [_vm._v("我恨君生迟，君叹我生早。")]), _vm._v(" "), _c('p', [_vm._v("若得生同时，誓拟与君好。")]), _vm._v(" "), _c('p', [_vm._v("年岁不可更，怅惘知多少。")]), _vm._v(" "), _c('p', [_vm._v("咫尺似天涯，寸心难相表。")]), _vm._v(" "), _c('p', [_vm._v("我生君未生，君生我已老。")]), _vm._v(" "), _c('p', [_vm._v("来世愿同生，永作比翼鸟。")]), _vm._v(" "), _c('p', [_vm._v("和鸣相伴飞，天涯复海角。")]), _vm._v(" "), _c('p', [_vm._v("有日老难飞，互抱栖树杪。")]), _vm._v(" "), _c('p', [_vm._v("老死化树藤，情根亦缠绕。")])], 1), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading == 1),
      expression: "isLoading == 1"
    }]
  }, [_c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "circle-loader"
  }, [_c('div', {
    staticClass: "circle-line"
  }, [_c('div', {
    staticClass: "circle circle-blue"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-blue"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-blue"
  })]), _vm._v(" "), _c('div', {
    staticClass: "circle-line"
  }, [_c('div', {
    staticClass: "circle circle-yellow"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-yellow"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-yellow"
  })]), _vm._v(" "), _c('div', {
    staticClass: "circle-line"
  }, [_c('div', {
    staticClass: "circle circle-red"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-red"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-red"
  })]), _vm._v(" "), _c('div', {
    staticClass: "circle-line"
  }, [_c('div', {
    staticClass: "circle circle-green"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-green"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle circle-green"
  })])])])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f2ac961", esExports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f2ac961_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f2ac961"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0f2ac961_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f2ac961", Component.options)
  } else {
    hotAPI.reload("data-v-0f2ac961", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[11]);
//# sourceMappingURL=main.js.map