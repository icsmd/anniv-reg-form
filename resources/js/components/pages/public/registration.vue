<template>
  <!-- START: REGISTRATION FORM -->
  <div class="admin-form theme-primary mw1000 center-block animated fadeIn">
    <div class="panel panel-primary heading-border center-block col-md-8">
      <!-- START: REG FORM BODY -->
      <div class="panel-body ">
        <!-- START: SECTION DIVIDER -->
        <div class="section-divider mt20 mb40">
          <span> Normal validation rules </span>
        </div>
        <!-- END: SECTION DIVIDER -->

        <!-- START: EMAIL INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Email Address:</label>
          <div class="col-md-12">
            <div class="col-md-6 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input"
                  placeholder="e.g., juandelacruz@gmail.com ">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-envelope"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: SALUTATION INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Salutation:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input"
                  placeholder="e.g., Mr., Ms., Mrs., Dr., Ret Gen., etc.">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-envelope"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: FIRST NAME INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">First Name:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., Juan">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-user"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: MIDDLE INITIAL INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Middle Initial:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="lastname" class="field prepend-icon">
                <input type="text" name="lastname" id="lastname" class="gui-input" placeholder="e.g., G.">
                <label for="lastname" class="field-icon">
                  <i class="fa fa-user"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: LAST NAME INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Last Name:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="lastname" class="field prepend-icon">
                <input type="text" name="lastname" id="lastname" class="gui-input" placeholder="e.g., Dela Cruz">
                <label for="lastname" class="field-icon">
                  <i class="fa fa-user"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: DEPARTMENT INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Department/Agency/Office/Embassy:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input"
                  placeholder="e.g., Department of Justice, Bureau of Customs, Philippine National Police, etc.">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-building"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: DESIGNATION INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Designation/Position:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input"
                  placeholder="e.g., Police/Military Officer, Consultant, Director, etc.">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-suitcase"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: MEMBERSHIP INPUT -->
        <div class="row">
          <label class="col-md-12 custom-label">Membership:</label>
          <div class="col-md-12">
            <div class="form-group">
              <div class="col-lg-12 custom-margin">
                <select class="select2-single form-control mst-select" id="inp_payee">
                  <option disabled value="0" selected>Please select membership</option>
                  <option v-for="item in aMstList" :value="item.mst_id">{{ item.mst_desc }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- START: CONTACT NUMBER -->
        <div class="row">
          <label class="col-md-12 custom-label">Contact Number:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., 09123456789">
                <label for="firstname" class="field-icon">
                  <i class="fa fa-mobile"></i>
                </label>
              </label>
            </div>
          </div>
        </div>
        <!-- START: UPLOAD PICTURE -->
        <div class="row">
          <label class="col-md-12 custom-label">Upload Picture:</label>
          <div class="col-md-12">
            <div class="col-md-12">
              <div class="section">
                <label class="field prepend-icon append-button file">
                  <span class="button btn-primary">Choose File</span>
                  <input type="file" class="gui-file" name="file1" id="file1"
                    onChange="document.getElementById('uploader1').value = this.value;">
                  <input type="text" class="gui-input" id="uploader1" placeholder="Please Select A File">
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
          <label class="col-md-12 custom-label">ID Code:</label>
          <div class="col-md-12">
            <div class="col-md-12 custom-margin">
              <label for="firstname" class="field prepend-icon">
                <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., 12345">
                <label for="firstname" class="field-icon">
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
        <button type="submit" id="btnSubmitForm" class="button btn-success">
          <i class="fa fa-send"></i> &nbsp;
          Submit 
        </button>
      </div>
      <!-- END: REG FORM FOOTER -->
    </div>
  </div>
  <!-- END: REGISTRATION FORM -->
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
    }
  },
  created() {
    document.title = 'Anniversary Celebration Registration'
  },
  mounted() {
    this.getMstList();
  },
  methods: {
    getMstList: function () {
      this.getRequest('get-mst', (mResponse) => {
        this.aMstList = mResponse.data;
        $('.mst-select').select2();
      });
    }
  }
}
</script>
<style>
.custom-margin {
  margin-bottom: 20px;
}

.custom-label {
  margin-left: 11px !important;
  margin-bottom: 5px !important;
  font-weight: 700 !important;
}
</style>