"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[228],{5266:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(381),r=n.n(a),l=n(860),s=n(475);const i={mixins:[l.Z,s.Z],data:function(){return{sUserType:this.$root.getUserType(),aTableConfig:{aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:5,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aFundTypes:[{id:1,code:"ps",desc:"Personnel Services (PS)"},{id:2,code:"mooe",desc:"Maintenance and Other Operating Expenses (MOOE)"},{id:3,code:"sr",desc:"Special Requests (SR)"}],iSelectedFund:0,aFSList:[],aRegionList:[],aSheet:[],aSheetDetails:[],fTotalGrossAmount:0,fTotalTaxAmount:0,fTotalNetAmount:0,fTotalParticularAmount:0,sFundCode:"",sReportNo:"",sSheetNo:"",sTitleDate:"",sCurrDate:r()().format("DD-MMM-YYYY"),sCompressedSummary:"",aFundSource:[],aSheetRecap:[],aSheetSummary:[],fSumOfSWReg:0,fSumOfSWCas:0,fSumOfOffice:0,fSumOfOthers:0,sReportType:"",sReportDetailsUrl:"",sPrintPageUrl:""}},mounted:function(){this.initializePlugins(),this.initEventListeners(),this.getFundSourceList(),this.executeUserTypeRequests()},methods:{initializePlugins:function(t){$(".select2-single").select2(),$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(t,e){var n=$(this).parents(".admin-form").attr("class");e.dpDiv.parent().hasClass(n)||e.dpDiv.wrap('<div class="'+n+'"></div>')}})},initTblSheets:function(){$("#tbl_cash_reg_summary").DataTable(this.aTableConfig)},initEventListeners:function(){var t=this;$("#inp_fund_type").on("select2:select",(function(t){"sr"===$("#inp_fund_type").val()?$("#divSRSelection").css("visibility",""):$("#divSRSelection").css("visibility","hidden")})),document.body.addEventListener("click",(function(e){e.preventDefault(),"btnGenReport"===e.target.id&&t.validateFilter(),"btnPrintReport"===e.target.id&&t.prepareReport()}),!1)},prepareReport:function(){var t=Object.assign({},this.aSheetDetails,{date_details:{title_date:this.sTitleDate,curr_date:this.sCurrDate}});this.sCompressedSummary=btoa(JSON.stringify(t)),this.$root.setLocalStorageValue("forEx",this.sCompressedSummary),window.open(this.sPrintPageUrl,"_blank")},validateFilter:function(){var t,e,n,a=!0,r=$("#inp_fund_type").val(),l=$("#inpMonthYearTransact").val();""===l&&(a=!1,this.showErrorAlert("Month-Year is Required!")),null==r?(a=!1,this.showErrorAlert("Type is Required!")):"sr"===r&&null==(e=$("#inp_sr").val())&&(a=!1,this.showErrorAlert("Request Reference is Required!")),"sdor"!==this.sUserType&&null==(n=$("#inp_office").val())&&(a=!1,this.showErrorAlert("Office is Required!")),!0===a&&(t={sheet_fund_type:r,transact_month:l.split("/")[0],transact_year:l.split("/")[1]},t="sr"===r?Object.assign({},t,{fs_id:e}):t,t="sdor"!==this.sUserType?Object.assign({},t,{region_id:n}):t,this.getDateValues(),this.getReportDetails(t))},getDateValues:function(){var t=$("#inpMonthYearTransact").val(),e=t.split("/")[0],n=t.split("/")[1],a=e+"-01-"+n,l=r()(a).endOf("month").format("DD");this.sTitleDate="01-"+l+" "+r()(a).format("MMMM")+" "+n},executeUserTypeRequests:function(){"sdor"!==this.sUserType&&($("#divInpOffice").css("visibility",""),this.getRegionList())},getRegionList:function(){this.aRegionList=this.$root.parseLocalStorageLib().regions},getReportDetails:function(t){var e=this;this.getRequest(this.sReportDetailsUrl,(function(t){var n=t.data;0===n.length?(e.resetDisplayTable(),e.showErrorAlert("No available data to load!"),$(".tbl-empty").css("display",""),$(".tbl-with-content").css("display","none"),$("#btnPrintReport").attr("disabled",!0),$("#btnPrintReport").attr("class","btn btn-default btn-gradient dark btn-lg")):($(".tbl-with-content").css("display",""),$(".tbl-empty").css("display","none"),$("#btnPrintReport").attr("disabled",!1),$("#btnPrintReport").attr("class","btn btn-success btn-gradient dark btn-lg"),e.aSheetDetails=n,e.reportLayoutSetter(n))}),t)},resetDisplayTable:function(){this.aSheetDetails=[],this.fTotalGrossAmount=0,this.fTotalTaxAmount=0,this.fTotalNetAmount=0,this.fTotalParticularAmount=0},reportLayoutSetter:function(t){this.sTitleDate=void 0===t.date_details?this.sTitleDate:t.date_details.title_date,this.sCurrDate=void 0===t.date_details?this.sCurrDate:t.date_details.curr_date,"cash-reg-report"===this.sReportType?(this.sReportNo=t.sheet_details.report_no,this.sSheetNo=t.sheet_details.sheet_no,this.sFundCluster=t.sheet_details.fund_desc+" ("+t.sheet_details.fund_code+")",this.computeTotalAmount()):"cash-reg-record"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary):"cash-reg-register"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary,this.computeSummation()):"cash-reg-liquidation"===this.sReportType&&(this.aSheetSummary=t.sheet_summary)},getFundSourceList:function(){var t=this;this.getRequest("fund-source/get-list",(function(e){t.aFSList=e.data}),{fs_type:"sr",fs_status:"RELEASED"})},computeTotalAmount:function(){var t=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.net_amount)}),0),e=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.tax_amount)}),0),n=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.gross_amount)}),0),a=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.total_amount)}),0);this.fTotalGrossAmount=n.toFixed(2),this.fTotalTaxAmount=e.toFixed(2),this.fTotalNetAmount=t.toFixed(2),this.fTotalParticularAmount=a.toFixed(2)},computeSummation:function(t){var e=this;this.aSheetDetails.sheet_entries.forEach((function(t){"5-01-010-1000"===t.uacs_code?e.fSumOfSWReg+=parseFloat(t.net_amount):"5-01-010-2000"===t.uacs_code?e.fSumOfSWCas+=parseFloat(t.net_amount):"5-02-03-010"===t.uacs_code?e.fSumOfOffice+=parseFloat(t.net_amount):e.fSumOfOthers+=parseFloat(t.net_amount)}))},parseCompressedData:function(){var t=this.$root.getLocalStorageValue("forEx");this.aSheetDetails=JSON.parse(atob(t)),this.reportLayoutSetter(this.aSheetDetails)},printReport:function(){var t=document.getElementById("printableDiv").outerHTML,e=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=e}}}},8578:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(3645),r=n.n(a)()((function(t){return t[1]}));r.push([t.id,'@media print{@page{size:A4 landscape!important}.white-b[data-v-1d03fca2],th>.white-b[data-v-1d03fca2]{border:1px solid #fff!important}.header[data-v-1d03fca2]{height:50px;left:0;margin-bottom:1%;padding:1px;position:absolute;right:0;text-align:center;top:0}.table-container[data-v-1d03fca2]{border:1px solid #000;margin-top:1%!important}.table-container[data-v-1d03fca2]:after{content:"";display:block;height:0;margin-top:1%!important}table[data-v-1d03fca2]{border:1px solid #000;width:100%}tbody[data-v-1d03fca2],td[data-v-1d03fca2],thead[data-v-1d03fca2],tr[data-v-1d03fca2]{border:1px solid #000;font-family:Arial!important;font-size:9px!important;margin:2%}tbody[data-v-1d03fca2]:after,tr[data-v-1d03fca2]:after{margin-top:50%;page-break-before:always}thead[data-v-1d03fca2],thead[data-v-1d03fca2]:after{display:table-header-group!important}.p-inside-table[data-v-1d03fca2]{font-size:9px!important}.totalsCustomFormat[data-v-1d03fca2]{border-bottom:1px solid #000;border-top:1px solid #000;font-weight:700}th>.custom-table-header[data-v-1d03fca2],tr[data-v-1d03fca2]{border:1px solid #000}}',""]);const l=r},3228:(t,e,n)=>{n.r(e),n.d(e,{default:()=>me});var a=n(821),r=function(t){return(0,a.dD)("data-v-1d03fca2"),t=t(),(0,a.Cn)(),t},l={id:"printableDiv"},s={class:"header"},i=r((function(){return(0,a._)("h4",null,"CASH DISBURSEMENT REGISTER",-1)})),o=r((function(){return(0,a._)("br",null,null,-1)})),_={width:"100%",class:"table-container p-inside-table"},u={style:{border:"1px solid white"}},d=r((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{width:"50%",colspan:"8",style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," ")],-1)})),c=r((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{width:"50%",colspan:"8",style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," ")],-1)})),h=r((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{width:"50%",colspan:"8",style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," "),(0,a._)("th",{style:{border:"solid 1px white !important"}}," ")],-1)})),p=r((function(){return(0,a._)("tr",{class:"white-b"},[(0,a._)("th",null,"Entity Name: "),(0,a._)("th",null,"____________________"),(0,a._)("th",{width:"50%",colspan:"8",style:{"text-align":"center"}}," "),(0,a._)("th",null,"Accountable Officer: "),(0,a._)("th",null,"____________________")],-1)})),m=r((function(){return(0,a._)("tr",{class:"white-b"},[(0,a._)("th",null,"Sub Office/District/Division: "),(0,a._)("th",null,"____________________"),(0,a._)("th",{width:"50%",colspan:"8",style:{"text-align":"center"}}," "),(0,a._)("th",null,"Official Designation: "),(0,a._)("th",null,[(0,a._)("u",null,"Special Disbursing Officer")])],-1)})),f={class:"white-b"},b=r((function(){return(0,a._)("th",null,"Municipality/City/Province: ",-1)})),g=r((function(){return(0,a._)("th",null,"____________________",-1)})),y=r((function(){return(0,a._)("th",{width:"50%",colspan:"8",style:{"text-align":"center"}}," ",-1)})),x=r((function(){return(0,a._)("th",null,"Station: ",-1)})),w={class:"white-b"},S=r((function(){return(0,a._)("th",null,"Fund Cluster: ",-1)})),v=r((function(){return(0,a._)("th",{width:"50%",colspan:"8",style:{"text-align":"center"}}," ",-1)})),D=r((function(){return(0,a._)("th",null,"Register No: ",-1)})),F=r((function(){return(0,a._)("th",null,"____________________",-1)})),T=r((function(){return(0,a._)("tr",{class:"white-b"},[(0,a._)("th",null," "),(0,a._)("th",null," "),(0,a._)("th",{width:"50%",colspan:"8",style:{"text-align":"center"}}," "),(0,a._)("th",null,"Sheet No: "),(0,a._)("th",null,"____________________")],-1)})),C={class:"table-container p-inside-table",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%"},R=r((function(){return(0,a._)("thead",null,[(0,a._)("tr",{style:{border:"solid 1px black !important"}},[(0,a._)("th",{style:{border:"solid 1px black !important"},colspan:"3"}," "),(0,a._)("th",{colspan:"3",style:{border:"solid 1px black !important","text-align":"center"}},[(0,a._)("br"),(0,a.Uk)("Advances for Operating Expenses"),(0,a._)("br"),(0,a._)("br")]),(0,a._)("th",{colspan:"6",style:{border:"solid 1px black !important","text-align":"center"}},[(0,a._)("br"),(0,a.Uk)("Breakdown of Payments"),(0,a._)("br"),(0,a._)("br")])]),(0,a._)("tr",{style:{border:"solid 1px black !important"}},[(0,a._)("th",{colspan:"3",style:{"text-align":"center",border:"solid 1px black !important"}}," "),(0,a._)("th",{colspan:"3",style:{"text-align":"center",border:"solid 1px black !important"}},"Amount"),(0,a._)("th",{width:"5%",style:{"text-align":"center",width:"10%",border:"solid 1px black !important","font-size":"8px"}},"Salaries and Wages - Regular"),(0,a._)("th",{width:"5%",style:{"text-align":"center",width:"10%",border:"solid 1px black !important","font-size":"8px"}},"Salaries and Wages - Casual/Contractual"),(0,a._)("th",{width:"5%",style:{"text-align":"center",border:"solid 1px black !important"}},"Office Supplies"),(0,a._)("th",{colspan:"3",style:{"text-align":"center",border:"solid 1px black !important"}},"Others")]),(0,a._)("tr",null,[(0,a._)("th",{width:"4%",style:{"text-align":"center",border:"solid 1px black !important"}},"Date"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"ADA/DV/Payroll No."),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Particular"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Cash Advance"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Payments"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Balance"),(0,a._)("th",{width:"4%",style:{"text-align":"center",border:"solid 1px black !important"}},"(50101010)"),(0,a._)("th",{width:"4%",style:{"text-align":"center",border:"solid 1px black !important"}},"(50101020)"),(0,a._)("th",{width:"4%",style:{"text-align":"center",border:"solid 1px black !important"}},"(50103010)"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Account Description"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"UACS Object Code"),(0,a._)("th",{style:{"text-align":"center",border:"solid 1px black !important"}},"Amount")])],-1)})),k={width:"4%",style:{width:"5px !important","text-align":"right"}},O=r((function(){return(0,a._)("td",{style:{"text-align":"center"}}," ",-1)})),z={style:{"text-align":"left"}},A={class:"p-inside-table"},N={style:{"text-align":"right"}},E={class:"p-inside-table"},P=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),L={style:{"text-align":"right"}},M={class:"p-inside-table"},$=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),U=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Y=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),q=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),I=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),W=r((function(){return(0,a._)("td",{style:{"text-align":"right"}}," ",-1)})),Z={width:"4%",style:{width:"5px !important","text-align":"right"}},B={class:"p-inside-table"},H={style:{"text-align":"center"}},V={class:"p-inside-table"},j={style:{"text-align":"left"}},G={class:"p-inside-table"},J=r((function(){return(0,a._)("td",{style:{"text-align":"left"}}," ",-1)})),K={style:{"text-align":"right"}},Q={class:"p-inside-table"},X={style:{"text-align":"right"}},tt={class:"p-inside-table"},et={width:"4%",style:{"text-align":"right"}},nt={key:0,class:"p-inside-table"},at={key:1},rt={width:"4%",style:{"text-align":"right"}},lt={key:0,class:"p-inside-table"},st={key:1},it={width:"4%",style:{"text-align":"right"}},ot={key:0,class:"p-inside-table"},_t={key:1},ut={style:{"text-align":"left"}},dt={key:0},ct={key:1,class:"p-inside-table"},ht={style:{"text-align":"center"}},pt={key:0},mt={key:1,class:"p-inside-table"},ft={style:{"text-align":"right"}},bt={key:0},gt={key:1,class:"p-inside-table"},yt=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{width:"4%"}," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," ")],-1)})),xt={style:{"text-align":"right",border:"1px solid black"}},wt=r((function(){return(0,a._)("td",{width:"4%",class:"totalsCustomFormat"}," ",-1)})),St=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),vt=r((function(){return(0,a._)("td",{class:"totalsCustomFormat",style:{"text-align":"center !important"}},"Totals",-1)})),Dt={class:"totalsCustomFormat"},Ft={class:"totalsCustomFormat"},Tt={class:"totalsCustomFormat"},Ct={class:"totalsCustomFormat"},Rt={class:"totalsCustomFormat"},kt={class:"totalsCustomFormat"},Ot=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),zt=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),At={class:"totalsCustomFormat"},Nt=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{width:"4%"}," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," ")],-1)})),Et=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{width:"4%"}," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",{style:{"text-align":"left"}},[(0,a._)("b",null,"Recapitulation:")]),(0,a._)("td",{style:{"text-align":"center"}}," "),(0,a._)("td",{style:{"text-align":"center"}}," ")],-1)})),Pt=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{width:"4%"}," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",{style:{"text-align":"center","font-weight":"700"}},"Account Description"),(0,a._)("td",{style:{"text-align":"center","font-weight":"700"}},"UACS Object Code"),(0,a._)("td",{style:{"text-align":"center","font-weight":"700"}},"Amount")],-1)})),Lt=r((function(){return(0,a._)("td",{width:"4%"}," ",-1)})),Mt=r((function(){return(0,a._)("td",null," ",-1)})),$t=r((function(){return(0,a._)("td",null," ",-1)})),Ut=r((function(){return(0,a._)("td",null," ",-1)})),Yt=r((function(){return(0,a._)("td",null," ",-1)})),qt=r((function(){return(0,a._)("td",null," ",-1)})),It=r((function(){return(0,a._)("td",null," ",-1)})),Wt=r((function(){return(0,a._)("td",null," ",-1)})),Zt=r((function(){return(0,a._)("td",null," ",-1)})),Bt={style:{"text-align":"left"}},Ht={style:{"text-align":"center"}},Vt={style:{"text-align":"right"}},jt=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{width:"4%"}," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," "),(0,a._)("td",null," ")],-1)})),Gt={style:{border:"1px solid black"}},Jt=r((function(){return(0,a._)("td",{width:"2%",class:"totalsCustomFormat"}," ",-1)})),Kt=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),Qt=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),Xt=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),te=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),ee=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),ne=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),ae=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),re=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),le=r((function(){return(0,a._)("td",{class:"totalsCustomFormat",style:{"font-weight":"700","text-align":"center"}},"Total",-1)})),se=r((function(){return(0,a._)("td",{class:"totalsCustomFormat"}," ",-1)})),ie={class:"totalsCustomFormat",style:{"font-weight":"700","text-align":"right"}},oe=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{colspan:"6"}," "),(0,a._)("td",{colspan:"6"},[(0,a._)("p",{style:{margin:"1%"}},"The total of 'Advances for Operating Expenses - Payments' column must always be equal to the sum of the totals of the 'Breakdown of Payments' columns. ")])],-1)})),_e=r((function(){return(0,a._)("tr",null,[(0,a._)("td",{colspan:"6",style:{"text-align":"center"}},[(0,a._)("br"),(0,a._)("p",null,"CERTIFIED CORRECT:"),(0,a._)("br"),(0,a._)("p",null,"_____________________________________"),(0,a._)("p",null,"Signature over Printed Name"),(0,a._)("p",null,"Date: _____________________")]),(0,a._)("td",{colspan:"6",style:{"text-align":"center"}},[(0,a._)("br"),(0,a._)("p",null,"RECEIVED BY:"),(0,a._)("br"),(0,a._)("p",null,"_____________________________________"),(0,a._)("p",null,"Signature over Printed Name"),(0,a._)("p",null,"Date: _____________________")])],-1)}));const ue={mixins:[n(5266).Z],created:function(){this.sReportType="cash-reg-register",this.parseCompressedData()},mounted:function(){this.printReport()}};var de=n(3379),ce=n.n(de),he=n(8578),pe={insert:"head",singleton:!1};ce()(he.Z,pe);he.Z.locals;const me=(0,n(3744).Z)(ue,[["render",function(t,e,n,r,ue,de){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",s,[i,(0,a._)("h5",null,"Period Covered "+(0,a.zw)(t.sTitleDate),1),o]),(0,a._)("table",_,[(0,a._)("thead",u,[d,c,h,p,m,(0,a._)("tr",f,[b,g,y,x,(0,a._)("th",null,[(0,a._)("u",null,(0,a.zw)(t.aSheetSummary.region_abbr)+" ("+(0,a.zw)(t.aSheetSummary.region_desc)+")",1)])]),(0,a._)("tr",w,[S,(0,a._)("th",null,[(0,a._)("u",null,(0,a.zw)(t.aFundSource.fc_desc)+" ("+(0,a.zw)(t.aFundSource.fc_code)+")",1)]),v,D,F]),T])]),(0,a._)("table",C,[R,(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",k,(0,a.zw)(t.convertDateFormat(t.aFundSource.date_created,"DD-MMM")),1),O,(0,a._)("td",z,[(0,a._)("p",A,(0,a.zw)(t.aFundSource.fs_desc),1)]),(0,a._)("td",N,[(0,a._)("p",E,(0,a.zw)(t.convertNumberFormat(t.aFundSource.fs_net_amount)),1)]),P,(0,a._)("td",L,[(0,a._)("p",M,(0,a.zw)(t.convertNumberFormat(t.aFundSource.fs_net_amount)),1)]),$,U,Y,q,I,W]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetDetails.sheet_entries,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",Z,[(0,a._)("p",B,(0,a.zw)(t.convertDateFormat(e.date_created,"DD-MMM")),1)]),(0,a._)("td",H,[(0,a._)("p",V,(0,a.zw)(t.aFundSource.cpo_no),1)]),(0,a._)("td",j,[(0,a._)("p",G,(0,a.zw)(e.uacs_acc_title),1)]),J,(0,a._)("td",K,[(0,a._)("p",Q,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)]),(0,a._)("td",X,[(0,a._)("p",tt,(0,a.zw)(t.convertNumberFormat(e.difference)),1)]),(0,a._)("td",et,["5-01-010-1000"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",nt,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)):((0,a.wg)(),(0,a.iD)("p",at," "))]),(0,a._)("td",rt,["5-01-010-2000"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",lt,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)):((0,a.wg)(),(0,a.iD)("p",st," "))]),(0,a._)("td",it,["5-02-03-010"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",ot,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)):((0,a.wg)(),(0,a.iD)("p",_t," "))]),(0,a._)("td",ut,["5-01-010-1000"===e.uacs_code||"5-01-010-2000"===e.uacs_code||"5-02-03-010"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",dt,"   ")):((0,a.wg)(),(0,a.iD)("p",ct,(0,a.zw)(e.uacs_acc_title),1))]),(0,a._)("td",ht,["5-01-010-1000"===e.uacs_code||"5-01-010-2000"===e.uacs_code||"5-02-03-010"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",pt,"   ")):((0,a.wg)(),(0,a.iD)("p",mt,(0,a.zw)(e.uacs_code),1))]),(0,a._)("td",ft,["5-01-010-1000"===e.uacs_code||"5-01-010-2000"===e.uacs_code||"5-02-03-010"===e.uacs_code?((0,a.wg)(),(0,a.iD)("p",bt,"   ")):((0,a.wg)(),(0,a.iD)("p",gt,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1))])])})),256)),yt,(0,a._)("tr",xt,[wt,St,vt,(0,a._)("td",Dt,(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_cash)),1),(0,a._)("td",Ft,(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1),(0,a._)("td",Tt,(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_coh)),1),(0,a._)("td",Ct,(0,a.zw)(t.convertNumberFormat(t.fSumOfSWReg)),1),(0,a._)("td",Rt,(0,a.zw)(t.convertNumberFormat(t.fSumOfSWCas)),1),(0,a._)("td",kt,(0,a.zw)(t.convertNumberFormat(t.fSumOfOffice)),1),Ot,zt,(0,a._)("td",At,(0,a.zw)(t.convertNumberFormat(t.fSumOfOthers)),1)]),Nt,Et,Pt,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetRecap,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[Lt,Mt,$t,Ut,Yt,qt,It,Wt,Zt,(0,a._)("td",Bt,(0,a.zw)(e.uacs_desc),1),(0,a._)("td",Ht,(0,a.zw)(e.uacs_code),1),(0,a._)("td",Vt,(0,a.zw)(t.convertNumberFormat(e.total_amount)),1)])})),256)),jt,(0,a._)("tr",Gt,[Jt,Kt,Qt,Xt,te,ee,ne,ae,re,le,se,(0,a._)("td",ie,(0,a.zw)(t.convertNumberFormat(t.aSheetSummary.total_expenses)),1)]),oe,_e])])])}],["__scopeId","data-v-1d03fca2"]])}}]);