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
                <span class="panel-title">Manage Registrants</span>
            </div>
            <div class="panel-body">

                <!-- START: UACS TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>Registrant Detail
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="col-md-5">
                            <img :src="aRegistrant.picture" width="400px" height="400px" style="margin: 5%">
                        </div>
                        <div class="col-md-7">
                            <table>
                            <tbody>
                                <tr>
                                    <td>Name: </td>
                                    <td>{{ aRegistrant.salutation }} {{ aRegistrant.first_name }} {{ aRegistrant.middle_initial }} {{  aRegistrant.last_name }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                       
                    </div>
                </div>
                <!-- END: UACS TABLE -->
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
    mounted() {
        this.parseDetails();
    },
    methods: { 
        parseDetails: function () {
            this.aRegistrant = JSON.parse(atob(this.$root.getLocalStorageValue('comp')))[0];
            console.log(this.aRegistrant);
        },
    }
}
</script>
<style scoped>
.error_msg,
.error_msg_edit {
    color: red;
}
</style>    