<template>
  <div class="external-page external-alt sb-l-c sb-r-c">

    <!-- Start: Main -->
    <div id="main" class="animated fadeIn center">
      <!-- Start: Content-Wrapper -->
      <section id="content_wrapper">
        <!-- Begin: Content -->
        <section id="content">
          <div class="admin-form theme-info mw500" id="login">
            <!-- Login Logo -->
            <div class="row table-layout" style="text-align: center; font-size: 40px;">
              Registration Form Management
            </div>

            <!-- Login Panel/Form -->
            <div class="panel mt30 mb25">

              <div class="panel-body bg-light p25 pb15">

                <!-- Username Input -->
                <div class="section">
                  <label for="username" class="field-label text-muted fs18 mb10">Username</label>
                  <label for="username" class="field prepend-icon">
                    <input v-model="sUsername" type="text" name="username" id="username" class="gui-input"
                      placeholder="Enter username">
                    <label for="username" class="field-icon">
                      <i class="fa fa-user"></i>
                    </label>
                  </label>
                </div>

                <!-- Password Input -->
                <div class="section">
                  <label for="username" class="field-label text-muted fs18 mb10">Password</label>
                  <label for="password" class="field prepend-icon">
                    <input v-model="sPassword" type="password" name="password" id="password" class="gui-input"
                      placeholder="Enter password">
                    <label for="password" class="field-icon">
                      <i class="fa fa-lock"></i>
                    </label>
                  </label>
                </div>
              </div>

              <div class="panel-footer clearfix">
                <button class="button btn-primary mr10 pull-right" :onclick="login">
                  <i class="fa fa-sign-in"></i>
                  Log In
                </button>
              </div>


            </div>

            <!-- Registration Links -->
            <div class="login-links">
              <p>
              </p>
            </div>
          </div>
        </section>
        <!-- End: Content -->
      </section>
      <!-- End: Content-Wrapper -->
    </div>
  </div>
</template>
<script>
import HttpRequest from "../../libraries/request.js"
import Utilities from "../../libraries/utilities.js"
export default {
  mixins: [
    HttpRequest,
    Utilities
  ],
  data() {
    return {
      sUsername: '',
      sPassword: ''
    }
  },
  created() {
    document.title = 'RFM Admin';
  },
  mounted() {
    this.$root.clearLocalStorage();
    this.initializeActions();
  },
  methods: {

    /**
     * Initialize action listeners
     */
    initializeActions: function () {
      let mSelf = this;
      document.body.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          mSelf.login();
        }
      });
    },

    /**
     * Login method
     */
    login: function () {
      let oParams = {
        username: btoa(this.sUsername),
        password: btoa(this.sPassword)
      };

      this.postRequest('auth/log-in', oParams, (mResponse) => {
        this.$root.setLocalStorageValue('amho', btoa(mResponse.data.amho));
        window.location.href = mResponse.data.href;
      });
    }
  }
}
</script>
<style scoped>
.center {
  border: 5px solid;
  margin: auto;
  width: 40%;
  position: absolute;
}
</style>