<template>
  <div style="background-color: #e2e8f0;">

    <div class="admin-form theme-primary mw1000 center-block animated fadeIn">
      <!-- START: REGISTRATION FORM -->
      <div v-if="bFormSubmitted === false" class="panel panel-primary heading-border center-block col-md-8">
        <!-- START: REG FORM BODY -->
        <div class="panel-body ">
          <!-- START: SECTION DIVIDER -->
          <div class="section-divider mt20 mb40">
            <span> Normal validation rules </span>
          </div>
          <!-- END: SECTION DIVIDER -->

          <!-- START: EMAIL INPUT -->
          <div class="row">
            <label class="col-md-12 custom-label">Email Address: <span class="required">*</span></label>
            <div class="col-md-12">
              <div class="col-md-6 custom-margin">
                <label for="inp_email" class="field prepend-icon">
                  <input type="text" name="inp_email" id="inp_email" class="gui-input"
                    placeholder="e.g., juandelacruz@gmail.com ">
                  <label for="inp_email" class="field-icon">
                    <i class="fa fa-envelope"></i>
                  </label>
                </label>
              </div>
              <div class="col-md-6 custom-margin">
                <button id="btnValidateEmail" class="button btn-primary">
                  <i class="fa fa-check"></i> Validate Email
                </button>
                <p id="p_email_validate" style="display: none;">Validating... Please wait.</p>
              </div>
            </div>
          </div>
          <!-- START: SALUTATION INPUT -->
          <div class="row">
            <label class="col-md-12 custom-label">Salutation: <span class="required">*</span></label>
            <div class="col-md-12">
              <div class="col-md-12 custom-margin">
                <label for="inp_salute" class="field prepend-icon">
                  <input type="text" name="inp_salute" id="inp_salute" class="gui-input"
                    placeholder="e.g., Mr., Ms., Mrs., Dr., Ret Gen., etc.">
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
                  <input type="text" name="inp_fname" id="inp_fname" class="gui-input" placeholder="e.g., Juan">
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
                  <input type="text" name="inp_minitial" id="inp_minitial" class="gui-input" placeholder="e.g., G.">
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
                  <input type="text" name="inp_lname" id="inp_lname" class="gui-input" placeholder="e.g., Dela Cruz">
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
                    placeholder="e.g., Department of Justice, Bureau of Customs, Philippine National Police, etc.">
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
                    placeholder="e.g., Police/Military Officer, Consultant, Director, etc.">
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
                    placeholder="e.g., 09123456789">
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
            <label class="col-md-12 custom-label">ID Code: <span class="required">*</span></label>
            <div class="col-md-12">
              <div class="col-md-12 custom-margin">
                <label for="inp_idcode" class="field prepend-icon">
                  <input type="text" name="inp_idcode" id="inp_idcode" class="gui-input" placeholder="e.g., 12345">
                  <label for="inp_idcode" class="field-icon">
                    <i class="fa fa-code"></i>
                  </label>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- END: REG FORM BODY -->

        <!-- START: REG FORM FOOTER -->
        <div class="panel-footer text-right">
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
            <h2 class="text-dark mbn confirmation-header"><i class="fa fa-check text-success"></i> You have successfully
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
            <p class="lh25 text-muted fs15">We'll contact you once again by the email and number you provided for further details of the said event. </p>
            <br>
            <p class="lh25 text-muted fs15">You may now close this page. </p>
            <!-- <p class="text-right mt20"><button class="btn btn-primary btn-rounded ph40" type="button" onclick="window.close()">Close Page</button>
            </p> -->
          </div>
        </div>
        </div>
      </div>
    </div>
     <!-- END: SUCCESS PANEL -->
  </div>

</template>
<script>
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
      bEmailValid: false,
      bFormValid: false,
      bFormSubmitted: true,
      sConvertedImage: '',
      aSubmitResult: [],
    }
  },
  created() {
    document.title = 'Anniversary Celebration Registration'
  },
  mounted() {
    this.getMstList();
    this.initEventListeners();
  },
  methods: {
    getMstList: function () {
      this.getRequest('get-mst', (mResponse) => {
        this.aMstList = mResponse.data;
        $('.mst-select').select2();
      });
    },

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
    },

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
      } else if (aAllowedFileTypes.some(str => str.includes(sFileType)) !== true) {

        bResult = false;
        sMessage = 'The accepted file types that are .jpg, .jpeg, and .png only!';
      }
      return {
        bResult, sMessage
      }
    },

    validateEmail: function () {
      let sEmail = $(this.sInpEmail).val();
      $(this.sInpEmail).css('background-color', '#ffcbcb');
      if (sEmail === '') {
        this.showErrorAlert('Email is required!')
      } else {
        this.postRequest('validate-email', { email: sEmail }, (mResponse) => {
          $(this.sInpEmail).css('background-color', '#c3ffd6');
        });
      }
    },

    validateForm: function () {
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
        if (oInpElement.val() === '' || oInpElement.val() === null) {
          oInpElement.css('background-color', '#ffcbcb');
          aValidationResults.push('false');
        } else {
          oInpElement.css('background-color', '#c3ffd6');
          aValidationResults.push('true');
        }
      });
      return aValidationResults.some(str => str.includes('false'));
    },

    submitForm: function () {
      let bFormNotValid = this.validateForm();
      if (bFormNotValid === true) {
        this.showErrorAlert('Please double check and correct your entries!');
      } else {
        let oParams = {
          'email': $(this.sInpEmail).val(),
          'first_name': $(this.sInpFname).val(),
          'middle_initial': $(this.sInpMInitial).val(),
          'last_name': $(this.sInpLname).val(),
          'salutation': $(this.sInpSalute).val(),
          // 'suffix': $(this.oInpSalute).val(),
          'department': $(this.sInpDept).val(),
          'designation': $(this.sInpDesig).val(),
          'contact_number': $(this.sInpContact).val(),
          'id_code': $(this.sInpIdCode).val(),
          'picture': this.sConvertedImage,
          'mst_id': $(this.sInpMst).val(),
        };
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