"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  'use strict';

  var data = [{
    'titlenum': '01',
    'titlename': '好科學最懂大腦',
    'content': '比你大腦還懂你的「互動式單字記憶系統」，透過A.I.人工智慧，擺脫背了又忘、忘了再背的痛苦輪迴。',
    'imagesrc': './img/Solution_img_1.gif'
  }, {
    'titlenum': '02',
    'titlename': '好深入記憶期長',
    'content': '根據德國心理學家艾賓浩斯研究，「互動式單字記憶系統」獨家設計出「預習→複習→再複習」的循環學習步驟，只要按著步驟一步一步做，就能減緩記憶遺忘的速度，不再看過就忘，讓你把單字記得長長久久。',
    'imagesrc': './img/Solution_img_2.png'
  }, {
    'titlenum': '03',
    'titlename': '好有效絕對記住',
    'content': '背單字最怕背不下去、背了又忘，「互動式單字記憶系統」是最瞭解你大腦的學習系統，不僅結合「教育心理學」及「測驗心理學」，以最符合大腦慣性的方式反覆複習，讓你記得住、看得下去、背得起來。',
    'imagesrc': './img/Solution_img_3.gif'
  }, {
    'titlenum': '04',
    'titlename': '好紀錄個人分析',
    'content': '人是從失敗中學習的動物，透過「個人分析」能隨時進行自我檢測，當然就能提升學習成效。',
    'imagesrc': './img/Solution_img_4.gif'
  }, {
    'titlenum': '05',
    'titlename': '好自由自建單字',
    'content': '製作專屬的單字列表，搭配內建錄音功能連聲音都為自己量身訂做，強化記憶的就靠這，別以為不是書就不能隨手做筆記。每個單字都可立即做「數位筆記」，事半功倍，效果加倍。',
    'imagesrc': './img/Solution_img_5.png'
  }, {
    'titlenum': '06',
    'titlename': '好豐富多種考試',
    'content': '針對不同考試的單字隨點隨聽，一機在手掌絕對是準備考試高分的關鍵，單字懂得愈多，考高分機會就愈高。',
    'imagesrc': './img/Solution_img_6.png'
  }, {
    'titlenum': '07',
    'titlename': '好入手免費下載',
    'content': '只要一個動作就能就能輕鬆擁有最懂大腦的「最懂大腦的，互動式單字記憶系統」，這次絕對讓你記起來。',
    'imagesrc': './img/Solution_img_7.png'
  }, {
    'titlenum': '08',
    'titlename': '好方便離線可用',
    'content': '離線也可使用，不用再拿著厚重單字書邊看邊聽音檔，背單字不再被時間地點所限制，走哪背到哪。',
    'imagesrc': './img/Solution_img_8.png'
  }];

  var SolutionIntroItem = /*#__PURE__*/function (_React$Component) {
    _inherits(SolutionIntroItem, _React$Component);

    var _super = _createSuper(SolutionIntroItem);

    function SolutionIntroItem(props) {
      var _this;

      _classCallCheck(this, SolutionIntroItem);

      _this = _super.call(this, props);
      _this.state = {
        num: 0,
        mode: [true, false, false, false, false, false, false, false]
      };
      return _this;
    }

    _createClass(SolutionIntroItem, [{
      key: "contentdetect",
      value: function contentdetect(e) {
        var newarray = [false, false, false, false, false, false, false, false];
        newarray[e] = true;
        this.setState(function (state) {
          return {
            num: e,
            mode: newarray
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement("div", {
          className: "solutionintrobox"
        }, /*#__PURE__*/React.createElement("div", {
          className: "solutionintro"
        }, /*#__PURE__*/React.createElement("span", {
          className: "solutionintrotitle_en"
        }, data[this.state.num].titlenum), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement("span", {
          className: "solutionintrotitle"
        }, data[this.state.num].titlename), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("img", {
          src: data[this.state.num].imagesrc
        }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
          className: "solutionintrotext"
        }, /*#__PURE__*/React.createElement("span", null, data[this.state.num].content))), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtnbox"
        }, /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay1"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[0] ? './img/Solution_bt_1_h.png' : './img/Solution_bt_1.png',
          onClick: function onClick() {
            return _this2.contentdetect(0);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay2"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[1] ? './img/Solution_bt_2_h.png' : './img/Solution_bt_2.png',
          onClick: function onClick() {
            return _this2.contentdetect(1);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay3"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[2] ? './img/Solution_bt_3_h.png' : './img/Solution_bt_3.png',
          onClick: function onClick() {
            return _this2.contentdetect(2);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay4"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[3] ? './img/Solution_bt_4_h.png' : './img/Solution_bt_4.png',
          onClick: function onClick() {
            return _this2.contentdetect(3);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay5"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[4] ? './img/Solution_bt_5_h.png' : './img/Solution_bt_5.png',
          onClick: function onClick() {
            return _this2.contentdetect(4);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay6"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[5] ? './img/Solution_bt_6_h.png' : './img/Solution_bt_6.png',
          onClick: function onClick() {
            return _this2.contentdetect(5);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay7"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[6] ? './img/Solution_bt_7_h.png' : './img/Solution_bt_7.png',
          onClick: function onClick() {
            return _this2.contentdetect(6);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "solutionbtn animdelay8"
        }, /*#__PURE__*/React.createElement("img", {
          src: this.state.mode[7] ? './img/Solution_bt_8_h.png' : './img/Solution_bt_8.png',
          onClick: function onClick() {
            return _this2.contentdetect(7);
          }
        }))));
      }
    }]);

    return SolutionIntroItem;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement("div", {
    className: "solutionbg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "solutionbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "solutionanim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "firsttitle"
  }, "\u89E3\u6C7A\u5B78\u7FD2\u8DEF\u4E0A\u7684"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "sectitle"
  }, "\u7591\u96E3\u96DC\u75C7"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("img", {
    className: "solutiondecimg",
    src: "./img/Solution_1.png"
  }), /*#__PURE__*/React.createElement(SolutionIntroItem, null))), document.getElementById('solution'));
})();