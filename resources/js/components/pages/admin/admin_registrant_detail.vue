<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_ADMIN_Sidebar></C_Layout_ADMIN_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">Manage Registrants > Details</span>
            </div>
            <div class="panel-body">
                <!-- START: REGISTRANT's DETAILS -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>Registrant Detail
                            <button id="btnBackToList" class="button btn-md btn-warning mr10 pull-right">
                                <i class="fa fa-arrow-left"></i>
                                Back to List
                            </button>
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="col-md-5">
                            <img :src="aRegistrant.picture" width="400px" height="400px" style="margin: 4%">
                        </div>
                        <div class="col-md-7">
                            <table style="color: #666666; font-size: 18px; border: 1px solid #eeeeee; margin-top: 4%;"
                                class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Name: </td>
                                        <td>{{ aRegistrant.salutation }} {{ aRegistrant.first_name }} {{
                                aRegistrant.middle_initial }} {{ aRegistrant.last_name }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Department/Agency:<br>
                                            Office/Company: </td>
                                        <td>{{ aRegistrant.department }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Designation/Position:</td>
                                        <td>{{ aRegistrant.designation }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Registered As: <br>(Membership
                                            Type)</td>
                                        <td>{{ aRegistrant.membership }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Email:</td>
                                        <td>{{ aRegistrant.email }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Contact No.:</td>
                                        <td>{{ aRegistrant.contact_number }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Type:</td>
                                        <td>{{ aRegistrant.guest_of }}</td>
                                    </tr>
                                    <tr>
                                        <td width="30%" style="background-color: #eee;">Submitted ID Code:</td>
                                        <td>{{ aRegistrant.id_code}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                        </div>
                    </div>
                </div>
                <!-- END: REGISTRANT's DETAILS -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            aRegistrant: []
        }
    },
    created() {
        document.title = 'RFM | Registrant Detail'
    },
    mounted() {
        this.initEventListeners();
        this.parseDetails();
    },
    methods: {
        /**
         * Initialize event listeners
         */
        initEventListeners: function () {
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.id === 'btnBackToList') {
                    window.location.href = '/admin/home';
                }
            }, false);
        },

        /**
         * Parse details (From the temporary storage)
         */
        parseDetails: function () {
            this.aRegistrant = JSON.parse(this.$root.getLocalStorageValue('comp'))[0];
        },
    }
}
</script>
<style scoped>
.error_msg,
.error_msg_edit {
    color: red;
}

table,
tbody,
td,
tr {
    border: 1px solid rgba(213, 213, 213, 0.933) !important
}
</style>