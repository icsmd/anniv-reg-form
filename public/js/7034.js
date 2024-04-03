"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7034],{5266:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(381),i=s.n(a),r=s(860),n=s(475);const o={mixins:[r.Z,n.Z],data:function(){return{sUserType:this.$root.getUserType(),aTableConfig:{aoColumnDefs:[{bSortable:!0,aTargets:[-1]}],oLanguage:{oPaginate:{sPrevious:"",sNext:""}},iDisplayLength:5,aLengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],sDom:'<"dt-panelmenu clearfix"lfr>t<"dt-panelfooter clearfix"ip>',oTableTools:{sSwfPath:"vendor/plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf"}},aFundTypes:[{id:1,code:"ps",desc:"Personnel Services (PS)"},{id:2,code:"mooe",desc:"Maintenance and Other Operating Expenses (MOOE)"},{id:3,code:"sr",desc:"Special Requests (SR)"}],iSelectedFund:0,aFSList:[],aRegionList:[],aSheet:[],aSheetDetails:[],fTotalGrossAmount:0,fTotalTaxAmount:0,fTotalNetAmount:0,fTotalGrossPartAmount:0,fTotalTaxPartAmount:0,fTotalParticularAmount:0,sFundCode:"",sReportNo:"",sSheetNo:"",sTitleDate:"",sCurrDate:i()().format("DD-MMM-YYYY"),sCompressedSummary:"",aFundSource:[],aSheetRecap:[],aSheetSummary:[],fSumOfSWReg:0,fSumOfSWCas:0,fSumOfOffice:0,fSumOfOthers:0,sReportType:"",sReportDetailsUrl:"",sPrintPageUrl:"",sPartDesc:""}},mounted:function(){this.initializePlugins(),this.initEventListeners(),this.getFundSourceList(),this.executeUserTypeRequests()},methods:{initializePlugins:function(t){$(".select2-single").select2(),$("#inpMonthYearTransact").monthpicker({changeYear:!1,stepYears:1,prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!0,beforeShow:function(t,e){var s=$(this).parents(".admin-form").attr("class");e.dpDiv.parent().hasClass(s)||e.dpDiv.wrap('<div class="'+s+'"></div>')}})},initTblSheets:function(){$("#tbl_cash_reg_summary").DataTable(this.aTableConfig)},initEventListeners:function(){var t=this;$("#inp_fund_type").on("select2:select",(function(t){"sr"===$("#inp_fund_type").val()?$("#divSRSelection").css("visibility",""):$("#divSRSelection").css("visibility","hidden")})),document.body.addEventListener("click",(function(e){e.preventDefault(),"btnGenReport"===e.target.id&&t.validateFilter(),"btnPrintReport"===e.target.id&&t.prepareReport()}),!1),$("#txt_particular").keyup((function(e){t.sPartDesc=$("#txt_particular").val()}))},prepareReport:function(){var t=Object.assign({},this.aSheetDetails,{date_details:{title_date:this.sTitleDate,curr_date:this.sCurrDate}});"cash-reg-liquidation"===this.sReportType&&(t=Object.assign({},t,{sPartDesc:this.sPartDesc})),console.log(t),this.sCompressedSummary=btoa(JSON.stringify(t)),this.$root.setLocalStorageValue("forEx",this.sCompressedSummary),window.open(this.sPrintPageUrl,"_blank")},validateFilter:function(){var t,e,s,a=!0,i=$("#inp_fund_type").val(),r=$("#inpMonthYearTransact").val();""===r&&(a=!1,this.showErrorAlert("Month-Year is Required!")),null==i?(a=!1,this.showErrorAlert("Type is Required!")):"sr"===i&&null==(e=$("#inp_sr").val())&&(a=!1,this.showErrorAlert("Request Reference is Required!")),"sdor"!==this.sUserType&&null==(s=$("#inp_office").val())&&(a=!1,this.showErrorAlert("Office is Required!")),!0===a&&(t={sheet_fund_type:i,transact_month:r.split("/")[0],transact_year:r.split("/")[1]},t="sr"===i?Object.assign({},t,{fs_id:e}):t,t="sdor"!==this.sUserType?Object.assign({},t,{region_id:s}):t,this.getDateValues(),this.getReportDetails(t))},getDateValues:function(){var t=$("#inpMonthYearTransact").val(),e=t.split("/")[0],s=t.split("/")[1],a=e+"-01-"+s,r=i()(a).endOf("month").format("DD");this.sTitleDate="01-"+r+" "+i()(a).format("MMMM")+" "+s},executeUserTypeRequests:function(){"sdor"!==this.sUserType&&($("#divInpOffice").css("visibility",""),this.getRegionList())},getRegionList:function(){this.aRegionList=this.$root.parseLocalStorageLib().regions},getReportDetails:function(t){var e=this;this.getRequest(this.sReportDetailsUrl,(function(t){var s=t.data;0===s.length?(e.resetDisplayTable(),e.showErrorAlert("No available data to load!"),$(".tbl-empty").css("display",""),$(".tbl-with-content").css("display","none"),$("#btnPrintReport").attr("disabled",!0),$("#btnPrintReport").attr("class","btn btn-default btn-gradient dark btn-lg"),"cash-reg-liquidation"===e.sReportType&&(document.getElementById("txt_particular").readOnly=!0)):($(".tbl-with-content").css("display",""),$(".tbl-empty").css("display","none"),$("#btnPrintReport").attr("disabled",!1),$("#btnPrintReport").attr("class","btn btn-success btn-gradient dark btn-lg"),e.aSheetDetails=s,e.reportLayoutSetter(s))}),t)},resetDisplayTable:function(){this.aSheetDetails=[],this.fTotalGrossAmount=0,this.fTotalTaxAmount=0,this.fTotalNetAmount=0,this.fTotalParticularAmount=0},reportLayoutSetter:function(t){this.sTitleDate=void 0===t.date_details?this.sTitleDate:t.date_details.title_date,this.sCurrDate=void 0===t.date_details?this.sCurrDate:t.date_details.curr_date,"cash-reg-report"===this.sReportType?(this.sReportNo=t.sheet_details.report_no,this.sSheetNo=t.sheet_details.sheet_no,this.sFundCluster=t.sheet_details.fund_desc+" ("+t.sheet_details.fund_code+")",this.computeTotalAmount()):"cash-reg-record"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary):"cash-reg-register"===this.sReportType?(this.aFundSource=t.fund_source[0],this.aSheetRecap=t.sheet_recap,this.aSheetSummary=t.sheet_summary,this.computeSummation()):"cash-reg-liquidation"===this.sReportType&&("SCMS | Print Liquidation Form"===document.title?(this.aSheetSummary=t.sheet_summary,console.log(t.sPartDesc),this.sPartDesc=t.sPartDesc):(this.aSheetSummary=t.sheet_summary,this.sPartDesc=this.aSheetSummary.fs_desc,document.getElementById("txt_particular").readOnly=!1,$("#txt_particular").text(this.sPartDesc)))},getFundSourceList:function(){var t=this;this.getRequest("fund-source/get-list",(function(e){t.aFSList=e.data}),{fs_type:"sr",fs_status:"RELEASED"})},computeTotalAmount:function(){var t=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.net_amount)}),0),e=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.tax_amount)}),0),s=this.aSheetDetails.sheet_entries.reduce((function(t,e){return t+parseFloat(e.gross_amount)}),0),a=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.gross_total)}),0),i=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.tax_total)}),0),r=this.aSheetDetails.sheet_recap.reduce((function(t,e){return t+parseFloat(e.net_total)}),0);this.fTotalGrossAmount=s.toFixed(2),this.fTotalTaxAmount=e.toFixed(2),this.fTotalNetAmount=t.toFixed(2),this.fTotalGrossPartAmount=a.toFixed(2),this.fTotalTaxPartAmount=i.toFixed(2),this.fTotalParticularAmount=r.toFixed(2)},computeSummation:function(t){var e=this;this.aSheetDetails.sheet_entries.forEach((function(t){"5-01-010-1000"===t.uacs_code?e.fSumOfSWReg+=parseFloat(t.net_amount):"5-01-010-2000"===t.uacs_code?e.fSumOfSWCas+=parseFloat(t.net_amount):"5-02-03-010"===t.uacs_code?e.fSumOfOffice+=parseFloat(t.net_amount):e.fSumOfOthers+=parseFloat(t.net_amount)}))},parseCompressedData:function(){var t=this.$root.getLocalStorageValue("forEx");this.aSheetDetails=JSON.parse(atob(t)),this.reportLayoutSetter(this.aSheetDetails)},printReport:function(){var t=document.getElementById("printableDiv").outerHTML,e=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=e}}}},7963:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(3645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,'@media print{@page{size:A4 landscape!important}.certdiv[data-v-23eb6328]{page-break-inside:avoid}.header[data-v-23eb6328]{height:50px;left:0;margin-bottom:1%;padding:1px;position:fixed;right:0;text-align:center;top:0}.table-container[data-v-23eb6328]{border:1px solid #000;margin-top:1%!important}.table-container[data-v-23eb6328]:after{content:"";display:block;height:0;margin-top:1%!important}table[data-v-23eb6328]{width:100%}table[data-v-23eb6328],tbody[data-v-23eb6328],td[data-v-23eb6328],thead[data-v-23eb6328],tr[data-v-23eb6328]{border:1px solid #000;font-family:Arial!important;font-size:9px!important}tbody[data-v-23eb6328]:after{page-break-before:always}thead[data-v-23eb6328],thead[data-v-23eb6328]:after{display:table-header-group!important}.p-inside-table[data-v-23eb6328]{font-family:Arial;font-size:9px!important;margin:2% 3% 0 2%!important}.p-inside-table-total[data-v-23eb6328]{font-family:Arial;font-size:10px!important;margin-bottom:0!important;margin-right:3%!important;margin-top:1%!important}}',""]);const r=i},7034:(t,e,s)=>{s.r(e),s.d(e,{default:()=>Ft});var a=s(821),i=function(t){return(0,a.dD)("data-v-23eb6328"),t=t(),(0,a.Cn)(),t},r={id:"printableDiv"},n={class:"header"},o=i((function(){return(0,a._)("h4",null,"Report of Cash Disbursements",-1)})),l={class:"table-container",id:"tbl_cash_reg_summary",cellspacing:"0",width:"100%",style:{"font-family":"Muli !important"}},d={class:"custom-table-header"},p=i((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"11",style:{border:"solid 1px white !important"}}," ")],-1)})),c=i((function(){return(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"11",style:{border:"solid 1px white !important"}}," ")],-1)})),u={style:{border:"solid 1px white !important"}},_=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Entity Name :",-1)})),h=i((function(){return(0,a._)("td",{colspan:"8",style:{border:"solid 1px white !important"}}," ",-1)})),b=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Report No. :",-1)})),m={style:{border:"solid 1px white !important"}},g={style:{border:"solid 1px white !important"}},f=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Fund Cluster :",-1)})),y={style:{border:"solid 1px white !important"}},x=i((function(){return(0,a._)("td",{colspan:"7",style:{border:"solid 1px white !important"}}," ",-1)})),v=i((function(){return(0,a._)("td",{style:{border:"solid 1px white !important"}},"Sheet No. :",-1)})),S={style:{border:"solid 1px white !important"}},w=i((function(){return(0,a._)("tr",{style:{"border-top":"solid 1px white !important","border-left":"solid 1px rgb(255, 255, 255)","border-right":"solid 1px rgb(255, 255, 255)"}},[(0,a._)("td",{colspan:"11",style:{border:"solid 1px white !important","border-bottom":"1px solid black !important"}},"  ")],-1)})),T=i((function(){return(0,a._)("tr",{style:{border:"solid 1px rgb(13, 0, 0) !important"}},[(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Date")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"DV/Payroll No.")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"ORS/BURS No.")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"OR/SI No.")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"RCC")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Payee")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"UACS Object Code")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Nature of Payment")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Gross")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Tax")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Net")])],-1)})),D={style:{"text-align":"right"},width:"10%"},R={class:"p-inside-table"},F={style:{"text-align":"center"}},P={class:"p-inside-table"},A={style:{"text-align":"center"}},N={class:"p-inside-table"},O={style:{"text-align":"center"}},C={class:"p-inside-table"},z={style:{"text-align":"center"}},L={class:"p-inside-table"},$={style:{"text-align":"left"}},M={class:"p-inside-table"},E={style:{"text-align":"center"}},k={class:"p-inside-table"},q={style:{"text-align":"left"}},U={class:"p-inside-table"},Y={style:{"text-align":"right"}},G={class:"p-inside-table"},I={style:{"text-align":"right"}},Z={class:"p-inside-table"},H={style:{"text-align":"right"}},j={class:"p-inside-table"},B=i((function(){return(0,a._)("td",{colspan:"8",style:{"text-align":"right"}},[(0,a._)("p",{style:{"margin-top":"1%","margin-right":"1%"}},[(0,a._)("b",null,"TOTAL:")])],-1)})),V={style:{"text-align":"right"}},W={class:"p-inside-table-total"},J={style:{"text-align":"right"}},K={class:"p-inside-table-total"},Q={style:{"text-align":"right"}},X={class:"p-inside-table-total"},tt=i((function(){return(0,a._)("br",null,null,-1)})),et={style:{"margin-left":"30%"}},st={cellspacing:"0",style:{width:"50% !important"}},at=i((function(){return(0,a._)("thead",{class:"custom-table-header"},[(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important"}}," ")]),(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important"}}," ")]),(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important"}}," ")]),(0,a._)("tr",{style:{border:"solid 1px white !important"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important"}},[(0,a._)("b",null,"Recapitulation:")])]),(0,a._)("tr",{style:{"border-top":"solid 1px white !important","border-left":"solid 1px rgb(255, 255, 255)","border-right":"solid 1px rgb(255, 255, 255)"}},[(0,a._)("td",{colspan:"3",style:{border:"solid 1px white !important","border-bottom":"1px solid black !important"}},"  ")]),(0,a._)("tr",{style:{border:"solid 1px rgb(13, 0, 0) !important"}},[(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Particulars")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"UACS Code")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Gross")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Tax")]),(0,a._)("th",{style:{border:"solid 1px rgb(13, 0, 0)","text-align":"center"}},[(0,a._)("p",{class:"p-inside-table"},"Net")])])],-1)})),it={style:{"text-align":"left"}},rt={class:"p-inside-table"},nt={style:{"text-align":"left"}},ot={class:"p-inside-table"},lt={style:{"text-align":"right"}},dt={class:"p-inside-table"},pt={style:{"text-align":"right"}},ct={class:"p-inside-table"},ut={style:{"text-align":"right"}},_t={class:"p-inside-table"},ht=i((function(){return(0,a._)("td",{style:{"text-align":"right","font-weight":"700"},colspan:"2"},[(0,a._)("p",{class:"p-inside-table"},"TOTAL: ")],-1)})),bt={style:{"text-align":"right","font-weight":"700"}},mt={class:"p-inside-table"},gt={style:{"text-align":"right","font-weight":"700"}},ft={class:"p-inside-table"},yt={style:{"text-align":"right","font-weight":"700"}},xt={class:"p-inside-table"},vt=i((function(){return(0,a._)("div",{class:"certdiv",style:{"margin-top":"5%","text-align":"center"}},[(0,a._)("br"),(0,a._)("br"),(0,a._)("br"),(0,a._)("p",null,[(0,a._)("b",null,"CERTIFICATION")]),(0,a._)("p",null,[(0,a._)("i",null,"I hereby certify on my official oath that this report of Cash Disbursement in _______ sheet(s) is a full, true and correct statement of all cash disbursements during the period stated above actually made by me in payment for obligations shown in pertinent disbursement vouchers/payroll. ")]),(0,a._)("p",{style:{"margin-top":"3%"}},"____________________________________________"),(0,a._)("p",null,"Name and Signature of Disbursing Officer"),(0,a._)("p",null,"Special Disbursing Officer           ____________"),(0,a._)("p",null,"Official Designation                        Date ")],-1)}));const St={mixins:[s(5266).Z],created:function(){this.sReportType="cash-reg-report",this.parseCompressedData()},mounted:function(){this.printReport()}};var wt=s(3379),Tt=s.n(wt),Dt=s(7963),Rt={insert:"head",singleton:!1};Tt()(Dt.Z,Rt);Dt.Z.locals;const Ft=(0,s(3744).Z)(St,[["render",function(t,e,s,i,St,wt){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",n,[o,(0,a._)("h5",null,"Period Covered "+(0,a.zw)(t.sTitleDate),1)]),(0,a._)("table",l,[(0,a._)("thead",d,[p,c,(0,a._)("tr",u,[_,h,b,(0,a._)("td",m,(0,a.zw)(t.sReportNo),1)]),(0,a._)("tr",g,[f,(0,a._)("td",y,(0,a.zw)(t.sFundCluster),1),x,v,(0,a._)("td",S,(0,a.zw)(t.sSheetNo),1)]),w,T]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetDetails.sheet_entries,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",D,[(0,a._)("p",R,(0,a.zw)(t.convertDateFormat(e.date_created,"DD-MMM-YY")),1)]),(0,a._)("td",F,[(0,a._)("p",P,(0,a.zw)(e.fs_dv_no),1)]),(0,a._)("td",A,[(0,a._)("p",N,(0,a.zw)(e.fs_ors_no),1)]),(0,a._)("td",O,[(0,a._)("p",C,(0,a.zw)(e.or_number),1)]),(0,a._)("td",z,[(0,a._)("p",L,(0,a.zw)(e.region_abbr),1)]),(0,a._)("td",$,[(0,a._)("p",M,(0,a.zw)(e.payee_name),1)]),(0,a._)("td",E,[(0,a._)("p",k,(0,a.zw)(e.uacs_code),1)]),(0,a._)("td",q,[(0,a._)("p",U,(0,a.zw)(e.uacs_desc),1)]),(0,a._)("td",Y,[(0,a._)("p",G,(0,a.zw)(t.convertNumberFormat(e.gross_amount)),1)]),(0,a._)("td",I,[(0,a._)("p",Z,(0,a.zw)(t.convertNumberFormat(e.tax_amount)),1)]),(0,a._)("td",H,[(0,a._)("p",j,(0,a.zw)(t.convertNumberFormat(e.net_amount)),1)])])})),256))]),(0,a._)("tbody",null,[(0,a._)("tr",null,[B,(0,a._)("td",V,[(0,a._)("b",null,[(0,a._)("p",W,(0,a.zw)(t.convertNumberFormat(t.fTotalGrossAmount)),1)])]),(0,a._)("td",J,[(0,a._)("b",null,[(0,a._)("p",K,(0,a.zw)(t.convertNumberFormat(t.fTotalTaxAmount)),1)])]),(0,a._)("td",Q,[(0,a._)("b",null,[(0,a._)("p",X,(0,a.zw)(t.convertNumberFormat(t.fTotalNetAmount)),1)])])])])]),tt,(0,a._)("div",et,[(0,a._)("table",st,[at,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.aSheetDetails.sheet_recap,(function(e){return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",it,[(0,a._)("p",rt,(0,a.zw)(e.uacs_desc),1)]),(0,a._)("td",nt,[(0,a._)("p",ot,(0,a.zw)(e.uacs_code),1)]),(0,a._)("td",lt,[(0,a._)("p",dt,(0,a.zw)(t.convertNumberFormat(e.gross_total)),1)]),(0,a._)("td",pt,[(0,a._)("p",ct,(0,a.zw)(t.convertNumberFormat(e.tax_total)),1)]),(0,a._)("td",ut,[(0,a._)("p",_t,(0,a.zw)(t.convertNumberFormat(e.net_total)),1)])])})),256)),(0,a._)("tr",null,[ht,(0,a._)("td",bt,[(0,a._)("p",mt,(0,a.zw)(t.convertNumberFormat(t.fTotalGrossPartAmount)),1)]),(0,a._)("td",gt,[(0,a._)("p",ft,(0,a.zw)(t.convertNumberFormat(t.fTotalTaxPartAmount)),1)]),(0,a._)("td",yt,[(0,a._)("p",xt,(0,a.zw)(t.convertNumberFormat(t.fTotalParticularAmount)),1)])])])])]),vt])}],["__scopeId","data-v-23eb6328"]])}}]);