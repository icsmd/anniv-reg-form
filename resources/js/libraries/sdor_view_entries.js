import Swal from 'sweetalert2'
import HttpRequest from './request.js'
import Utilities from './utilities.js';
export default {
  mixins: [
    HttpRequest,
    Utilities
  ],
  data() {
    return {
      sFundType: '',
      aSummaryTableConfig: {
        "aaSorting": [
          [0, 'desc']
        ],
        "aoColumnDefs": [{
          'bSortable': false,
          'aTargets': [1]
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
      aBreakdownTableConfig: {
        "aaSorting": [
          [0, 'desc']
        ],
        "aoColumnDefs": [{
          'bSortable': false,
          'aTargets': [3]
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
      aCashRegSummary: [],
      aCashRegBreakdown: [],
      sActiveDate: '',
      sSelectedMonth: '',
      sSelectedYear: '',
    }
  },
  mounted() {
    this.initPlugins();
    this.initPageEventListeners();
  },
  methods: {
    initPlugins: function () {
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
    initTblCashRegSummary: function () {
      $('#tbl_cash_reg_summary').DataTable(this.aSummaryTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },

    initTblCashRegBreakdown: function () {
      $('#tbl_cash_reg_breakdown').DataTable(this.aBreakdownTableConfig);
      $('.dataTables_filter input').attr("placeholder", "Enter Terms...");
    },

    initPageEventListeners: function () {
      let mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();

        // Event listener for viewing more details
        if (event.target.id === 'btnFilterData') {
          mSelf.getCashBookSummary();
        }
      }, false);
    },

    initDateValues: function () {
      let sInitMonth = this.$route.query.mn != undefined ? this.$route.query.mn : moment().format('MM');
      let sInitYear = this.$route.query.yr != undefined ? this.$route.query.yr : moment().format('YYYY');
      let sMonthYearNow = sInitMonth + '/' + sInitYear;
      $('#inpMonthYearTransact').val(sMonthYearNow);
    },

    preloadDateValues: function () {
      let sMonthYear = $('#inpMonthYearTransact').val();
      this.sSelectedMonth = sMonthYear.split('/')[0];
      this.sSelectedYear = sMonthYear.split('/')[1];
      let firstDay = this.sSelectedMonth + '-01-' + this.sSelectedYear;
      this.sActiveDate = moment(firstDay).format('MMMM') + ' ' + this.sSelectedYear;
    },

    initEventListeners: function () {
      // Event listener for viewing more details
      let mSelf = this;
      document.body.addEventListener('click', function (event) {
        event.preventDefault();

        // Event listener for viewing more details
        if (event.target.dataset.attr === 'viewDetails') {
          let iUacsId = event.target.dataset.uacs_id;
          mSelf.getCashBookBreakdown(iUacsId);
        }
      }, false);
    },

    initTable2Btns: function () {
      // Event listener for viewing more details
      let mSelf = this;

      document.body.addEventListener('click', function (event) {
        console.log(event.target.id);
        event.preventDefault();
        // Event listener for viewing more details
        if (event.target.dataset.attr === 'viewRecordDetails') {
          let sDate = event.target.dataset;
          let iCrNo = event.target.dataset.cr_no;
          window.location.href = "/front/sdor/view-entry-details/" + iCrNo;
        }

        // Event listener for viewing more details
        if (event.target.dataset.attr === 'deleteRecord') {
          let iUacsId = event.target.dataset.uacs_id;
          let iCrNo = event.target.dataset.cr_no;
          mSelf.deleteRecord(iCrNo, iUacsId);
        }
      }, false);
    },

    deleteRecord: function (iCrNo, iUacsId) {
      let mSelf = this;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.postRequest('sdor/delete-entry', { iId: iCrNo }, (mResponse) => {
            mSelf.showSuccessAlert('Successfully deleted the entry');
            mSelf.getCashBookBreakdown(iUacsId);
          });
        }
      });
    },


    getCashBookSummary: function () {
      let mSelf = this;
      this.preloadDateValues();
      this.getRequest('sdor/get-cash-reg-summary', (mResponse) => {
        this.aCashRegSummary = mResponse.data;
        let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_cash_reg_summary');
        if (bIsDataTableActive === true) {
          $('#tbl_cash_reg_summary').DataTable().destroy();
        }
        setTimeout(function () {
          mSelf.initTblCashRegSummary();
        }, 500);

        setTimeout(function () {
          mSelf.initEventListeners();
        }, 500);
      }, {
        transact_month: this.sSelectedMonth,
        transact_year: this.sSelectedYear,
        fund_type: this.sFundType
      });
    },

    getCashBookBreakdown: function (iUacsId) {
      let mSelf = this;
      this.aCashRegBreakdown = this.aCashRegSummary[iUacsId];
      let bIsDataTableActive = $.fn.dataTable.isDataTable('#tbl_cash_reg_breakdown');
      if (bIsDataTableActive === true) {
        $('#tbl_cash_reg_breakdown').DataTable().destroy();
      }
      setTimeout(function () {
        mSelf.initTblCashRegBreakdown();
      }, 600);
      setTimeout(function () {
        mSelf.initTable2Btns();
      }, 500);
    },
  }
}