"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_printable_printable_report_liquidation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/gen_report_generate.js */ "./resources/js/libraries/gen_report_generate.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_gen_report_generate_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    document.title = 'SCMS | Print Liquidation Form';
    this.sReportType = 'cash-reg-liquidation';
    this.parseCompressedData();
  },
  mounted: function mounted() {
    this.printReport();
    this.adjustSpace();
  },
  methods: {
    adjustSpace: function adjustSpace() {
      var contentElement = document.getElementById('content');
      var lineHeight = parseFloat(window.getComputedStyle(contentElement).lineHeight); // Get the line height of the text
      var textHeight = contentElement.clientHeight; // Height of the text content

      // Calculate the number of additional lines required
      var lines = Math.ceil(textHeight / lineHeight);
      var additionalLines = 12;
      if (lines === 11) {
        additionalLines = 8;
      } else if (lines === 12) {
        additionalLines = 8;
      } else if (lines === 13) {
        additionalLines = 6;
      } else if (lines === 14) {
        additionalLines = 4;
      } else if (lines >= 15) {
        additionalLines = 1;
      }
      var brElements = '';
      for (var i = 0; i < additionalLines; i++) {
        brElements += '<br>';
      }
      contentElement.innerHTML += brElements;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-791e10f9"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "printableDiv"
};
var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "header"
  }, null, -1 /* HOISTED */);
});
var _hoisted_3 = {
  "class": "table-container",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "100%",
  style: {
    "font-family": "Muli !important"
  }
};
var _hoisted_4 = {
  "class": "custom-table-header"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    style: {
      "border": "solid 1px white !important"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    style: {
      "border": "solid 1px white !important"
    }
  }, " ")], -1 /* HOISTED */);
});
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    style: {
      "border-top": "solid 1px white !important",
      "border-left": "solid 1px rgb(255, 255, 255)",
      "border-right": "solid 1px rgb(255, 255, 255)"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "3",
    style: {
      "border": "solid 1px white !important",
      "border-bottom": "1px solid black !important"
    }
  }, "  ")], -1 /* HOISTED */);
});
var _hoisted_7 = {
  colspan: "2",
  style: {
    "border": "solid 1px rgb(13, 0, 0)",
    "text-align": "center"
  }
};
var _hoisted_8 = {
  style: {
    "margin-top": "20px"
  },
  "class": "p-inside-table"
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "LIQUIDATION REPORT", -1 /* HOISTED */);
});
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table pull-left",
    style: {
      "margin": "10px !important"
    }
  }, "Entity Name: _____________________________________________________", -1 /* HOISTED */);
});
var _hoisted_12 = {
  "class": "p-inside-table pull-left",
  style: {
    "margin": "10px !important"
  }
};
var _hoisted_13 = {
  style: {
    "border": "solid 1px rgb(13, 0, 0)",
    "text-align": "left"
  }
};
var _hoisted_14 = {
  style: {
    "margin-top": "20px"
  },
  "class": "p-inside-table"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    style: {
      "margin-top": "20px"
    },
    "class": "p-inside-table"
  }, "Date: _______________________", -1 /* HOISTED */);
});
var _hoisted_16 = {
  style: {
    "margin-top": "20px"
  },
  "class": "p-inside-table"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    colspan: "2",
    style: {
      "border": "solid 1px rgb(13, 0, 0)",
      "text-align": "center"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table"
  }, "PARTICULARS")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "border": "solid 1px rgb(13, 0, 0)",
      "text-align": "center"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table"
  }, "AMOUNT")])], -1 /* HOISTED */);
});
var _hoisted_18 = {
  colspan: "2",
  style: {
    "text-align": "left"
  }
};
var _hoisted_19 = {
  id: "content",
  "class": "p-inside-table"
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_23 = {
  style: {
    "font-size": "20px !important",
    "text-align": "right"
  }
};
var _hoisted_24 = {
  "class": "p-inside-table"
};
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pull-left"
  }, "Php", -1 /* HOISTED */);
});
var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    style: {
      "text-align": "left"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table"
  }, "TOTAL AMOUNT SPENT")], -1 /* HOISTED */);
});
var _hoisted_35 = {
  style: {
    "font-size": "20px !important",
    "text-align": "right"
  }
};
var _hoisted_36 = {
  "class": "p-inside-table"
};
var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pull-left"
  }, "Php", -1 /* HOISTED */);
});
var _hoisted_38 = {
  colspan: "2",
  style: {
    "text-align": "left"
  }
};
var _hoisted_39 = {
  "class": "p-inside-table"
};
var _hoisted_40 = {
  style: {
    "font-size": "20px !important",
    "text-align": "right"
  }
};
var _hoisted_41 = {
  "class": "p-inside-table"
};
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pull-left"
  }, "Php", -1 /* HOISTED */);
});
var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    style: {
      "text-align": "left"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table"
  }, "AMOUNT REFUNDED PER OR NO. ______ DTD. _______")], -1 /* HOISTED */);
});
var _hoisted_44 = {
  style: {
    "font-size": "20px !important",
    "text-align": "right"
  }
};
var _hoisted_45 = {
  "class": "p-inside-table"
};
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pull-left"
  }, "Php", -1 /* HOISTED */);
});
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "2",
    style: {
      "text-align": "left"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "p-inside-table"
  }, "AMOUNT TO BE REIMBURSED")], -1 /* HOISTED */);
});
var _hoisted_48 = {
  style: {
    "font-size": "20px !important",
    "text-align": "right"
  }
};
var _hoisted_49 = {
  "class": "p-inside-table"
};
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "pull-left"
  }, "Php", -1 /* HOISTED */);
});
var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    width: "33%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "margin": "2%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "A. Certified: Correctness of the above data"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "_________________________"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signature over Printed Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Claimant")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Date: ________________")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    width: "33%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "margin": "2%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "B. Certified: Purpose of travel / cash advance duly accomplished"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "_________________________"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signature over Printed Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Immediate Supervisor")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Date: ________________")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    width: "33%"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: {
      "margin": "2%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "C. Certified: Supporting documents complete and proper"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "_________________________"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Signature over Printed Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Head, Accounting Division Unit")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "JEV No.: ________________"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Date: ________________")])])], -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_4, [_hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period Covered " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sTitleDate), 1 /* TEXT */)]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Fund Cluster: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aSheetSummary.fund_desc) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aSheetSummary.fund_code) + ")", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Serial No.: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aSheetSummary.sheet_no), 1 /* TEXT */)]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Responsibility Center Code: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("u", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aSheetSummary.office_code), 1 /* TEXT */)])])]), _hoisted_17]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, [_hoisted_20, _hoisted_21, _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sPartDesc), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, [_hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */), _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_expenses)), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_39, "AMOUNT OF CASH ADVANCE PER DV NO. " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.aSheetSummary.dv_no) + " DTD._____ ", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_cash)), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_coh)), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(_ctx.aSheetSummary.total_reimburse)), 1 /* TEXT */)])])]), _hoisted_51])])]);
}

/***/ }),

/***/ "./resources/js/libraries/gen_report_generate.js":
/*!*******************************************************!*\
  !*** ./resources/js/libraries/gen_report_generate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _utilities_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      sUserType: this.$root.getUserType(),
      aTableConfig: {
        "aoColumnDefs": [{
          'bSortable': true,
          'aTargets': [-1]
        }],
        "oLanguage": {
          "oPaginate": {
            "sPrevious": "",
            "sNext": ""
          }
        },
        "iDisplayLength": 5,
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aFundTypes: [{
        id: 1,
        code: 'ps',
        desc: 'Personnel Services (PS)'
      }, {
        id: 2,
        code: 'mooe',
        desc: 'Maintenance and Other Operating Expenses (MOOE)'
      }, {
        id: 3,
        code: 'sr',
        desc: 'Special Requests (SR)'
      }],
      iSelectedFund: 0,
      aFSList: [],
      aRegionList: [],
      aSheet: [],
      aSheetDetails: [],
      fTotalGrossAmount: 0,
      fTotalTaxAmount: 0,
      fTotalNetAmount: 0,
      fTotalGrossPartAmount: 0,
      fTotalTaxPartAmount: 0,
      fTotalParticularAmount: 0,
      sFundCode: '',
      sReportNo: '',
      sSheetNo: '',
      sTitleDate: '',
      sCurrDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('DD-MMM-YYYY'),
      sCompressedSummary: '',
      aFundSource: [],
      aSheetRecap: [],
      aSheetSummary: [],
      // register
      fSumOfSWReg: 0,
      fSumOfSWCas: 0,
      fSumOfOffice: 0,
      fSumOfOthers: 0,
      // For customization
      sReportType: '',
      sReportDetailsUrl: '',
      sPrintPageUrl: '',
      sPartDesc: ''
    };
  },
  mounted: function mounted() {
    this.initializePlugins();
    this.initEventListeners();
    this.getFundSourceList();
    this.executeUserTypeRequests();
  },
  methods: {
    initializePlugins: function initializePlugins(params) {
      // Init Select2 - Basic Single
      $(".select2-single").select2();
      // Initialize monthpicker
      $("#inpMonthYearTransact").monthpicker({
        changeYear: false,
        stepYears: 1,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: true,
        beforeShow: function beforeShow(input, inst) {
          var newclass = 'admin-form';
          var themeClass = $(this).parents('.admin-form').attr('class');
          var smartpikr = inst.dpDiv.parent();
          if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
          }
        }
      });
    },
    initTblSheets: function initTblSheets() {
      $('#tbl_cash_reg_summary').DataTable(this.aTableConfig);
    },
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      $('#inp_fund_type').on('select2:select', function (e) {
        var sTypeCode = $('#inp_fund_type').val();
        if (sTypeCode === 'sr') {
          $('#divSRSelection').css('visibility', '');
        } else {
          $('#divSRSelection').css('visibility', 'hidden');
        }
      });
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnGenReport') {
          mSelf.validateFilter();
        }
        if (event.target.id === 'btnPrintReport') {
          mSelf.prepareReport();
        }
      }, false);
      $('#txt_particular').keyup(function (event) {
        mSelf.sPartDesc = $('#txt_particular').val();
      });
    },
    prepareReport: function prepareReport() {
      var oFinalPayload = Object.assign({}, this.aSheetDetails, {
        date_details: {
          title_date: this.sTitleDate,
          curr_date: this.sCurrDate
        }
      });
      if (this.sReportType === 'cash-reg-liquidation') {
        oFinalPayload = Object.assign({}, oFinalPayload, {
          sPartDesc: this.sPartDesc
        });
      }
      console.log(oFinalPayload);
      this.sCompressedSummary = btoa(JSON.stringify(oFinalPayload));
      this.$root.setLocalStorageValue('forEx', this.sCompressedSummary);
      window.open(this.sPrintPageUrl, '_blank');
    },
    validateFilter: function validateFilter() {
      var bValid = true;
      var oParams, iSrValue, iRegionId;
      var sFundType = $('#inp_fund_type').val();
      var sMonthYear = $('#inpMonthYearTransact').val();
      if (sMonthYear === '') {
        bValid = false;
        this.showErrorAlert('Month-Year is Required!');
      }
      if (sFundType == null) {
        bValid = false;
        this.showErrorAlert('Type is Required!');
      } else if (sFundType === 'sr') {
        iSrValue = $('#inp_sr').val();
        if (iSrValue == null) {
          bValid = false;
          this.showErrorAlert('Request Reference is Required!');
        }
      }
      if (this.sUserType !== 'sdor') {
        iRegionId = $('#inp_office').val();
        if (iRegionId == null) {
          bValid = false;
          this.showErrorAlert('Office is Required!');
        }
      }
      if (bValid === true) {
        oParams = {
          sheet_fund_type: sFundType,
          transact_month: sMonthYear.split('/')[0],
          transact_year: sMonthYear.split('/')[1]
        };
        oParams = sFundType === 'sr' ? Object.assign({}, oParams, {
          fs_id: iSrValue
        }) : oParams;
        oParams = this.sUserType !== 'sdor' ? Object.assign({}, oParams, {
          region_id: iRegionId
        }) : oParams;
        this.getDateValues();
        this.getReportDetails(oParams);
      }
    },
    getDateValues: function getDateValues() {
      var sMonthYear = $('#inpMonthYearTransact').val();
      var iMonth = sMonthYear.split('/')[0];
      var iYear = sMonthYear.split('/')[1];
      var firstDay = iMonth + '-01-' + iYear;
      var endDay = moment__WEBPACK_IMPORTED_MODULE_0___default()(firstDay).endOf('month').format('DD');
      this.sTitleDate = '01-' + endDay + ' ' + moment__WEBPACK_IMPORTED_MODULE_0___default()(firstDay).format('MMMM') + ' ' + iYear;
    },
    executeUserTypeRequests: function executeUserTypeRequests() {
      if (this.sUserType !== 'sdor') {
        $('#divInpOffice').css('visibility', '');
        this.getRegionList();
      }
    },
    getRegionList: function getRegionList() {
      this.aRegionList = this.$root.parseLocalStorageLib().regions;
    },
    getReportDetails: function getReportDetails(oParams) {
      var _this = this;
      this.getRequest(this.sReportDetailsUrl, function (mResponse) {
        var aResult = mResponse.data;
        if (aResult.length === 0) {
          _this.resetDisplayTable();
          _this.showErrorAlert('No available data to load!');
          $('.tbl-empty').css('display', '');
          $('.tbl-with-content').css('display', 'none');
          $('#btnPrintReport').attr('disabled', true);
          $('#btnPrintReport').attr('class', 'btn btn-default btn-gradient dark btn-lg');
          if (_this.sReportType === 'cash-reg-liquidation') {
            document.getElementById('txt_particular').readOnly = true;
          }
        } else {
          $('.tbl-with-content').css('display', '');
          $('.tbl-empty').css('display', 'none');
          $('#btnPrintReport').attr('disabled', false);
          $('#btnPrintReport').attr('class', 'btn btn-success btn-gradient dark btn-lg');
          _this.aSheetDetails = aResult;
          _this.reportLayoutSetter(aResult);
        }
      }, oParams);
    },
    resetDisplayTable: function resetDisplayTable() {
      this.aSheetDetails = [];
      this.fTotalGrossAmount = 0;
      this.fTotalTaxAmount = 0;
      this.fTotalNetAmount = 0;
      this.fTotalParticularAmount = 0;
    },
    reportLayoutSetter: function reportLayoutSetter(aReportDetails) {
      this.sTitleDate = aReportDetails.date_details === undefined ? this.sTitleDate : aReportDetails.date_details.title_date;
      this.sCurrDate = aReportDetails.date_details === undefined ? this.sCurrDate : aReportDetails.date_details.curr_date;
      if (this.sReportType === 'cash-reg-report') {
        this.sReportNo = aReportDetails.sheet_details.report_no;
        this.sSheetNo = aReportDetails.sheet_details.sheet_no;
        this.sFundCluster = aReportDetails.sheet_details.fund_desc + ' (' + aReportDetails.sheet_details.fund_code + ')';
        this.computeTotalAmount();
      } else if (this.sReportType === 'cash-reg-record') {
        this.aFundSource = aReportDetails.fund_source[0];
        this.aSheetRecap = aReportDetails.sheet_recap;
        this.aSheetSummary = aReportDetails.sheet_summary;
      } else if (this.sReportType === 'cash-reg-register') {
        this.aFundSource = aReportDetails.fund_source[0];
        this.aSheetRecap = aReportDetails.sheet_recap;
        this.aSheetSummary = aReportDetails.sheet_summary;
        this.computeSummation();
      } else if (this.sReportType === 'cash-reg-liquidation') {
        if (document.title === 'SCMS | Print Liquidation Form') {
          this.aSheetSummary = aReportDetails.sheet_summary;
          console.log(aReportDetails.sPartDesc);
          this.sPartDesc = aReportDetails.sPartDesc;
        } else {
          this.aSheetSummary = aReportDetails.sheet_summary;
          this.sPartDesc = this.aSheetSummary.fs_desc;
          document.getElementById('txt_particular').readOnly = false;
          $('#txt_particular').text(this.sPartDesc);
        }
      }
    },
    getFundSourceList: function getFundSourceList() {
      var _this2 = this;
      this.getRequest('fund-source/get-list', function (mResponse) {
        _this2.aFSList = mResponse.data;
      }, {
        fs_type: 'sr',
        fs_status: 'RELEASED'
      });
    },
    computeTotalAmount: function computeTotalAmount() {
      var fTotalNet = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.net_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalTax = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.tax_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalGross = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.gross_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalGrossPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.gross_total);
        return accumulator + fValue;
      }, 0);
      var fTotalTaxPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.tax_total);
        return accumulator + fValue;
      }, 0);
      var fTotalParticularAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.net_total);
        return accumulator + fValue;
      }, 0);
      this.fTotalGrossAmount = fTotalGross.toFixed(2);
      this.fTotalTaxAmount = fTotalTax.toFixed(2);
      this.fTotalNetAmount = fTotalNet.toFixed(2);
      this.fTotalGrossPartAmount = fTotalGrossPartAmount.toFixed(2);
      this.fTotalTaxPartAmount = fTotalTaxPartAmount.toFixed(2);
      this.fTotalParticularAmount = fTotalParticularAmount.toFixed(2);
    },
    computeSummation: function computeSummation(mValue) {
      var mSelf = this;
      this.aSheetDetails.sheet_entries.forEach(function (mValue) {
        if (mValue.uacs_code === '5-01-010-1000') {
          mSelf.fSumOfSWReg += parseFloat(mValue.net_amount);
        } else if (mValue.uacs_code === '5-01-010-2000') {
          mSelf.fSumOfSWCas += parseFloat(mValue.net_amount);
        } else if (mValue.uacs_code === '5-02-03-010') {
          mSelf.fSumOfOffice += parseFloat(mValue.net_amount);
        } else {
          mSelf.fSumOfOthers += parseFloat(mValue.net_amount);
        }
      });
    },
    parseCompressedData: function parseCompressedData() {
      var sCompressedData = this.$root.getLocalStorageValue('forEx');
      this.aSheetDetails = JSON.parse(atob(sCompressedData));
      this.reportLayoutSetter(this.aSheetDetails);
    },
    printReport: function printReport() {
      var printContents = document.getElementById('printableDiv').outerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media print {\n@page {\r\n        size: A4 portrait !important;\n}\n#printableDiv[data-v-791e10f9] {\r\n        display: block !important;\n}\n.header[data-v-791e10f9] {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 50px;\r\n        /* Adjust as needed */\r\n        text-align: center;\r\n        padding: 1px;\r\n        margin-bottom: 1%;\n}\n.table-container[data-v-791e10f9] {\r\n        margin-top: 1% !important;\r\n        border: 1px solid black;\r\n        /* Initial margin for first page */\n}\n.table-container[data-v-791e10f9]:after {\r\n        content: \"\";\r\n        display: block;\r\n        height: 0;\r\n        /* Adjusted for spacing */\r\n        margin-top: 1% !important;\r\n        /* Space for subsequent pages */\r\n        /* page-break-before: always; */\n}\ntable[data-v-791e10f9] {\r\n        width: 100%;\r\n        border: 1px solid black;\r\n        /* border-collapse: collapse; */\n}\nthead[data-v-791e10f9],\r\n    tbody[data-v-791e10f9],\r\n    tr[data-v-791e10f9],\r\n    td[data-v-791e10f9] {\r\n        border: 1px solid black;\r\n        font-family: 'Arial';\n}\ntbody[data-v-791e10f9]:after {\r\n        margin-top: 50%;\r\n        page-break-before: always;\n}\ntr[data-v-791e10f9]:after {\r\n        margin-top: 50%;\r\n        page-break-before: always;\n}\nthead[data-v-791e10f9],\r\n    thead[data-v-791e10f9]:after {\r\n        display: table-header-group !important;\n}\n.p-inside-table[data-v-791e10f9] {\r\n        margin: 3% !important;\r\n        font-size: 12px !important;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_style_index_0_id_791e10f9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_style_index_0_id_791e10f9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_style_index_0_id_791e10f9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/printable/printable_report_liquidation.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/printable/printable_report_liquidation.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _printable_report_liquidation_vue_vue_type_template_id_791e10f9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true */ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true");
/* harmony import */ var _printable_report_liquidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printable_report_liquidation.vue?vue&type=script&lang=js */ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js");
/* harmony import */ var _printable_report_liquidation_vue_vue_type_style_index_0_id_791e10f9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css */ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_printable_report_liquidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_printable_report_liquidation_vue_vue_type_template_id_791e10f9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-791e10f9"],['__file',"resources/js/components/printable/printable_report_liquidation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./printable_report_liquidation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_template_id_791e10f9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_template_id_791e10f9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=template&id=791e10f9&scoped=true");


/***/ }),

/***/ "./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_printable_report_liquidation_vue_vue_type_style_index_0_id_791e10f9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/printable/printable_report_liquidation.vue?vue&type=style&index=0&id=791e10f9&scoped=true&lang=css");


/***/ })

}]);