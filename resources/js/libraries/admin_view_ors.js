import moment from 'moment';
import HttpRequest from './request.js'
export default {
    mixins: [
        HttpRequest
    ],
    data() {
        return {
            aTableConfig: {
                "aaSorting": [
                    [0, 'desc']
                ],
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
            aFundSource: [],
            aFundTypes: [
                { id: 1, code: 'ps', desc: 'Personnel Services (PS)' },
                { id: 2, code: 'mooe', desc: 'Maintenance and Other Operating Expenses (MOOE)' },
                { id: 3, code: 'sr', desc: 'Special Requests (SR)' },
            ],
            aFsStatuses: [
                { id: '', desc: 'ALL' },
                { id: 'OPEN', desc: 'Open' },
                { id: 'FOR ORS REV', desc: 'Ongoing Revision for ORS' },
                { id: 'FOR DV', desc: 'For DV Issuance' },
                { id: 'FOR DV REV', desc: 'Ongoing Revision for DV' },
                { id: 'FOR PO', desc: 'For Payout Issuance' },
                { id: 'RELEASED', desc: 'Released' },
                { id: 'CLEARED', desc: 'Cleared' },
            ],
            aRegions: [],
            sRedirectUrl: '',
            sDefaultStatus: ''
        }
    },
    mounted() {
        this.initPlugins();
        this.getRegions();
        this.initPageValues();
        this.initEventListeners();
    },
    methods: {
        initPlugins: function () {
            $(".status-select").select2();
            $(".status-select").select2().val(this.sDefaultStatus).trigger('change');
            $(".region-select").select2();
            $(".region-select").select2().val(0).trigger('change');
            // Initialize datepicker
            $("#inpMonthYearCreated").monthpicker({
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

        initTblFundSource: function () {
            $('#tbl_fund_source').DataTable(this.aTableConfig);
            $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
        },


        initPageValues: function () {
            let mSelf = this;
            let sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
            let sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
            let sMonthYearNow = sInitMonth + '/' + sInitYear;
            $('#inpMonthYearCreated').val(sMonthYearNow);
            if (this.$route.query.stat != undefined) {
                $(".status-select").select2().val(this.$route.query.stat).trigger('change');
            }

            setTimeout(function () {
                if (mSelf.$route.query.reg != undefined) {
                    $(".region-select").select2().val(parseInt(mSelf.$route.query.reg)).trigger('change');
                }
                mSelf.filterTable();
            }, 200);
           
          
        },

        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.attr === 'href') {
                    window.location.href = event.target.href + mSelf.sSheetFundType;
                }
                if (event.target.id === 'btnFilterTable') {
                    mSelf.filterTable();
                }
            }, false);
        },

        filterTable: function () {
            let sDate = $('#inpMonthYearCreated').val();
            let iInpOffice = $('#inp_region').val();
            let iInpType = $('#inp_type').val();
            if (sDate === '') {
                this.showErrorAlert('Date (Month and Year) is Required!')
            } else {
                let aDate = sDate.split('/');
                let oParam = {
                    fs_status: $('#inp_status').val(),
                    date_month_created: aDate[0],
                    date_year_created: aDate[1],
                };
                if (iInpOffice != 0) {
                    oParam = Object.assign({}, oParam, { region_id: iInpOffice });
                }
                if (iInpType != '' || iInpType != undefined) {
                    oParam = Object.assign({}, oParam, { fs_type: iInpType });
                }
                this.getFundSource(oParam);
            }
        },

        initTableEventListener: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.dataset.attr === 'viewDetails') {
                    window.location.href = mSelf.sRedirectUrl + event.target.dataset.fs_id;
                }
            }, false);
        },

        getDateModified: function (sDateModified) {
            return sDateModified === null ? '---' : this.convertDateFormat(sDateModified, 'DD-MMM-YY H:mm:ss');
        },

        getRegions: function () {
            this.aRegions = this.$root.parseLocalStorageLib().regions;
        },

        getFundSource: function (oParams) {
            let mSelf = this;
            this.getRequest('bdgt/get-fund-source', (mResponse) => {
                this.aFundSource = mResponse.data;
                let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_fund_source');
                if (bIsDataTableActive === true) {
                    // $('#tbl_fund_source').DataTable().clear();
                    $('#tbl_fund_source').DataTable().destroy();
                }
                setTimeout(function () {
                    mSelf.initTblFundSource();
                }, 500);

                setTimeout(function () {
                    mSelf.initTableEventListener();
                }, 500);
            }, oParams);
        },
    }
}