<template>
<div class="external-page external-alt sb-l-c sb-r-c">

<!-- Start: Main -->
<div id="main" class="animated fadeIn center" >
  <!-- Start: Content-Wrapper -->
  <section id="content_wrapper">
    <!-- Begin: Content -->
    <section id="content">
      <div class="admin-form theme-info mw500" id="login">
        <!-- Login Logo -->
        <div class="row table-layout" style="text-align: center; font-size: 40px;">
          SCMS
        </div>

        <!-- Login Panel/Form -->
        <div class="panel mt30 mb25">

          <form method="post" action="/" id="contact">
            <div class="panel-body bg-light p25 pb15">

              <!-- Username Input -->
              <div class="section">
                <label for="username" class="field-label text-muted fs18 mb10">Username</label>
                <label for="username" class="field prepend-icon">
                  <input type="text" name="username" id="username" class="gui-input" placeholder="Enter username">
                  <label for="username" class="field-icon">
                    <i class="fa fa-user"></i>
                  </label>
                </label>
              </div>

              <!-- Password Input -->
              <div class="section">
                <label for="username" class="field-label text-muted fs18 mb10">Password</label>
                <label for="password" class="field prepend-icon">
                  <input type="password" name="password" id="password" class="gui-input" placeholder="Enter password">
                  <label for="password" class="field-icon">
                    <i class="fa fa-lock"></i>
                  </label>
                </label>
              </div>
            </div>

            <div class="panel-footer clearfix">
              <button type="submit" class="button btn-primary mr10 pull-right">Sign In</button>
            </div>

          </form>
        </div>

        <!-- Registration Links -->
        <div class="login-links">
          <p>
            <a href="pages_forgotpw(alt).html" class="active" title="Sign In">Forgot Password?</a>
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
export default {
  setup() {

   }
}
</script>
<style>
.center {
  border: 5px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>