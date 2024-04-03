"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[788],{3231:(l,e,a)=>{a.d(e,{Z:()=>t});var s=a(3645),i=a.n(s)()((function(l){return l[1]}));i.push([l.id,".custom-margin{margin-bottom:20px}.custom-label{font-weight:700!important;margin-bottom:5px!important;margin-left:11px!important}",""]);const t=i},788:(l,e,a)=>{a.r(e),a.d(e,{default:()=>D});var s=a(821),i={class:"admin-form theme-primary mw1000 center-block animated fadeIn"},t={class:"panel panel-primary heading-border center-block col-md-8"},c={class:"panel-body"},n=(0,s.uE)('<div class="section-divider mt20 mb40"><span> Normal validation rules </span></div><div class="row"><label class="col-md-12 custom-label">Email Address:</label><div class="col-md-12"><div class="col-md-6 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., juandelacruz@gmail.com "><label for="firstname" class="field-icon"><i class="fa fa-envelope"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Salutation:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., Mr., Ms., Mrs., Dr., Ret Gen., etc."><label for="firstname" class="field-icon"><i class="fa fa-envelope"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">First Name:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., Juan"><label for="firstname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Middle Initial:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="lastname" class="field prepend-icon"><input type="text" name="lastname" id="lastname" class="gui-input" placeholder="e.g., G."><label for="lastname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Last Name:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="lastname" class="field prepend-icon"><input type="text" name="lastname" id="lastname" class="gui-input" placeholder="e.g., Dela Cruz"><label for="lastname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Department/Agency/Office/Embassy:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., Department of Justice, Bureau of Customs, Philippine National Police, etc."><label for="firstname" class="field-icon"><i class="fa fa-building"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Designation/Position:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., Police/Military Officer, Consultant, Director, etc."><label for="firstname" class="field-icon"><i class="fa fa-suitcase"></i></label></label></div></div></div>',8),o={class:"row"},d=(0,s._)("label",{class:"col-md-12 custom-label"},"Membership:",-1),m={class:"col-md-12"},r={class:"form-group"},u={class:"col-lg-12 custom-margin"},f={class:"select2-single form-control mst-select",id:"inp_payee"},p=(0,s._)("option",{disabled:"",value:"0",selected:""},"Please select membership",-1),b=["value"],v=(0,s.uE)('<div class="row"><label class="col-md-12 custom-label">Contact Number:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., 09123456789"><label for="firstname" class="field-icon"><i class="fa fa-mobile"></i></label></label></div></div></div>',1),g=(0,s._)("div",{class:"row"},[(0,s._)("label",{class:"col-md-12 custom-label"},"Upload Picture:"),(0,s._)("div",{class:"col-md-12"},[(0,s._)("div",{class:"col-md-12"},[(0,s._)("div",{class:"section"},[(0,s._)("label",{class:"field prepend-icon append-button file"},[(0,s._)("span",{class:"button btn-primary"},"Choose File"),(0,s._)("input",{type:"file",class:"gui-file",name:"file1",id:"file1",onChange:"document.getElementById('uploader1').value = this.value;"}),(0,s._)("input",{type:"text",class:"gui-input",id:"uploader1",placeholder:"Please Select A File"}),(0,s._)("label",{class:"field-icon"},[(0,s._)("i",{class:"fa fa-upload"})])])])])])],-1),h=(0,s.uE)('<div class="row"><label class="col-md-12 custom-label">ID Code:</label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="firstname" class="field prepend-icon"><input type="text" name="firstname" id="firstname" class="gui-input" placeholder="e.g., 12345"><label for="firstname" class="field-icon"><i class="fa fa-code"></i></label></label></div></div></div>',1),y=(0,s.uE)('<div class="panel-footer text-right"><button type="reset" id="btnClearForm" class="button"><i class="fa fa-undo"></i>   Clear All </button>   <button type="submit" id="btnSubmitForm" class="button btn-success"><i class="fa fa-send"></i>   Submit </button></div>',1);const _={mixins:[a(860).Z],data:function(){return{aMstList:[]}},created:function(){document.title="Anniversary Celebration Registration"},mounted:function(){this.getMstList()},methods:{getMstList:function(){var l=this;this.getRequest("get-mst",(function(e){l.aMstList=e.data,$(".mst-select").select2()}))}}};var w=a(3379),x=a.n(w),C=a(3231),M={insert:"head",singleton:!1};x()(C.Z,M);C.Z.locals;const D=(0,a(3744).Z)(_,[["render",function(l,e,a,_,w,x){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",t,[(0,s._)("div",c,[n,(0,s._)("div",o,[d,(0,s._)("div",m,[(0,s._)("div",r,[(0,s._)("div",u,[(0,s._)("select",f,[p,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.aMstList,(function(l){return(0,s.wg)(),(0,s.iD)("option",{value:l.mst_id},(0,s.zw)(l.mst_desc),9,b)})),256))])])])])]),v,g,h]),y])])}]])}}]);