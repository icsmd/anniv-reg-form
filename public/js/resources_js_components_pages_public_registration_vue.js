"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_public_registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libraries_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libraries/request */ "./resources/js/libraries/request.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_libraries_request__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      aMstList: [],
      sInpEmail: '#inp_email',
      sInpSalute: '#inp_salute',
      sInpFname: '#inp_fname',
      sInpMInitial: '#inp_minitial',
      sInpLname: '#inp_lname',
      sInpDept: '#inp_dept',
      sInpDesig: '#inp_desig',
      sInpMst: '#inp_mst',
      sInpContact: '#inp_contact',
      sInpPicture: '#inp_picture',
      sInpPicturePreview: '#inp_pic_name_preview',
      sInpIdCode: '#inp_idcode',
      sEmailValidStat: 'false',
      bFormValid: false,
      bFormSubmitted: false,
      sConvertedImage: '',
      aSubmitResult: [],
      sTempEmailValue: ''
    };
  },
  created: function created() {
    this.sActivePage = 'registration';
    document.title = 'Anniversary Celebration Registration';
  },
  watch: {
    /**
     * Checks the live changes of sEmailValidStat value
     */
    sEmailValidStat: function sEmailValidStat(sValid) {
      if (sValid === 'valid') {
        $('#div_main_form').css('display', '');
        $('#div_footer_form').css('display', '');
        $('.mst-select').select2();
      } else if (true) {
        $('#div_main_form').css('display', 'none');
        $('#div_footer_form').css('display', 'none');
      }
    }
  },
  mounted: function mounted() {
    this.getMstList();
    this.initEventListeners();
  },
  methods: {
    /**
     * Get Membership Type List
     */
    getMstList: function getMstList() {
      var _this = this;
      this.getRequest('get-mst', function (mResponse) {
        _this.aMstList = mResponse.data;
      });
    },
    /**
     * Initialize event listeners
     */
    initEventListeners: function initEventListeners() {
      var mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnValidateEmail') {
          mSelf.validateEmail();
        }
        if (event.target.id === 'inp_picture') {
          mSelf.getImageUpload();
        }
        if (event.target.id === 'btnSubmitForm') {
          mSelf.submitForm();
        }
      }, false);

      // Email Revalidation
      $(this.sInpEmail).keyup(function (event) {
        event.preventDefault();
        if (mSelf.sEmailValidStat === 'valid') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Wait!",
            text: "By changing the email, you need to revalidate the email once again and you won't be able to submit your entries until it's validated (Your progress will be saved). Are you sure you want to proceed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to proceed."
          }).then(function (result) {
            if (result.isConfirmed) {
              mSelf.sEmailValidStat = 'false';
              $(mSelf.sInpEmail).css('background-color', '#ffffff');
            } else {
              $(mSelf.sInpEmail).val(mSelf.sTempEmailValue);
            }
          });
        }
      });
    },
    /**
     * Image upload
     */
    getImageUpload: function getImageUpload() {
      var mSelf = this;
      var oInput = document.createElement('input');
      oInput.type = 'file';
      oInput.onchange = function (e) {
        var file = e.target.files[0];
        if (file) {
          var aValidationResult = mSelf.validateImage(file);
          if (aValidationResult.bResult === true) {
            $(mSelf.sInpPicturePreview).val(file.name);
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              var base64String = reader.result.split(',')[1];
              mSelf.sConvertedImage = 'data:' + file.type + ';base64,' + base64String;
            };
            reader.onerror = function (error) {
              mSelf.showErrorAlert('Error:', error);
            };
          } else {
            // Reset values
            $(mSelf.sInpPicturePreview).val('');
            $(mSelf.sInpPicturePreview).css('background-color', '#ffffff');
            mSelf.sConvertedImage = '';
            mSelf.showErrorAlert(aValidationResult.sMessage);
          }
        } else {
          mSelf.showErrorAlert('No file selected');
        }
      };
      oInput.click();
    },
    /**
     * Validate image
     */
    validateImage: function validateImage(oFile) {
      var fFileSizeMb = oFile.size / (1024 * 1024);
      var sFileType = oFile.type;
      var iFileSizeLimitMb = 5;
      var aAllowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
      var bResult = true;
      var sMessage = 'Successfully validated the file.';
      if (iFileSizeLimitMb <= fFileSizeMb) {
        bResult = false;
        sMessage = 'The file size must not exceed 5 MB!';
      }
      if (aAllowedFileTypes.some(function (str) {
        return str.includes(sFileType);
      }) !== true || sFileType === '') {
        bResult = false;
        sMessage = 'The accepted file types that are .jpg, .jpeg, and .png only!';
      }
      return {
        bResult: bResult,
        sMessage: sMessage
      };
    },
    /**
     * Validate Email
     */
    validateEmail: function validateEmail() {
      var _this2 = this;
      var sEmail = $(this.sInpEmail).val();
      if (this.sTempEmailValue !== '' && this.sEmail === this.sTempEmailValue) {
        $(this.sInpEmail).css('background-color', '#c3ffd6');
        this.sEmailValidStat = 'valid';
        this.sTempEmailValue = sEmail;
      } else {
        if (sEmail === '') {
          this.showErrorAlert('Email is required!');
          $(this.sInpEmail).css('background-color', '#ffcbcb');
        } else {
          this.sEmailValidStat = 'pending';
          this.sActiveAction = 'email_verify';
          this.postRequest('validate-email', {
            email: sEmail
          }, function (mResponse) {
            if (mResponse.code !== 500) {
              _this2.sEmailValidStat = 'valid';
              _this2.sTempEmailValue = sEmail;
              $(_this2.sInpEmail).css('background-color', '#c3ffd6');
            } else {
              _this2.sEmailValidStat = 'false';
              $(_this2.sInpEmail).css('background-color', '#ffcbcb');
            }
          });
        }
      }
    },
    /**
     * Validate registration form (Null values)
     */
    validateForm: function validateForm() {
      var mSelf = this;
      var aInputFields = [this.sInpSalute, this.sInpFname, this.sInpMInitial, this.sInpLname, this.sInpDept, this.sInpDesig, this.sInpMst, this.sInpContact, this.sInpPicturePreview, this.sInpIdCode];
      var aValidationResults = [];
      aInputFields.forEach(function (element) {
        var oInpElement = $(element);
        if (element !== mSelf.sInpMInitial) {
          if (oInpElement.val() === '' || oInpElement.val() === null) {
            oInpElement.css('background-color', '#ffcbcb');
            aValidationResults.push('false');
          } else {
            oInpElement.css('background-color', '#c3ffd6');
            aValidationResults.push('true');
          }
        } else {
          if (oInpElement.val() !== '') {
            oInpElement.css('background-color', '#c3ffd6');
          }
        }
      });
      return aValidationResults.some(function (str) {
        return str.includes('false');
      });
    },
    /**
     * Validate registration form (Other value attributes)
     */
    validateFormByValue: function validateFormByValue() {
      var aValidationResults = [];
      if ($(this.sInpContact).val().length != 11) {
        $(this.sInpContact).css('background-color', '#ffcbcb');
        aValidationResults.push('false');
      } else {
        $(this.sInpContact).css('background-color', '#c3ffd6');
        aValidationResults.push('true');
      }
      if ($(this.sInpIdCode).val().length != 5) {
        $(this.sInpIdCode).css('background-color', '#ffcbcb');
        aValidationResults.push('false');
      } else {
        $(this.sInpIdCode).css('background-color', '#c3ffd6');
        aValidationResults.push('true');
      }
      return aValidationResults.some(function (str) {
        return str.includes('false');
      });
    },
    /**
     * Submit registration form
     */
    submitForm: function submitForm() {
      var _this3 = this;
      var bFormNotValid = this.validateForm();
      var bFormValueNotValid = this.validateFormByValue();
      if (bFormNotValid === true && bFormValueNotValid === true) {
        this.showErrorAlert('Please double check and correct your entries!');
      } else {
        var oParams = {
          'email': $(this.sInpEmail).val(),
          'first_name': $(this.sInpFname).val(),
          'middle_initial': $(this.sInpMInitial).val(),
          'last_name': $(this.sInpLname).val(),
          'salutation': $(this.sInpSalute).val(),
          'department': $(this.sInpDept).val(),
          'designation': $(this.sInpDesig).val(),
          'contact_number': $(this.sInpContact).val(),
          'id_code': $(this.sInpIdCode).val(),
          'picture': this.sConvertedImage,
          'mst_id': $(this.sInpMst).val()
        };
        this.sActiveAction = 'form_validate';
        this.postRequest('submit-form', oParams, function (mResponse) {
          if (mResponse.code === 201) {
            _this3.bFormSubmitted = true;
            window.scrollTo(0, 0);
            _this3.aSubmitResult = mResponse.data;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "background-color": "#e2e8f0"
  }
};
var _hoisted_2 = {
  "class": "admin-form theme-primary mw1000 center-block animated fadeIn"
};
var _hoisted_3 = {
  key: 0,
  "class": "panel panel-primary heading-border center-block col-md-8"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"panel\" style=\"background-image:url(&#39;../../../../img/phflag.jpg&#39;);background-size:100% 100%;height:200px;border:0px;\"><div style=\"margin:3%;text-align:center;\"><br><h1 style=\"color:#666666;font-family:&#39;Lucida Sans&#39;, &#39;Lucida Sans Regular&#39;, &#39;Lucida Grande&#39;, &#39;Lucida Sans Unicode&#39;, Geneva, Verdana, sans-serif;\"> Anniversary Celebration</h1><h3 style=\"color:#666666;font-family:&#39;Lucida Sans&#39;, &#39;Lucida Sans Regular&#39;, &#39;Lucida Grande&#39;, &#39;Lucida Sans Unicode&#39;, Geneva, Verdana, sans-serif;\"> Registration Form</h3></div></div><p style=\"text-align:justify;margin:2%;\">      By answering this web form, you are confirming your attendance on the upcoming anniversary celebration event. Rest assured that the information you will provide will be handled and protected in accordance to R.A. 10173. </p>", 2);
var _hoisted_6 = {
  "class": "panel-body"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-12 custom-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email Address: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "required"
}, "*")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "col-md-12"
};
var _hoisted_10 = {
  "class": "col-md-6 custom-margin"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<label for=\"inp_email\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_email\" id=\"inp_email\" class=\"gui-input\" placeholder=\"e.g., juandelacruz@gmail.com \"><b class=\"tooltip tip-left-bottom\"><em>The email you will provide will be used to receive the qr-code we&#39;ll be sending, which you will present on the day of the event. </em></b><label for=\"inp_email\" class=\"field-icon\"><i class=\"fa fa-envelope\"></i></label></label>", 1);
var _hoisted_12 = {
  key: 0,
  style: {
    "margin-top": "5%",
    "font-size": "13px",
    "color": "red"
  }
};
var _hoisted_13 = {
  "class": "col-md-6 custom-margin"
};
var _hoisted_14 = {
  key: 0,
  id: "btnValidateEmail",
  "class": "button btn-primary"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-check"
}, null, -1 /* HOISTED */);
var _hoisted_16 = {
  key: 1,
  id: "p_email_validating",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-spinner"
}, null, -1 /* HOISTED */);
var _hoisted_18 = {
  key: 2,
  id: "p_email_valid",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-check-circle"
}, null, -1 /* HOISTED */);
var _hoisted_20 = {
  id: "div_main_form",
  style: {
    "display": "none"
  }
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Salutation: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_salute\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_salute\" id=\"inp_salute\" class=\"gui-input\" placeholder=\"e.g., MR., MS., MRS., DR., RET GEN., etc.\" style=\"text-transform:uppercase;\"><label for=\"inp_salute\" class=\"field-icon\"><i class=\"fa fa-envelope\"></i></label></label></div></div></div>", 1);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">First Name: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_fname\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_fname\" id=\"inp_fname\" class=\"gui-input\" placeholder=\"e.g., JUAN\" style=\"text-transform:uppercase;\"><label for=\"inp_fname\" class=\"field-icon\"><i class=\"fa fa-user\"></i></label></label></div></div></div>", 1);
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Middle Initial: </label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_minitial\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_minitial\" id=\"inp_minitial\" class=\"gui-input\" placeholder=\"e.g., G.\" style=\"text-transform:uppercase;\" maxlength=\"3\"><label for=\"inp_minitial\" class=\"field-icon\"><i class=\"fa fa-user\"></i></label></label></div></div></div>", 1);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Last Name: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_lname\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_lname\" id=\"inp_lname\" class=\"gui-input\" placeholder=\"e.g., DELA CRUZ\" style=\"text-transform:uppercase;\"><label for=\"inp_lname\" class=\"field-icon\"><i class=\"fa fa-user\"></i></label></label></div></div></div>", 1);
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Department/Agency/Office/Embassy: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_dept\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_dept\" id=\"inp_dept\" class=\"gui-input\" placeholder=\"e.g., DEPARTMENT OF JUSTICE, BUREAU OF CUSTOMS, PHILIPPINE NATIONAL POLICE, etc.\" style=\"text-transform:uppercase;\"><label for=\"inp_dept\" class=\"field-icon\"><i class=\"fa fa-building\"></i></label></label></div></div></div>", 1);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Designation/Position: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_desig\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_desig\" id=\"inp_desig\" class=\"gui-input\" placeholder=\"e.g., POLICE/MILITARY OFFICER, CONSULTANT, DIRECTOR, etc.\" style=\"text-transform:uppercase;\"><label for=\"inp_desig\" class=\"field-icon\"><i class=\"fa fa-suitcase\"></i></label></label></div></div></div>", 1);
var _hoisted_27 = {
  "class": "row"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-md-12 custom-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Membership: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "required"
}, "*")], -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "col-md-12"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = {
  "class": "col-lg-12 custom-margin"
};
var _hoisted_32 = {
  "class": "select2-single form-control mst-select",
  id: "inp_mst"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: "",
  selected: ""
}, "Please select membership", -1 /* HOISTED */);
var _hoisted_34 = ["value"];
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Contact Number: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_contact\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_contact\" id=\"inp_contact\" class=\"gui-input\" placeholder=\"e.g., 09123456789\" minlength=\"11\" maxlength=\"11\"><b class=\"tooltip tip-left-bottom\"><em>The contact number may be used to contact you for identity confirmation. <br> (Must be a valid 11-digit number) </em></b><label for=\"inp_contact\" class=\"field-icon\"><i class=\"fa fa-mobile\"></i></label></label></div></div></div>", 1);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">Upload Picture: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12\"><div class=\"section\"><label class=\"field prepend-icon append-button file\"><span class=\"button btn-primary\">Choose File</span><input type=\"file\" class=\"gui-file\" name=\"inp_picture\" id=\"inp_picture\"><input type=\"text\" class=\"gui-input\" id=\"inp_pic_name_preview\" placeholder=\"Please Select A File\"><b class=\"tooltip tip-left-bottom\"><em>The picture you will provide will be used to validate your identification. <br> (Must be a valid jpg, jpeg, and png file) </em></b><label class=\"field-icon\"><i class=\"fa fa-upload\"></i></label></label></div></div></div></div>", 1);
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><label class=\"col-md-12 custom-label\">ID Code: <span class=\"required\">*</span></label><div class=\"col-md-12\"><div class=\"col-md-12 custom-margin\"><label for=\"inp_idcode\" class=\"field prepend-icon\"><input type=\"text\" name=\"inp_idcode\" id=\"inp_idcode\" class=\"gui-input\" placeholder=\"e.g., 12345\" minlength=\"5\" maxlength=\"5\"><b class=\"tooltip tip-left-bottom\"><em>The ID code comes from invitation that was sent to you via email. <br> (Must be a 5-digit number) </em></b><label for=\"inp_idcode\" class=\"field-icon\"><i class=\"fa fa-code\"></i></label></label></div></div></div>", 1);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"panel-footer text-right\" id=\"div_footer_form\" style=\"display:none;\"><button type=\"reset\" id=\"btnClearForm\" class=\"button\"><i class=\"fa fa-undo\"></i>   Clear All </button>   <button id=\"btnSubmitForm\" class=\"button btn-success\"><i class=\"fa fa-send\"></i>   Submit </button></div>", 1);
var _hoisted_39 = {
  "class": "center-block mt70",
  style: {
    "max-width": "625px"
  }
};
var _hoisted_40 = {
  style: {
    "margin": "5%"
  }
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row table-layout"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xs-12 pln"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-dark mbn confirmation-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-check text-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You have successfully registered!")])])], -1 /* HOISTED */);
var _hoisted_42 = {
  "class": "panel mt15"
};
var _hoisted_43 = {
  "class": "panel-body pt30 p25 pb15"
};
var _hoisted_44 = {
  "class": "lead"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "alt short mv25"
}, null, -1 /* HOISTED */);
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "lh25 text-muted fs15"
}, " Thank you for registering for the anniversary celebration. You may take a picture or save a screenshot of this page for your own copy of proof of registration. ", -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "lh25 text-muted fs15"
}, "We'll contact you once again by the email and number you provided for further details of the said event. ", -1 /* HOISTED */);
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "lh25 text-muted fs15"
}, "You may now close this page. ", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: REGISTRATION FORM "), $data.bFormSubmitted === false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: REG FORM BODY "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: SECTION DIVIDER "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: EMAIL INPUT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, $data.sEmailValidStat === 'false' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, "Note: You must validate your email first in order to proceed to the next fields.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$data.sEmailValidStat === 'false' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Validate Email ")])) : $data.sEmailValidStat === 'pending' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Validating... Please wait. ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("  Email is valid. ")]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: SALUTATION INPUT "), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: FIRST NAME INPUT "), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: MIDDLE INITIAL INPUT "), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: LAST NAME INPUT "), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: DEPARTMENT INPUT "), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: DESIGNATION INPUT "), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: MEMBERSHIP INPUT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_32, [_hoisted_33, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.aMstList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.mst_id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.mst_desc), 9 /* TEXT, PROPS */, _hoisted_34);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: CONTACT NUMBER "), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: UPLOAD PICTURE "), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: ID CODE INPUT "), _hoisted_37])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REG FORM BODY "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: REG FORM FOOTER "), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REG FORM FOOTER ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: REGISTRATION FORM "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" START: SUCCESS PANEL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Details "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_44, "Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSubmitResult.salutation) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSubmitResult.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSubmitResult.middle_initial) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.aSubmitResult.last_name) + ",", 1 /* TEXT */), _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50])])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END: SUCCESS PANEL ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.required {\r\n  color: red !important;\r\n  font-size: 18px !important;\n}\n.custom-margin {\r\n  margin-bottom: 20px !important;\n}\n.custom-label {\r\n  margin-left: 11px !important;\r\n  margin-bottom: 5px !important;\r\n  font-weight: 700 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_style_index_0_id_26c09219_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registration.vue?vue&type=style&index=0&id=26c09219&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_style_index_0_id_26c09219_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_style_index_0_id_26c09219_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/public/registration.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/public/registration.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _registration_vue_vue_type_template_id_26c09219__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.vue?vue&type=template&id=26c09219 */ "./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219");
/* harmony import */ var _registration_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.vue?vue&type=script&lang=js */ "./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js");
/* harmony import */ var _registration_vue_vue_type_style_index_0_id_26c09219_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.vue?vue&type=style&index=0&id=26c09219&lang=css */ "./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_registration_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_registration_vue_vue_type_template_id_26c09219__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/pages/public/registration.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registration.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_template_id_26c09219__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_template_id_26c09219__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registration.vue?vue&type=template&id=26c09219 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=template&id=26c09219");


/***/ }),

/***/ "./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registration_vue_vue_type_style_index_0_id_26c09219_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registration.vue?vue&type=style&index=0&id=26c09219&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/public/registration.vue?vue&type=style&index=0&id=26c09219&lang=css");


/***/ })

}]);