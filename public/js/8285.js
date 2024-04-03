"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8285],{3820:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(860),i=a(475);const n={mixins:[s.Z,i.Z],data:function(){return{aTableConfig:{aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:5,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},iSelectedRegion:0,aSheets:[],sActiveDate:"",sFundType:"",aRegions:[],aSheetStatuses:[{id:"OPEN",desc:"Open"},{id:"FOR REVISION",desc:"For Revision"},{id:"REVISED",desc:"Revised"},{id:"POSTED",desc:"Posted"}]}},mounted:function(){this.initializePlugins(),this.getRegions(),this.initCreateButtonEventListener(),this.initPageData()},methods:{initializePlugins:function(){$(".status-select").select2(),$(".reg-select").select2(),$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(e,t){var a=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(a)||t.dpDiv.wrap('<div class="'+a+'"></div>')}})},getRegions:function(){this.aRegions=this.$root.parseLocalStorageLib().regions},initCreateButtonEventListener:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"btnFilterEntries"===t.target.id&&e.validateSheetFilter()}),!1)},validateSheetFilter:function(){var e=$("#inp_region").val();this.iSelectedRegion=null!==e?e:0;var t=$("#inp_status").val(),a=$("#inpMonthYearTransact").val();if(null===e)this.showErrorAlert("Please Select a Region!");else if(""===a)this.showErrorAlert("Month and Year is Required!");else{var s=a.split("/");this.getSheets(this.iSelectedRegion,s[0],s[1],t)}},initTblSheets:function(){$("#tbl_Sheets").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initTableEventListener:function(){document.body.addEventListener("click",(function(e){e.preventDefault(),"viewDetails"===e.target.dataset.attr&&(window.location.href="/front/actg/view-sheet-details/"+e.target.dataset.sheet_id)}),!1)},initPageData:function(){var e=this,t=parseInt(null!=this.$route.query.reg?this.$route.query.reg:0),a=null!=this.$route.query.stat?this.$route.query.stat:"",s=null!=this.$route.query.mn?this.$route.query.mn:moment().format("MM"),i=null!=this.$route.query.yr?this.$route.query.yr:moment().format("YYYY"),n=s+"/"+i;$("#inpMonthYearTransact").val(n),setTimeout((function(){0!=t&&$(".reg-select").select2().val(t).trigger("change"),""!=a&&$(".status-select").select2().val(a).trigger("change"),e.getSheets(t,s,i,a)}),100)},getSheets:function(e,t,a,s){var i=this,n=this,l={region_id:e,sheet_fund_type:this.sFundType,transact_month:t,transact_year:a,status:s};0==l.region_id&&delete l.region_id,""==l.status&&delete l.status,this.getRequest("actg/get-sheets",(function(e){i.aSheets=e.data,!0===$.fn.dataTable.isDataTable("#tbl_Sheets")&&$("#tbl_Sheets").DataTable().destroy(),setTimeout((function(){n.initTblSheets()}),500),setTimeout((function(){n.initTableEventListener()}),500)}),l)}}}},8285:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(821),i={id:"main"},n={id:"content_wrapper"},l=(0,s.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> Cash Management </li><li class="crumb-trail"> Manage Sheet </li><li class="crumb-active"><a>Special Requests</a></li></ol></div></header>',1),r={class:"panel"},o=(0,s._)("div",{class:"panel-heading"},[(0,s._)("span",{class:"panel-title"},"Manage Cash Disbursement Sheets for Special")],-1),c={class:"panel-body"},d={class:"form-group",id:"divInpTransactMY"},u={class:"admin-form mw1000 left-block"},h={class:"col-md-3"},g=(0,s._)("label",{for:"inp_status",style:{"margin-bottom":"2%"}},[(0,s._)("b",null,"Office:")],-1),p={class:"select2-single form-control reg-select",id:"inp_region"},_=(0,s._)("option",{value:"0",selected:""},"ALL",-1),f=["value"],b={class:"col-md-2",style:{"margin-top":"1px"}},v=(0,s._)("label",{for:"inp_status",style:{"margin-bottom":"2%"}},[(0,s._)("b",null,"Status:")],-1),m={class:"select2-single form-control status-select",id:"inp_status"},y=(0,s._)("option",{value:"",selected:""},"ALL",-1),S=["value"],w=(0,s.uE)('<div class="col-md-2"><label for="inp_status" style="margin-bottom:2%;"><b>Date Created:</b></label><label for="monthpicker1" class="field prepend-icon"><input type="text" id="inpMonthYearTransact" name="inpMonthYearTransact" class="gui-input" placeholder="Enter month and year" readonly><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label></div><div class="col-md-4" style="margin-top:21px;"><button id="btnFilterEntries" type="button" class="btn btn-primary btn-gradient dark btn-lg"><i class="fa fa-refresh"></i> Filter Entries </button></div>',2),T={class:"col-md-12"},D={class:"panel panel-colorbox-open panel-dark",id:"spy2"},x=(0,s._)("br",null,null,-1),$=(0,s._)("div",{class:"panel-heading"},[(0,s._)("div",{class:"panel-title hidden-xs"},[(0,s._)("span",{class:"fa fa-table"}),(0,s.Uk)("Cash Disbursement Sheets for Special Requests ")])],-1),E={class:"panel-body pn"},Y={class:"table table-striped table-hover",id:"tbl_Sheets",cellspacing:"0",width:"100%"},R=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{"text-align":"center"}},"SysId"),(0,s._)("th",{style:{"text-align":"center"}},"Sheet No"),(0,s._)("th",{style:{"text-align":"center"}},"Accounting Period"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",{style:{"text-align":"center"}},"Date Created"),(0,s._)("th",{style:{"text-align":"center"}},"Action")])],-1),L={style:{"text-align":"center"}},M={style:{"text-align":"center"}},C={style:{"text-align":"center"}},k={style:{"text-align":"center"}},P={style:{"text-align":"center"}},q={style:{"text-align":"center"}},F=["data-sheet_id"],z=(0,s._)("i",{class:"fa fa-arrow-circle-o-right"},null,-1);const A={mixins:[a(3820).Z],mounted:function(){this.sFundType="sr"}};const I=(0,a(3744).Z)(A,[["render",function(e,t,a,A,I,O){var Z=(0,s.up)("C_Layout_Header"),H=(0,s.up)("C_Layout_ACTG_Sidebar");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(Z),(0,s.Wm)(H),(0,s._)("section",n,[l,(0,s._)("div",r,[o,(0,s._)("div",c,[(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("div",h,[g,(0,s._)("select",p,[_,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aRegions,(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e.region_id},(0,s.zw)(e.region_abbr)+" - "+(0,s.zw)(e.region_desc),9,f)})),256))])]),(0,s._)("div",b,[v,(0,s._)("select",m,[y,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aSheetStatuses,(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e.id},(0,s.zw)(e.desc),9,S)})),256))])]),w])]),(0,s._)("div",T,[(0,s._)("div",D,[x,$,(0,s._)("div",E,[(0,s._)("table",Y,[R,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aSheets,(function(t){return(0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",L,(0,s.zw)(t.temp_id),1),(0,s._)("td",M,(0,s.zw)(null===t.sheet_no?"---":t.sheet_no),1),(0,s._)("td",C,(0,s.zw)(e.convertDateFormat(t.transact_year+"-"+t.transact_month,"MMMM YYYY")),1),(0,s._)("td",k,(0,s.zw)(t.status),1),(0,s._)("td",P,(0,s.zw)(t.date_created),1),(0,s._)("td",q,[(0,s._)("button",{type:"button","data-attr":"viewDetails","data-sheet_id":t.sheet_id,class:"btn btn-md btn-info viewDetails",style:{"margin-right":"9%"}},[z,(0,s.Uk)(" View Details ")],8,F)])])})),256))])])])])])])])])])}]])}}]);