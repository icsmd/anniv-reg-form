import HttpRequest from './request.js'
import Utilities from './utilities.js';
export default {
  mixins: [
    HttpRequest,
    Utilities
  ],
  data() {
    return {
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
      iSelectedRegion: 0,
      aSheets: [],
      sActiveDate: '',
      sFundType: '',
      aRegions: [],
      aSheetStatuses: [
        { id: 'OPEN', desc: 'Open' },
        { id: 'FOR REVISION', desc: 'For Revision' },
        { id: 'REVISED', desc: 'Revised' },
        { id: 'POSTED', desc: 'Posted' },
      ],
    }
  },

  mounted() {
    this.initializePlugins();
    this.getRegions();
    this.initCreateButtonEventListener();
    this.initPageData();
  },
  methods: {
    initializePlugins: function () {
      // Init Select2 - Basic Single
      $(".status-select").select2();
      $(".reg-select").select2();
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

    getRegions: function () {
      this.aRegions = this.$root.parseLocalStorageLib().regions;
    },

    initCreateButtonEventListener: function () {
      let mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.id === 'btnFilterEntries') {
          mSelf.validateSheetFilter();
        }

      }, false);
    },

    validateSheetFilter: function () {
      let iRegion = $('#inp_region').val();
      this.iSelectedRegion = iRegion !== null ? iRegion : 0;
      let sStatus = $('#inp_status').val();
      let sMonthYear = $('#inpMonthYearTransact').val();
      if (iRegion === null) {
        this.showErrorAlert('Please Select a Region!')
      } else if (sMonthYear === '') {
        this.showErrorAlert('Month and Year is Required!')
      } else {
        let aDate = sMonthYear.split('/');
        this.getSheets(this.iSelectedRegion, aDate[0], aDate[1], sStatus);
      }
    },

    initTblSheets: function () {
      $('#tbl_Sheets').DataTable(this.aTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },

    initTableEventListener: function () {
      document.body.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.dataset.attr === 'viewDetails') {
          window.location.href = "/front/actg/view-sheet-details/" + event.target.dataset.sheet_id;
        }
      }, false);
    },

    initPageData: function () {
      let mSelf = this;
      let iRegion = parseInt(this.$route.query.reg != undefined ? this.$route.query.reg : 0);
      let sStatus = this.$route.query.stat != undefined ? this.$route.query.stat : '';
      let sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
      let sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
      let sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearTransact').val(sMonthYearNow);

      // Set delay
      setTimeout(function () {
        if (iRegion != 0) {
          $(".reg-select").select2().val(iRegion).trigger('change');
        }
        if (sStatus != '') {
          $(".status-select").select2().val(sStatus).trigger('change');
        }
        mSelf.getSheets(iRegion, sInitMonth, sInitYear, sStatus);
      }, 100);
    },

    getSheets: function (iRegion, sMonth, sYear, sStatus) {
      let mSelf = this;
      let oParams = {
        region_id: iRegion,
        sheet_fund_type: this.sFundType,
        transact_month: sMonth,
        transact_year: sYear,
        status: sStatus
      };

      if (oParams.region_id == 0) {
        delete (oParams.region_id);
      }
      if (oParams.status == '') {
        delete (oParams.status);
      }
      
      this.getRequest('actg/get-sheets', (mResponse) => {
        this.aSheets = mResponse.data;

        let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_Sheets');
        if (bIsDataTableActive === true) {
          $('#tbl_Sheets').DataTable().destroy();
        }

        setTimeout(function () {
          mSelf.initTblSheets();
        }, 500);

        setTimeout(function () {
          mSelf.initTableEventListener();
        }, 500);
      }, oParams);
    },
  }
}