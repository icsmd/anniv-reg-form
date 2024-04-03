"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_sdor_sheets_sdor_view_cr_sheet_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");
/* harmony import */ var _libraries_modalShowEntryDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libraries/modalShowEntryDetails.js */ "./resources/js/libraries/modalShowEntryDetails.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request_js__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_utilities__WEBPACK_IMPORTED_MODULE_2__["default"], _libraries_modalShowEntryDetails_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      sSheetTypeLink: '',
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
      aSheet: [],
      aSheetDetails: [],
      sActiveDate: '',
      iSheetId: 0,
      fTotalAmount: 0,
      sMonth: '',
      sSheetFundType: '',
      fTotalGrossAmount: 0,
      fTotalTaxAmount: 0,
      fTotalNetAmount: 0,
      aRemarksHistory: []
    };
  },
  mounted: function mounted() {
    this.initEventListener();
    this.getSheetDetails();
  },
  methods: {
    initEventListener: function initEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = '/front/sdor/view-sheets/' + mSelf.sSheetFundType;
        }
        if (event.target.dataset.action === 'revise-sheet') {
          var sMessage = 'This will resubmit all the entries included in this sheet including the comments/remarks you provided and will notify the OC for review and approval. Do you want to proceed?';
          mSelf.validateSubmission('REVISED', sMessage);
        }
      }, false);
    },
    initTblSheets: function initTblSheets() {
      $('#tbl_cash_reg_summary').DataTable(this.aTableConfig);
    },
    getSheetDetails: function getSheetDetails() {
      var _this = this;
      this.iSheetId = this.$route.params.id;
      this.getRequest('sdor/get-sheets', function (mResponse) {
        _this.aSheet = mResponse.data[0];
        _this.aRemarksHistory = _this.aSheet.remarks_history;
        _this.sSheetFundType = _this.aSheet.sheet_fund_type;
        _this.setSheetTypeLink();
        _this.aSheetDetails = mResponse.data[0].cash_reg_entries;
        _this.sMonth = moment(_this.aSheet.transact_date).format('MMMM YYYY');
        _this.computeTotalAmount();
      }, {
        sheet_id: this.iSheetId
      });
    },
    setSheetTypeLink: function setSheetTypeLink() {
      if (this.sSheetFundType === 'ps') {
        this.sSheetTypeLink = 'Personnel Services';
      } else if (this.sSheetFundType === 'mooe') {
        this.sSheetTypeLink = 'Maintenance and Other Operating Expenses';
      } else {
        this.sSheetTypeLink = 'Special Requests';
      }
    },
    computeTotalAmount: function computeTotalAmount() {
      var fTotalNet = this.aSheetDetails.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.net_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalTax = this.aSheetDetails.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.tax_amount);
        return accumulator + fValue;
      }, 0);
      var fTotalGross = this.aSheetDetails.reduce(function (accumulator, currentObject) {
        var fValue = parseFloat(currentObject.gross_amount);
        return accumulator + fValue;
      }, 0);
      this.fTotalGrossAmount = fTotalGross.toFixed(2);
      this.fTotalTaxAmount = fTotalTax.toFixed(2);
      this.fTotalNetAmount = fTotalNet.toFixed(2);
    },
    validateSubmission: function validateSubmission(sStatus, sMessage) {
      var sRemarks = $('#txt_remarks').val();
      if (sRemarks === '') {
        this.showErrorAlert('Remarks field is required!');
        $('#p_remarks').css('display', '');
      } else {
        $('#p_remarks').css('display', 'none');
        this.updateSheet(sStatus, sRemarks, sMessage);
      }
    },
    updateSheet: function updateSheet(sStatus, sRemarks, sMessage) {
      var _this2 = this;
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Confirmation',
        html: sMessage,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed."
      }).then(function (result) {
        if (result.isConfirmed) {
          var oParams = {
            remarks: sRemarks,
            status: sStatus
          };
          _this2.postRequest('sdor/update-sheet/' + mSelf.iSheetId, oParams, function (mResponse) {
            mSelf.showSuccessAlert("Successfully updated the sheet's details");
            mSelf.getSheetDetails();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7d65b212"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  id: "content_wrapper"
};
var _hoisted_3 = {
  id: "topbar",
  "class": "alt"
};
var _hoisted_4 = {
  "class": "topbar-left"
};
var _hoisted_5 = {
  "class": "breadcrumb"
};
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "crumb-trail"
  }, " Cash Management ", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "crumb-trail"
  }, " Manage Sheet", -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "crumb-link"
};
var _hoisted_9 = {
  href: "#"
};
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "crumb-active"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, "Sheet Details")], -1 /* HOISTED */);
});
var _hoisted_11 = {
  "class": "panel"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " View Sheet Details "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/front/sdor/view-entry-summary",
    "data-attr": "href",
    "class": "btn btn-md btn-primary pull-right",
    style: {
      "margin-top": "0.5%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-arrow-left"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go back to Summary of Sheets ")])], -1 /* HOISTED */);
});
var _hoisted_13 = {
  "class": "panel-body"
};
var _hoisted_14 = {
  "class": "col-md-5",
  style: {
    "margin-bottom": "5px"
  }
};
var _hoisted_15 = {
  "class": "table table-bordered mbn",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "60%"
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "40%"
    }
  }, "Sheet No: ", -1 /* HOISTED */);
});
var _hoisted_17 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "40%"
    }
  }, "Responsibility Center Code: ", -1 /* HOISTED */);
});
var _hoisted_19 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "40%"
    }
  }, "Status: ", -1 /* HOISTED */);
});
var _hoisted_21 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "40%"
    }
  }, "Last Updated On: ", -1 /* HOISTED */);
});
var _hoisted_23 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_24 = {
  "class": "col-md-12"
};
var _hoisted_25 = {
  "class": "panel panel-visible",
  id: "spy2"
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_27 = {
  "class": "panel-heading"
};
var _hoisted_28 = {
  "class": "panel-title hidden-xs",
  style: {
    "color": "rgb(32, 32, 32)"
  }
};
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "glyphicon glyphicon-tasks"
  }, null, -1 /* HOISTED */);
});
var _hoisted_30 = {
  "class": "panel-body pn"
};
var _hoisted_31 = {
  "class": "table table-bordered mbn",
  id: "tbl_cash_reg_summary",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "SysId"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "OR Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Payee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "UACS Object Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Nature of Payment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Gross"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Tax"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "center"
    }
  }, "Net")])], -1 /* HOISTED */);
});
var _hoisted_33 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_34 = ["data-id"];
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
var _hoisted_37 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_38 = {
  style: {
    "text-align": "center"
  }
};
var _hoisted_39 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_40 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_41 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_42 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    colspan: "6",
    style: {
      "text-align": "right"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "TOTAL:")], -1 /* HOISTED */);
});
var _hoisted_44 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_45 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_46 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_47 = {
  "class": "col-md-03"
};
var _hoisted_48 = {
  "class": "alert alert-default light alert-dismissable"
};
var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "alert",
    "aria-hidden": "true"
  }, "×", -1 /* HOISTED */);
});
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-cog pr10 hidden"
  }, null, -1 /* HOISTED */);
});
var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Record of Remarks/Comments:", -1 /* HOISTED */);
});
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_53 = {
  "class": "panel-body pn",
  style: {
    "margin-top": "1%"
  }
};
var _hoisted_54 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%"
};
var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    width: "20%",
    style: {
      "text-align": "center"
    }
  }, "Date and Time"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    width: "20%",
    style: {
      "text-align": "center"
    }
  }, "Remarks/Comment By:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    width: "60%",
    style: {
      "text-align": "center"
    }
  }, "Remarks/Comment")])], -1 /* HOISTED */);
});
var _hoisted_56 = {
  width: "20%",
  style: {
    "text-align": "center"
  }
};
var _hoisted_57 = {
  width: "20%",
  style: {
    "text-align": "center"
  }
};
var _hoisted_58 = {
  width: "60%",
  style: {
    "text-align": "left"
  }
};
var _hoisted_59 = {
  "class": "admin-form"
};
var _hoisted_60 = {
  key: 0,
  "class": "col-md-9"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"section\" data-v-7d65b212><label class=\"field prepend-icon\" data-v-7d65b212><textarea class=\"gui-textarea\" id=\"txt_remarks\" name=\"comment\" placeholder=\"Enter your remarks here...\" data-v-7d65b212></textarea><label for=\"comment\" class=\"field-icon\" data-v-7d65b212><i class=\"fa fa-comments\" data-v-7d65b212></i></label><span class=\"input-footer\" data-v-7d65b212><strong data-v-7d65b212>Hint:</strong>You may specify the changes if for revision or provide a comment if for posting.</span></label><p id=\"p_remarks\" class=\"error_msg\" style=\"display:none;\" data-v-7d65b212>Remarks is required!</p></div>", 1);
var _hoisted_62 = [_hoisted_61];
var _hoisted_63 = {
  key: 1,
  "class": "col-md-3"
};
var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "data-action": "revise-sheet",
    type: "button",
    "class": "btn btn-block btn-warning pull-right",
    style: {
      "margin-bottom": "10px"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-undo"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Re-Submit for Review ")], -1 /* HOISTED */);
});
var _hoisted_65 = [_hoisted_64];
var _hoisted_66 = {
  key: 2,
  "class": "col-md-4"
};
var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alert alert-warning"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-warning pr10"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Awaiting review and approval. ")], -1 /* HOISTED */);
});
var _hoisted_68 = [_hoisted_67];
var _hoisted_69 = {
  key: 3,
  "class": "col-md-7"
};
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alert alert-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This sheet is already posted. All entries included in this sheet are now locked. ")], -1 /* HOISTED */);
});
var _hoisted_71 = [_hoisted_70];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_SDOR_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_SDOR_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_SDOR_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_5, [_hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sSheetTypeLink), 1 /* TEXT */)]), _hoisted_10])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: SHEET DETAILS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSheet.sheet_no === null ? '(Sheet not yet posted)' : $data.aSheet.sheet_no), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSheet.region_abbr), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSheet.status), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSheet.date_modified), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Period Covered: Whole Month of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sMonth), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aSheetDetails, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      "data-action": "view-entry-details",
      "data-id": item.cr_no
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.temp_id), 9 /* TEXT, PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat(item.date_created, 'DD-MMM-YYYY')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.or_number), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payee_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_desc), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.gross_amount)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.tax_amount)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat(item.net_amount)), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.fTotalGrossAmount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.fTotalTaxAmount)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertNumberFormat($data.fTotalNetAmount)), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("-REMARKS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aRemarksHistory, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user_details.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user_details.lastname), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.remarks), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: SHEET DETAILS TABLE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DISPLAY IF THE SHEET STATUS IS FOR REVISION -"), $data.aSheet.status === 'FOR REVISION' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [].concat(_hoisted_62))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DISPLAY IF THE SHEET STATUS IS FOR REVISION -"), $data.aSheet.status === 'FOR REVISION' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, [].concat(_hoisted_65))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DISPLAY IF THE SHEET IS OPEN OR FOR REVISION -"), $data.aSheet.status === 'OPEN' || $data.aSheet.status === 'REVISED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [].concat(_hoisted_68))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DISPLAY IF THE SHEET IS POSTED -"), $data.aSheet.status === 'POSTED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_69, [].concat(_hoisted_71))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./resources/js/libraries/modalShowEntryDetails.js":
/*!*********************************************************!*\
  !*** ./resources/js/libraries/modalShowEntryDetails.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./resources/js/libraries/utilities.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_utilities__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      iCrNo: 0,
      sFundSource: '',
      aEntryDetails: []
    };
  },
  mounted: function mounted() {
    this.initThisLibEventListener();
  },
  methods: {
    showViewDetailsModal: function showViewDetailsModal() {
      var mSelf = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        width: 700,
        html: mSelf.buildInfoTable(),
        showCancelButton: false,
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
        confirmButtonText: "<i class=\"fa fa-check\"></i> Okay got it",
        confirmButtonAriaLabel: "Save",
        cancelButtonText: "<i class=\"fa fa-times\"></i> Close",
        cancelButtonAriaLabel: "Cancel"
      });
    },
    buildInfoTable: function buildInfoTable() {
      var oHtmlInfoTable = "\n            <div class=\"panel panel-colorbox-open panel-info col-md-12\" id=\"spy2\">\n            <br>\n            <div class=\"panel-heading\">\n              <div class=\"panel-title hidden-xs\">\n                <span class=\"fa fa-list-alt\"></span>Transaction's Current Details\n              </div>\n            </div>\n            <div class=\"panel-body pn\">\n              <div style=\"margin: 0%; font-size: 15px\">\n                <table class=\"table table-bordered mbn\" cellspacing=\"0\" width=\"60%\" style=\"margin-top: 3%;\">\n                  <tbody>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Sys ID</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.temp_id + "</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <table class=\"table table-bordered mbn\" cellspacing=\"0\" width=\"60%\" style=\"margin-top: 3%;\">\n                  <tbody>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Date of Transaction</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.transact_date + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Date/Time Encoded</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.date_created + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Date/Time Last Modified</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.date_modified + "</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <br>\n                <table class=\"table table-bordered mbn\" cellspacing=\"0\" width=\"60%\">\n                  <tbody>\n                    <tr v-if=\"sSheetFundType !== 'ps'\">\n                      <th style=\"text-align: left; width: 35%\">OR Number</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.or_number + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Responsibility Center Code</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.region_abbr + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Fund Source Details</th>\n                      <td style=\"text-align: left;\">\n                        <b>ORS No.:</b>" + this.sFundSource + "<br>\n                        <b>DV No.:</b> " + this.aEntryDetails.fs_dv_no + "<br>\n                        <b>ADA/Check No.:</b> " + this.aEntryDetails.fs_cpo_no + "\n                      </td>\n                    </tr>\n                    <tr v-if=\"sSheetFundType !== 'ps'\">\n                      <th style=\"text-align: left; width: 35%\">Payee's Details</th>\n                      <td style=\"text-align: left;\">\n                        <b>Name:</b> " + this.aEntryDetails.payee_name + "<br>\n                        <b>TIN:</b> " + this.aEntryDetails.payee_tin + "<br>\n                        <b>Address:</b> " + this.aEntryDetails.payee_address + "<br>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Nature of Payment Details</th>\n                      <td style=\"text-align: left;\">\n                        <b>UACS Object Code:</b> " + this.aEntryDetails.uacs_code + "<br>\n                        <b>Description:</b> " + this.aEntryDetails.uacs_desc + " <br>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Tax Type:</th>\n                      <td style=\"text-align: left;\">" + this.aEntryDetails.tcl_desc + "</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <br>\n                <table class=\"table table-bordered mbn\" cellspacing=\"0\" width=\"60%\">\n                  <tbody>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Gross Amount</th>\n                      <td style=\"text-align: right;\">" + this.convertNumberFormat(this.aEntryDetails.gross_amount) + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Tax Amount</th>\n                      <td style=\"text-align: right;\">" + this.convertNumberFormat(this.aEntryDetails.tax_amount) + "</td>\n                    </tr>\n                    <tr>\n                      <th style=\"text-align: left; width: 35%\">Net Amount</th>\n                      <td style=\"text-align: right;\">" + this.convertNumberFormat(this.aEntryDetails.net_amount) + "</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n            ";
      if (this.$root.aUserInfo.type === 'sdor') {
        oHtmlInfoTable = oHtmlInfoTable + "<button type=\"button\" class=\"btn btn-lg btn-warning\" data-action=\"edit-entry\">\n                <i class=\"fa fa-pencil-square-o\"></i> Go to Edit details Page\n                </button>";
      }
      return oHtmlInfoTable;
    },
    getEntryDetails: function getEntryDetails(iId) {
      var _this = this;
      this.getRequest('sdor/get-entry-details/' + iId, function (mResponse) {
        _this.aEntryDetails = mResponse.data[0];
        _this.iCrNo = _this.aEntryDetails.cr_no;
        _this.sFundSource = _this.aEntryDetails.fs_ors_no + ' (' + _this.aEntryDetails.fs_desc + ')';
        _this.showViewDetailsModal();
      });
    },
    initThisLibEventListener: function initThisLibEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.action === 'view-entry-details') {
          mSelf.getEntryDetails(event.target.dataset.id);
        }
        if (event.target.dataset.action === 'edit-entry') {
          window.location.href = '/front/sdor/view-entry-details/' + mSelf.iCrNo;
        }
      }, false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.error_msg[data-v-7d65b212] {\r\n  color: red;\r\n  margin-top: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_style_index_0_id_7d65b212_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_style_index_0_id_7d65b212_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_style_index_0_id_7d65b212_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sdor_view_cr_sheet_details_vue_vue_type_template_id_7d65b212_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true */ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true");
/* harmony import */ var _sdor_view_cr_sheet_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdor_view_cr_sheet_details.vue?vue&type=script&lang=js */ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js");
/* harmony import */ var _sdor_view_cr_sheet_details_vue_vue_type_style_index_0_id_7d65b212_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css */ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_sdor_view_cr_sheet_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sdor_view_cr_sheet_details_vue_vue_type_template_id_7d65b212_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7d65b212"],['__file',"resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheet_details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_template_id_7d65b212_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_template_id_7d65b212_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=template&id=7d65b212&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sdor_view_cr_sheet_details_vue_vue_type_style_index_0_id_7d65b212_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/sdor/sheets/sdor_view_cr_sheet_details.vue?vue&type=style&index=0&id=7d65b212&scoped=true&lang=css");


/***/ })

}]);