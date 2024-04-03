"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_bdgt_ors_bdgt_ors_add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      aRegionList: [],
      aUacsList: [],
      aFundCluster: [],
      aSelectedUacs: [],
      aFilteredUacs: [],
      bFormValid: false
    };
  },
  mounted: function mounted() {
    this.initPlugins();
    this.initEventListeners();
    this.getRegionList();
    this.getUacsList();
    this.getFundCluster();
  },
  methods: {
    initPlugins: function initPlugins() {
      // Init Select2 - Basic Single
      $(".select2-single").select2();

      // Initialize datepicker
      $("#inpDateIssued").datepicker({
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
        showButtonPanel: false,
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
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnSaveNewDetails') {
          mSelf.processEntries();
        }
        if (event.target.id === 'btnAddUacs') {
          mSelf.addSelectedUacs();
        }
      }, false);
    },
    addSelectedUacs: function addSelectedUacs() {
      var mSelf = this;
      var iUacsId = $('#inp_uacs').val();
      var fUacsAmount = $('#inp_uacs_amount').val();
      var filteredUacs = this.aUacsList.filter(function (uacs) {
        return uacs.uacs_id == iUacsId;
      });
      this.aSelectedUacs.push({
        uacs: filteredUacs[0],
        amount: fUacsAmount
      });
      console.log(this.aSelectedUacs);
      setTimeout(function () {
        mSelf.initUacsSelectionTable();
      }, 500);
    },
    getUacsList: function getUacsList() {
      var _this = this;
      this.getRequest('uacs/get-list', function (mResponse) {
        _this.aUacsList = mResponse.data;
      });
    },
    getRegionList: function getRegionList() {
      var _this2 = this;
      this.getRequest('region/get-list', function (mResponse) {
        _this2.aRegionList = mResponse.data;
      });
    },
    getFundCluster: function getFundCluster() {
      var _this3 = this;
      this.getRequest('fund-cluster/get-list', function (mResponse) {
        _this3.aFundCluster = mResponse.data;
      });
    },
    processEntries: function processEntries() {
      this.validateEntries();
      if (this.bFormValid === true) {
        this.saveEntries();
      } else {
        this.showErrorAlert('Please double check and correct all your entries!');
      }
    },
    initUacsSelectionTable: function initUacsSelectionTable() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.action === 'btndeleteUacs') {
          console.log(event);
        }
      }, false);
    },
    validateEntries: function validateEntries() {
      var bResult = true;
      var ors_no = $('#inp_ors_number').val();
      if (ors_no === '') {
        $('#p_ors_number').css('display', '');
        bResult = false;
      }
      var fund = $('#inp_fund').val();
      if (fund === null) {
        $('#p_fund').css('display', '');
        bResult = false;
      }
      var type = $('#inp_type').val();
      if (type === null) {
        $('#p_type').css('display', '');
        bResult = false;
      }
      var date_issued = $('#inpDateIssued').val();
      if (date_issued === '') {
        $('#p_date_issued').css('display', '');
        bResult = false;
      }
      var short_desc = $('#inp_short_desc').val();
      if (short_desc === '') {
        $('#p_title').css('display', '');
        bResult = false;
      }
      var gross_amount = $('#inp_gross_amount').val();
      console.log(gross_amount);
      if (gross_amount === '') {
        $('#p_gross_amount').css('display', '');
        bResult = false;
      }
      if (parseFloat(gross_amount) <= 0) {
        $('#p_gross_amount').css('display', '');
        $('#p_gross_amount').text('Gross amount must not be zero!');
        bResult = false;
      }
      var region = $('#inp_region').val();
      if (region === null) {
        $('#p_region').css('display', '');
        bResult = false;
      }
      this.bFormValid = bResult;
    },
    saveEntries: function saveEntries() {
      var _this4 = this;
      var oParams = {
        fc_id: $('#inp_fund').val(),
        ors_no: $('#inp_ors_number').val(),
        ors_issue_date: this.convertDateFormat($('#inpDateIssued').val(), 'YYYY-MM-DD'),
        fs_type: $('#inp_type').val(),
        fs_desc: $('#inp_short_desc').val(),
        fs_gross_amount: $('#inp_gross_amount').val(),
        remarks: $('#inp_remarks').val(),
        df_ref_no: $('#inp_df_number').val(),
        region_id: $('#inp_region').val(),
        selected_uacs: this.aSelectedUacs
      };
      // console.log(oParams);
      this.postRequest('bdgt/create-fund-source', oParams, function (mResponse) {
        _this4.showSuccessAlert('Successfully saved your ORS entry');
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-be92094a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "content_wrapper"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-be92094a><div class=\"topbar-left\" data-v-be92094a><ol class=\"breadcrumb\" data-v-be92094a><li class=\"crumb-trail\" data-v-be92094a> Budget Management </li><li class=\"crumb-active\" data-v-be92094a><a data-v-be92094a>Add ORS</a></li></ol></div></header>", 1);
var _hoisted_3 = {
  "class": "panel"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, "Add Obligation Request and Status")], -1 /* HOISTED */);
});
var _hoisted_5 = {
  "class": "panel-body"
};
var _hoisted_6 = {
  "class": "col-md-6"
};
var _hoisted_7 = {
  "class": "form-group"
};
var _hoisted_8 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_ors_number",
    "class": "col-lg-12 control-label"
  }, "ORS Number: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "inp_ors_number",
    "class": "form-control",
    placeholder: "Enter ORS Number"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "ORS Number is required!")], -1 /* HOISTED */);
});
var _hoisted_10 = {
  "class": "col-lg-6 custom-margin-top"
};
var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_fund",
    "class": "col-lg-12 control-label"
  }, "Fund Cluster: ", -1 /* HOISTED */);
});
var _hoisted_12 = {
  "class": "select2-single form-control col-md-6",
  id: "inp_fund"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select fund", -1 /* HOISTED */);
});
var _hoisted_14 = ["value"];
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "ORS Number is required!", -1 /* HOISTED */);
});
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 custom-margin-top\" data-v-be92094a><label for=\"inp_type\" class=\"col-lg-12 control-label\" data-v-be92094a>Type:</label><select class=\"select2-single form-control\" id=\"inp_type\" data-v-be92094a><option disabled value=\"0\" selected data-v-be92094a>Please select type</option><option value=\"ps\" data-v-be92094a>Personnel Services (PS)</option><option value=\"mooe\" data-v-be92094a>Maintenance and Other Operating Expenses (MOOE)</option><option value=\"sr\" data-v-be92094a>Special</option></select><p id=\"p_type\" style=\"display:none;\" class=\"error_msg\" data-v-be92094a>Type is required!</p></div><div class=\"col-lg-12 custom-margin-top\" data-v-be92094a><label for=\"inp_short_desc\" class=\"col-lg-12 control-label\" data-v-be92094a>Short Description (Title):</label><input type=\"text\" id=\"inp_short_desc\" class=\"form-control\" placeholder=\"Enter Short Description\" data-v-be92094a><p id=\"p_title\" style=\"display:none;\" class=\"error_msg\" data-v-be92094a>Title is required!</p></div><div class=\"col-lg-6 custom-margin-top\" data-v-be92094a><label for=\"inp_gross_amount\" class=\"col-lg-12 control-label\" data-v-be92094a>Gross Amount:</label><input type=\"number\" id=\"inp_gross_amount\" class=\"form-control\" placeholder=\"Enter Gross Amount\" min=\"0.00\" value=\"0.00\" data-v-be92094a><p id=\"p_gross_amount\" style=\"display:none;\" class=\"error_msg\" data-v-be92094a>Gross Amount is required! </p></div><div class=\"col-lg-6 custom-margin-top\" data-v-be92094a><label for=\"inpDateIssued\" class=\"col-lg-12 control-label\" data-v-be92094a>Date Issued:</label><div class=\"admin-form\" data-v-be92094a><label for=\"datepicker1\" class=\"field prepend-icon\" data-v-be92094a><input type=\"text\" id=\"inpDateIssued\" name=\"inpDateIssued\" class=\"gui-input\" placeholder=\"Enter date of transaction\" readonly data-v-be92094a><label class=\"field-icon\" data-v-be92094a><i class=\"fa fa-calendar-o\" data-v-be92094a></i></label></label><p id=\"p_date_issued\" style=\"display:none;\" class=\"error_msg\" data-v-be92094a>Date Issued is required! </p></div></div>", 4);
var _hoisted_20 = {
  "class": "col-lg-6 custom-margin-top"
};
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_region",
    "class": "col-lg-12 control-label"
  }, "Requesting Office:", -1 /* HOISTED */);
});
var _hoisted_22 = {
  "class": "select2-single form-control",
  id: "inp_region"
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select region", -1 /* HOISTED */);
});
var _hoisted_24 = ["value"];
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_region",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "Requesting Region is required! ", -1 /* HOISTED */);
});
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 custom-margin-top\" data-v-be92094a><label for=\"inp_df_number\" class=\"col-lg-12 control-label\" data-v-be92094a>DF Number (Optional):</label><input type=\"text\" id=\"inp_df_number\" class=\"form-control\" placeholder=\"Enter DF Number\" data-v-be92094a></div><div class=\"col-lg-12 custom-margin-top\" data-v-be92094a><label for=\"inp_remarks\" class=\"col-lg-12 control-label\" data-v-be92094a>Remarks:</label><div class=\"admin-form\" data-v-be92094a><section data-v-be92094a><label class=\"field prepend-icon\" data-v-be92094a><textarea class=\"gui-textarea\" id=\"inp_remarks\" name=\"comment\" placeholder=\"Enter your remarks here...\" data-v-be92094a></textarea><label for=\"comment\" class=\"field-icon\" data-v-be92094a><i class=\"fa fa-comments\" data-v-be92094a></i></label><span class=\"input-footer\" data-v-be92094a><strong data-v-be92094a>Hint:</strong> You may provide the long description in this section.</span></label></section></div></div><div class=\"col-lg-12\" data-v-be92094a><button type=\"button\" id=\"btnSaveNewDetails\" class=\"btn btn-lg btn-success pull-right\" style=\"margin-top:23px;\" data-v-be92094a><i class=\"fa fa-floppy-o\" data-v-be92094a></i> Save Details </button></div>", 3);
var _hoisted_29 = {
  "class": "col-md-6"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = {
  "class": "row",
  style: {
    "margin-top": "1%"
  }
};
var _hoisted_32 = {
  "class": "panel panel-visible panel-warning",
  id: "spy2"
};
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-sitemap"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS Breakdown (Per UACS) ")])], -1 /* HOISTED */);
});
var _hoisted_35 = {
  "class": "panel-body pn"
};
var _hoisted_36 = {
  "class": "row",
  style: {
    "margin": "1%"
  }
};
var _hoisted_37 = {
  "class": "col-md-8"
};
var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inp_uacs",
    "class": "col-lg-12 control-label"
  }, "UACS: ", -1 /* HOISTED */);
});
var _hoisted_39 = {
  "class": "select2-single form-control",
  id: "inp_uacs"
};
var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    disabled: "",
    value: "0",
    selected: ""
  }, "Please select UACS", -1 /* HOISTED */);
});
var _hoisted_41 = ["value"];
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    id: "p_ors_number",
    style: {
      "display": "none"
    },
    "class": "error_msg"
  }, "ORS Number is required!", -1 /* HOISTED */);
});
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-4\" data-v-be92094a><label for=\"inp_uacs_amount\" class=\"col-lg-12 control-label\" data-v-be92094a>Gross Amount:</label><input type=\"number\" id=\"inp_uacs_amount\" class=\"form-control\" placeholder=\"Enter Gross Amount\" min=\"0.00\" value=\"0.00\" data-v-be92094a></div><div class=\"col-md-12\" style=\"margin-top:24px;\" data-v-be92094a><button id=\"btnAddUacs\" class=\"btn btn-lg btn-system pull-right\" data-v-be92094a><i class=\"fa fa-plus\" data-v-be92094a></i> Add UACS</button></div>", 2);
var _hoisted_45 = {
  "class": "col-md-12"
};
var _hoisted_46 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100"
};
var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "UACS Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "UACS Desc"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Amount"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Action")])], -1 /* HOISTED */);
});
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "data-action": "btndeleteUacs",
    id: "item.uacs_code",
    "class": "btn btn-md btn-danger pull-right"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-trash"
  })])], -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_BDGT_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_BDGT_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_BDGT_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_12, [_hoisted_13, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFundCluster, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.fc_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fc_desc) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.fc_code) + ")", 9 /* TEXT, PROPS */, _hoisted_14);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_15]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_22, [_hoisted_23, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRegionList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.region_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.region_desc) + ")", 9 /* TEXT, PROPS */, _hoisted_24);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_25]), _hoisted_26])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_39, [_hoisted_40, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aUacsList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.uacs_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 9 /* TEXT, PROPS */, _hoisted_41);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_42]), _hoisted_43]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aSelectedUacs, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs.uacs_acc_title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */), _hoisted_48]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])])])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.error_msg[data-v-be92094a] {\r\n    color: red !important\n}\n.custom-margin-top[data-v-be92094a] {\r\n    margin-top: 2%\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_style_index_0_id_be92094a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_style_index_0_id_be92094a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_style_index_0_id_be92094a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bdgt_ors_add_vue_vue_type_template_id_be92094a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true");
/* harmony import */ var _bdgt_ors_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bdgt_ors_add.vue?vue&type=script&lang=js */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js");
/* harmony import */ var _bdgt_ors_add_vue_vue_type_style_index_0_id_be92094a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css */ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_bdgt_ors_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_bdgt_ors_add_vue_vue_type_template_id_be92094a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-be92094a"],['__file',"resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_template_id_be92094a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_template_id_be92094a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=template&id=be92094a&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_bdgt_ors_add_vue_vue_type_style_index_0_id_be92094a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/bdgt/ors/bdgt_ors_add.vue?vue&type=style&index=0&id=be92094a&scoped=true&lang=css");


/***/ })

}]);