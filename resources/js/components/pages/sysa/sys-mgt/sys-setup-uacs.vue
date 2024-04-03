<template>
    <C_Layout_Header></C_Layout_Header>
    <C_Layout_SYSA_Sidebar></C_Layout_SYSA_Sidebar>
    <!-- Start: Content-Wrapper -->
    <section id="content_wrapper">
        <!-- Start: Topbar -->
        <header id="topbar" class="alt">
            <div class="topbar-left">
                <ol class="breadcrumb">
                    <li class="crumb-trail">System Management</li>
                    <li class="crumb-trail">System Setup</li>
                    <li class="crumb-active"><a>UACS Entity Setup</a></li>
                </ol>
            </div>
        </header>
        <!-- End: Topbar -->
        <!-- Input Fields -->
        <div class="panel">
            <div class="panel-heading">
                <span class="panel-title">UACS Entity Setup</span>
            </div>
            <div class="panel-body">
                <!-- START: UACS CREATE NEW -->
                <div class="panel panel-colorbox-open panel-system" id="spy2" v-if="bUpdateData === false">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-plus-square-o"></span>Add New UACS
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-md-3">
                                    <label for="inp_uacs_acc_type" class="col-lg-12 control-label">UACS Account
                                        Type:</label>
                                    <select class="select2-single form-control" id="inp_uacs_acc_type">
                                        <option disabled value="0" selected>Please select type</option>
                                        <option v-for="item in aFundTypes" :value="item.code">{{ item.desc }}</option>
                                    </select>
                                    <p id="p_uacs_acc_type" style="display: none" class="error_msg">Account type is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-2">
                                    <label for="inp_uacs_code" class="col-lg-12 control-label">UACS Code:</label>
                                    <input type="text" id="inp_uacs_code" class="form-control"
                                        placeholder="Enter UACS Code">
                                    <p id="p_uacs_code" style="display: none" class="error_msg">Code is required!</p>

                                </div>
                                <div class="col-lg-4">
                                    <label for="inp_uacs_acc_title" class="col-lg-12 control-label">UACS Account
                                        Title</label>
                                    <input type="text" id="inp_uacs_acc_title" class="form-control"
                                        placeholder="Enter Account Title">
                                    <p id="p_uacs_acc_title" style="display: none" class="error_msg">Account title is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <button type="button" id="btnSaveNewDetails" class="btn btn-lg btn-success"
                                        style="margin-right: 7%; margin-top: 21px;">
                                        <i class="fa fa-floppy-o "></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: UACS CREATE NEW -->

                <!-- START: UACS UPDATE EXISTING -->
                <div class="panel panel-colorbox-open panel-warning"  v-else>
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-pencil-square-o"></span>Update Existing UACS
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <div class="form-group">
                            <div class="row" style="margin: 1%;">
                                <div class="col-md-3">
                                    <label for="inp_uacs_acc_type_edit" class="col-lg-12 control-label">UACS Account
                                        Type:</label>
                                    <select class="select2-single form-control" id="inp_uacs_acc_type_edit">
                                        <option disabled value="0" selected>Please select type</option>
                                        <option v-for="item in aFundTypes" :value="item.code">{{ item.desc }}</option>
                                    </select>
                                    <p id="p_uacs_acc_type_edit" style="display: none" class="error_msg_edit">Account type is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-2">
                                    <label for="inp_uacs_code_edit" class="col-lg-12 control-label">UACS Code:</label>
                                    <input type="text" id="inp_uacs_code_edit" class="form-control"
                                        placeholder="Enter UACS Code">
                                    <p id="p_uacs_code_edit" style="display: none" class="error_msg_edit">Code is required!
                                    </p>

                                </div>
                                <div class="col-lg-4">
                                    <label for="inp_uacs_acc_title_edit" class="col-lg-12 control-label">UACS Account
                                        Title</label>
                                    <input type="text" id="inp_uacs_acc_title_edit" class="form-control"
                                        placeholder="Enter Account Title">
                                    <p id="p_uacs_acc_title_edit" style="display: none" class="error_msg_edit">Account title
                                        is
                                        required!
                                    </p>
                                </div>
                                <div class="col-lg-3">
                                    <button type="button" id="btnSaveUpdate" class="btn btn-lg btn-success"
                                        style="margin-right:0px; margin-top: 21px;">
                                        <i class="fa fa-pencil-square-o "></i>
                                        Update
                                    </button>
                                    &nbsp;
                                    <button type="button" id="btnCancelUpdate" class="btn btn-lg btn-default"
                                        style="margin-right:0px; margin-top: 21px;">
                                        <i class="fa fa-times "></i>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: UACS UPDATE EXISTING -->

                <!-- START: UACS TABLE -->
                <div class="panel panel-colorbox-open panel-dark" id="spy2">
                    <br>
                    <div class="panel-heading ">
                        <div class="panel-title hidden-xs">
                            <span class="fa fa-list"></span>List of UACS
                        </div>
                    </div>
                    <div class="panel-body pn">
                        <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th style="text-align: center;">SysId</th>
                                    <th style="text-align: center;">UACS Account Type</th>
                                    <th style="text-align: center;">UACS Code</th>
                                    <th style="text-align: center;">UACS Account Title</th>
                                    <th style="text-align: center;">Date Created</th>
                                    <th style="text-align: center;">Last Modified</th>
                                    <th style="text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in aRecordList">
                                    <td style="text-align: center;">{{ item.temp_id }}</td>
                                    <td style="text-align: left;">{{ item.uacs_fund_type }}</td>
                                    <td style="text-align: left;">{{ item.uacs_code }}</td>
                                    <td style="text-align: left;">{{ item.uacs_acc_title }}</td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                                    <td style="text-align: center;">{{ nullCheck(item.date_modified, 'date') }}
                                    </td>
                                    <td style="text-align: center;">
                                        <button type="button" data-action="editDetails" :data-id="item.uacs_id"
                                            class="btn btn-md btn-warning editDetails" style="margin-right: 9%;">
                                            <i class="fa fa-pencil-square-o "></i>
                                            Edit
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
import HttpRequest from "../../../../libraries/request.js"
import Utilities from "../../../../libraries/utilities.js"
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            aTableConfig: {
                "aaSorting": [
                    [0, 'asc']
                ],
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [6]
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
            aFundTypes: [
                { id: 1, code: 'ps', desc: 'Personnel Services (PS)' },
                { id: 2, code: 'mooe', desc: 'Maintenance and Other Operating Expenses (MOOE)' },
                { id: 3, code: 'sr', desc: 'Special Requests (SR)' },
            ],
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
                if (event.target.id === 'btnSaveNewDetails') {
                    mSelf.saveEntries();
                }
                if (event.target.id === 'btnSaveUpdate') {
                    mSelf.updateEntries();
                }
                if (event.target.id === 'btnCancelUpdate') {
                    mSelf.clearUpdateEntries();
                    mSelf.bUpdateData = false;
                }
                if (event.target.dataset.action === 'editDetails') {
                    mSelf.clearCreateEntries();
                    mSelf.bUpdateData = true;
                    mSelf.iActiveRecord = event.target.dataset.id;
                    setTimeout(function () { mSelf.getDetailsToEdit(); }, 100);
                }
            }, false);
        },

        getDetailsToEdit: function () {
            const filteredData = this.aRecordList.filter(record => record.uacs_id == this.iActiveRecord);
            $('#inp_uacs_acc_type_edit option[value='+ filteredData[0].uacs_fund_type +']').prop('selected', 'selected').change();
            $('#inp_uacs_code_edit').val(filteredData[0].uacs_code);
            $('#inp_uacs_acc_title_edit').val(filteredData[0].uacs_acc_title);
        },

        getRecordList: function () {
            let mSelf = this;
            this.getRequest('uacs/get-list', (mResponse) => {
                this.aRecordList = mResponse.data;
                setTimeout(function () {
                    mSelf.initTblRecords();
                }, 500);
            });
        },
        initTblRecords: function () {
            $('#tbl_records').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },

        validateEntries: function (sAction) {
            let bResult = true;
            
            let inpUacsAccType = sAction === 'create' ? '#inp_uacs_acc_type' : '#inp_uacs_acc_type_edit';
            let pErrUacsAccType = sAction === 'create' ? '#p_uacs_acc_type' : '#p_uacs_acc_type_edit';
            if ($(inpUacsAccType).val() == null) {
                $(pErrUacsAccType).css('display', '');
                bResult = false;
            }

            let inpUacsCode = sAction === 'create' ? '#inp_uacs_code' : '#inp_uacs_code_edit';
            let pErrUacsCode = sAction === 'create' ? '#p_uacs_code' : '#p_uacs_code_edit';
            if ($(inpUacsCode).val() === '') {
                $(pErrUacsCode).css('display', '');
                bResult = false;
            }

            let inpUacsAccTitle = sAction === 'create' ? '#inp_uacs_acc_title' : '#inp_uacs_acc_title_edit';
            let pErrUacsAccTitle = sAction === 'create' ? '#p_uacs_acc_title' : '#p_uacs_acc_title_edit';
            if ($(inpUacsAccTitle).val() === '') {
                $(pErrUacsAccTitle).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_uacs_acc_type option[value=0]').prop('selected', 'selected').change();
            $('#inp_uacs_acc_title').val('');
            $('#inp_uacs_code').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_uacs_acc_type_edit option[value=0]').prop('selected', 'selected').change();
            $('#inp_uacs_acc_title_edit').val('');
            $('#inp_uacs_code_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                uacs_fund_type: $('#inp_uacs_acc_type').val(),
                uacs_code: $('#inp_uacs_code').val(),
                uacs_acc_title: $('#inp_uacs_acc_title').val(),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('uacs/create', oParams, (mResponse) => {
                    this.showSuccessAlert('Successfully saved your entry');
                    mSelf.clearCreateEntries();
                    $('#tbl_records').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!')
            }
        },

        updateEntries: function () {
            let mSelf = this;
            let oParams = {
                uacs_fund_type: $('#inp_uacs_acc_type_edit').val(),
                uacs_code: $('#inp_uacs_code_edit').val(),
                uacs_acc_title: $('#inp_uacs_acc_title_edit').val()
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('uacs/update/' + this.iActiveRecord, oParams, (mResponse) => {
                    this.showSuccessAlert(mResponse.message);
                    $('#tbl_records').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!');
                this.getDetailsToEdit(this.iActiveRecord);
            }
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