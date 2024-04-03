"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_cash_payout_cash_payout_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_admin_view_ors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libraries/admin_view_ors.js */ "./resources/js/libraries/admin_view_ors.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_admin_view_ors_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.sRedirectUrl = '/front/cash/payout/manage/details/';
    this.sDefaultStatus = 'FOR PO';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "content_wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\"><div class=\"topbar-left\"><ol class=\"breadcrumb\"><li class=\"crumb-trail\"> Cash Management </li><li class=\"crumb-active\"><a>View ORS/DV/ADA</a></li></ol></div></header>", 1);
var _hoisted_3 = {
  "class": "panel"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "panel-title"
}, "View ORS/DV/ADA")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "panel-body"
};
var _hoisted_6 = {
  "class": "form-group",
  id: "divInpTransactMY",
  style: {
    "margin": "1%"
  }
};
var _hoisted_7 = {
  "class": "admin-form mw1000 left-block"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-3\"><label for=\"inp_region\" style=\"margin-bottom:2%;\"><b>Date Created: (Month &amp; Year)</b></label><label for=\"inpMonthYearCreated\" class=\"field prepend-icon\"><input type=\"text\" id=\"inpMonthYearCreated\" name=\"inpMonthYearCreated\" class=\"gui-input\" placeholder=\"Enter month and year\" readonly><label class=\"field-icon\"><i class=\"fa fa-calendar-o\"></i></label></label></div>", 1);
var _hoisted_9 = {
  "class": "col-md-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inp_region",
  style: {
    "margin-bottom": "2%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Office:")], -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "0",
  selected: ""
}, "ALL", -1 /* HOISTED */);
var _hoisted_12 = ["value"];
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "p_fund_source",
  style: {
    "display": "none"
  },
  "class": "error_msg"
}, "Please select an office!", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "col-md-3"
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
var _hoisted_17 = ["value"];
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "p_type",
  style: {
    "display": "none"
  },
  "class": "error_msg"
}, "Type is required!", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "btnFilterTable",
  style: {
    "margin-top": "20px"
  },
  type: "button",
  "class": "btn btn-primary btn-gradient dark btn-large"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-refresh"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Filter Table ")])], -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "col-md-12"
};
var _hoisted_21 = {
  "class": "panel panel-colorbox-open panel-dark",
  id: "spy2"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-title hidden-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "glyphicon glyphicon-tasks"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS / DV / ADA Records ")])], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "panel-body pn"
};
var _hoisted_25 = {
  "class": "table table-striped table-hover",
  id: "tbl_fund_source",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "SysId"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "ORS No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "DV No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "ADA/Check No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Requesting Region"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date/Time Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Date/Time Modified"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "text-align": "center"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_27 = {
  style: {
    "text-align": "center"
  }
};
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
var _hoisted_34 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_35 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_36 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_37 = ["data-fs_id"];
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
}, null, -1 /* HOISTED */);
var _hoisted_39 = [_hoisted_38];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_CASH_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_CASH_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_CASH_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter Fund Sources "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "select2-single form-control region-select",
    id: "inp_region",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.iSelectedRegion = $event;
    })
  }, [_hoisted_11, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aRegions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc), 9 /* TEXT, PROPS */, _hoisted_12);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.iSelectedRegion]]), _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFsStatuses, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 9 /* TEXT, PROPS */, _hoisted_17);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_18]), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: MOOE SHEETS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.aFundSource, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.ors_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.dv_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.cpo_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fs_status), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_created, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.date_modified, 'date')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "data-attr": "viewDetails",
      "data-fs_id": item.fs_id,
      "class": "btn btn-md btn-info viewDetails",
      style: {
        "margin-right": "3%"
      }
    }, [].concat(_hoisted_39), 8 /* PROPS */, _hoisted_37)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: MOOE SHEETS TABLE ")])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/libraries/admin_view_ors.js":
/*!**************************************************!*\
  !*** ./resources/js/libraries/admin_view_ors.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./resources/js/libraries/request.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_request_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      aTableConfig: {
        "aaSorting": [[0, 'desc']],
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
        "iDisplayLength": 10,
        "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
        "oTableTools": {
          "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
        }
      },
      aFundSource: [],
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
      aFsStatuses: [{
        id: '',
        desc: 'ALL'
      }, {
        id: 'OPEN',
        desc: 'Open'
      }, {
        id: 'FOR ORS REV',
        desc: 'Ongoing Revision for ORS'
      }, {
        id: 'FOR DV',
        desc: 'For DV Issuance'
      }, {
        id: 'FOR DV REV',
        desc: 'Ongoing Revision for DV'
      }, {
        id: 'FOR PO',
        desc: 'For Payout Issuance'
      }, {
        id: 'RELEASED',
        desc: 'Released'
      }, {
        id: 'CLEARED',
        desc: 'Cleared'
      }],
      aRegions: [],
      sRedirectUrl: '',
      sDefaultStatus: ''
    };
  },
  mounted: function mounted() {
    this.initPlugins();
    this.getRegions();
    this.initPageValues();
    this.initEventListeners();
  },
  methods: {
    initPlugins: function initPlugins() {
      $(".status-select").select2();
      $(".status-select").select2().val(this.sDefaultStatus).trigger('change');
      $(".region-select").select2();
      $(".region-select").select2().val(0).trigger('change');
      // Initialize datepicker
      $("#inpMonthYearCreated").monthpicker({
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
    initTblFundSource: function initTblFundSource() {
      $('#tbl_fund_source').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },
    initPageValues: function initPageValues() {
      var mSelf = this;
      var sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MM');
      var sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY');
      var sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearCreated').val(sMonthYearNow);
      if (this.$route.query.stat != undefined) {
        $(".status-select").select2().val(this.$route.query.stat).trigger('change');
      }
      setTimeout(function () {
        if (mSelf.$route.query.reg != undefined) {
          $(".region-select").select2().val(parseInt(mSelf.$route.query.reg)).trigger('change');
        }
        mSelf.filterTable();
      }, 200);
    },
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = event.target.href + mSelf.sSheetFundType;
        }
        if (event.target.id === 'btnFilterTable') {
          mSelf.filterTable();
        }
      }, false);
    },
    filterTable: function filterTable() {
      var sDate = $('#inpMonthYearCreated').val();
      var iInpOffice = $('#inp_region').val();
      var iInpType = $('#inp_type').val();
      if (sDate === '') {
        this.showErrorAlert('Date (Month and Year) is Required!');
      } else {
        var aDate = sDate.split('/');
        var oParam = {
          fs_status: $('#inp_status').val(),
          date_month_created: aDate[0],
          date_year_created: aDate[1]
        };
        if (iInpOffice != 0) {
          oParam = Object.assign({}, oParam, {
            region_id: iInpOffice
          });
        }
        if (iInpType != '' || iInpType != undefined) {
          oParam = Object.assign({}, oParam, {
            fs_type: iInpType
          });
        }
        this.getFundSource(oParam);
      }
    },
    initTableEventListener: function initTableEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = mSelf.sRedirectUrl + event.target.dataset.fs_id;
        }
      }, false);
    },
    getDateModified: function getDateModified(sDateModified) {
      return sDateModified === null ? '---' : this.convertDateFormat(sDateModified, 'DD-MMM-YY H:mm:ss');
    },
    getRegions: function getRegions() {
      this.aRegions = this.$root.parseLocalStorageLib().regions;
    },
    getFundSource: function getFundSource(oParams) {
      var _this = this;
      var mSelf = this;
      this.getRequest('bdgt/get-fund-source', function (mResponse) {
        _this.aFundSource = mResponse.data;
        var bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_fund_source');
        if (bIsDataTableActive === true) {
          // $('#tbl_fund_source').DataTable().clear();
          $('#tbl_fund_source').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblFundSource();
        }, 500);
        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, oParams);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cash_payout_view_vue_vue_type_template_id_0b8081f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash_payout_view.vue?vue&type=template&id=0b8081f5 */ "./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5");
/* harmony import */ var _cash_payout_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash_payout_view.vue?vue&type=script&lang=js */ "./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_cash_payout_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_cash_payout_view_vue_vue_type_template_id_0b8081f5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/cash/payout/cash_payout_view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_vue_vue_type_template_id_0b8081f5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_vue_vue_type_template_id_0b8081f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view.vue?vue&type=template&id=0b8081f5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view.vue?vue&type=template&id=0b8081f5");


/***/ })

}]);