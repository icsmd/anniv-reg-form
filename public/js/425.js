"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[425],{861:(e,i,a)=>{a.d(i,{Z:()=>t});var l=a(3645),s=a.n(l)()((function(e){return e[1]}));s.push([e.id,".required{color:red!important;font-size:18px!important}.custom-margin{margin-bottom:20px!important}.custom-label{font-weight:700!important;margin-bottom:5px!important;margin-left:11px!important}",""]);const t=s},1425:(e,i,a)=>{a.r(i),a.d(i,{default:()=>z});var l=a(821),s={style:{"background-color":"#e2e8f0"}},t={class:"admin-form theme-primary mw1000 center-block animated fadeIn"},n={key:0,class:"panel panel-primary heading-border center-block col-md-8"},c={class:"panel-body"},o=(0,l.uE)('<div class="section-divider mt20 mb40"><span> Normal validation rules </span></div><div class="row"><label class="col-md-12 custom-label">Email Address: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-6 custom-margin"><label for="inp_email" class="field prepend-icon"><input type="text" name="inp_email" id="inp_email" class="gui-input" placeholder="e.g., juandelacruz@gmail.com "><label for="inp_email" class="field-icon"><i class="fa fa-envelope"></i></label></label></div><div class="col-md-6 custom-margin"><button id="btnValidateEmail" class="button btn-primary"><i class="fa fa-check"></i> Validate Email </button><p id="p_email_validate" style="display:none;">Validating... Please wait.</p></div></div></div><div class="row"><label class="col-md-12 custom-label">Salutation: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_salute" class="field prepend-icon"><input type="text" name="inp_salute" id="inp_salute" class="gui-input" placeholder="e.g., Mr., Ms., Mrs., Dr., Ret Gen., etc."><label for="inp_salute" class="field-icon"><i class="fa fa-envelope"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">First Name: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_fname" class="field prepend-icon"><input type="text" name="inp_fname" id="inp_fname" class="gui-input" placeholder="e.g., Juan"><label for="inp_fname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Middle Initial: </label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_minitial" class="field prepend-icon"><input type="text" name="inp_minitial" id="inp_minitial" class="gui-input" placeholder="e.g., G."><label for="inp_minitial" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Last Name: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_lname" class="field prepend-icon"><input type="text" name="inp_lname" id="inp_lname" class="gui-input" placeholder="e.g., Dela Cruz"><label for="inp_lname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Department/Agency/Office/Embassy: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_dept" class="field prepend-icon"><input type="text" name="inp_dept" id="inp_dept" class="gui-input" placeholder="e.g., Department of Justice, Bureau of Customs, Philippine National Police, etc."><label for="inp_dept" class="field-icon"><i class="fa fa-building"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Designation/Position: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_desig" class="field prepend-icon"><input type="text" name="inp_desig" id="inp_desig" class="gui-input" placeholder="e.g., Police/Military Officer, Consultant, Director, etc."><label for="inp_desig" class="field-icon"><i class="fa fa-suitcase"></i></label></label></div></div></div>',8),d={class:"row"},r=(0,l._)("label",{class:"col-md-12 custom-label"},[(0,l.Uk)("Membership: "),(0,l._)("span",{class:"required"},"*")],-1),p={class:"col-md-12"},m={class:"form-group"},u={class:"col-lg-12 custom-margin"},f={class:"select2-single form-control mst-select",id:"inp_mst"},b=(0,l._)("option",{disabled:"",value:"",selected:""},"Please select membership",-1),v=["value"],g=(0,l.uE)('<div class="row"><label class="col-md-12 custom-label">Contact Number: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_contact" class="field prepend-icon"><input type="text" name="inp_contact" id="inp_contact" class="gui-input" placeholder="e.g., 09123456789"><label for="inp_contact" class="field-icon"><i class="fa fa-mobile"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Upload Picture: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12"><div class="section"><label class="field prepend-icon append-button file"><span class="button btn-primary">Choose File</span><input type="file" class="gui-file" name="inp_picture" id="inp_picture"><input type="text" class="gui-input" id="inp_pic_name_preview" placeholder="Please Select A File"><label class="field-icon"><i class="fa fa-upload"></i></label></label></div></div></div></div><div class="row"><label class="col-md-12 custom-label">ID Code: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_idcode" class="field prepend-icon"><input type="text" name="inp_idcode" id="inp_idcode" class="gui-input" placeholder="e.g., 12345"><label for="inp_idcode" class="field-icon"><i class="fa fa-code"></i></label></label></div></div></div>',3),_=(0,l.uE)('<div class="panel-footer text-right"><button type="reset" id="btnClearForm" class="button"><i class="fa fa-undo"></i>   Clear All </button>   <button id="btnSubmitForm" class="button btn-success"><i class="fa fa-send"></i>   Submit </button></div>',1),h={key:1,class:"center-block mt70",style:{"max-width":"625px"}},I={style:{margin:"5%"}},y=(0,l._)("div",{class:"row table-layout"},[(0,l._)("div",{class:"col-xs-12 pln"},[(0,l._)("h2",{class:"text-dark mbn confirmation-header"},[(0,l._)("i",{class:"fa fa-check text-success"}),(0,l.Uk)(" You have successfully registered!")])])],-1),w={class:"panel mt15"},E={class:"panel-body pt30 p25 pb15"},k={class:"lead"},x=(0,l._)("hr",{class:"alt short mv25"},null,-1),C=(0,l._)("p",{class:"lh25 text-muted fs15"}," Thank you for registering for the anniversary celebration. You may take a picture or save a screenshot of this page for your own copy of proof of registration. ",-1),D=(0,l._)("br",null,null,-1),M=(0,l._)("p",{class:"lh25 text-muted fs15"},"We'll contact you once again by the email and number you provided for further details of the said event. ",-1),P=(0,l._)("br",null,null,-1),F=(0,l._)("p",{class:"lh25 text-muted fs15"},"You may now close this page. ",-1);const S={mixins:[a(860).Z],data:function(){return{aMstList:[],sInpEmail:"#inp_email",sInpSalute:"#inp_salute",sInpFname:"#inp_fname",sInpMInitial:"#inp_minitial",sInpLname:"#inp_lname",sInpDept:"#inp_dept",sInpDesig:"#inp_desig",sInpMst:"#inp_mst",sInpContact:"#inp_contact",sInpPicture:"#inp_picture",sInpPicturePreview:"#inp_pic_name_preview",sInpIdCode:"#inp_idcode",bEmailValid:!1,bFormValid:!1,bFormSubmitted:!1,sConvertedImage:"",aSubmitResult:[]}},created:function(){document.title="Anniversary Celebration Registration"},mounted:function(){this.getMstList(),this.initEventListeners()},methods:{getMstList:function(){var e=this;this.getRequest("get-mst",(function(i){e.aMstList=i.data,$(".mst-select").select2()}))},initEventListeners:function(){var e=this;document.body.addEventListener("click",(function(i){i.preventDefault(),"btnValidateEmail"===i.target.id&&e.validateEmail(),"inp_picture"===i.target.id&&e.getImageUpload(),"btnSubmitForm"===i.target.id&&e.submitForm()}),!1)},getImageUpload:function(){var e=this,i=document.createElement("input");i.type="file",i.onchange=function(i){var a=i.target.files[0];if(a){var l=e.validateImage(a);if(!0===l.bResult){$(e.sInpPicturePreview).val(a.name);var s=new FileReader;s.readAsDataURL(a),s.onload=function(){var i=s.result.split(",")[1];e.sConvertedImage="data:"+a.type+";base64,"+i},s.onerror=function(i){e.showErrorAlert("Error:",i)}}else $(e.sInpPicturePreview).val(""),$(e.sInpPicturePreview).css("background-color","#ffffff"),e.sConvertedImage="",e.showErrorAlert(l.sMessage)}else e.showErrorAlert("No file selected")},i.click()},validateImage:function(e){var i=e.size/1048576,a=e.type,l=!0,s="Successfully validated the file.";return 5<=i?(l=!1,s="The file size must not exceed 5 MB!"):!0!==["image/png","image/jpg","image/jpeg"].some((function(e){return e.includes(a)}))&&(l=!1,s="The accepted file types that are .jpg, .jpeg, and .png only!"),{bResult:l,sMessage:s}},validateEmail:function(){var e=this,i=$(this.sInpEmail).val();$(this.sInpEmail).css("background-color","#ffcbcb"),""===i?this.showErrorAlert("Email is required!"):this.postRequest("validate-email",{email:i},(function(i){$(e.sInpEmail).css("background-color","#c3ffd6")}))},validateForm:function(){var e=[this.sInpSalute,this.sInpFname,this.sInpMInitial,this.sInpLname,this.sInpDept,this.sInpDesig,this.sInpMst,this.sInpContact,this.sInpPicturePreview,this.sInpIdCode],i=[];return e.forEach((function(e){var a=$(e);""===a.val()||null===a.val()?(a.css("background-color","#ffcbcb"),i.push("false")):(a.css("background-color","#c3ffd6"),i.push("true"))})),i.some((function(e){return e.includes("false")}))},submitForm:function(){var e=this;if(!0===this.validateForm())this.showErrorAlert("Please double check and correct your entries!");else{var i={email:$(this.sInpEmail).val(),first_name:$(this.sInpFname).val(),middle_initial:$(this.sInpMInitial).val(),last_name:$(this.sInpLname).val(),salutation:$(this.sInpSalute).val(),department:$(this.sInpDept).val(),designation:$(this.sInpDesig).val(),contact_number:$(this.sInpContact).val(),id_code:$(this.sInpIdCode).val(),picture:this.sConvertedImage,mst_id:$(this.sInpMst).val()};this.postRequest("submit-form",i,(function(i){201===i.code&&(e.bFormSubmitted=!0,window.scrollTo(0,0),e.aSubmitResult=i.data)}))}}}};var q=a(3379),R=a.n(q),L=a(861),A={insert:"head",singleton:!1};R()(L.Z,A);L.Z.locals;const z=(0,a(3744).Z)(S,[["render",function(e,i,a,S,$,q){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",t,[!1===$.bFormSubmitted?((0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",c,[o,(0,l._)("div",d,[r,(0,l._)("div",p,[(0,l._)("div",m,[(0,l._)("div",u,[(0,l._)("select",f,[b,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)($.aMstList,(function(e){return(0,l.wg)(),(0,l.iD)("option",{value:e.mst_id},(0,l.zw)(e.mst_desc),9,v)})),256))])])])])]),g]),_])):((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",I,[y,(0,l._)("div",w,[(0,l._)("div",E,[(0,l._)("p",k,"Hello "+(0,l.zw)($.aSubmitResult.salutation)+" "+(0,l.zw)($.aSubmitResult.first_name)+" "+(0,l.zw)($.aSubmitResult.middle_initial)+" "+(0,l.zw)($.aSubmitResult.last_name)+",",1),x,C,D,M,P,F])])])]))])])}]])}}]);