<template>
  <div style="background-color: #e2e8f0;">

    <div class="admin-form theme-primary mw1000 center-block animated fadeIn">
      <!-- START: REGISTRATION FORM -->
      <div v-if="bFormSubmitted === false" class="panel panel-primary heading-border center-block col-md-8">
        <!-- START: REG FORM BODY -->
        <div class="panel" style="background-image: url('../../../../img/phflag.jpg'); 
          background-size: 100% 100%; 
          height: 200px;
          border: 0px">
          <div style="margin: 3%; text-align: center">
            <br>
            <h1
              style="color: #666666; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
              Anniversary Celebration</h1>
            <h3
              style="color: #666666; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
              Registration Form</h3>
          </div>
        </div>
        <p style="text-align: justify; margin: 2%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By answering this web form, you
          are confirming your attendance on the upcoming anniversary celebration
          event. Rest assured that the information you will provide will be handled and protected in accordance to
          R.A. 10173.
        </p>
        <div class="panel-body ">
          <!-- START: SECTION DIVIDER -->

          <!-- START: EMAIL INPUT -->
          <div class="row">
            <label class="col-md-12 custom-label">Email Address: <span class="required">*</span></label>
            <div class="col-md-12">
              <div class="col-md-6 custom-margin">
                <label for="inp_email" class="field prepend-icon">
                  <input type="text" name="inp_email" id="inp_email" class="gui-input"
                    placeholder="e.g., juandelacruz@gmail.com ">
                  <b class="tooltip tip-left-bottom">
                    <em>The email you will provide will be used to receive the qr-code we'll be sending, which you will
                      present on the day of the event.
                    </em>
                  </b>
                  <label for="inp_email" class="field-icon">
                    <i class="fa fa-envelope"></i>
                  </label>
                </label>
                <span v-if="sEmailValidStat === 'false'" style="margin-top: 5%; font-size: 13px; color: red">Note: You
                  must validate your email first in order to proceed to the next fields.</span>
              </div>
              <div class="col-md-6 custom-margin">
                <button v-if="sEmailValidStat === 'false'" id="btnValidateEmail" class="button btn-primary">
                  <i class="fa fa-check"></i> Validate Email
                </button>
                <p v-else-if="sEmailValidStat === 'pending'" id="p_email_validating" style="margin-top: 10px">
                  <i class="fa fa-spinner"></i>&nbsp;
                  Validating... Please wait.
                </p>
                <p v-else id="p_email_valid" style="margin-top: 10px">
                  <i class="fa fa-check-circle"></i>&nbsp;
                  Email is valid.
                </p>
              </div>
            </div>
          </div>

          <div id="div_main_form" style="display:none">
            <!-- START: SALUTATION INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Salutation: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_salute" class="field prepend-icon">
                    <input type="text" name="inp_salute" id="inp_salute" class="gui-input"
                      placeholder="e.g., MR., MS., MRS., DR., RET GEN., etc." style="text-transform: uppercase">
                    <label for="inp_salute" class="field-icon">
                      <i class="fa fa-envelope"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: FIRST NAME INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">First Name: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_fname" class="field prepend-icon">
                    <input type="text" name="inp_fname" id="inp_fname" class="gui-input" placeholder="e.g., JUAN"
                      style="text-transform: uppercase" />
                    <label for="inp_fname" class="field-icon">
                      <i class="fa fa-user"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: MIDDLE INITIAL INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Middle Initial: </label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_minitial" class="field prepend-icon">
                    <input type="text" name="inp_minitial" id="inp_minitial" class="gui-input" placeholder="e.g., G."
                      style="text-transform: uppercase;" maxlength="3" />
                    <label for="inp_minitial" class="field-icon">
                      <i class="fa fa-user"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: LAST NAME INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Last Name: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_lname" class="field prepend-icon">
                    <input type="text" name="inp_lname" id="inp_lname" class="gui-input" placeholder="e.g., DELA CRUZ"
                      style="text-transform: uppercase;">
                    <label for="inp_lname" class="field-icon">
                      <i class="fa fa-user"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: DEPARTMENT INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Department/Agency/Office/Embassy: <span
                  class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_dept" class="field prepend-icon">
                    <input type="text" name="inp_dept" id="inp_dept" class="gui-input"
                      placeholder="e.g., DEPARTMENT OF JUSTICE, BUREAU OF CUSTOMS, PHILIPPINE NATIONAL POLICE, etc."
                      style="text-transform: uppercase;">
                    <label for="inp_dept" class="field-icon">
                      <i class="fa fa-building"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: DESIGNATION INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Designation/Position: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_desig" class="field prepend-icon">
                    <input type="text" name="inp_desig" id="inp_desig" class="gui-input"
                      placeholder="e.g., POLICE/MILITARY OFFICER, CONSULTANT, DIRECTOR, etc."
                      style="text-transform: uppercase;">
                    <label for="inp_desig" class="field-icon">
                      <i class="fa fa-suitcase"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: MEMBERSHIP INPUT -->
            <div class="row">
              <label class="col-md-12 custom-label">Membership: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="form-group">
                  <div class="col-lg-12 custom-margin">
                    <select class="select2-single form-control mst-select" id="inp_mst">
                      <option disabled value="" selected>Please select membership</option>
                      <option v-for="item in aMstList" :value="item.mst_id">{{ item.mst_desc }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- START: CONTACT NUMBER -->
            <div class="row">
              <label class="col-md-12 custom-label">Contact Number: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_contact" class="field prepend-icon">
                    <input type="text" name="inp_contact" id="inp_contact" class="gui-input"
                      placeholder="e.g., 09123456789" minlength="11" maxlength="11" />
                    <b class="tooltip tip-left-bottom">
                      <em>The contact number may be used to contact you for identity confirmation. <br>
                        (Must be a valid 11-digit number)
                      </em>
                    </b>
                    <label for="inp_contact" class="field-icon">
                      <i class="fa fa-mobile"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <!-- START: UPLOAD PICTURE -->
            <div class="row">
              <label class="col-md-12 custom-label">Upload Picture: <span class="required">*</span></label>
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="section">
                    <label class="field prepend-icon append-button file">
                      <span class="button btn-primary">Choose File</span>
                      <input type="file" class="gui-file" name="inp_picture" id="inp_picture">
                      <input type="text" class="gui-input" id="inp_pic_name_preview" placeholder="Please Select A File">
                      <b class="tooltip tip-left-bottom">
                        <em>The picture you will provide will be used to validate your identification. <br>
                          (Must be a valid jpg, jpeg, and png file)
                        </em>
                      </b>
                      <label class="field-icon">
                        <i class="fa fa-upload"></i>
                      </label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- START: ID CODE INPUT -->
            <div class="row">
              <!-- <label class="col-md-12 custom-label">ID Code: <span class="required">*</span></label> -->
              <label class="col-md-12 custom-label">ID Code:</label>
              <div class="col-md-12">
                <div class="col-md-12 custom-margin">
                  <label for="inp_idcode" class="field prepend-icon">
                    <input type="text" name="inp_idcode" id="inp_idcode" class="gui-input" placeholder="e.g., 12345"
                      minlength="5" maxlength="5">
                    <b class="tooltip tip-left-bottom">
                      <em>The ID code comes from invitation that was sent to you via email. <br>
                        (Must be a 5-digit number)
                      </em>
                    </b>
                    <label for="inp_idcode" class="field-icon">
                      <i class="fa fa-code"></i>
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- END: REG FORM BODY -->

        <!-- START: REG FORM FOOTER -->
        <div class="panel-footer text-right" id="div_footer_form" style="display:none">
          <button type="reset" id="btnClearForm" class="button">
            <i class="fa fa-undo"></i> &nbsp;
            Clear All
          </button>
          &nbsp;
          <button id="btnSubmitForm" class="button btn-success">
            <i class="fa fa-send"></i> &nbsp;
            Submit
          </button>
        </div>
        <!-- END: REG FORM FOOTER -->

      </div>
      <!-- END: REGISTRATION FORM -->

      <!-- START: SUCCESS PANEL -->
      <div v-else class="center-block mt70" style="max-width: 625px;">
        <div style="margin: 5%">
          <div class="row table-layout">
            <div class="col-xs-12 pln">
              <h2 class="text-dark mbn confirmation-header"><i class="fa fa-check text-success"></i> You have
                successfully
                registered!</h2>
            </div>
          </div>

          <!-- Details -->
          <div class="panel mt15">
            <div class="panel-body pt30 p25 pb15">
              <p class="lead">Hello {{ aSubmitResult.salutation }} {{ aSubmitResult.first_name }} {{
        aSubmitResult.middle_initial }} {{ aSubmitResult.last_name }},</p>
              <hr class="alt short mv25">
              <p class="lh25 text-muted fs15">
                Thank you for registering for the anniversary celebration.
                You may take a picture or save a screenshot of this page for your own copy of proof of registration.
              </p>
              <br>
              <p class="lh25 text-muted fs15">We'll contact you once again by the email and number you provided for
                further details of the said event. </p>
              <br>
              <p class="lh25 text-muted fs15">You may now close this page. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: SUCCESS PANEL -->
  </div>

</template>
<script>
import Swal from 'sweetalert2';
import HttpRequest from '../../../libraries/request';
export default {
  mixins: [
    HttpRequest
  ],
  data() {
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
      sTempEmailValue: '',
    }
  },
  created() {
    this.sActivePage = 'registration';
    document.title = 'Anniversary Celebration Registration'
  },
  watch: {
    /**
     * Checks the live changes of sEmailValidStat value
     */
    sEmailValidStat(sValid) {
      if (sValid === 'valid') {
        $('#div_main_form').css('display', '');
        $('#div_footer_form').css('display', '');
        $('.mst-select').select2();
      } else if ('false') {
        $('#div_main_form').css('display', 'none');
        $('#div_footer_form').css('display', 'none');
      }
    }
  },
  mounted() {
    this.getMstList();
    this.initEventListeners();
  },
  methods: {
    
    /**
     * Get Membership Type List
     */
    getMstList: function () {
      this.getRequest('get-mst', (mResponse) => {
        this.aMstList = mResponse.data;
      });
    },

    /**
     * Initialize event listeners
     */
    initEventListeners: function () {
      let mSelf = this;
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
          Swal.fire({
            title: "Wait!",
            text: "By changing the email, you need to revalidate the email once again and you won't be able to submit your entries until it's validated (Your progress will be saved). Are you sure you want to proceed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to proceed."
          }).then((result) => {
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
    getImageUpload: function () {
      let mSelf = this;
      var oInput = document.createElement('input');
      oInput.type = 'file';
      oInput.onchange = e => {
        var file = e.target.files[0];
        if (file) {
          let aValidationResult = mSelf.validateImage(file);
          if (aValidationResult.bResult === true) {
            $(mSelf.sInpPicturePreview).val(file.name);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              const base64String = reader.result.split(',')[1];
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
      }
      oInput.click();
    },

    /**
     * Validate image
     */
    validateImage: function (oFile) {
      let fFileSizeMb = oFile.size / (1024 * 1024);
      let sFileType = oFile.type;
      const iFileSizeLimitMb = 5;
      const aAllowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
      let bResult = true;
      let sMessage = 'Successfully validated the file.';
      if (iFileSizeLimitMb <= fFileSizeMb) {
        bResult = false;
        sMessage = 'The file size must not exceed 5 MB!'
      }

      if (aAllowedFileTypes.some(str => str.includes(sFileType)) !== true || sFileType === '') {
        bResult = false;
        sMessage = 'The accepted file types that are .jpg, .jpeg, and .png only!';
      }
      return {
        bResult, sMessage
      }
    },

    /**
     * Validate Email
     */
    validateEmail: function () {
      let sEmail = $(this.sInpEmail).val();
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
          this.postRequest('validate-email', { email: sEmail }, (mResponse) => {
            if (mResponse.code !== 500) {
              this.sEmailValidStat = 'valid';
              this.sTempEmailValue = sEmail;
              $(this.sInpEmail).css('background-color', '#c3ffd6');
            } else {
              this.sEmailValidStat = 'false';
              $(this.sInpEmail).css('background-color', '#ffcbcb');
            }
          });
        }
      }
    },

    /**
     * Validate registration form (Null values)
     */
    validateForm: function () {
      let mSelf = this;
      let aInputFields = [
        this.sInpSalute,
        this.sInpFname,
        this.sInpMInitial,
        this.sInpLname,
        this.sInpDept,
        this.sInpDesig,
        this.sInpMst,
        this.sInpContact,
        this.sInpPicturePreview,
        this.sInpIdCode,
      ];
      let aValidationResults = [];
      aInputFields.forEach(element => {
        let oInpElement = $(element);
        if (element !== mSelf.sInpMInitial || element !== mSelf.sInpIdCode) {
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

      return aValidationResults.some(str => str.includes('false'));
    },

    /**
     * Validate registration form (Other value attributes)
     */
    validateFormByValue: function () {
      let aValidationResults = [];
      if ($(this.sInpContact).val().length != 11) {
        $(this.sInpContact).css('background-color', '#ffcbcb');
        aValidationResults.push('false');
      } else {
        $(this.sInpContact).css('background-color', '#c3ffd6');
        aValidationResults.push('true');
      }

      // if ($(this.sInpIdCode).val().length != 5) {
      //   $(this.sInpIdCode).css('background-color', '#ffcbcb');
      //   aValidationResults.push('false');
      // } else {
      //   $(this.sInpIdCode).css('background-color', '#c3ffd6');
      //   aValidationResults.push('true');
      // }

      return aValidationResults.some(str => str.includes('false'));
    },

    /**
     * Submit registration form
     */
    submitForm: function () {
      let bFormNotValid = this.validateForm();
      let bFormValueNotValid = this.validateFormByValue();
      if (bFormNotValid === true && bFormValueNotValid === true) {
        this.showErrorAlert('Please double check and correct your entries!');
      } else {
        let oParams = {
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
          'mst_id': $(this.sInpMst).val(),
        };
        this.sActiveAction = 'form_validate';
        this.postRequest('submit-form', oParams, (mResponse) => {
          if (mResponse.code === 201) {
            this.bFormSubmitted = true;
            window.scrollTo(0, 0);
            this.aSubmitResult = mResponse.data;
          }
        });
      }
    },
  }
}
</script>
<style>
.required {
  color: red !important;
  font-size: 18px !important;
}

.custom-margin {
  margin-bottom: 20px !important;
}

.custom-label {
  margin-left: 11px !important;
  margin-bottom: 5px !important;
  font-weight: 700 !important;
}
</style>