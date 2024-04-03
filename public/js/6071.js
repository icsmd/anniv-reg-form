"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6071],{4901:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(381),i=n.n(s);const a={mixins:[n(860).Z],data:function(){return{aTableConfig:{aaSorting:[[0,"desc"]],aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aFundSource:[],aFundTypes:[{id:1,code:"ps",desc:"Personnel Services (PS)"},{id:2,code:"mooe",desc:"Maintenance and Other Operating Expenses (MOOE)"},{id:3,code:"sr",desc:"Special Requests (SR)"}],aFsStatuses:[{id:"",desc:"ALL"},{id:"OPEN",desc:"Open"},{id:"FOR ORS REV",desc:"Ongoing Revision for ORS"},{id:"FOR DV",desc:"For DV Issuance"},{id:"FOR DV REV",desc:"Ongoing Revision for DV"},{id:"FOR PO",desc:"For Payout Issuance"},{id:"RELEASED",desc:"Released"},{id:"CLEARED",desc:"Cleared"}],aRegions:[],sRedirectUrl:"",sDefaultStatus:""}},mounted:function(){this.initPlugins(),this.getRegions(),this.initPageValues(),this.initEventListeners()},methods:{initPlugins:function(){$(".status-select").select2(),$(".status-select").select2().val(this.sDefaultStatus).trigger("change"),$(".region-select").select2(),$(".region-select").select2().val(0).trigger("change"),$("#inpMonthYearCreated").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(e,t){var n=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(n)||t.dpDiv.wrap('<div class="'+n+'"></div>')}})},initTblFundSource:function(){$("#tbl_fund_source").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")},initPageValues:function(){var e=this,t=(null!=this.$route.query.mn?this.$route.query.mn:i()().format("MM"))+"/"+(null!=this.$route.query.yr?this.$route.query.yr:i()().format("YYYY"));$("#inpMonthYearCreated").val(t),null!=this.$route.query.stat&&$(".status-select").select2().val(this.$route.query.stat).trigger("change"),setTimeout((function(){null!=e.$route.query.reg&&$(".region-select").select2().val(parseInt(e.$route.query.reg)).trigger("change"),e.filterTable()}),200)},initEventListeners:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"href"===t.target.dataset.attr&&(window.location.href=t.target.href+e.sSheetFundType),"btnFilterTable"===t.target.id&&e.filterTable()}),!1)},filterTable:function(){var e=$("#inpMonthYearCreated").val(),t=$("#inp_region").val(),n=$("#inp_type").val();if(""===e)this.showErrorAlert("Date (Month and Year) is Required!");else{var s=e.split("/"),i={fs_status:$("#inp_status").val(),date_month_created:s[0],date_year_created:s[1]};0!=t&&(i=Object.assign({},i,{region_id:t})),""==n&&null==n||(i=Object.assign({},i,{fs_type:n})),this.getFundSource(i)}},initTableEventListener:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"viewDetails"===t.target.dataset.attr&&(window.location.href=e.sRedirectUrl+t.target.dataset.fs_id)}),!1)},getDateModified:function(e){return null===e?"---":this.convertDateFormat(e,"DD-MMM-YY H:mm:ss")},getRegions:function(){this.aRegions=this.$root.parseLocalStorageLib().regions},getFundSource:function(e){var t=this,n=this;this.getRequest("bdgt/get-fund-source",(function(e){t.aFundSource=e.data,!0===$.fn.dataTable.isDataTable("#tbl_fund_source")&&$("#tbl_fund_source").DataTable().destroy(),setTimeout((function(){n.initTblFundSource()}),500),setTimeout((function(){n.initTableEventListener()}),500)}),e)}}}},6071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var s=n(821),i={id:"content_wrapper"},a=(0,s.uE)('<header id="topbar" class="alt"><div class="topbar-left"><ol class="breadcrumb"><li class="crumb-trail"> Other Reports </li><li class="crumb-active"><a>ORS Record List</a></li></ol></div></header>',1),l={class:"panel"},r=(0,s._)("div",{class:"panel-heading"},[(0,s._)("span",{class:"panel-title"}," ORS Record List Report ")],-1),o={class:"panel-body"},c={class:"form-group",id:"divInpTransactMY",style:{margin:"1%"}},d={class:"admin-form mw1000 left-block"},u=(0,s.uE)('<div class="col-md-2"><label for="inp_region" style="margin-bottom:2%;"><b>Date Modified: </b></label><label for="inpMonthYearCreated" class="field prepend-icon"><input type="text" id="inpMonthYearCreated" name="inpMonthYearCreated" class="gui-input" placeholder="Enter month and year" readonly><label class="field-icon"><i class="fa fa-calendar-o"></i></label></label></div>',1),g={class:"col-md-3"},p=(0,s._)("label",{for:"inp_region",style:{"margin-bottom":"2%"}},[(0,s._)("b",null,"Office:")],-1),f={class:"select2-single form-control region-select",id:"inp_region"},_=(0,s._)("option",{value:"0",selected:""},"ALL",-1),h=["value"],b={class:"col-md-3"},y=(0,s._)("label",{for:"inp_region",style:{"margin-bottom":"2%"}},[(0,s._)("b",null,"Type:")],-1),m={class:"select2-single form-control type-select",id:"inp_type"},v=(0,s._)("option",{value:"",selected:""},"ALL",-1),D=["value"],w={class:"col-md-2"},R=(0,s._)("label",{for:"inp_status",style:{"margin-bottom":"2%"}},[(0,s._)("b",null,"Status:")],-1),S={class:"select2-single form-control status-select",id:"inp_status"},T=["value"],x=(0,s.uE)('<div class="col-md-2"><button id="btnFilterTable" style="margin-top:20px;" type="button" class="btn btn-primary btn-gradient dark btn-block"><i class="fa fa-refresh"></i> Generate Report </button><button id="btnPrintReport" style="margin-top:20px;" type="button" class="btn btn-success btn-gradient dark btn-block"><i class="fa fa-file-pdf-o"></i> Print Report </button></div>',1),L={class:"col-md-12"},O={class:"panel panel-colorbox-open panel-dark",id:"spy2"},C=(0,s._)("br",null,null,-1),E=(0,s._)("div",{class:"panel-heading"},[(0,s._)("div",{class:"panel-title hidden-xs"},[(0,s._)("span",{class:"glyphicon glyphicon-tasks"}),(0,s.Uk)("ORS Record List "),(0,s._)("span",{style:{"font-size":"12px"}},[(0,s._)("i",null," (Filter done inside the table will not reflect in the actual printable report)")])])],-1),k={class:"panel-body pn"},M={class:"table table-striped table-hover",id:"tbl_fund_source",cellspacing:"0",width:"100%"},F=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{"text-align":"center"}},"Sys Ref No."),(0,s._)("th",{style:{"text-align":"center"}},"ORS No."),(0,s._)("th",{style:{"text-align":"center"}},"DV No."),(0,s._)("th",{style:{"text-align":"center"}},"ADA/Check No."),(0,s._)("th",{style:{"text-align":"center"}},"Description"),(0,s._)("th",{style:{"text-align":"center"}},"Type"),(0,s._)("th",{style:{"text-align":"center"}},"Requesting Office"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",{style:{"text-align":"center"}},"Gross"),(0,s._)("th",{style:{"text-align":"center"}},"Net"),(0,s._)("th",{style:{"text-align":"center"}},"Date/Time Last Modified")])],-1),P={style:{"text-align":"left"}},Y={style:{"text-align":"left"}},z={style:{"text-align":"left"}},q={style:{"text-align":"left"}},V={style:{"text-align":"left"}},A={style:{"text-align":"center"}},H={style:{"text-align":"center"}},N={style:{"text-align":"center"}},U={style:{"text-align":"right"}},j={style:{"text-align":"right"}},G={style:{"text-align":"center"}};const I={mixins:[n(4901).Z],data:function(){return{sCompressedSummary:"",sTitleDate:"",sPrintPageUrl:"/front/bdgt/report/ors/list/print"}},mounted:function(){this.sDefaultStatus="",this.initOrsReportEventListeners(),this.initOrsReportPlugins()},methods:{initOrsReportPlugins:function(){$(".type-select").select2()},initOrsReportEventListeners:function(){var e=this;document.body.addEventListener("click",(function(t){t.preventDefault(),"btnPrintReport"===t.target.id&&e.prepareReport()}),!1)},getDateValues:function(){var e=$("#inpMonthYearCreated").val(),t=e.split("/")[0],n=e.split("/")[1],s=t+"-01-"+n,i=moment(s).endOf("month").format("DD");this.sTitleDate="01-"+i+" "+moment(s).format("MMMM")+" "+n},prepareReport:function(){this.getDateValues();var e=Object.assign({},{fund_source:this.aFundSource},{date_details:{title_date:this.sTitleDate}});this.sCompressedSummary=btoa(JSON.stringify(e)),this.$root.setLocalStorageValue("forEx",this.sCompressedSummary),window.open(this.sPrintPageUrl,"_blank")}}};const K=(0,n(3744).Z)(I,[["render",function(e,t,n,$,I,K){var Z=(0,s.up)("C_Layout_Header"),B=(0,s.up)("C_Layout_BDGT_Sidebar"),J=(0,s.up)("C_Layout_ACTG_Sidebar"),W=(0,s.up)("C_Layout_CASH_Sidebar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(Z),"bdgt"===e.$root.sUserType?((0,s.wg)(),(0,s.j4)(B,{key:0})):"actg"===e.$root.sUserType?((0,s.wg)(),(0,s.j4)(J,{key:1})):"cash"===e.$root.sUserType?((0,s.wg)(),(0,s.j4)(W,{key:2})):(0,s.kq)("",!0),(0,s._)("section",i,[a,(0,s._)("div",l,[r,(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("div",d,[u,(0,s._)("div",g,[p,(0,s._)("select",f,[_,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aRegions,(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e.region_id},(0,s.zw)(e.region_abbr)+" - "+(0,s.zw)(e.region_desc),9,h)})),256))])]),(0,s._)("div",b,[y,(0,s._)("select",m,[v,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aFundTypes,(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e.code},(0,s.zw)(e.desc),9,D)})),256))])]),(0,s._)("div",w,[R,(0,s._)("select",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aFsStatuses,(function(e){return(0,s.wg)(),(0,s.iD)("option",{value:e.id},(0,s.zw)(e.desc),9,T)})),256))])]),x])]),(0,s._)("div",L,[(0,s._)("div",O,[C,E,(0,s._)("div",k,[(0,s._)("table",M,[F,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.aFundSource,(function(t){return(0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",P,(0,s.zw)(t.temp_id),1),(0,s._)("td",Y,(0,s.zw)(t.ors_no),1),(0,s._)("td",z,(0,s.zw)(t.dv_no),1),(0,s._)("td",q,(0,s.zw)(e.nullCheck(t.cpo_no)),1),(0,s._)("td",V,(0,s.zw)(t.fs_desc),1),(0,s._)("td",A,(0,s.zw)(t.fs_type),1),(0,s._)("td",H,(0,s.zw)(t.region_abbr),1),(0,s._)("td",N,(0,s.zw)(t.fs_status),1),(0,s._)("td",U,(0,s.zw)(t.fs_gross_amount),1),(0,s._)("td",j,(0,s.zw)(e.nullCheck(t.fs_net_amount,"number")),1),(0,s._)("td",G,(0,s.zw)(e.nullCheck(t.date_modified,"date")),1)])})),256))])])])])])])])])],64)}]])}}]);