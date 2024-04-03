<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-trail"> Miscellaneous
                    </li>
                    <li class="crumb-active"><a>Help Desk</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">Help Desk</span>
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