
import moment from "moment";
import HttpRequest from './request.js';
import Utilities from './utilities.js';
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            sUserType: this.$root.getUserType(),
            aTableConfig: {
                "aoColumnDefs": [{
                    'bSortable': true,
                    'aTargets': [-1]
                }],
                "oLanguage": {
                    "oPaginate": {
                        "sPrevious": "",
                        "sNext": ""
                    }
                },
                "iDisplayLength": 5,
                "aLengthMenu": [
                    [5, 10, 25, 50, -1],
                    [5, 10, 25, 50, "All"]
                ],
                "sDom": '<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',
                "oTableTools": {
                    "sSwfPath": "vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"
                }
            },
            aFundTypes: [
                { id: 1, code: 'ps', desc: 'Personnel Services (PS)' },
                { id: 2, code: 'mooe', desc: 'Maintenance and Other Operating Expenses (MOOE)' },
                { id: 3, code: 'sr', desc: 'Special Requests (SR)' },
            ],
            iSelectedFund: 0,
            aFSList: [],
            aRegionList: [],
            aSheet: [],
            aSheetDetails: [],
            fTotalGrossAmount: 0,
            fTotalTaxAmount: 0,
            fTotalNetAmount: 0,
            fTotalGrossPartAmount: 0,
            fTotalTaxPartAmount: 0,
            fTotalParticularAmount: 0,
            sFundCode: '',
            sReportNo: '',
            sSheetNo: '',
            sTitleDate: '',
            sCurrDate: moment().format('DD-MMM-YYYY'),
            sCompressedSummary: '',
            aFundSource: [],
            aSheetRecap: [],
            aSheetSummary: [],
            // register
            fSumOfSWReg: 0,
            fSumOfSWCas: 0,
            fSumOfOffice: 0,
            fSumOfOthers: 0,

            // For customization
            sReportType: '',
            sReportDetailsUrl: '',
            sPrintPageUrl: '',
            
            sPartDesc: '',
        }
    },
    mounted() {
        this.initializePlugins();
        this.initEventListeners();
        this.getFundSourceList();
        this.executeUserTypeRequests();
    },
    methods: {

        initializePlugins: function (params) {
            // Init Select2 - Basic Single
            $(".select2-single").select2();
            // Initialize monthpicker
            $("#inpMonthYearTransact").monthpicker({
                changeYear: false,
                stepYears: 1,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
                showButtonPanel: true,
                beforeShow: function (input, inst) {
                    var newclass = 'admin-form';
                    var themeClass = $(this).parents('.admin-form').attr('class');
                    var smartpikr = inst.dpDiv.parent();
                    if (!smartpikr.hasClass(themeClass)) {
                        inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
                    }
                }
            });
        },

        initTblSheets: function () {
            $('#tbl_cash_reg_summary').DataTable(this.aTableConfig);
        },

        initEventListeners: function () {
            let mSelf = this;
            $('#inp_fund_type').on('select2:select', function (e) {
                let sTypeCode = $('#inp_fund_type').val();
                if (sTypeCode === 'sr') {
                    $('#divSRSelection').css('visibility', '');
                } else {
                    $('#divSRSelection').css('visibility', 'hidden');
                }
            });

            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.id === 'btnGenReport') {
                    mSelf.validateFilter();
                }
                if (event.target.id === 'btnPrintReport') {
                    mSelf.prepareReport();
                }

            }, false);

            $('#txt_particular').keyup(function (event) {
                mSelf.sPartDesc = $('#txt_particular').val();
            });
        },

        prepareReport: function () {
            let oFinalPayload = Object.assign({}, this.aSheetDetails, {
                date_details: {
                    title_date: this.sTitleDate,
                    curr_date: this.sCurrDate
                }
            });
            if (this.sReportType === 'cash-reg-liquidation') {
                oFinalPayload = Object.assign({}, oFinalPayload, {sPartDesc : this.sPartDesc});
            }
            console.log(oFinalPayload);
            this.sCompressedSummary = btoa(JSON.stringify(oFinalPayload));
            this.$root.setLocalStorageValue('forEx', this.sCompressedSummary);
            window.open(this.sPrintPageUrl, '_blank');
        },

        validateFilter: function () {
            let bValid = true;
            let oParams, iSrValue, iRegionId;
            let sFundType = $('#inp_fund_type').val();
            let sMonthYear = $('#inpMonthYearTransact').val();
            if (sMonthYear === '') {
                bValid = false;
                this.showErrorAlert('Month-Year is Required!');
            }
            if (sFundType == null) {
                bValid = false;
                this.showErrorAlert('Type is Required!');
            } else if (sFundType === 'sr') {
                iSrValue = $('#inp_sr').val();
                if (iSrValue == null) {
                    bValid = false;
                    this.showErrorAlert('Request Reference is Required!');
                }
            }

            if (this.sUserType !== 'sdor') {
                iRegionId = $('#inp_office').val();
                if (iRegionId == null) {
                    bValid = false;
                    this.showErrorAlert('Office is Required!');
                }
            }

            if (bValid === true) {
                oParams = {
                    sheet_fund_type: sFundType,
                    transact_month: sMonthYear.split('/')[0],
                    transact_year: sMonthYear.split('/')[1]
                };
                oParams = sFundType === 'sr' ? Object.assign({}, oParams, { fs_id: iSrValue }) : oParams;
                oParams = this.sUserType !== 'sdor' ? Object.assign({}, oParams, { region_id: iRegionId }) : oParams;
                this.getDateValues();
                this.getReportDetails(oParams);
            }
        },

        getDateValues: function () {
            let sMonthYear = $('#inpMonthYearTransact').val();
            let iMonth = sMonthYear.split('/')[0];
            let iYear = sMonthYear.split('/')[1];
            let firstDay = iMonth + '-01-' + iYear;
            let endDay = moment(firstDay).endOf('month').format('DD');

            this.sTitleDate = '01-' + endDay + ' ' + moment(firstDay).format('MMMM') + ' ' + iYear;
        },

        executeUserTypeRequests: function () {
            if (this.sUserType !== 'sdor') {
                $('#divInpOffice').css('visibility', '');
                this.getRegionList();
            }
        },

        getRegionList: function () {
            this.aRegionList = this.$root.parseLocalStorageLib().regions;
        },

        getReportDetails: function (oParams) {
            this.getRequest(this.sReportDetailsUrl, (mResponse) => {
                let aResult = mResponse.data;
                if (aResult.length === 0) {
                    this.resetDisplayTable();
                    this.showErrorAlert('No available data to load!');
                    $('.tbl-empty').css('display', '');
                    $('.tbl-with-content').css('display', 'none');
                    $('#btnPrintReport').attr('disabled', true);
                    $('#btnPrintReport').attr('class', 'btn btn-default btn-gradient dark btn-lg');

                    if (this.sReportType === 'cash-reg-liquidation') {
                        document.getElementById('txt_particular').readOnly = true;
                    }
                } else {
                    $('.tbl-with-content').css('display', '');
                    $('.tbl-empty').css('display', 'none');
                    $('#btnPrintReport').attr('disabled', false);
                    $('#btnPrintReport').attr('class', 'btn btn-success btn-gradient dark btn-lg');
                    this.aSheetDetails = aResult;
                    this.reportLayoutSetter(aResult);
                }
            }, oParams);
        },

        resetDisplayTable: function () {
            this.aSheetDetails = [];
            this.fTotalGrossAmount = 0;
            this.fTotalTaxAmount = 0;
            this.fTotalNetAmount = 0;
            this.fTotalParticularAmount = 0;
        },

        reportLayoutSetter: function (aReportDetails) {
            this.sTitleDate = aReportDetails.date_details === undefined ? this.sTitleDate : aReportDetails.date_details.title_date;
            this.sCurrDate = aReportDetails.date_details === undefined ? this.sCurrDate : aReportDetails.date_details.curr_date;
            if (this.sReportType === 'cash-reg-report') {
                this.sReportNo = aReportDetails.sheet_details.report_no
                this.sSheetNo = aReportDetails.sheet_details.sheet_no
                this.sFundCluster = aReportDetails.sheet_details.fund_desc + ' (' + aReportDetails.sheet_details.fund_code + ')';
                this.computeTotalAmount();
            } else if (this.sReportType === 'cash-reg-record') {
                this.aFundSource = aReportDetails.fund_source[0];
                this.aSheetRecap = aReportDetails.sheet_recap;
                this.aSheetSummary = aReportDetails.sheet_summary;
            } else if (this.sReportType === 'cash-reg-register') {
                this.aFundSource = aReportDetails.fund_source[0];
                this.aSheetRecap = aReportDetails.sheet_recap;
                this.aSheetSummary = aReportDetails.sheet_summary;
                this.computeSummation();
            } else if (this.sReportType === 'cash-reg-liquidation') {
                if (document.title ===  'SCMS | Print Liquidation Form') {
                    this.aSheetSummary = aReportDetails.sheet_summary;
                    console.log(aReportDetails.sPartDesc);
                    this.sPartDesc = aReportDetails.sPartDesc;
                } else {
                    this.aSheetSummary = aReportDetails.sheet_summary;
                    this.sPartDesc = this.aSheetSummary.fs_desc;
                    document.getElementById('txt_particular').readOnly = false;
                    $('#txt_particular').text(this.sPartDesc);
                }
            }
        },

        getFundSourceList: function () {
            
            this.getRequest('fund-source/get-list', (mResponse) => {
                this.aFSList = mResponse.data;
            }, { fs_type: 'sr', fs_status: 'RELEASED' });
        },

        computeTotalAmount: function () {
            let fTotalNet = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.net_amount);
                return accumulator + fValue;
            }, 0);
            let fTotalTax = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.tax_amount);
                return accumulator + fValue;
            }, 0);
            let fTotalGross = this.aSheetDetails.sheet_entries.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.gross_amount);
                return accumulator + fValue;
            }, 0);
            let fTotalGrossPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.gross_total);
                return accumulator + fValue;
            }, 0);
            let fTotalTaxPartAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.tax_total);
                return accumulator + fValue;
            }, 0);
            let fTotalParticularAmount = this.aSheetDetails.sheet_recap.reduce(function (accumulator, currentObject) {
                let fValue = parseFloat(currentObject.net_total);
                return accumulator + fValue;
            }, 0);

            this.fTotalGrossAmount = fTotalGross.toFixed(2);
            this.fTotalTaxAmount = fTotalTax.toFixed(2);
            this.fTotalNetAmount = fTotalNet.toFixed(2);
            this.fTotalGrossPartAmount = fTotalGrossPartAmount.toFixed(2);
            this.fTotalTaxPartAmount = fTotalTaxPartAmount.toFixed(2);
            this.fTotalParticularAmount = fTotalParticularAmount.toFixed(2);
        },

        computeSummation: function (mValue) {
            let mSelf = this;
            this.aSheetDetails.sheet_entries.forEach(mValue => {
                if (mValue.uacs_code === '5-01-010-1000') {
                    mSelf.fSumOfSWReg += parseFloat(mValue.net_amount);
                }
                else if (mValue.uacs_code === '5-01-010-2000') {
                    mSelf.fSumOfSWCas += parseFloat(mValue.net_amount);
                }
                else if (mValue.uacs_code === '5-02-03-010') {
                    mSelf.fSumOfOffice += parseFloat(mValue.net_amount);
                } else {
                    mSelf.fSumOfOthers += parseFloat(mValue.net_amount);
                }
            });
        },


        parseCompressedData: function () {
            let sCompressedData = this.$root.getLocalStorageValue('forEx');
            this.aSheetDetails = JSON.parse(atob(sCompressedData));
            this.reportLayoutSetter(this.aSheetDetails);
        },

        printReport: function () {
            var printContents = document.getElementById('printableDiv').outerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        },
    }
}
