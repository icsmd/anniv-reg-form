"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[403],{4057:(t,a,e)=>{e.d(a,{Z:()=>l});var n=e(3645),i=e.n(n)()((function(t){return t[1]}));i.push([t.id,".error_msg[data-v-30b87b41],.error_msg_edit[data-v-30b87b41]{color:red}",""]);const l=i},9403:(t,a,e)=>{e.r(a),e.d(a,{default:()=>N});var n=e(821),i=function(t){return(0,n.dD)("data-v-30b87b41"),t=t(),(0,n.Cn)(),t},l={id:"content_wrapper"},s=i((function(){return(0,n._)("header",{id:"topbar",class:"alt"},null,-1)})),r={class:"panel"},d=i((function(){return(0,n._)("div",{class:"panel-heading"},[(0,n._)("span",{class:"panel-title"},"Manage Registrants")],-1)})),o={class:"panel-body"},c=(0,n.uE)('<div class="panel panel-colorbox-open panel-system" id="spy2" data-v-30b87b41><div class="panel-heading" data-v-30b87b41><div class="panel-title hidden-xs" data-v-30b87b41><span class="fa fa-cogs" data-v-30b87b41></span>Actions Available </div></div><div class="panel-body pn" data-v-30b87b41><div class="admin-form mw1000 left-block" style="margin-top:10px;" data-v-30b87b41><div class="col-lg-3" data-v-30b87b41><label for="inputStandard" class="col-lg-12 control-label" data-v-30b87b41><b data-v-30b87b41>Start Date (From)</b></label><label for="datepicker1" class="field prepend-icon" data-v-30b87b41><input type="text" id="inpStartDate" name="inpStartDate" class="gui-input" placeholder="Enter Start Date" readonly data-v-30b87b41><label class="field-icon" data-v-30b87b41><i class="fa fa-calendar-o" data-v-30b87b41></i></label></label></div><div class="col-lg-3" data-v-30b87b41><label for="inputStandard" class="col-lg-12 control-label" data-v-30b87b41><b data-v-30b87b41>End Date (To)</b></label><label for="datepicker1" class="field prepend-icon" data-v-30b87b41><input type="text" id="inpEndDate" name="inpEndDate" class="gui-input" placeholder="Enter End Date" readonly data-v-30b87b41><label class="field-icon" data-v-30b87b41><i class="fa fa-calendar-o" data-v-30b87b41></i></label></label></div></div><button id="btnFilterList" class="button btn-lg btn-system" style="margin:10px;margin-top:16px;" data-v-30b87b41><i class="fa fa-refresh" data-v-30b87b41></i>  Filter List </button><button id="btnExportData" class="button btn-lg btn-primary" style="margin:10px;margin-top:16px;" data-v-30b87b41><i class="fa fa-download" data-v-30b87b41></i>  Export Data </button><button id="btnPrintList" class="button btn-lg btn-success" style="margin:10px;margin-top:16px;" data-v-30b87b41><i class="fa fa-file-pdf-o" data-v-30b87b41></i>  Print List </button></div></div>',1),b={class:"panel panel-colorbox-open panel-dark",id:"spy2"},p=i((function(){return(0,n._)("div",{class:"panel-heading"},[(0,n._)("div",{class:"panel-title hidden-xs"},[(0,n._)("span",{class:"fa fa-list"}),(0,n.Uk)("List of Registrants ")])],-1)})),f={class:"panel-body pn"},u={class:"table table-striped table-hover",id:"tbl_records",cellspacing:"0",width:"100%"},v=i((function(){return(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"center"}},"Reg No."),(0,n._)("th",{style:{"text-align":"center"}},"Date Registered"),(0,n._)("th",{style:{"text-align":"center"}},"Last Name"),(0,n._)("th",{style:{"text-align":"center"}},"First Name"),(0,n._)("th",{style:{"text-align":"center"}},"Department/Agency"),(0,n._)("th",{style:{"text-align":"center"}},"Email"),(0,n._)("th",{style:{"text-align":"center"}},"Contact No."),(0,n._)("th",{style:{"text-align":"center"}},"ID Code"),(0,n._)("th",{style:{"text-align":"center"}},"Action")])],-1)})),g={style:{"text-align":"center"}},_={style:{"text-align":"center"}},h={style:{"text-align":"left"}},m={style:{"text-align":"left"}},D={style:{"text-align":"left"}},x={style:{"text-align":"left"}},y={style:{"text-align":"center"}},w={style:{"text-align":"center"}},L={style:{"text-align":"center"}},E=["data-id"],T=i((function(){return(0,n._)("i",{class:"fa fa-arrow-right"},null,-1)}));var Y=e(381),R=e.n(Y),S=e(860),M=e(475);const k={mixins:[S.Z,M.Z],data:function(){return{aTableConfig:{aaSorting:[[1,"desc"]],aoColumnDefs:[{bSortable:!1,aTargets:[8]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:10,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aRecordList:[],iActiveRecord:0,bUpdateData:!1}},created:function(){document.title="RFM | Manage Registrants"},mounted:function(){this.initPlugins(),this.getRecordList(),this.initEventListeners()},methods:{initPlugins:function(){$("#inpStartDate").datepicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!1,beforeShow:function(t,a){var e=$(this).parents(".admin-form").attr("class");a.dpDiv.parent().hasClass(e)||a.dpDiv.wrap('<div class="'+e+'"></div>')}}),$("#inpEndDate").datepicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!1,beforeShow:function(t,a){var e=$(this).parents(".admin-form").attr("class");a.dpDiv.parent().hasClass(e)||a.dpDiv.wrap('<div class="'+e+'"></div>')}}),$("#inpStartDate").val(R()().format("MM/DD/YYYY")),$("#inpEndDate").val(R()().format("MM/DD/YYYY"))},initEventListeners:function(){var t=this;document.body.addEventListener("click",(function(a){if(a.preventDefault(),"viewDetails"===a.target.dataset.action){var e=a.target.dataset.id,n=t.aRecordList.filter((function(t){return t.reg_no==e})),i=JSON.stringify(n);t.$root.setLocalStorageValue("comp",i),window.location.href="/admin/registrant/details"}"btnFilterList"===a.target.id&&t.getRecordList(),"btnPrintList"===a.target.id&&t.printList(),"btnExportData"===a.target.id&&t.createCsv()}),!1)},createCsv:function(){var t=[];t.push(["reg_no","email","first_name","middle_initial","last_name","salutation","department","designation","membership","contact_number","file_type","picture","id_code","status","date_created","date_modified"]),this.aRecordList.forEach((function(a){t.push(Object.values(a))}));var a="";t.forEach((function(t){a+=t.join(",")+"\n"}));var e=new Blob([a],{type:"text/csv;charset=utf-8,"}),n=URL.createObjectURL(e),i=document.createElement("a"),l="exported-list-"+R()().format("YYYYMMDDHHMMss")+".csv";i.setAttribute("href",n),i.setAttribute("download",l),i.click()},printList:function(){var t=JSON.stringify(this.aRecordList);this.$root.setLocalStorageValue("forEx",t),window.open("home/print","_blank")},getRecordList:function(){var t=this;setTimeout((function(){t.getRequest("get-reg-list",(function(a){t.aRecordList=a.data,!0===$.fn.dataTable.isDataTable("#tbl_records")&&$("#tbl_records").DataTable().destroy(),setTimeout((function(){t.initTblRecords()}),500)}),{start_date:R()($("#inpStartDate").val()).format("YYYY-MM-DD"),end_date:R()($("#inpEndDate").val()).format("YYYY-MM-DD")})}),500)},initTblRecords:function(){$("#tbl_records").DataTable(this.aTableConfig),$(".dataTables_filter input").attr("placeholder","Enter Terms...")}}};var C=e(3379),P=e.n(C),A=e(4057),z={insert:"head",singleton:!1};P()(A.Z,z);A.Z.locals;const N=(0,e(3744).Z)(k,[["render",function(t,a,e,i,Y,R){var S=(0,n.up)("C_Layout_Header"),M=(0,n.up)("C_Layout_ADMIN_Sidebar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(S),(0,n.Wm)(M),(0,n._)("section",l,[s,(0,n._)("div",r,[d,(0,n._)("div",o,[c,(0,n._)("div",b,[p,(0,n._)("div",f,[(0,n._)("table",u,[v,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Y.aRecordList,(function(a){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",g,(0,n.zw)(a.reg_no),1),(0,n._)("td",_,(0,n.zw)(t.nullCheck(a.date_created,"date")),1),(0,n._)("td",h,(0,n.zw)(a.last_name),1),(0,n._)("td",m,(0,n.zw)(a.first_name),1),(0,n._)("td",D,(0,n.zw)(a.department),1),(0,n._)("td",x,(0,n.zw)(a.email),1),(0,n._)("td",y,(0,n.zw)(a.contact_number),1),(0,n._)("td",w,(0,n.zw)(a.id_code),1),(0,n._)("td",L,[(0,n._)("button",{type:"button","data-action":"viewDetails","data-id":a.reg_no,class:"btn btn-md btn-primary viewDetails",style:{"margin-right":"9%"}},[T,(0,n.Uk)(" View Details ")],8,E)])])})),256))])])])])])])])],64)}],["__scopeId","data-v-30b87b41"]])}}]);