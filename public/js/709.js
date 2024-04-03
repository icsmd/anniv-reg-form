"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[709],{5266:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(381),r=n.n(a),s=n(860),i=n(475);const l={mixins:[s.Z,i.Z],data:function(){return{sUserType:this.$root.getUserType(),aTableConfig:{aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:5,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aFundTypes:[{id:1,code:"ps",desc:"Personnel Services (PS)"},{id:2,code:"mooe",desc:"Maintenance and Other Operating Expenses (MOOE)"},{id:3,code:"sr",desc:"Special Requests (SR)"}],iSelectedFund:0,aFSList:[],aRegionList:[],aSheet:[],aSheetDetails:[],fTotalGrossAmount:0,fTotalTaxAmount:0,fTotalNetAmount:0,fTotalParticularAmount:0,sFundCode:"",sReportNo:"",sSheetNo:"",sTitleDate:"",sCurrDate:r()().format("DD-MMM-YYYY"),sCompressedSummary:"",aFundSource:[],aSheetRecap:[],aSheetSummary:[],fSumOfSWReg:0,fSumOfSWCas:0,fSumOfOffice:0,fSumOfOthers:0,sReportType:"",sReportDetailsUrl:"",sPrintPageUrl:""}},mounted:function(){this.initializePlugins(),this.initEventListeners(),this.getFundSourceList(),this.executeUserTypeRequests()},methods:{initializePlugins:function(t){$(".select2-single").select2(),$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(t,e){var n=$(this).parents(".admin-form").attr("class");e.dpDiv.parent().hasClass(n)||e.dpDiv.wrap('<div class="'+n+'"></div>')}})},initTblSheets:function(){$("#tbl_cash_reg_summary").DataTable(this.aTableConfig)},initEventListeners:function(){var t=this;$("#inp_fund_type").on("select2:select",(function(t){"sr"===$("#inp_fund_type").val()?$("#divSRSelection").css("visibility",""):$("#divSRSelection").css("visibility","hidden")})),document.body.addEventListener("click",(function(e){e.preventDefault(),"btnGenReport"===e.target.id&&t.validateFilter(),"btnPrintReport"===e.target.id&&t.prepareReport()}),!1)},prepareReport:function(){var t=Object.assign({},this.aSheetDetails,{date_details:{title_date:this.sTitleDate,curr_date:this.sCurrDate}});this.sCompressedSummary=btoa(JSON.stringify(t)),this.$root.setLocalStorageValue("forEx",this.sCompressedSummary),window.open(this.sPrintPageUrl,"_blank")},validateFilter:function(){var t,e,n,a=!0,r=$("#inp_fund_type").val(),s=$("#inpMonthYearTransact").val();""===s&&(a=!1,this.showErrorAlert("Month-Year is Required!")),null==r?(a=!1,this.showErrorAlert("Type is Required!")):"sr"===r&&null==(e=$("#inp_sr").val())&&(a=!1,this.showErrorAlert("Request Reference is Required!")),"sdor"!==this.sUserType&&null==(n=$("#inp_office").val())&&(a=!1,this.showErrorAlert("Office is Required!")),!0===a&&(t={sheet_fund_type:r,transact_month:s.split("/")[0],transact_year:s.split("/")[1]},t="sr"===r?Object.assign({},t,{fs_id:e}):t,t="sdor"!==this.sUserType?Object.assign({},t,{region_id:n}):t,this.getDateValues(),this.getReportDetails(t))},getDateValues:function(){var t=$("#inpMonthYearTransact").val(),e=t.split("/")[0],n=t.split("/")[1],a=e+"-01-"+n,s=r()(a).endOf("month").format("DD");this.sTitleDate="01-"+s+" "+r()(a).format("MMMM")+" "+n},executeUserTypeRequests:function(){"sdor"!==this.sUserType&&($("#divInpOffice").css("visibility",""),this.getRegionList())},getRegionList:function(){this.aRegionList=this.$root.parseLocalStorageLib().regions},getReportDetails:function(t){var e=this;this.getRequest(this.sReportDetailsUrl,(function(t){var n=t.data;0===n.length?(e.resetDisplayTable(),e.showErrorAlert("No available data to load!"),$(".tbl-empty").css("display",""),$(".tbl-with-content").css("display","none"),$("#btnPrintReport").attr("disabled",!0),$("#btnPrintReport").attr("class","btn btn-default btn-gradient dark btn-lg")):($(".tbl-with-content").css("display",""),$(".tbl-empty").css("display","none"),$("#btnPrintReport").attr("disabled",!1),$("#btnPrintReport").attr("class","btn btn-success btn-gradient dark btn-lg"),e.aSheetDetails=n,e.reportLayoutSetter(n))}),t)},resetDisplayTable:function(){this.aSheetDetails=[],this.fTotalGrossAmount=0,this.fTotalTaxAmount=0,this.fTotalNetAmount=0,this.fTotalParticularAmount=0},reportLayoutSetter:function(t){this.sTitleDate=void 0===t.date_details?this.sTitleDate:t.date_details.title_date,this.sCurrDate=void 0===t.date_details?this.sCurrDate:t.date_details.curr_date,"cash-reg-report"===this.sReportType?(this.sReportNo=t.sheet_details.report_no,this.sSheetNo=t.sheet_details.sheet_no,this.sFundCluster=t.sheet_details.fund_desc+" ("+t.sheet_details.fund_code+")",this.computeTotalAmount()):"cash-reg-record"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary):"cash-reg-register"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary,this.computeSummation()):"cash-reg-liquidation"===this.sReportType&&(this.aSheetSummary=t.sheet_summary)},getFundSourceList:function(){var t=this;this.getRequest("fund-source/get-list",(function(e){t.aFSList=e.data}),{fs_type:"sr",fs_status:"RELEASED"})},computeTotalAmount:function(){var t=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.net_amount)}),0),e=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.tax_amount)}),0),n=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.gross_amount)}),0),a=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.total_amount)}),0);this.fTotalGrossAmount=n.toFixed(2),this.fTotalTaxAmount=e.toFixed(2),this.fTotalNetAmount=t.toFixed(2),this.fTotalParticularAmount=a.toFixed(2)},computeSummation:function(t){var e=this;this.aSheetDetails.sheet_entries.forEach((function(t){"5-01-010-1000"===t.uacs_code?e.fSumOfSWReg+=parseFloat(t.net_amount):"5-01-010-2000"===t.uacs_code?e.fSumOfSWCas+=parseFloat(t.net_amount):"5-02-03-010"===t.uacs_code?e.fSumOfOffice+=parseFloat(t.net_amount):e.fSumOfOthers+=parseFloat(t.net_amount)}))},parseCompressedData:function(){var t=this.$root.getLocalStorageValue("forEx");this.aSheetDetails=JSON.parse(atob(t)),this.reportLayoutSetter(this.aSheetDetails)},printReport:function(){var t=document.getElementById("printableDiv").outerHTML,e=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=e}}}},2674:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(3645),r=n.n(a)()((function(t){return t[1]}));r.push([t.id,'@media print{@page{size:A4 portrait!important}.header[data-v-8d0a2be8]{height:50px;left:0;margin-bottom:1%;padding:1px;position:absolute;right:0;text-align:center;top:0}.table-container[data-v-8d0a2be8]{border:1px solid #000;margin-top:1%!important}.table-container[data-v-8d0a2be8]:after{content:"";display:block;height:0;margin-top:1%!important}table[data-v-8d0a2be8]{border:1px solid #000;width:100%}tbody[data-v-8d0a2be8],td[data-v-8d0a2be8],thead[data-v-8d0a2be8],tr[data-v-8d0a2be8]{border:1px solid #000;font-family:Arial}tbody[data-v-8d0a2be8]:after,tr[data-v-8d0a2be8]:after{margin-top:50%;page-break-before:always}thead[data-v-8d0a2be8],thead[data-v-8d0a2be8]:after{display:table-header-group!important}.p-inside-table[data-v-8d0a2be8]{font-size:12px!important;margin:3%!important}}',""]);const s=r},1709:(t,e,n)=>{n.r(e),n.d(e,{default:()=>pt});var a=n(821),r=function(t){return(0,a.dD)("data-v-8d0a2be8"),t=t(),(0,a.Cn)(),t},s={id:"printableDiv"},i=r((function(){return(0,a._)("div",{class:"header"},null,-1)})),l={class:"table-container",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%",style:{"font-family":"Muli !important"}},o={class:"custom-table-header"},_=r((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important"}}," ")],-1)})),u=r((function(){return(0,a._)("tr",{style:{"border-top":"solid 1px white !important","border-left":"solid 1px rgb(255, 255, 255)","border-right":"solid 1px rgb(255, 255, 255)"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important","border-bottom":"1px solid black !important"}},"  ")],-1)})),d={colspan:"2",style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},p={style:{"margin-top":"20px"},class:"p-inside-table"},c=r((function(){return(0,a._)("b",null,"LIQUIDATION REPORT",-1)})),h=r((function(){return(0,a._)("br",null,null,-1)})),f=r((function(){return(0,a._)("p",{class:"p-inside-table pull-left",style:{margin:"10px !important"}},"Entity Name: _____________________________________________________",-1)})),m={class:"p-inside-table pull-left",style:{margin:"10px !important"}},b={style:{border:"solid 1px rgb(13, 0, 0)","text-align":"left"}},g={style:{"margin-top":"20px"},class:"p-inside-table"},y={style:{"margin-top":"20px"},class:"p-inside-table"},S={style:{"margin-top":"20px"},class:"p-inside-table"},v=r((function(){return(0,a._)("tr",null,[(0,a._)("th",{colspan:"2",style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"PARTICULARS")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"AMOUNT")])],-1)})),T={colspan:"2",style:{"text-align":"left"}},x={class:"p-inside-table"},D=r((function(){return(0,a._)("br",null,null,-1)})),R=r((function(){return(0,a._)("br",null,null,-1)})),w=r((function(){return(0,a._)("br",null,null,-1)})),U=r((function(){return(0,a._)("br",null,null,-1)})),A=r((function(){return(0,a._)("br",null,null,-1)})),O=r((function(){return(0,a._)("br",null,null,-1)})),P=r((function(){return(0,a._)("br",null,null,-1)})),C=r((function(){return(0,a._)("br",null,null,-1)})),F={style:{"font-size":"20px !important","text-align":"right"}},N={class:"p-inside-table"},k=r((function(){return(0,a._)("br",null,null,-1)})),E=r((function(){return(0,a._)("br",null,null,-1)})),L=r((function(){return(0,a._)("br",null,null,-1)})),$=r((function(){return(0,a._)("br",null,null,-1)})),M=r((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),z=r((function(){return(0,a._)("br",null,null,-1)})),q=r((function(){return(0,a._)("br",null,null,-1)})),Y=r((function(){return(0,a._)("br",null,null,-1)})),I=r((function(){return(0,a._)("br",null,null,-1)})),Z=r((function(){return(0,a._)("td",{colspan:"2",style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},"TOTAL AMOUNT SPENT")],-1)})),V={style:{"font-size":"20px !important","text-align":"right"}},H={class:"p-inside-table"},B=r((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),G={colspan:"2",style:{"text-align":"left"}},W={class:"p-inside-table"},j={style:{"font-size":"20px !important","text-align":"right"}},J={class:"p-inside-table"},Q=r((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),K=r((function(){return(0,a._)("td",{colspan:"2",style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},"AMOUNT REFUNDED PER OR NO. ______ DTD. _______")],-1)})),X={style:{"font-size":"20px !important","text-align":"right"}},tt={class:"p-inside-table"},et=r((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),nt=r((function(){return(0,a._)("td",{colspan:"2",style:{"text-align":"left"}},[(0,a._)("p",{class:"p-inside-table"},"AMOUNT TO BE REIMBURSED")],-1)})),at={style:{"font-size":"20px !important","text-align":"right"}},rt={class:"p-inside-table"},st=r((function(){return(0,a._)("span",{class:"pull-left"},"Php",-1)})),it=r((function(){return(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("div",{style:{margin:"2%"}},[(0,a._)("p",null,"A. Certified: Correctness of the above data"),(0,a._)("p",null,"_________________________"),(0,a._)("p",null,[(0,a.Uk)("Signature over Printed Name"),(0,a._)("br"),(0,a.Uk)("Claimant")]),(0,a._)("br"),(0,a._)("br"),(0,a._)("p",null,"Date: ________________")])]),(0,a._)("td",null,[(0,a._)("div",{style:{margin:"2%"}},[(0,a._)("p",null,"B. Certified: Purpose of travel / cash advance duly accomplished"),(0,a._)("p",null,"_________________________"),(0,a._)("p",null,[(0,a.Uk)("Signature over Printed Name"),(0,a._)("br"),(0,a.Uk)("Immediate Supervisor")]),(0,a._)("br"),(0,a._)("br"),(0,a._)("p",null,"Date: ________________")])]),(0,a._)("td",null,[(0,a._)("div",{style:{margin:"2%"}},[(0,a._)("p",null,"C. Certified: Supporting documents complete and proper"),(0,a._)("p",null,"_________________________"),(0,a._)("p",null,[(0,a.Uk)("Signature over Printed Name"),(0,a._)("br"),(0,a.Uk)("Head, Accounting Division Unit")]),(0,a._)("br"),(0,a._)("p",null,"JEV No.: ________________"),(0,a._)("p",null,"Date: ________________")])])],-1)}));const lt={mixins:[n(5266).Z],created:function(){this.sReportType="cash-reg-liquidation",this.parseCompressedData()},mounted:function(){this.printReport()}};var ot=n(3379),_t=n.n(ot),ut=n(2674),dt={insert:"head",singleton:!1};_t()(ut.Z,dt);ut.Z.locals;const pt=(0,n(3744).Z)(lt,[["render",function(t,e,n,r,lt,ot){return(0,a.wg)(),(0,a.iD)("div",s,[i,(0,a._)("table",l,[(0,a._)("thead",o,[_,u,(0,a._)("tr",null,[(0,a._)("th",d,[(0,a._)("p",p,[c,h,(0,a.Uk)("Period Covered "+(0,a.zw)(t.sTitleDate),1)]),f,(0,a._)("p",m,[(0,a.Uk)("Fund Cluster: "),(0,a._)("u",null,(0,a.zw)(t.aSheetSummary.fund_desc)+" ("+(0,a.zw)(t.aSheetSummary.fund_code)+")",1)])]),(0,a._)("th",b,[(0,a._)("p",g,[(0,a.Uk)("Serial No.: "),(0,a._)("u",null,(0,a.zw)(t.aSheetSummary.sheet_no),1)]),(0,a._)("p",y,[(0,a.Uk)("Date: "),(0,a._)("u",null,(0,a.zw)(t.sCurrDate),1)]),(0,a._)("p",S,[(0,a.Uk)("Responsibility Center Code: "),(0,a._)("u",null,(0,a.zw)(t.aSheetSummary.office_code),1)])])]),v]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",T,[(0,a._)("p",x,[D,R,w,U,(0,a.Uk)((0,a.zw)(t.aSheetSummary.fs_desc),1),A,O,P,C])]),(0,a._)("td",F,[(0,a._)("p",N,[k,E,L,$,M,(0,a.Uk)("  "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1),z,q,Y,I])])]),(0,a._)("tr",null,[Z,(0,a._)("td",V,[(0,a._)("p",H,[B,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1)])])]),(0,a._)("tr",null,[(0,a._)("td",G,[(0,a._)("p",W,"AMOUNT OF CASH ADVANCE PER DV NO. "+(0,a.zw)(t.aSheetSummary.dv_no)+" DTD._____ ",1)]),(0,a._)("td",j,[(0,a._)("p",J,[Q,(0,a.Uk)("  "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_cash)),1)])])]),(0,a._)("tr",null,[K,(0,a._)("td",X,[(0,a._)("p",tt,[et,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_coh)),1)])])]),(0,a._)("tr",null,[nt,(0,a._)("td",at,[(0,a._)("p",rt,[st,(0,a.Uk)(" "+(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_reimburse)),1)])])]),it])])])}],["__scopeId","data-v-8d0a2be8"]])}}]);