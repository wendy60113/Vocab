"use strict";

(function () {
  'use strict';

  var en_productdata = [{
    'src': './img/product/01.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1320',
    'class': 'item swiper animdelay1'
  }, {
    'src': './img/product/02.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1329',
    'class': 'item swiper animdelay2'
  }, {
    'src': './img/product/03.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1328',
    'class': 'item swiper animdelay3'
  }, {
    'src': './img/product/04.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1333',
    'class': 'item swiper animdelay4'
  }, {
    'src': './img/product/05.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1334',
    'class': 'item swiper animdelay5'
  }, {
    'src': './img/product/06.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1335',
    'class': 'item swiper animdelay6'
  }, {
    'src': './img/product/07.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1325',
    'class': 'item swiper animdelay7'
  }, {
    'src': './img/product/08.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1347',
    'class': 'item swiper animdelay8'
  }, {
    'src': './img/product/09.png',
    'url': 'https://www.17buy.com.tw/books/',
    'class': 'item swiper animdelay8'
  }];
  var jp_productdata = [{
    'src': './img/product/21.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1336',
    'class': 'item swiper animdelay1'
  }, {
    'src': './img/product/22.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1337',
    'class': 'item swiper animdelay2'
  }, {
    'src': './img/product/23.png',
    'url': 'https://www.17buy.com.tw/books/',
    'class': 'item swiper animdelay3'
  }, {
    'src': './img/product/24.png',
    'url': 'https://www.17buy.com.tw/books/',
    'class': 'item swiper animdelay4'
  }];
  var kr_productdata = [{
    'src': './img/product/31.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1338',
    'class': 'item swiper animdelay1'
  }, {
    'src': './img/product/32.png',
    'url': 'https://www.17buy.com.tw/books/books_view.php?books_id=1339',
    'class': 'item swiper animdelay2'
  }];

  function SliderItem(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.slideritemclass
    }, /*#__PURE__*/React.createElement("img", {
      className: "pboximg",
      src: props.imgsrc,
      onClick: props.testurl
    }), /*#__PURE__*/React.createElement("br", null));
  }

  function En_Slider() {
    var slideritem = en_productdata.map(function (h, index) {
      return /*#__PURE__*/React.createElement(SliderItem, {
        key: index,
        imgsrc: h.src,
        testurl: function testurl() {
          return window.open(h.url, "_blank");
        },
        slideritemclass: h.class
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      id: "en_slider",
      className: "product_en_slider owl-carousel  owl-theme"
    }, slideritem);
  }

  function Jp_Slider() {
    var slideritem = jp_productdata.map(function (m, index) {
      return /*#__PURE__*/React.createElement(SliderItem, {
        key: index,
        imgsrc: m.src,
        testurl: function testurl() {
          return window.open(m.url, "_blank");
        },
        slideritemclass: m.class
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      id: "jp_slider",
      className: "product_jp_slider owl-carousel  owl-theme"
    }, slideritem);
  }

  function Kr_Slider() {
    var slideritem = kr_productdata.map(function (j, index) {
      return /*#__PURE__*/React.createElement(SliderItem, {
        key: index,
        imgsrc: j.src,
        testurl: function testurl() {
          return window.open(j.url, "_blank");
        },
        slideritemclass: j.class
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      id: "kr_slider",
      className: "product_jp_slider owl-carousel  owl-theme"
    }, slideritem);
  }

  ReactDOM.render( /*#__PURE__*/React.createElement("div", {
    className: "productbg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "productbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "boxline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pboxtitle"
  }, "\u82F1\u6587"), /*#__PURE__*/React.createElement(En_Slider, null)), /*#__PURE__*/React.createElement("div", {
    className: "jp_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "boxline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pboxtitle"
  }, "\u65E5\u6587"), /*#__PURE__*/React.createElement(Jp_Slider, null)), /*#__PURE__*/React.createElement("div", {
    className: "kr_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "boxline"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pboxtitle"
  }, "\u97D3\u6587"), /*#__PURE__*/React.createElement(Kr_Slider, null)))), document.getElementById('product'));
})();