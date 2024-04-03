"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5849],{7242:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(6455),s=a.n(n),i=a(860),l=a(475);const r={mixins:[i.Z,l.Z],data:function(){return{sFundType:"",aSummaryTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aBreakdownTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[3]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aCashRegSummary:[],aCashRegBreakdown:[],sActiveDate:"",sSelectedMonth:"",sSelectedYear:""}},mounted:function(){this.initPlugins(),this.initPageEventListeners()},methods:{initPlugins:function(){$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(t,e){var a=$(this).parents(".admin-form").attr("class");e.dpDiv.parent().hasClass(a)||e.dpDiv.wrap('<div class="'+a+'"></div>')}})},initTblCashRegSummary:function(){$("#tbl_cash_reg_summary").DataTable(this.aSummaryTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initTblCashRegBreakdown:function(){$("#tbl_cash_reg_breakdown").DataTable(this.aBreakdownTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initPageEventListeners:function(){var t=this;document.body.addEventListener("click",(function(e){e.preventDefault(),"btnFilterData"===e.target.id&&t.getCashBookSummary()}),!1)},initDateValues:function(){var t=(null!=this.$route.query.mn?this.$route.query.mn:moment().format("MM"))+"/"+(null!=this.$route.query.yr?this.$route.query.yr:moment().format("YYYY"));$("#inpMonthYearTransact").val(t)},preloadDateValues:function(){var t=$("#inpMonthYearTransact").val();this.sSelectedMonth=t.split("/")[0],this.sSelectedYear=t.split("/")[1];var e=this.sSelectedMonth+"-01-"+this.sSelectedYear;this.sActiveDate=moment(e).format("MMMM")+" "+this.sSelectedYear},initEventListeners:function(){var t=this;document.body.addEventListener("click",(function(e){if(e.preventDefault(),"viewDetails"===e.target.dataset.attr){var a=e.target.dataset.uacs_id;t.getCashBookBreakdown(a)}}),!1)},initTable2Btns:function(){var t=this;document.body.addEventListener("click",(function(e){if(console.log(e.target.id),e.preventDefault(),"viewRecordDetails"===e.target.dataset.attr){e.target.dataset;var a=e.target.dataset.cr_no;window.location.href="/front/sdor/view-entry-details/"+a}if("deleteRecord"===e.target.dataset.attr){var n=e.target.dataset.uacs_id,s=e.target.dataset.cr_no;t.deleteRecord(s,n)}}),!1)},deleteRecord:function(t,e){var a=this,n=this;s().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){s.isConfirmed&&a.postRequest("sdor/delete-entry",{iId:t},(function(t){n.showSuccessAlert("Successfully deleted the entry"),n.getCashBookBreakdown(e)}))}))},getCashBookSummary:function(){var t=this,e=this;this.preloadDateValues(),this.getRequest("sdor/get-cash-reg-summary",(function(a){t.aCashRegSummary=a.data,!0===$.fn.dataTable.isDataTable("#tbl_cash_reg_summary")&&$("#tbl_cash_reg_summary").DataTable().destroy(),setTimeout((function(){e.initTblCashRegSummary()}),500),setTimeout((function(){e.initEventListeners()}),500)}),{transact_month:this.sSelectedMonth,transact_year:this.sSelectedYear,fund_type:this.sFundType})},getCashBookBreakdown:function(t){var e=this;this.aCashRegBreakdown=this.aCashRegSummary[t],!0===$.fn.dataTable.isDataTable("#tbl_cash_reg_breakdown")&&$("#tbl_cash_reg_breakdown").DataTable().destroy(),setTimeout((function(){e.initTblCashRegBreakdown()}),600),setTimeout((function(){e.initTable2Btns()}),500)}}}},5849:(t,e,a)=>{a.r(e),a.d(e,{default:()=>U});var n=a(821),s={id:"main"},i={id:"content_wrapper"},l=(0,n.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> Cash Management </li><li class="crumb-trail"> View Cash Disbursements </li><li class="crumb-active"><a>Personnel Services</a></li></ol></div></header>',1),r={class:"panel"},o=(0,n._)("div",{class:"panel-heading"},[(0,n._)("span",{class:"panel-title"},"Summary of Entries for Personnel Services")],-1),d={class:"panel-body"},c=(0,n.uE)('<div class="col-md-12"><div class="panel panel-colorbox-open panel-primary" id="spy2"><div class="panel-heading"><div class="panel-title hidden-xs"><span class="fa fa-refresh"></span>Filter Data </div></div><div class="panel-body pn"><div style="margin:1%;"><div class="col-md-3" style="margin-bottom:1%;"><div class="admin-form mw1000 center-block"><label for="monthpicker1" class="field prepend-icon"><input type="text" id="inpMonthYearTransact" name="inpMonthYearTransact" class="gui-input" placeholder="Enter month and year" readonly style="height:38px;"><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label></div></div><div class="col-md-3" style="margin-bottom:1%;"><button id="btnFilterData" type="button" class="btn btn-primary btn-gradient dark btn-md"><i class="fa fa-refresh"></i>  Filter </button></div></div></div></div></div>',1),u={class:"col-md-5"},h={class:"panel panel-colorbox-open panel-dark",id:"spy2"},b={class:"panel-heading"},f={class:"panel-title hidden-xs"},p=(0,n._)("span",{class:"glyphicon glyphicon-tasks"},null,-1),m={class:"panel-body pn"},_={class:"table table-striped table-hover",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%"},g=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"UACS Code"),(0,n._)("th",{style:{"text-align":"center"}},"Account Title"),(0,n._)("th",{style:{"text-align":"center"}},"Action")])],-1),v={style:{"text-align":"left"}},y={style:{"text-align":"left"}},w={style:{"text-align":"center"}},T=["id","data-uacs_id"],D=(0,n._)("i",{class:"fa fa-arrow-circle-o-right"},null,-1),k={class:"col-md-7"},x={class:"panel panel-colorbox-open panel-dark",id:"spy2"},S=(0,n._)("div",{class:"panel-heading"},[(0,n._)("div",{class:"panel-title hidden-xs"},[(0,n._)("span",{class:"fa fa-sitemap"}),(0,n.Uk)("Transaction Breakdown ")])],-1),C={class:"panel-body pn"},B={class:"table table-striped table-hover",id:"tbl_cash_reg_breakdown",cellspacing:"0",width:"100%"},R=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"SysId"),(0,n._)("th",{style:{"text-align":"center"}},"Date/Time Encoded"),(0,n._)("th",{style:{"text-align":"center"}},"Net Amount"),(0,n._)("th",{style:{"text-align":"center"}},"Action(s)")])],-1),Y={style:{"text-align":"center"}},M={style:{"text-align":"center"}},$={style:{"text-align":"right"}},E=["id"],L=["id","data-cr_no"],P=[(0,n._)("i",{class:"fa fa-eye"},null,-1)],A=["data-uacs_id","data-cr_no"],F=[(0,n._)("i",{class:"fa fa-trash"},null,-1)],V={key:1,type:"button",class:"btn btn-md btn-default",disabled:""},q=[(0,n._)("i",{class:"fa fa-trash"},null,-1)];var z=a(475);const Z={mixins:[a(7242).Z,z.Z],mounted:function(){this.sFundType="ps",this.initDateValues(),this.getCashBookSummary()}};const U=(0,a(3744).Z)(Z,[["render",function(t,e,a,z,Z,U){var I=(0,n.up)("C_Layout_Header"),N=(0,n.up)("C_Layout_SDOR_Sidebar");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(I),(0,n.Wm)(N),(0,n._)("section",i,[l,(0,n._)("div",r,[o,(0,n._)("div",d,[c,(0,n._)("div",u,[(0,n._)("div",h,[(0,n._)("div",b,[(0,n._)("div",f,[p,(0,n.Uk)("Summary of Transactions for "+(0,n.zw)(t.sActiveDate),1)])]),(0,n._)("div",m,[(0,n._)("table",_,[g,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.aCashRegSummary,(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",v,(0,n.zw)(t[0].uacs_code),1),(0,n._)("td",y,(0,n.zw)(t[0].uacs_desc),1),(0,n._)("td",w,[(0,n._)("button",{id:t[0].uacs_id,type:"button","data-attr":"viewDetails","data-uacs_id":t[0].uacs_id,class:"btn btn-md btn-info pull-right viewDetails",style:{"margin-right":"9%"}},[D,(0,n.Uk)(" View Details ")],8,T)])])})),256))])])])])]),(0,n._)("div",k,[(0,n._)("div",x,[S,(0,n._)("div",C,[(0,n._)("table",B,[R,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.aCashRegBreakdown,(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",Y,(0,n.zw)(t.temp_id),1),(0,n._)("td",M,(0,n.zw)(t.date_created),1),(0,n._)("td",$,(0,n.zw)(t.net_amount),1),(0,n._)("td",{id:t.cr_no,style:{"text-align":"center"}},[(0,n._)("button",{id:t.transact_date,type:"button",class:"btn btn-md btn-info","data-attr":"viewRecordDetails","data-cr_no":t.cr_no},P,8,L),(0,n.Uk)("   "),"FOR REVISION"===t.sheet_stat||"---"===t.sheet_stat?((0,n.wg)(),(0,n.iD)("button",{key:0,"data-uacs_id":t.uacs_id,type:"button",class:"btn btn-md btn-danger","data-attr":"deleteRecord","data-cr_no":t.cr_no},F,8,A)):((0,n.wg)(),(0,n.iD)("button",V,q))],8,E)])})),256))])])])])])])])])])}]])}}]);