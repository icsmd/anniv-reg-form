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
                <div class="panel panel-colorbox-open panel-system" id="spy2">
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-cogs"></span>Actions Available
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="admin-form mw1000 left-block" style="margin-top: 10px;">
                            <div class="col-lg-3">
                                <label for="inputStandard" class="col-lg-12 control-label"><b>Start Date
                                        (From)</b></label>
                                <label for="datepicker1" class="field prepend-icon">
                                    <input type="text" id="inpStartDate" name="inpStartDate" class="gui-input"
                                        placeholder="Enter Start Date" readonly>
                                    <label class="field-icon">
                                        <i class="fa fa-calendar-o"></i>
                                    </label>
                                </label>
                            </div>
                            <div class="col-lg-3">
                                <label for="inputStandard" class="col-lg-12 control-label"><b>End Date (To)</b></label>
                                <label for="datepicker1" class="field prepend-icon">
                                    <input type="text" id="inpEndDate" name="inpEndDate" class="gui-input"
                                        placeholder="Enter End Date" readonly>
                                    <label class="field-icon">
                                        <i class="fa fa-calendar-o"></i>
                                    </label>
                                </label>
                            </div>
                        </div>
                        <button id="btnFilterList" class="button btn-lg btn-system" style="margin: 10px; margin-top: 16px;">
                            <i class="fa fa-refresh"></i>
                            &nbsp;Filter List
                        </button>
                        <button id="btnExportData" class="button btn-lg btn-primary"
                            style="margin: 10px; margin-top: 16px;">
                            <i class="fa fa-download"></i>
                            &nbsp;Export Data
                        </button>
                        <button id="btnPrintList" class="button btn-lg btn-success" style="margin: 10px; margin-top: 16px;">
                            <i class="fa fa-file-pdf-o"></i>
                            &nbsp;Print List
                        </button>

                    </div>
                </div>
                <!-- START: REGISTRANTS LIST TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
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
                                    <th style="text-align: center;">ID Code</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.reg_no }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                                    <td style="text-align: left;">{{ item.last_name }}</td>
                                    <td style="text-align: left;">{{ item.first_name }}</td>
                                    <td style="text-align: left;">{{ item.department }}</td>
                                    <td style="text-align: left;">{{ item.email }}</td>
                                    <td style="text-align: center;">{{ item.contact_number }}</td>
                                    <td style="text-align: center;">{{ item.id_code }}</td>
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
                <!-- END: REGISTRANTS LIST TABLE -->
            </div>
        </div>
    </section>
</template>
<script>
import moment from "moment";
import Swal from 'sweetalert2'
import HttpRequest from "./../../../libraries/request"
import Utilities from "./../../../libraries/utilities"
import { reduce } from "highcharts";
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
                    'aTargets': [8]
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
            aRegistrant: [],
            iActiveRecord: 0,
            bUpdateData: false
        }
    },
    created() {
        document.title = 'RFM | Manage Registrants'
    },
    mounted() {
        this.initPlugins();
        this.getRecordList();
        this.initEventListeners();
    },
    methods: {
        /**
         * Initialize plugins
         */
        initPlugins: function () {
            // Initialize datepicker for start date
            $("#inpStartDate").datepicker({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: false,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            // Initialize datepicker for end date
            $("#inpEndDate").datepicker({
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: false,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
            /** Preload date now for initial date */
            $('#inpStartDate').val('06/01/2024');
            $('#inpEndDate').val(moment().format('MM/DD/YYYY'));
        },

        /**
         * Initialize event listeners
         */
        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.action === 'viewDetails') {
                    let iRegNo = event.target.dataset.id;
                    let aSelectedReg = mSelf.aRecordList.filter(regs => regs.reg_no == iRegNo);
                    let sCompressed = JSON.stringify(aSelectedReg);
                    mSelf.$root.setLocalStorageValue('comp', sCompressed);
                    mSelf.showDetails();

                    // window.location.href = '/admin/registrant/details';
                }
                if (event.target.id === 'btnFilterList') {
                    mSelf.getRecordList();
                }
                if (event.target.id === 'btnPrintList') {
                    mSelf.printList();
                }
                if (event.target.id === 'btnExportData') {
                    mSelf.createCsv();
                }
            }, false);
        },

        /**
         * Create/Build and Download CSV
         */
        createCsv: function () {
            const titleKeys = [
                "reg_no",
                "email",
                "first_name",
                "middle_initial",
                "last_name",
                "salutation",
                "department",
                "designation",
                "membership",
                "contact_number",
                // "file_type",
                // "picture",
                "id_code",
                "status",
                "date_created",
                "date_modified"]
            const refinedData = [];
            refinedData.push(titleKeys);
            this.aRecordList.forEach(item => {
                delete item.picture;
                refinedData.push(Object.values(item))
            });
            let csvContent = ''
            refinedData.forEach(row => {
                csvContent += row.join(',') + '\n'
            });

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
            const objUrl = URL.createObjectURL(blob)
            const link = document.createElement('a')
            const filename = 'exported-list-' + moment().format('YYYYMMDDHHMMss') + '.csv';
            link.setAttribute('href', objUrl)
            link.setAttribute('download', filename)
            link.click();
        },

        /**
         * Print List 
         */
        printList: function () {
            let sCompressedSummary = JSON.stringify(this.aRecordList);
            this.$root.setLocalStorageValue('forEx', sCompressedSummary); // Temporary storage
            window.open('home/print', '_blank');
        },

        /**
         * Get Record List
         */
        getRecordList: function () {
            let mSelf = this;
            setTimeout(function () {
                mSelf.getRequest('get-reg-list', (mResponse) => {
                    mSelf.aRecordList = mResponse.data;
                    let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_records');
                    if (bIsDataTableActive === true) {
                        $('#tbl_records').DataTable().destroy();
                    }
                    setTimeout(function () {
                        mSelf.initTblRecords();
                    }, 500);
                }, {
                    start_date: moment($('#inpStartDate').val()).format('YYYY-MM-DD'),
                    end_date: moment($('#inpEndDate').val()).format('YYYY-MM-DD'),
                });
            }, 500);
        },

        /**
         * Initialize Table UI
         */
        initTblRecords: function () {
            $('#tbl_records').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },

        showDetails: function () {
            let mSelf = this;
            this.aRegistrant = JSON.parse(this.$root.getLocalStorageValue('comp'))[0];
            Swal.fire({
                title: "<strong>Registrant Details</strong>",
                html: `
                <div class="panel-body pn">
                        <div class="col-md-4">
                            <img src="`+ mSelf.aRegistrant.picture +`" width="200px" height="200px">
                        </div>
                        <div class="col-md-8">
                            <table style="color: #666666; font-size: 15px; border: 1px solid #eeeeee; margin-top: 2%;"
                                class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td width="30%" style="background-color: #eee; text-align: left">Name: </td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.salutation + ` ` + mSelf.aRegistrant.first_name + ` ` +
                                mSelf.aRegistrant.middle_initial + ` ` + mSelf.aRegistrant.last_name + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Department/Agency:<br>
                                            Office/Company: </td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.department + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Designation/Position:</td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.designation + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Registered As: <br>(Membership
                                            Type)</td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.membership + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Email:</td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.email + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Contact No.:</td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.contact_number + `</td>
                                    </tr>
                                    <tr>
                                        <td width="35%" style="background-color: #eee; text-align: left">Submitted ID Code:</td>
                                        <td style="text-align: left">` + mSelf.aRegistrant.id_code + `</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                        </div>
                    </div>
                `,
                width: 800,
                showCloseButton: true,
                showConfirmButton: false,
                showCancelButton: true,
                focusConfirm: false,
                cancelButtonText: ` <i class="fa fa-times"></i> Close `,
            });
        }
    }
}
</script>
<style scoped>
.error_msg,
.error_msg_edit {
    color: red;
}
</style>