"use strict";

(function () {
  'use strict';

  function scrolltodiv(e) {
    $('html,body').animate({
      scrollTop: $(e).offset().top
    }, 0);
  }

  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "functionbgbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functionbg"
  }), /*#__PURE__*/React.createElement("img", {
    class: "functionbgimg",
    src: "./img/Function_bg.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "functitlebox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "functitleanim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sectitle"
  }, "\u4E09\u5927\u529F\u80FD\u4EFB\u4F60\u9078"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "firsttitle funcfirsttitle"
  }, "\u9078\u64C7\u6700\u9069\u5408\u81EA\u5DF1\u7684\u5B78\u7FD2\u5229\u5668"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "funcbtnbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "funcbtn animdelay2",
    onClick: function onClick() {
      return scrolltodiv('#funcintro1');
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u9593\u9694\u6E2C\u9A57\u5B78\u7FD2\u6CD5")), /*#__PURE__*/React.createElement("div", {
    className: "funcbtn animdelay5",
    onClick: function onClick() {
      return scrolltodiv('#funcintro2');
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u5716\u50CF\u5F0F\u5B78\u7FD2\u6CD5")), /*#__PURE__*/React.createElement("div", {
    className: "funcbtn animdelay8",
    onClick: function onClick() {
      return scrolltodiv('#funcintro3');
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u5206\u6563\u5B78\u7FD2\u6CD5"))), /*#__PURE__*/React.createElement("div", {
    id: "funcintro1",
    className: "funcintrobox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "funcintroimg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./img/Function_phone_1.gif"
  })), /*#__PURE__*/React.createElement("div", {
    className: "funcintroitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "funcintrotitle funcintrotitle_h"
  }, "\u9593\u9694\u6E2C\u9A57\u5B78\u7FD2\u6CD5"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "funcintrosectitle funcintrosectitle_h"
  }, "\u4E92\u52D5\u5F0F\u55AE\u5B57\u8868"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "funcintrcontent"
  }, /*#__PURE__*/React.createElement("span", null, "\u300C\u4E2D\u82F1\u6587\u4E92\u52D5\u5F0F\u5B57\u8868\u300D\u53EF\u540C\u6642\u986F\u793A\u4E2D\u82F1\u6587\uFF0C\u4E5F\u53EF\u53EA\u986F\u793A\u4E2D\u6587\u6216\u82F1\u6587\uFF0C\u65B9\u4FBF\u8B80\u8005\u908A\u80CC\u55AE\u5B57\u908A\u81EA\u6211\u6AA2\u6E2C\u3002\u518D\u4E5F\u4E0D\u7528\u50CF\u50B3\u7D71\u55AE\u5B57\u66F8\u9084\u8981\u7528\u624B\u6216\u906E\u8272\u7247\u4F86\u906E\u906E\u63A9\u63A9\u3002"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u300C\u4E2D\u82F1\u6587\u4E92\u52D5\u5F0F\u5B57\u8868\u300D\u662F\u5229\u7528\u8996\u89BA\u66AB\u7559\u7684\u539F\u7406\uFF0C\u5C31\u50CF\u5C07\u55AE\u5B57\u523B\u5728\u8996\u7DB2\u819C\u4E0A\uFF0C\u4E26\u7531\u8996\u795E\u7D93\u8F38\u5165\u5927\u8166\u7684\u9577\u671F\u8A18\u8A18\u61B6\u5340\uFF0C\u60F3\u5FD8\u90FD\u5FD8\u4E0D\u6389\u3002"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u4EBA\u662F\u5F9E\u5931\u6557\u4E2D\u5B78\u7FD2\u7684\u52D5\u7269\uFF0C\u800C\u300C\u4E2D\u82F1\u6587\u4E92\u52D5\u5F0F\u5B57\u8868\u300D\u80FD\u96A8\u6642\u9032\u884C\u81EA\u6211\u6AA2\u6E2C\uFF0C\u7576\u7136\u5C31\u80FD\u63D0\u5347\u5B78\u7FD2\u6210\u6548\u3002")))), /*#__PURE__*/React.createElement("div", {
    id: "funcintro2",
    className: "funcintrobox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "funcintroimg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./img/Function_phone_2.gif"
  })), /*#__PURE__*/React.createElement("div", {
    className: "funcintroitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "funcintrotitle"
  }, "\u5716\u50CF\u5F0F\u5B78\u7FD2\u6CD5"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "funcintrosectitle"
  }, "\u6ED1\u5B57\u5361\u80CC\u55AE\u5B57"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "funcintrcontent"
  }, /*#__PURE__*/React.createElement("span", null, "\u300C\u6ED1\u5B57\u5361\u80CC\u55AE\u5B57\u300D\u662F\u5229\u7528\u624B\u6307\u5DE6\u53F3\u8F15\u8F15\u6ED1\u52D5\uFF0C\u8B93\u89F8\u89BA\u523A\u6FC0\u76AE\u8CEA\u5C64\u5728\u95DC\u9375\u5B78\u7FD2\u9EDE\u89F8\u767C\uFF0C\u5354\u52A9\u5927\u8166\u904B\u884C\u908F\u8F2F\u7D44\u584A\uFF0C\u6709\u6548\u7387\u5EFA\u7ACB\u8A8D\u77E5\uFF01"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u5DE6\u6ED1\u53F3\u6ED1\u7684\u5C0F\u52D5\u4F5C\u537B\u80FD\u540C\u6642\u555F\u52D5\u5DE6\u53F3\u8166\u908F\u8F2F\u601D\u8003\u53CA\u8A18\u61B6\u7D30\u80DE\uFF0C\u5F37\u70C8\u8996\u89BA\u5F9E\u53F3\u8166\u8F38\u5165\uFF0C\u8F14\u52A9\u807D\u89BA\u5F9E\u5DE6\u8166\u8F38\u5165\uFF0C\u96D9\u7BA1\u9F4A\u4E0B\uFF0C\u795E\u5947\u5230\u9023\u81EA\u5DF1\u90FD\u5687\u4E00\u8DF3\u3002"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u908A\u6ED1\u5B57\u5361\u4E0D\u50C5\u53EF\u4EE5\u908A\u80CC\u55AE\u5B57\uFF0C\u540C\u6642\u4E5F\u53EF\u4EE5\u505A\u6E2C\u9A57\uFF0C\u5229\u7528\u932F\u8AA4\u4F86\u52A0\u6DF1\u8A18\u61B6\u3002"))))), /*#__PURE__*/React.createElement("div", {
    className: "functionbgboxbot"
  }, /*#__PURE__*/React.createElement("img", {
    class: "functionbgimgbot",
    src: "./img/Function_bottom_bg.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "functionbgbot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "functitlebox"
  }, /*#__PURE__*/React.createElement("div", {
    id: "funcintro3",
    className: "funcintrobox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "funcintroimg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./img/Function_phone_3.gif"
  })), /*#__PURE__*/React.createElement("div", {
    className: "funcintroitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "funcintrotitle funcintrotitle_l"
  }, "\u5206\u6563\u5B78\u7FD2\u6CD5"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "funcintrosectitle funcintrosectitle_l"
  }, "\u5229\u7528\u55AE\u5B57\u89E3\u6790\u80CC\u55AE\u5B57"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "funcintrcontent funcintrcontent_l"
  }, /*#__PURE__*/React.createElement("span", null, "\u6BCF\u500B\u55AE\u5B57\u5747\u9644\u300C\u55AE\u5B57\u89E3\u6790\u300D\u3002\u4F9D\u6BCF\u500B\u55AE\u5B57\u7684\u7279\u6027\u53CA\u8003\u8A66\u91CD\u9EDE\uFF0C\u96A8\u6A5F\u88DC\u5145\u55AE\u5B57\u91CD\u9EDE\u3001\u5FC5\u8003\u6587\u6CD5\u3001\u884D\u751F\u5B57\u3001\u540C\u7FA9\u5B57\u3001\u6703\u8A71\u53E5\u7B49\uFF0C\u4F60\u53EA\u8981\u770B\u4E00\u6B21\u5C31\u80FD\u5B78\u5168\u90E8\uFF0C\u8D85\u7D1A\u6709\u6548\u7387\u3002"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u5B78\u8A9E\u8A00\u4E00\u5B9A\u8981\u807D\u5F97\u61C2\u3001\u5538\u5F97\u51FA\u4F86\u3002\u672C\u7CFB\u7D71\u908A\u807D\u908A\u770B\u4FDD\u8B49\u63D0\u5347\u55AE\u5B57\u7406\u89E3\u529B\uFF0C\u4F60\u4E5F\u80FD\u8C6A\u9081\u5730\u8E0F\u9032\u9AD8\u5206\u540D\u4EBA\u5802\uFF0C\u6210\u70BA\u4E0B\u4E00\u500B\u8003\u8A66\u602A\u7269\uFF01"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "\u5225\u4EE5\u70BA\u4E0D\u662F\u66F8\u5C31\u4E0D\u80FD\u96A8\u624B\u505A\u7B46\u8A18\u3002\u672C\u7CFB\u7D71\u5728\u300C\u55AE\u5B57\u89E3\u6790\u300D\u4E2D\uFF0C\u6BCF\u500B\u55AE\u5B57\u90FD\u53EF\u7ACB\u5373\u505A\u300C\u6578\u4F4D\u7B46\u8A18\u300D\uFF0C\u4E8B\u534A\u529F\u500D\uFF0C\u6548\u679C\u52A0\u500D\u3002")))))), document.getElementById('functions'));
})();