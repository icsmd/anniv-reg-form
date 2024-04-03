"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_cash_payout_cash_payout_view_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libraries/utilities */ "./resources/js/libraries/utilities.js");
/* harmony import */ var _libraries_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libraries/request.js */ "./resources/js/libraries/request.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_utilities__WEBPACK_IMPORTED_MODULE_1__["default"], _libraries_request_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      iFsId: 0,
      aFsDetails: [],
      aFundCluster: [],
      aRegionList: [],
      sFsStat: '',
      aTaxClass: [],
      sSelectedTax: '',
      fTaxVATValue: 1.12,
      aTaxCodes: [],
      aFilteredTaxCodes: [],
      aCpoList: []
    };
  },
  watch: {
    sSelectedTax: function sSelectedTax(sVal) {
      this.computeTax(0);
      this.filterTaxCodes(sVal);
    }
  },
  mounted: function mounted() {
    this.getFsDetails();
    this.initEventListener();
  },
  methods: {
    // Initializing Plugins
    initializePlugins: function initializePlugins() {
      // Init Select2 - Basic Single
      $(".type-select").select2();
      $(".cpo-select").select2();

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
    getFsDetails: function getFsDetails() {
      var _this = this;
      var mSelf = this;
      this.iFsId = this.$route.params.id;
      this.getRequest('bdgt/get-fund-source', function (mResponse) {
        _this.aFsDetails = mResponse.data[0];
        _this.sFsStat = _this.aFsDetails.fs_status;
        if (_this.sFsStat === 'FOR PO') {
          $('#edit_transact_div').css('display', '');
          setTimeout(function () {
            mSelf.getCashPaidOut();
            mSelf.initializePlugins();
          }, 500);
          setTimeout(function () {
            mSelf.setFieldsValue();
          }, 1000);
        } else {
          $('#edit_transact_div').css('display', 'none');
          $('#info_message_div').css('display', '');
        }
      }, {
        fs_id: this.iFsId
      });
    },
    getCashPaidOut: function getCashPaidOut() {
      var _this2 = this;
      this.getRequest('cpo/get-list', function (mResponse) {
        _this2.aCpoList = mResponse.data;
      });
    },
    setFieldsValue: function setFieldsValue() {
      $('#inpDateIssued').val(moment__WEBPACK_IMPORTED_MODULE_3___default()().format('MM/DD/YYYY'));
    },
    initEventListener: function initEventListener() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'href') {
          window.location.href = '/front/cash/payout/manage';
        }
        if (event.target.id === 'btnIssuePayout') {
          mSelf.issuePayout();
        }
      }, false);
    },
    issuePayout: function issuePayout() {
      var _this3 = this;
      var mSelf = this;
      var oParams = {
        cpo_no: $('#inp_po_number').val(),
        cpo_issue_date: this.convertDateFormat($('#inpDateIssued').val(), 'YYYY-MM-DD'),
        cpo_type: $('#inp_type').val(),
        // cpo_ref_no: $('#inp_mother_ada').val(),
        cpo_total_amount: mSelf.aFsDetails.fs_net_amount,
        ors_no: mSelf.aFsDetails.ors_no,
        region_id: mSelf.aFsDetails.region_id,
        cpo_remarks: $('#inp_remarks').val(),
        fs_status: 'RELEASED',
        datetime_po_forwarded: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:mm:ss')
      };
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Confirmation',
        html: "\n               <br>\n                <div class=\"col-md-12; font-size: 17px\">\n                    <p style=\"text-align: left; font-weight: 700;\">Please review your entries:</p>\n                    <table class=\"table table-striped table-hover\">\n                        <tbody>\n                            <tr>\n                                <td width=\"40%\" style=\"text-align: left; font-weight: 700;\">ADA/Check No.:</td>\n                                <td style=\"text-align: left\">" + oParams.cpo_no + "</td>\n                            <tr>\n                            <tr>\n                                <td width=\"40%\" style=\"text-align: left; font-weight: 700;\">Date of Issue:</td>\n                                <td style=\"text-align: left\">" + oParams.cpo_issue_date + "</td>\n                            <tr>\n                            <tr>\n                                <td width=\"40%\" style=\"text-align: left; font-weight: 700;\">Type:</td>\n                                <td style=\"text-align: left\">" + $('#inp_type option:selected').text() + "</td>\n                            <tr>\n                                <tr>\n                                <td width=\"40%\" style=\"text-align: left; font-weight: 700;\">Mother ADA:</td>\n                                <td style=\"text-align: left\">" + $('#inp_mother_ada option:selected').text() + "</td>\n                            <tr>\n                                <tr>\n                                <td width=\"40%\" style=\"text-align: left; font-weight: 700;\">Remarks:</td>\n                                <td style=\"text-align: left\">" + oParams.cpo_remarks + "</td>\n                            <tr>\n                        </tbody>\n                    </table>\n                    <p style=\"margin-top: 10px;\">By issuing a ADA/Check number, you will not be able to modify the details you provided and this will be considered as RELEASED. Are you sure you want to proceed?</p>\n                </div>\n                ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceed."
      }).then(function (result) {
        if (result.isConfirmed) {
          // console.log(oParams);
          _this3.postRequest('cash/update-fund-source/' + _this3.iFsId, oParams, function (mResponse) {
            _this3.showSuccessAlert('Successfully issued the Payout');
            setTimeout(function () {
              mSelf.getFsDetails();
            }, 1000);
          });
        }
      });
    },
    filterParams: function filterParams() {
      var aTransactDate = $('#inpDateTransact').val().split('/');
      var oParam = {
        transact_date: $('#inpDateTransact').val(),
        transact_month: aTransactDate[0],
        transact_year: aTransactDate[2],
        fs_id: $('#inp_fund_source').val(),
        uacs_id: $('#inp_uacs').val(),
        net_amount: $('#inp_net_amount').val()
      };
      if (this.sSheetFundType !== 'ps') {
        oParam = Object.assign({}, oParam, {
          or_number: $('#inp_or_number').val(),
          gross_amount: $('#inp_gross_amount').val(),
          tax_amount: $('#inp_tax_amount').val(),
          payee_id: $('#inp_payee').val(),
          tcl_id: $('#inp_tax_class').val()
        });
      }
      return oParam;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-26bc3478"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "main"
};
var _hoisted_2 = {
  id: "content_wrapper"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header id=\"topbar\" class=\"alt\" data-v-26bc3478><div class=\"topbar-left\" data-v-26bc3478><ol class=\"breadcrumb\" data-v-26bc3478><li class=\"crumb-trail\" data-v-26bc3478> Manage ORS </li><li class=\"crumb-link\" data-v-26bc3478><a href=\"/front/sdor/get-cash-reg-summary\" data-v-26bc3478>View ORS/DV/ADA</a></li><li class=\"crumb-active\" data-v-26bc3478><a data-v-26bc3478>ORS/DV/ADA Details</a></li></ol></div></header>", 1);
var _hoisted_4 = {
  "class": "panel"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "panel-title"
  }, " View Transaction Details "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/front/bdgt/ors/view",
    "data-attr": "href",
    "class": "btn btn-md btn-primary pull-right",
    style: {
      "margin-top": "0.5%"
    }
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-arrow-left"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go back to Viewing Table ")])], -1 /* HOISTED */);
});
var _hoisted_6 = {
  "class": "panel-body"
};
var _hoisted_7 = {
  "class": "panel panel-colorbox-open panel-info col-md-12",
  id: "spy2"
};
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-title hidden-xs"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "fa fa-list-alt"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ORS Details ")])], -1 /* HOISTED */);
});
var _hoisted_10 = {
  "class": "panel-body pn"
};
var _hoisted_11 = {
  style: {
    "margin-bottom": "1%"
  }
};
var _hoisted_12 = {
  "class": "col-md-4"
};
var _hoisted_13 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, "Sys ID:", -1 /* HOISTED */);
});
var _hoisted_15 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, "Date/Time Encoded:", -1 /* HOISTED */);
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
      "width": "45%"
    }
  }, "Date/Time Last Modified:", -1 /* HOISTED */);
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
      "width": "45%"
    }
  }, "Short Description (Title):", -1 /* HOISTED */);
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
      "width": "45%"
    }
  }, "Type: ", -1 /* HOISTED */);
});
var _hoisted_23 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Requesting Office:", -1 /* HOISTED */);
});
var _hoisted_25 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "45%"
    }
  }, "Referenced DF Number: ", -1 /* HOISTED */);
});
var _hoisted_27 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_28 = {
  "class": "col-md-4"
};
var _hoisted_29 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Current Status:", -1 /* HOISTED */);
});
var _hoisted_31 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Number:", -1 /* HOISTED */);
});
var _hoisted_33 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Date Issued:", -1 /* HOISTED */);
});
var _hoisted_35 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ORS Date/Time Last Forwarded:", -1 /* HOISTED */);
});
var _hoisted_37 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Number:", -1 /* HOISTED */);
});
var _hoisted_39 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Date Issued:", -1 /* HOISTED */);
});
var _hoisted_41 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "DV Date/Time Last Forwarded:", -1 /* HOISTED */);
});
var _hoisted_43 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_44 = {
  "class": "col-md-4"
};
var _hoisted_45 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ADA/Check Number:", -1 /* HOISTED */);
});
var _hoisted_47 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ADA/Check Type:", -1 /* HOISTED */);
});
var _hoisted_49 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ADA/Check Date Issued:", -1 /* HOISTED */);
});
var _hoisted_51 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "ADA/Check Date/Time Last Forwarded:", -1 /* HOISTED */);
});
var _hoisted_53 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_54 = {
  "class": "panel-body pn"
};
var _hoisted_55 = {
  "class": "col-md-7"
};
var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "ORS Particulars Breakdown", -1 /* HOISTED */);
});
var _hoisted_58 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "3%",
    "margin-bottom": "3%"
  }
};
var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "UACS Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "UACS Account Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Amount")])], -1 /* HOISTED */);
});
var _hoisted_60 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_61 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_62 = {
  style: {
    "text-align": "left"
  }
};
var _hoisted_63 = {
  "class": "col-md-5"
};
var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "TOTAL:", -1 /* HOISTED */);
});
var _hoisted_66 = {
  "class": "table table-bordered mbn",
  cellspacing: "0",
  width: "100%",
  style: {
    "margin-top": "4%",
    "margin-bottom": "3%"
  }
};
var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Gross Amount:", -1 /* HOISTED */);
});
var _hoisted_68 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_69 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Tax WithHeld:", -1 /* HOISTED */);
});
var _hoisted_71 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_72 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_73 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    style: {
      "text-align": "left",
      "width": "35%"
    }
  }, "Net Amount:", -1 /* HOISTED */);
});
var _hoisted_74 = {
  style: {
    "text-align": "right"
  }
};
var _hoisted_75 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"panel panel-colorbox-open panel-system col-md-8\" id=\"edit_transact_div\" style=\"display:none;\" data-v-26bc3478><br data-v-26bc3478><div class=\"panel-heading\" data-v-26bc3478><div class=\"panel-title hidden-xs\" data-v-26bc3478><span class=\"fa fa-pencil-square-o\" data-v-26bc3478></span>Issue ADA/Check Number </div></div><div class=\"panel-body pn\" data-v-26bc3478><div class=\"col-md-12\" data-v-26bc3478><div class=\"form-group\" data-v-26bc3478><div class=\"row\" style=\"margin:2%;\" data-v-26bc3478><div class=\"col-lg-6 custom-margin-top\" data-v-26bc3478><label for=\"inp_po_number\" class=\"col-lg-6 control-label\" data-v-26bc3478>ADA/Check Number: </label><input type=\"text\" id=\"inp_po_number\" class=\"form-control\" placeholder=\"Enter ADA/Check Number\" data-v-26bc3478><p id=\"p_dv_number\" style=\"display:none;\" class=\"error_msg\" data-v-26bc3478>ADA/Check Number is required!</p></div><div class=\"col-lg-3 custom-margin-top\" data-v-26bc3478><label for=\"inpDateIssued\" class=\"col-lg-12 control-label\" data-v-26bc3478>Date Issued:</label><div class=\"admin-form\" data-v-26bc3478><label for=\"datepicker1\" class=\"field prepend-icon\" data-v-26bc3478><input type=\"text\" id=\"inpDateIssued\" name=\"inpDateIssued\" class=\"gui-input\" readonly data-v-26bc3478><label class=\"field-icon\" data-v-26bc3478><i class=\"fa fa-calendar-o\" data-v-26bc3478></i></label></label><p id=\"p_date_issued\" style=\"display:none;\" class=\"error_msg\" data-v-26bc3478>Date Issued is required! </p></div></div><div class=\"col-lg-3 custom-margin-top\" data-v-26bc3478><label for=\"inp_type\" class=\"col-lg-12 control-label\" data-v-26bc3478>Type:</label><select class=\"select2-single form-control type-select\" id=\"inp_type\" data-v-26bc3478><option disabled value=\"0\" selected data-v-26bc3478>Please select type</option><option value=\"ADA\" data-v-26bc3478>ADA</option><option value=\"CHECK\" data-v-26bc3478>Check </option></select></div><!-- &lt;div class=&quot;col-lg-6 custom-margin-top&quot;&gt;\r\n                                            &lt;label for=&quot;inp_region&quot; class=&quot;col-lg-12 control-label&quot;&gt;Mother ADA (Optional):\r\n                                            &lt;/label&gt;\r\n                                            &lt;select class=&quot;select2-single form-control cpo-select&quot; id=&quot;inp_mother_ada&quot;&gt;\r\n                                                &lt;option disabled value=&quot;0&quot; selected&gt;N/A&lt;/option&gt;\r\n                                                &lt;option v-for=&quot;item in aCpoList&quot; :value=&quot;item.cpo_id&quot;&gt; {{ item.cpo_no }}\r\n                                                &lt;/option&gt;\r\n                                            &lt;/select&gt;\r\n                                        &lt;/div&gt; --><div class=\"col-lg-12 custom-margin-top\" data-v-26bc3478><label for=\"inp_remarks\" class=\"col-lg-12 control-label\" data-v-26bc3478>Remarks:</label><div class=\"admin-form\" data-v-26bc3478><section data-v-26bc3478><label class=\"field prepend-icon\" data-v-26bc3478><textarea class=\"gui-textarea\" id=\"inp_remarks\" name=\"comment\" placeholder=\"Enter your remarks here...\" data-v-26bc3478></textarea><label for=\"comment\" class=\"field-icon\" data-v-26bc3478><i class=\"fa fa-comments\" data-v-26bc3478></i></label><span class=\"input-footer\" data-v-26bc3478><strong data-v-26bc3478>Hint:</strong> You may provide the long description in this section.</span></label></section></div></div><div class=\"col-lg-12\" data-v-26bc3478><button type=\"button\" id=\"btnIssuePayout\" class=\"btn btn-lg btn-system pull-right\" style=\"margin-top:23px;\" data-v-26bc3478><i class=\"fa fa-share-square-o\" data-v-26bc3478></i> Release Payout </button></div></div></div></div></div></div>", 1);
var _hoisted_77 = {
  "class": "col-md-12",
  id: "info_message_div",
  style: {
    "margin-top": "19px"
  }
};
var _hoisted_78 = {
  key: 0,
  "class": "alert alert-warning"
};
var _hoisted_79 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */);
});
var _hoisted_80 = {
  key: 1,
  "class": "alert alert-warning"
};
var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */);
});
var _hoisted_82 = {
  key: 2,
  "class": "alert alert-success"
};
var _hoisted_83 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */);
});
var _hoisted_84 = {
  key: 3,
  "class": "alert alert-default"
};
var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-info-circle pr10"
  }, null, -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_C_Layout_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_Header");
  var _component_C_Layout_CASH_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("C_Layout_CASH_Sidebar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_C_Layout_CASH_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Content-Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start: Topbar "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Topbar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Input Fields "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.temp_id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.convertDateFormat($data.aFsDetails.date_created, 'DD-MMM-YYYY HH:mm:ss')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.date_modified, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_desc), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_type), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.region_abbr) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.region_desc) + ")", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.df_ref_no)), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.fs_status), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aFsDetails.ors_no), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.ors_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_ors_forwarded, 'date')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.dv_no)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.dv_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_dv_forwarded, 'date')), 1 /* TEXT */)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_no)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_type)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.cpo_issue_date, 'date', 'DD-MMM-YYYY')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr>\r\n                                                <th style=\"text-align: left; width: 35%\">ADA/Check Reference No.:</th>\r\n                                                <td style=\"text-align: left;\">{{ nullCheck(aFsDetails.cpo_ref_no) }}</td>\r\n                                            </tr> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.datetime_po_forwarded, 'date')), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aFsDetails.breakdown, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_code), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.uacs_acc_title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck(item.fsb_amount, 'number')), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_gross_amount, 'number')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_tax_withheld, 'number')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.nullCheck($data.aFsDetails.fs_net_amount, 'number')), 1 /* TEXT */)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: TRANSACTION'S CURRENT DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: EDIT ORS DETAILS "), _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: EDIT ORS DETAILS "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [$data.sFsStat === 'OPEN' || $data.sFsStat === 'FOR ORS REV' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ORS is not yet finalized and not yet ready for DV issuance. ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'FOR DV' || $data.sFsStat === 'FOR DV REV' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The ORS is not yet finalized and not yet ready for ADA/Check issuance. ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'RELEASED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The requested budget for this ORS is already released. ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.sFsStat === 'CLEARED' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This ORS is already cleared. ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End: Content-Wrapper ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntable[data-v-26bc3478],\r\nth[data-v-26bc3478],\r\ntr[data-v-26bc3478],\r\ntd[data-v-26bc3478],\r\ntbody[data-v-26bc3478] {\r\n    border: 1px solid #d1d1d1 !important;\n}\n.c-margin-top[data-v-26bc3478] {\r\n    margin-top: 5% !important;\n}\n.error_msg[data-v-26bc3478] {\r\n    color: red !important\n}\n.custom-margin-top[data-v-26bc3478] {\r\n    margin-top: 2%\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_style_index_0_id_26bc3478_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_style_index_0_id_26bc3478_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_style_index_0_id_26bc3478_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view_details.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cash_payout_view_details_vue_vue_type_template_id_26bc3478_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true */ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true");
/* harmony import */ var _cash_payout_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash_payout_view_details.vue?vue&type=script&lang=js */ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js");
/* harmony import */ var _cash_payout_view_details_vue_vue_type_style_index_0_id_26bc3478_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css */ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_cash_payout_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_cash_payout_view_details_vue_vue_type_template_id_26bc3478_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-26bc3478"],['__file',"resources/js/components/pages/cash/payout/cash_payout_view_details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view_details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_template_id_26bc3478_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_template_id_26bc3478_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=template&id=26bc3478&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_cash_payout_view_details_vue_vue_type_style_index_0_id_26bc3478_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/cash/payout/cash_payout_view_details.vue?vue&type=style&index=0&id=26bc3478&scoped=true&lang=css");


/***/ })

}]);