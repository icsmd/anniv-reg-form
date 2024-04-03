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
                    <li class="crumb-active"><a>Tax Class and Codes Entity Setup</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">Tax Class and Codes Entity Setup</span>
            </div>
            <div class="panel-body">
                <div class="panel">
                    <div class="panel-heading">
                        <ul class="nav panel-tabs-border panel-tabs panel-tabs-left">
                            <li class="active">
                                <a href="#tab2_1" data-toggle="tab" aria-expanded="false">Tax Class</a>
                            </li>
                            <li class="">
                                <a href="#tab2_2" data-toggle="tab" aria-expanded="false">Tax Code</a>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div class="tab-content pn br-n">
                            <div id="tab2_1" class="tab-pane active">
                                <div class="row">
                                    <C_SYSA_SYS_MGT_SETUP_TAX_CLASS></C_SYSA_SYS_MGT_SETUP_TAX_CLASS>
                                </div>
                            </div>
                            <div id="tab2_2" class="tab-pane">
                                <div class="row">
                                    <C_SYSA_SYS_MGT_SETUP_TAX_CODE></C_SYSA_SYS_MGT_SETUP_TAX_CODE>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>