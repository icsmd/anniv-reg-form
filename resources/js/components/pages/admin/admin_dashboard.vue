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
                            <span class="fa fa-list"></span>List of Registrants
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">Reg No.</th>
                                    <th style="text-align: center;">Date Registered</th>
                                    <th style="text-align: center;">Last Name</th>
                                    <th style="text-align: center;">First Name</th>
                                    <th style="text-align: center;">Department/Agency</th>
                                    <th style="text-align: center;">Email</th>
                                    <th style="text-align: center;">Contact No.</th>
                                    <th style="text-align: center;">Status</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.reg_no }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                                    <td style="text-align: left;">{{ item.last_name}}</td>
                                    <td style="text-align: left;">{{ item.first_name }}</td>
                                    <td style="text-align: left;">{{ item.department }}</td>
                                    <td style="text-align: left;">{{ item.email }}</td>
                                    <td style="text-align: left;">{{ item.contact_number }}</td>
                                    <td style="text-align: left;">{{ item.status }}</td>
                                    <td style="text-align: center;">
                                        <button type="button" data-action="viewDetails" :data-id="item.reg_no"
                                            class="btn btn-md btn-primary viewDetails" style="margin-right: 9%;">
                                            <i class="fa fa-arrow-right "></i>
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- END: UACS TABLE -->
            </div>
        </div>
    </section>
</template>
<script>
import HttpRequest from "./../../../libraries/request"
import Utilities from "./../../../libraries/utilities"
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            aTableConfig: {
                "aaSorting": [
                    [1, 'desc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [7]
                }],
                "oLanguage": {
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "iDisplayLength": 10,
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
                "oTableTools": {
                    "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
                }
            },
            aRecordList: [],
            iActiveRecord: 0,
            bUpdateData: false
        }
    },
    mounted() {
        this.getRecordList();
        this.initEventListeners();
    },
    methods: { 
        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.action === 'viewDetails') {
                    let iRegNo = event.target.dataset.id;
                    let aSelectedReg = mSelf.aRecordList.filter(regs => regs.reg_no == iRegNo);
                    let sCompressed = btoa(JSON.stringify(aSelectedReg));
                    mSelf.$root.setLocalStorageValue('comp', sCompressed);
                    window.location.href = '/admin/registrant/details';
                }
            }, false);
        },

        getRecordList: function () {
            let mSelf = this;
            this.getRequest('get-reg-list', (mResponse) => {
                this.aRecordList = mResponse.data;
                setTimeout(function () {
                    mSelf.initTblRecords();
                }, 1000);
            });
        },
        initTblRecords: function () {
            $('#tbl_records').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
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