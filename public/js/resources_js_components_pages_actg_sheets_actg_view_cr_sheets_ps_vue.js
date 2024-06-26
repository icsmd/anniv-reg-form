"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_actg_sheets_actg_view_cr_sheets_ps_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_actg_view_sheets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/actg_view_sheets.js */ "./resources/js/libraries/actg_view_sheets.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_actg_view_sheets_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.sFundType = 'ps';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  id: "content_wrapper"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-trail\"> Manage Sheet </li><li class=\"crumb-active\"><a>Personnel Services</a></li></ol></div></header>", 1);
var _hoisted_4 = {
  "class": "panel"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "panel-title"
}, "Manage Cash Disbursement Sheets for PS")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "panel-body"
};
var _hoisted_7 = {
  "class": "form-group",
  id: "divInpTransactMY"
};
var _hoisted_8 = {
  "class": "admin-form mw1000 left-block"
};
var _hoisted_9 = {
  "class": "col-md-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inp_status",
  style: {
    "margin-bottom": "2%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Office:")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "select2-single form-control reg-select",
  id: "inp_region"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "0",
  selected: ""
}, "ALL", -1 /* HOISTED */);
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "col-md-2",
  style: {
    "margin-top": "1px"
  }
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inp_status",
  style: {
    "margin-bottom": "2%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Status:")], -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "select2-single form-control status-select",
  id: "inp_status"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: ""
}, "ALL", -1 /* HOISTED */);
var _hoisted_18 = ["value"];
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-2\"><label for=\"inp_status\" style=\"margin-bottom:2%;\"><b>Date Created:</b></label><label for=\"monthpicker1\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearTransact\" name=\"inpMonthYearTransact\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div><div class=\"col-md-4\" style=\"margin-top:21px;\"><button id=\"btnFilterEntries\" type=\"button\" class=\"btn btn-primary btn-gradient dark btn-lg\"><i class=\"fa fa-refresh\"></i> Filter Entries </button></div>", 2);
var _hoisted_21 = {
  "class": "col-md-12"
};
var _hoisted_22 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fa fa-table"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cash Disbursement Sheets for Personnel Services ")])], -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "panel-body pn"
};
var _hoisted_26 = {
  "class": "table table-striped table-hover",
  id: "tbl_Sheets",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "SysId"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Sheet No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Accounting Period"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_28 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_29 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_30 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_31 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_32 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_33 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_34 = ["data-sheet_id"];
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-arrow-circle-o-right"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_ACTG_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_ACTG_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_ACTG_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: FILTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_11, [_hoisted_12, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aRegions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc), 9 /* TEXT, PROPS */, _hoisted_13);
  }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_16, [_hoisted_17, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheetStatuses, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_18);
  }), 256 /* UNKEYED_FRAGMENT */))])]), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: FILTER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: PS SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aSheets, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sheet_no === null ? '---' : item.sheet_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(item.transact_year + '-' + item.transact_month, 'MMMM YYYY')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-sheet_id": item.sheet_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "9%"
      }
    }, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Details ")], 8 /* PROPS */, _hoisted_34)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: PS SHEETS TABLE ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/libraries/actg_view_sheets.js":
/*!****************************************************!*\
  !*** ./resources/js/libraries/actg_view_sheets.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./resources/js/libraries/utilities.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_0__["default"], _utilities_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
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
      iSelectedRegion: 0,
      aSheets: [],
      sActiveDate: '',
      sFundType: '',
      aRegions: [],
      aSheetStatuses: [{
        id: 'OPEN',
        desc: 'Open'
      }, {
        id: 'FOR REVISION',
        desc: 'For Revision'
      }, {
        id: 'REVISED',
        desc: 'Revised'
      }, {
        id: 'POSTED',
        desc: 'Posted'
      }]
    };
  },
  mounted: function mounted() {
    this.initializePlugins();
    this.getRegions();
    this.initCreateButtonEventListener();
    this.initPageData();
  },
  methods: {
    initializePlugins: function initializePlugins() {
      // Init Select2 - Basic Single
      $(".status-select").select2();
      $(".reg-select").select2();
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
    getRegions: function getRegions() {
      this.aRegions = this.$root.parseLocalStorageLib().regions;
    },
    initCreateButtonEventListener: function initCreateButtonEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnFilterEntries') {
          mSelf.validateSheetFilter();
        }
      }, false);
    },
    validateSheetFilter: function validateSheetFilter() {
      var iRegion = $('#inp_region').val();
      this.iSelectedRegion = iRegion !== null ? iRegion : 0;
      var sStatus = $('#inp_status').val();
      var sMonthYear = $('#inpMonthYearTransact').val();
      if (iRegion === null) {
        this.showErrorAlert('Please Select a Region!');
      } else if (sMonthYear === '') {
        this.showErrorAlert('Month and Year is Required!');
      } else {
        var aDate = sMonthYear.split('/');
        this.getSheets(this.iSelectedRegion, aDate[0], aDate[1], sStatus);
      }
    },
    initTblSheets: function initTblSheets() {
      $('#tbl_Sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initTableEventListener: function initTableEventListener() {
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = "/front/actg/view-sheet-details/" + event.target.dataset.sheet_id;
        }
      }, false);
    },
    initPageData: function initPageData() {
      var mSelf = this;
      var iRegion = parseInt(this.$route.query.reg != undefined ? this.$route.query.reg : 0);
      var sStatus = this.$route.query.stat != undefined ? this.$route.query.stat : '';
      var sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
      var sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
      var sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearTransact').val(sMonthYearNow);

      // Set delay
      setTimeout(function () {
        if (iRegion != 0) {
          $(".reg-select").select2().val(iRegion).trigger('change');
        }
        if (sStatus != '') {
          $(".status-select").select2().val(sStatus).trigger('change');
        }
        mSelf.getSheets(iRegion, sInitMonth, sInitYear, sStatus);
      }, 100);
    },
    getSheets: function getSheets(iRegion, sMonth, sYear, sStatus) {
      var _this = this;
      var mSelf = this;
      var oParams = {
        region_id: iRegion,
        sheet_fund_type: this.sFundType,
        transact_month: sMonth,
        transact_year: sYear,
        status: sStatus
      };
      if (oParams.region_id == 0) {
        delete oParams.region_id;
      }
      if (oParams.status == '') {
        delete oParams.status;
      }
      this.getRequest('actg/get-sheets', function (mResponse) {
        _this.aSheets = mResponse.data;
        var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_Sheets');
        if (bIsDataTableActive === true) {
          $('#tbl_Sheets').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblSheets();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, oParams);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actg_view_cr_sheets_ps_vue_vue_type_template_id_927db6f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6 */ "./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6");
/* harmony import */ var _actg_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actg_view_cr_sheets_ps.vue?vue&type=script&lang=js */ "./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_actg_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_actg_view_cr_sheets_ps_vue_vue_type_template_id_927db6f6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_actg_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_actg_view_cr_sheets_ps_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./actg_view_cr_sheets_ps.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_actg_view_cr_sheets_ps_vue_vue_type_template_id_927db6f6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_actg_view_cr_sheets_ps_vue_vue_type_template_id_927db6f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/actg/sheets/actg_view_cr_sheets_ps.vue?vue&type=template&id=927db6f6");


/***/ })

}]);