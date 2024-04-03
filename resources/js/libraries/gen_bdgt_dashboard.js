import CanvasJS from '@canvasjs/charts';
import HttpRequest from './request.js';
import Utilities from './utilities.js';
export default {
    mixins: [
        Utilities,
        HttpRequest
    ],
    data() {
        return {
            aOrsStatusCount: [],
            aRegionList: [],
            aOrsOfficeCount: [],
            aOrsDateCount: [],
            aTotalExpensesByRegion: [],
            aTotalExpensesByRegionDate: [],
            sCurrOffice: '',
            sCurrMonth: moment().format('MM'),
            sCurrYear: moment().format('YYYY'),
            aMonthLibrary: {
                '01': 'January',
                '02': 'February',
                '03': 'March',
                '04': 'April',
                '05': 'May',
                '06': 'June',
                '07': 'July',
                '08': 'August',
                '09': 'September',
                '10': 'October',
                '11': 'November',
                '12': 'December'
            },
            sRedirectUrlOrsPending: '',
            sRedirectUrlOrsForRev: '',
            sRedirectUrlOrsForDv: '',
            sRedirectUrlOrsForDvRev: '',
            sRedirectUrlOrsForPo: '',
            sRedirectUrlOrsReleased: '',
        }
    },
    created () {
        this.$root.initLibraries();
    },
    mounted() {
        let mSelf = this;
        this.initializePlugins();
        this.initEventListeners();
        this.initDashboard();
        // Set delay
        setTimeout(function () {
            mSelf.getRegionList();
        }, 100);
        
        this.getOrsStatusCount();
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
        },
        initEventListeners: function () {
            let mSelf = this;
            document.body.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.id === 'btnRefresh') {
                    mSelf.filterDashboard();
                }
                if (event.target.dataset.href != undefined) {
                    window.location.href = event.target.dataset.href;
                }
            }, false);
        },
        prepareRequestParams: function () {
            let aDate = $('#inpMonthYearTransact').val();
            let sMonth = aDate.split('/')[0];
            let sYear = aDate.split('/')[1];
            this.sCurrMonth = sMonth;
            this.sCurrYear = sYear;
            let oParams = {
                date_year_created: sYear,
                date_month_created: sMonth
            };

            let iRegion = $('#inp_office').val();
            this.sCurrOffice = $('#inp_office option:selected').text();
            if (iRegion != 0) {
                oParams = Object.assign({}, oParams, { region_id: iRegion });
            }

            return oParams;
        },

        getRegionList: function () {
            this.aRegionList = this.$root.parseLocalStorageLib().regions;
        },

        filterDashboard: function () {
            let oParams = this.prepareRequestParams();
            this.setDashboardFirstPanelLinks();
            this.getOrsStatusCount(oParams);
            this.getOrsCountByOffice(oParams);
            this.getTotalDisbursmentsByOffice(oParams);
        },

        setDashboardFirstPanelLinks: function () {
            let iRegion = $('#inp_office').val();
            let sMainUrl = this.$root.sUserType === 'bdgt' ?  '/front/bdgt/ors/view?' : '/front/cash/payout/manage?' ;
            this.sRedirectUrlOrsPending = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=OPEN&reg=' + iRegion;
            this.sRedirectUrlOrsForRev = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=FOR ORS REV&reg=' + iRegion;
            this.sRedirectUrlOrsForDv = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=FOR DV&reg=' + iRegion;
            this.sRedirectUrlOrsForDvRev = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=FOR DV REV&reg=' + iRegion;
            this.sRedirectUrlOrsForPo = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=FOR PO&reg=' + iRegion;
            this.sRedirectUrlOrsReleased = sMainUrl + 'mn=' + this.sCurrMonth + '&yr=' + this.sCurrYear + '&stat=RELEASED&reg=' + iRegion;
        },

        initDashboard: function () {
            $('#inpMonthYearTransact').val(moment().format('MM/YYYY'));
            this.filterDashboard();
        },

        getOrsStatusCount: function (oParams) {
            this.getRequest('bdgt/dashboard/get-ors-status-count', (mResponse) => {
                this.aOrsStatusCount = mResponse.data;
            }, oParams);
        },

        getOrsCountByOffice: function (oParams) {
            this.getRequest('bdgt/dashboard/get-ors-office-count', (mResponse) => {
                this.aOrsOfficeCount = mResponse.data;
                this.initOrsCountByOfficeChart();
                this.getOrsCountByDate({ date_year_created: oParams.date_year_created })
            }, oParams);
        },

        getOrsCountByDate: function (oParams) {
            this.getRequest('bdgt/dashboard/get-ors-date-count', (mResponse) => {
                this.aOrsDateCount = mResponse.data;
            }, oParams);
        },

        getTotalDisbursmentsByOffice: function (oParams) {
            this.getRequest('bdgt/dashboard/get-total-exp-region', (mResponse) => {
                let aResult = mResponse.data;
                if (aResult.length === 0) {
                    this.aTotalExpensesByRegion = [];
                } else {
                    aResult = mResponse.data;
                    let aFormattedData = [];
                    aResult.forEach(element => {
                        aFormattedData.push({
                            label: element.label,
                            y: parseFloat(element.y),
                        })
                    });
                    this.aTotalExpensesByRegion = aFormattedData;
                }
                this.initTotalDisbursementsChart();
                this.getTotalDisbursmentsByOfficeDate(oParams);
            }, {transact_year: oParams.date_year_created});
        },

        getTotalDisbursmentsByOfficeDate: function (oParams) {
            this.getRequest('bdgt/dashboard/get-total-exp-region-date', (mResponse) => {
                let aResult = mResponse.data;
                if (aResult.length === 0) {
                    this.aTotalExpensesByRegionDate = [];
                } else {
                    this.aTotalExpensesByRegionDate = aResult;
                }
            }, {transact_year: oParams.date_year_created});
        },

        initOrsCountByOfficeChart: function () {
            let mSelf = this;
            var chart = new CanvasJS.Chart("OrsCountChartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", // Change theme (optional)
                title: {
                    text: "Overall Count of ORS Per Office for Year " + mSelf.sCurrYear + "  (Click to Drilldown)",
                    fontSize: 20,
                    fontFamily: "arial"
                },
                axisX: {
                    title: "Offices",
                },
                axisY: {
                    title: "Total Count",
                },
                data: [{
                    type: "column",
                    click: drillDownClick, // Call drillDownClick function on click
                    dataPoints: mSelf.aOrsOfficeCount,
                    toolTipContent: "Total ORS Count: {y}",
                }],
                toolTip: {
                    shared: true
                }
            });
            chart.render();

            // Function to handle drilldown click
            function drillDownClick(e) {
                var clickedCategory = e.dataPoint.label;
                var drillDownData = mSelf.aOrsDateCount;

                if (drillDownData[clickedCategory]) {
                    chart = new CanvasJS.Chart("OrsCountChartContainer", {
                        animationEnabled: true,
                        exportEnabled: true,
                        theme: "light2", // Change theme (optional)
                        title: {
                            text: clickedCategory + "'s Total ORS Count for Year " + mSelf.sCurrYear,
                            // text: "Disbursements of ",
                            fontSize: 20,
                            fontFamily: "arial"
                        },
                        axisX: {
                            title: "Months",
                        },
                        axisY: {
                            title: "Total Count",
                        },
                        data: [{
                            type: "column",
                            click: null, // Call drillDownClick function on click
                            dataPoints: drillDownData[clickedCategory],
                            toolTipContent: "Total ORS Count: {y}",
                        }],
                        toolTip: {
                            shared: true
                        }
                    });
                    chart.render();
                    $("#btnBackOCCC").css("display", "");
                    // Add a back button

                }

                $("#btnBackOCCC").click(function () {
                    $(this).css("display", "none");
                    mSelf.initOrsCountByOfficeChart();
                });
            }
        },

        initTotalDisbursementsChart: function () {
            let mSelf = this;
            var chart = new CanvasJS.Chart("TotalDisbursementsChartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                theme: "light2", // Change theme (optional)
                title: {
                    text: "Overall Total Net of Disbursements Per Office for Year " + mSelf.sCurrYear + "  (Click to Drilldown)",
                    fontSize: 20,
                    fontFamily: "arial"
                },
                axisX: {
                    title: "Offices",
                },
                axisY: {
                    title: "Total Net Amount in Peso",
                },
                data: [{
                    type: "column",
                    click: drillDownClick, // Call drillDownClick function on click
                    dataPoints: mSelf.aTotalExpensesByRegion,
                    toolTipContent: "Total Net: ₱ {y}",
                }],
                toolTip: {
                    shared: true
                }
            });
            chart.render();

            // Function to handle drilldown click
            function drillDownClick(e) {
                var clickedCategory = e.dataPoint.label;
                var drillDownData = mSelf.aTotalExpensesByRegionDate;

                if (drillDownData[clickedCategory]) {
                    chart = new CanvasJS.Chart("TotalDisbursementsChartContainer", {
                        animationEnabled: true,
                        exportEnabled: true,
                        theme: "light2", // Change theme (optional)
                        title: {
                            text: clickedCategory + "'s Total Net of Disbursements for Year " + mSelf.sCurrYear,
                            // text: "Disbursements of ",
                            fontSize: 20,
                            fontFamily: "arial"
                        },
                        axisX: {
                            title: "Months",
                        },
                        axisY: {
                            title: "Total Net Amount in Peso",
                        },
                        data: [{
                            type: "column",
                            click: null, // Call drillDownClick function on click
                            dataPoints: drillDownData[clickedCategory],
                            toolTipContent: "Total Net: ₱ {y}",
                        }],
                        toolTip: {
                            shared: true
                        }
                    });
                    chart.render();
                    $("#btnBackTDCC").css("display", "");
                    // Add a back button

                }

                $("#btnBackTDCC").click(function () {
                    $(this).css("display", "none");
                    mSelf.initTotalDisbursementsChart();
                });
            }
        }
    }
}