<template>
    <div style="margin: 1%;">
        <!-- START: TAX CLASS CREATE NEW -->
        <div class="panel panel-colorbox-open panel-system" id="spy2" v-if="bUpdateData === false">
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-plus-square-o"></span>Add New Tax Class
                </div>
            </div>
            <div class="panel-body pn">
                <div class="form-group">
                    <div class="row" style="margin: 1%;">
                        <div class="col-lg-3">
                            <label for="inp_tcl_desc" class="col-lg-12 control-label">Tax Class Description:</label>
                            <input type="text" id="inp_tcl_desc" class="form-control" placeholder="Enter Tax Class Desc">
                            <p id="p_tcl_desc" style="display: none" class="error_msg">Description is required!</p>

                        </div>
                        <div class="col-md-3">
                            <label for="inp_tcl_type" class="col-lg-12 control-label">Tax Type:</label>
                            <select class="select2-single form-control" id="inp_tcl_type">
                                <option disabled value="0" selected>Please select type</option>
                                <option value="" >N/A</option>
                                <option value="vat" >VAT</option>
                                <option value="non-vat" >NON-VAT</option>
                            </select>
                            <p id="p_tcl_type" style="display: none" class="error_msg">Tax type is
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
        <!-- END: TAX CLASS CREATE NEW -->

        <!-- START: TAX CLASS UPDATE EXISTING -->
        <div class="panel panel-colorbox-open panel-warning" v-else>
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-pencil-square-o"></span>Update Existing Tax Class
                </div>
            </div>
            <div class="panel-body pn">
                <div class="form-group">
                    <div class="row" style="margin: 1%;">
                        <div class="col-lg-3">
                            <label for="inp_tcl_desc_edit" class="col-lg-12 control-label">Tax Class Description:</label>
                            <input type="text" id="inp_tcl_desc_edit" class="form-control" placeholder="Enter Tax Class Desc">
                            <p id="p_tcl_desc_edit" style="display: none" class="error_msg_edit">Description is required!</p>

                        </div>
                        <div class="col-md-3">
                            <label for="inp_tcl_type_edit" class="col-lg-12 control-label">Tax Type:</label>
                            <select class="select2-single form-control" id="inp_tcl_type_edit">
                                <option disabled value="0" selected>Please select type</option>
                                <option value="" >N/A</option>
                                <option value="vat" >VAT</option>
                                <option value="non-vat" >NON-VAT</option>
                            </select>
                            <p id="p_tcl_type_edit" style="display: none" class="error_msg_edit">Tax type is
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
        <!-- END: TAX CLASS UPDATE EXISTING -->

        <!-- START: TAX CLASS TABLE -->
        <div class="panel panel-colorbox-open panel-dark" id="spy2">
            <br>
            <div class="panel-heading ">
                <div class="panel-title hidden-xs">
                    <span class="fa fa-list"></span>List of Tax Classes
                </div>
            </div>
            <div class="panel-body pn">
                <table class="table table-striped table-hover" id="tbl_records" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th style="text-align: center;">SysId</th>
                            <th style="text-align: center;">Tax Class Description</th>
                            <th style="text-align: center;">Tax Class Type</th>
                            <th style="text-align: center;">Date Created</th>
                            <th style="text-align: center;">Last Modified</th>
                            <th style="text-align: center;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in aRecordList">
                            <td style="text-align: center;">{{ item.temp_id }}</td>
                            <td style="text-align: left;">{{ item.tcl_desc }}</td>
                            <td style="text-align: left;">{{ item.tcl_type }}</td>
                            <td style="text-align: center;">{{ nullCheck(item.date_created, 'date') }} </td>
                            <td style="text-align: center;">{{ nullCheck(item.date_modified, 'date') }}
                            </td>
                            <td style="text-align: center;">
                                <button type="button" data-action="editDetails" :data-id="item.tcl_id"
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
        <!-- END: TAX CLASS TABLE -->
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
                    'aTargets': [5]
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
            const filteredData = this.aRecordList.filter(record => record.tcl_id == this.iActiveRecord);
            $('#inp_tcl_type_edit option[value=' + filteredData[0].tcl_type + ']').prop('selected', 'selected').change();
            $('#inp_tcl_desc_edit').val(filteredData[0].tcl_desc);
        },

        getRecordList: function () {
            let mSelf = this;
            this.getRequest('tax-class/get-list', (mResponse) => {
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

            let inpTclType = sAction === 'create' ? '#inp_tcl_type' : '#inp_tcl_type_edit';
            let pErrTclType = sAction === 'create' ? '#p_tcl_type' : '#p_tcl_type_edit';
            if ($(inpTclType).val() == null) {
                $(pErrTclType).css('display', '');
                bResult = false;
            }

            let inpTclDesc = sAction === 'create' ? '#inp_tcl_desc' : '#inp_tcl_desc_edit';
            let pErrTclDesc = sAction === 'create' ? '#p_tcl_desc' : '#p_tcl_desc_edit';
            if ($(inpTclDesc).val() === '') {
                $(pErrTclDesc).css('display', '');
                bResult = false;
            }

            return bResult;
        },

        clearCreateEntries: function () {
            $('#inp_tcl_type option[value=0]').prop('selected', 'selected').change();
            $('#inp_tcl_desc').val('');
            $('.error_msg').css('display', 'none');
        },

        clearUpdateEntries: function () {
            $('#inp_tcl_type_edit option[value=0]').prop('selected', 'selected').change();
            $('#inp_tcl_desc_edit').val('');
            $('.error_msg_edit').css('display', 'none');
        },

        saveEntries: function () {
            let mSelf = this;
            let oParams = {
                tcl_type: $('#inp_tcl_type').val(),
                tcl_desc: $('#inp_tcl_desc').val(),
            };
            $('.error_msg').css('display', 'none');
            let bValidateResult = this.validateEntries('create');
            if (bValidateResult === true) {
                this.postRequest('tax-class/create', oParams, (mResponse) => {
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
                tcl_type: $('#inp_tcl_type_edit').val(),
                tcl_desc: $('#inp_tcl_desc_edit').val(),
            };
            $('.error_msg_edit').css('display', 'none');
            let bValidateResult = this.validateEntries('update');
            if (bValidateResult === true) {
                this.postRequest('tax-class/update/' + this.iActiveRecord, oParams, (mResponse) => {
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