<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-trail"> System Management
                    </li>
                    <li class="crumb-active"><a>User System Logs</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">User System Logs</span>
            </div>
            <div class="panel-body">
                <C_WebDevInProgress></C_WebDevInProgress>
            </div>
        </div>
    </section>
</template>
<script>
import HttpRequest from "../../../../libraries/request.js"
import Utilities from "../../../../libraries/utilities.js"
export default {
    mixins: [
        HttpRequest,
        Utilities
    ]
}
</script>