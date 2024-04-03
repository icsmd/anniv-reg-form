<template>
    <div style="margin: 1%;">
        <!-- START: TAX CODE CREATE NEW -->
        <div class="panel panel-colorbox-open panel-system" id="spy2" v-if="bUpdateData === false">
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-plus-square-o"></span>Add New Tax Code
                </div>
            </div>
            <div class="panel-body pn">
                <div class="form-group">
                    <div class="row" style="margin: 1%;">
                        <div class="col-md-3">
                            <label for="inp_tcl_id" class="col-lg-12 control-label">Tax Class:</label>
                            <select class="select2-single form-control" id="inp_tcl_id">
                                <option disabled value="0" selected>Please select class</option>
                                <option v-for="item in aTaxClass" :value="item.tcl_id">{{ item.tcl_desc }}</option>
                            </select>
                            <p id="p_tcl_id" style="display: none" class="error_msg">Tax class is
                                required!
                            </p>
                        </div>
                        <div class="col-lg-3">
                            <label for="inp_tcd_code" class="col-lg-12 control-label">Tax Code:</label>
                            <input type="text" id="inp_tcd_code" class="form-control" placeholder="Enter Tax Code">
                            <p id="p_tcd_code" style="display: none" class="error_msg">Code is required!</p>
                        </div>
                        <div class="col-lg-3">
                            <label for="inp_tcd_percentage" class="col-lg-12 control-label">Tax Percentage:</label>
                            <input type="text" id="inp_tcd_percentage" class="form-control" placeholder="Enter Tax Percentage">
                            <p id="p_tcd_percentage" style="display: none" class="error_msg">Percentage is required!</p>

                        </div>
                       
                        <div class="col-lg-3">
                            <button type="button" id="btnSaveNewDetails-2" class="btn btn-lg btn-success"
                                style="margin-right: 7%; margin-top: 21px;">
                                <i class="fa fa-floppy-o "></i>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: TAX CODE CREATE NEW -->

        <!-- START: TAX CODE UPDATE EXISTING -->
        <div class="panel panel-colorbox-open panel-warning" v-else>
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-pencil-square-o"></span>Update Existing Tax Code
                </div>
            </div>
            <div class="panel-body pn">
                <div class="form-group">
                    <div class="row" style="margin: 1%;">
                        <div class="col-md-3">
                            <label for="inp_tcl_id_edit" class="col-lg-12 control-label">Tax Class:</label>
                            <select class="select2-single form-control" id="inp_tcl_id_edit">
                                <option disabled value="0" selected>Please select class</option>
                                <option v-for="item in aTaxClass" :value="item.tcl_id">{{ item.tcl_desc }}</option>
                            </select>
                            <p id="p_tcl_id_edit" style="display: none" class="error_msg_edit">Tax class is
                                required!
                            </p>
                        </div>
                        <div class="col-lg-3">
                            <label for="inp_tcd_code_edit" class="col-lg-12 control-label">Tax Code:</label>
                            <input type="text" id="inp_tcd_code_edit" class="form-control" placeholder="Enter Tax Code">
                            <p id="p_tcd_code_edit" style="display: none" class="error_msg_edit">Code is required!</p>
                        </div>
                        <div class="col-lg-3">
                            <label for="inp_tcd_percentage_edit" class="col-lg-12 control-label">Tax Percentage:</label>
                            <input type="text" id="inp_tcd_percentage_edit" class="form-control" placeholder="Enter Tax Percentage">
                            <p id="p_tcd_percentage_edit" style="display: none" class="error_msg_edit">Percentage is required!</p>

                        </div>
                        <div class="col-lg-3">
                            <button type="button" id="btnSaveUpdate-2" class="btn btn-lg btn-success"
                                style="margin-right:0px; margin-top: 21px;">
                                <i class="fa fa-pencil-square-o "></i>
                                Update
                            </button>
                            &nbsp;
                            <button type="button" id="btnCancelUpdate-2" class="btn btn-lg btn-default"
                                style="margin-right:0px; margin-top: 21px;">
                                <i class="fa fa-times "></i>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: TAX CODE UPDATE EXISTING -->

        <!-- START: TAX CODE TABLE -->
        <div class="panel panel-colorbox-open panel-dark" id="spy2">
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-list"></span>List of Tax Codes
                </div>
            </div>
            <div class="panel-body pn">
                <table class="table table-striped table-hover" id="tbl_records_2" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th style="text-align: center;">SysId</th>
                            <th style="text-align: center;">Tax Class</th>
                            <th style="text-align: center;">Tax Code</th>
                            <th style="text-align: center;">Tax Percentage</th>
                            <th style="text-align: center;">Date Created</th>
                            <th style="text-align: center;">Last Modified</th>
                            <th style="text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in aRecordList">
                            <td style="text-align: center;">{{ item.temp_id }}</td>
                            <td style="text-align: left;">{{ item.tcl_desc }}</td>
                            <td style="text-align: center;">{{ item.tcd_code }}</td>
                            <td style="text-align: center;">{{ item.tcd_percentage }}</td>
                            <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                            <td style="text-align: center;">{{ nullCheck(item.date_modified, 'date') }}
                            </td>
                            <td style="text-align: center;">
                                <button type="button" data-action="editDetails-2" :data-id="item.tcd_id"
                                    class="btn btn-md btn-warning editDetails-2" style="margin-right: 9%;">
                                    <i class="fa fa-pencil-square-o "></i>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- END: TAX CODE TABLE -->
    </div>
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
            bUpdateData: false,
            aTaxClass: [],
        }
    },
    mounted() {
        this.getTaxClass();
        this.getRecordList();
        this.initEventListeners();
    },
    methods: {

        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.id === 'btnSaveNewDetails-2') {
                    mSelf.saveEntries();
                }
                if (event.target.id === 'btnSaveUpdate-2') {
                    mSelf.updateEntries();
                }
                if (event.target.id === 'btnCancelUpdate-2') {
                    mSelf.clearUpdateEntries();
                    mSelf.bUpdateData = false;
                }
                if (event.target.dataset.action === 'editDetails-2') {
                    mSelf.clearCreateEntries();
                    mSelf.bUpdateData = true;
                    mSelf.iActiveRecord = event.target.dataset.id;
                    setTimeout(function () { mSelf.getDetailsToEdit(); }, 100);
                }
            }, false);
        },

        getDetailsToEdit: function () {
            const filteredData = this.aRecordList.filter(record => record.tcd_id == this.iActiveRecord);
            $('#inp_tcl_id_edit option[value=' + filteredData[0].tcl_id + ']').prop('selected', 'selected').change();
            $('#inp_tcd_code_edit').val(filteredData[0].tcd_code);
            $('#inp_tcd_percentage_edit').val(filteredData[0].tcd_percentage);
        },

        getTaxClass: function () {
            this.getRequest('tax-class/get-list', (mResponse) => {
                this.aTaxClass = mResponse.data;
            });
        },

        getRecordList: function () {
            let mSelf = this;
            this.getRequest('tax-code/get-list', (mResponse) => {
                this.aRecordList = mResponse.data;
                setTimeout(function () {
                    mSelf.initTblRecords();
                }, 500);
            });
        },

        initTblRecords: function () {
            $('#tbl_records_2').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },

        validateEntries: function (sAction) {
            let bResult = true;

            let inpTclId = sAction === 'create' ? '#inp_tcl_id' : '#inp_tcl_id_edit';
            let pErrTclId = sAction === 'create' ? '#p_tcl_id' : '#p_tcl_id_edit';
            if ($(inpTclId).val() == null) {
                $(pErrTclId).css('display', '');
                bResult = false;
            }

            let inpTcdCode = sAction === 'create' ? '#inp_tcd_code' : '#inp_tcd_code_edit';
            let pErrTcdCode = sAction === 'create' ? '#p_tcd_code' : '#p_tcd_code_edit';
            if ($(inpTcdCode).val() === '') {
                $(pErrTcdCode).css('display', '');
                bResult = false;
            }

            let inpTcdPercentage = sAction === 'create' ? '#inp_tcd_percentage' : '#inp_tcd_percentage_edit';
            let pErrTcdPercentage = sAction === 'create' ? '#p_tcd_percentage' : '#p_tcd_percentage_edit';
            if ($(inpTcdPercentage).val() === '') {
                $(pErrTcdPercentage).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_tcl_id option[value=0]').prop('selected', 'selected').change();
            $('#inp_tcd_code').val('');
            $('#inp_tcd_percentage').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_tcl_id_edit option[value=0]').prop('selected', 'selected').change();
            $('#inp_tcd_code_edit').val('');
            $('#inp_tcd_percentage_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                tcl_id: $('#inp_tcl_id').val(),
                tcd_code: $('#inp_tcd_code').val(),
                tcd_percentage: $('#inp_tcd_percentage').val(),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('tax-code/create', oParams, (mResponse) => {
                    this.showSuccessAlert('Successfully saved your entry');
                    mSelf.clearCreateEntries();
                    $('#tbl_records_2').DataTable().destroy();
                    mSelf.getRecordList();
                });
            } else {
                this.showErrorAlert('Please double check and correct all your entries!')
            }
        },

        updateEntries: function () {
            let mSelf = this;
            let oParams = {
                tcl_id: $('#inp_tcl_id_edit').val(),
                tcd_code: $('#inp_tcd_code_edit').val(),
                tcd_percentage: $('#inp_tcd_percentage_edit').val(),
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('tax-code/update/' + this.iActiveRecord, oParams, (mResponse) => {
                    this.showSuccessAlert(mResponse.message);
                    $('#tbl_records_2').DataTable().destroy();
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