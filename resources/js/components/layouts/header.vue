<template>
    <!-- Start: Header -->
    <header class="navbar navbar-fixed-top navbar-shadow">
        <div class="navbar-branding">
            <a class="navbar-brand" style="padding-left: 35%;">
                <b>RFM</b>
            </a>
            <span id="toggle_sidemenu_l" class="ad ad-lines"></span>
        </div>
        <ul class="nav navbar-nav navbar-left">
            <li class="hidden-xs">
                <a class="request-fullscreen toggle-active" href="#">
                    <span class="ad ad-screen-full fs18"></span>
                </a>
            </li>
        </ul>
    </header>
    <!-- End: Header -->
</template>
<script>
export default {
    mounted() {
        this.$root.initializeTemplatePlugins();
    }
}
</script>
<style scoped></style>