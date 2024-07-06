"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[941],{8992:(e,a,i)=>{i.d(a,{A:()=>t});var l=i(6314),s=i.n(l)()((function(e){return e[1]}));s.push([e.id,".required{color:red!important;font-size:18px!important}.custom-margin{margin-bottom:20px!important}.custom-label{font-weight:700!important;margin-bottom:5px!important;margin-left:11px!important}",""]);const t=s},2941:(e,a,i)=>{i.r(a),i.d(a,{default:()=>ee});var l=i(9726),s={style:{"background-color":"#e2e8f0"}},t={class:"admin-form theme-primary mw1000 center-block animated fadeIn"},n={key:0,class:"panel panel-primary heading-border center-block col-md-8"},o=(0,l.Fv)('<div class="panel" style="background-image:url(&#39;../../../../img/phflag.jpg&#39;);background-size:100% 100%;height:200px;border:0px;"><div style="margin:3%;text-align:center;"><br><h1 style="color:#666666;font-family:&#39;Lucida Sans&#39;, &#39;Lucida Sans Regular&#39;, &#39;Lucida Grande&#39;, &#39;Lucida Sans Unicode&#39;, Geneva, Verdana, sans-serif;"> Anniversary Celebration</h1><h3 style="color:#666666;font-family:&#39;Lucida Sans&#39;, &#39;Lucida Sans Regular&#39;, &#39;Lucida Grande&#39;, &#39;Lucida Sans Unicode&#39;, Geneva, Verdana, sans-serif;"> Registration Form</h3></div></div><p style="text-align:justify;margin:2%;">      By answering this web form, you are confirming your attendance on the upcoming anniversary celebration event. Rest assured that the information you will provide will be handled and protected in accordance to R.A. 10173. </p>',2),c={class:"panel-body"},d={class:"row"},r=(0,l.Lk)("label",{class:"col-md-12 custom-label"},[(0,l.eW)("Email Address: "),(0,l.Lk)("span",{class:"required"},"*")],-1),p={class:"col-md-12"},m={class:"col-md-6 custom-margin"},u=(0,l.Fv)('<label for="inp_email" class="field prepend-icon"><input type="text" name="inp_email" id="inp_email" class="gui-input" placeholder="e.g., juandelacruz@gmail.com "><b class="tooltip tip-left-bottom"><em>The email you will provide will be used to receive the qr-code we&#39;ll be sending, which you will present on the day of the event. </em></b><label for="inp_email" class="field-icon"><i class="fa fa-envelope"></i></label></label>',1),f={key:0,style:{"margin-top":"5%","font-size":"13px",color:"red"}},v={class:"col-md-6 custom-margin"},b={key:0,id:"btnValidateEmail",class:"button btn-primary"},g=(0,l.Lk)("i",{class:"fa fa-check"},null,-1),h={key:1,id:"p_email_validating",style:{"margin-top":"10px"}},y=(0,l.Lk)("i",{class:"fa fa-spinner"},null,-1),_={key:2,id:"p_email_valid",style:{"margin-top":"10px"}},I=(0,l.Lk)("i",{class:"fa fa-check-circle"},null,-1),k={id:"div_main_form",style:{display:"none"}},E=(0,l.Fv)('<div class="row"><label class="col-md-12 custom-label">Salutation: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_salute" class="field prepend-icon"><input type="text" name="inp_salute" id="inp_salute" class="gui-input" placeholder="e.g., MR., MS., MRS., DR., RET GEN., etc." style="text-transform:uppercase;"><label for="inp_salute" class="field-icon"><i class="fa fa-envelope"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">First Name: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_fname" class="field prepend-icon"><input type="text" name="inp_fname" id="inp_fname" class="gui-input" placeholder="e.g., JUAN" style="text-transform:uppercase;"><label for="inp_fname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Middle Initial: </label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_minitial" class="field prepend-icon"><input type="text" name="inp_minitial" id="inp_minitial" class="gui-input" placeholder="e.g., G." style="text-transform:uppercase;" maxlength="3"><label for="inp_minitial" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Last Name: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_lname" class="field prepend-icon"><input type="text" name="inp_lname" id="inp_lname" class="gui-input" placeholder="e.g., DELA CRUZ" style="text-transform:uppercase;"><label for="inp_lname" class="field-icon"><i class="fa fa-user"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Department/Agency/Office/Embassy: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_dept" class="field prepend-icon"><input type="text" name="inp_dept" id="inp_dept" class="gui-input" placeholder="e.g., DEPARTMENT OF JUSTICE, BUREAU OF CUSTOMS, PHILIPPINE NATIONAL POLICE, etc." style="text-transform:uppercase;"><label for="inp_dept" class="field-icon"><i class="fa fa-building"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Designation/Position: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_desig" class="field prepend-icon"><input type="text" name="inp_desig" id="inp_desig" class="gui-input" placeholder="e.g., POLICE/MILITARY OFFICER, CONSULTANT, DIRECTOR, etc." style="text-transform:uppercase;"><label for="inp_desig" class="field-icon"><i class="fa fa-suitcase"></i></label></label></div></div></div>',6),L={class:"row"},w=(0,l.Lk)("label",{class:"col-md-12 custom-label"},[(0,l.eW)("Membership: "),(0,l.Lk)("span",{class:"required"},"*")],-1),C={class:"col-md-12"},x={class:"form-group"},S={class:"col-lg-12 custom-margin"},A={class:"select2-single form-control mst-select",id:"inp_mst"},F=(0,l.Lk)("option",{disabled:"",value:"",selected:""},"Please select membership",-1),R=["value"],M=(0,l.Fv)('<div class="row"><label class="col-md-12 custom-label">Contact Number: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_contact" class="field prepend-icon"><input type="text" name="inp_contact" id="inp_contact" class="gui-input" placeholder="e.g., 09123456789" minlength="11" maxlength="11"><b class="tooltip tip-left-bottom"><em>The contact number may be used to contact you for identity confirmation. <br> (Must be a valid 11-digit number) </em></b><label for="inp_contact" class="field-icon"><i class="fa fa-mobile"></i></label></label></div></div></div><div class="row"><label class="col-md-12 custom-label">Upload Picture: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12"><div class="section"><label class="field prepend-icon append-button file"><span class="button btn-primary">Choose File</span><input type="file" class="gui-file" name="inp_picture" id="inp_picture"><input type="text" class="gui-input" id="inp_pic_name_preview" placeholder="Please Select A File"><b class="tooltip tip-left-bottom"><em>The picture you will provide will be used to validate your identification. <br> (Must be a valid jpg, jpeg, and png file) </em></b><label class="field-icon"><i class="fa fa-upload"></i></label></label></div></div></div></div><div class="row"><label class="col-md-12 custom-label">ID Code: <span class="required">*</span></label><div class="col-md-12"><div class="col-md-12 custom-margin"><label for="inp_idcode" class="field prepend-icon"><input type="text" name="inp_idcode" id="inp_idcode" class="gui-input" placeholder="e.g., 12345" minlength="5" maxlength="5"><b class="tooltip tip-left-bottom"><em>The ID code comes from invitation that was sent to you via email. <br> (Must be a 5-digit number) </em></b><label for="inp_idcode" class="field-icon"><i class="fa fa-code"></i></label></label></div></div></div>',3),V=(0,l.Fv)('<div class="panel-footer text-right" id="div_footer_form" style="display:none;"><button type="reset" id="btnClearForm" class="button"><i class="fa fa-undo"></i>   Clear All </button>   <button id="btnSubmitForm" class="button btn-success"><i class="fa fa-send"></i>   Submit </button></div>',1),T={key:1,class:"center-block mt70",style:{"max-width":"625px"}},P={style:{margin:"5%"}},D=(0,l.Lk)("div",{class:"row table-layout"},[(0,l.Lk)("div",{class:"col-xs-12 pln"},[(0,l.Lk)("h2",{class:"text-dark mbn confirmation-header"},[(0,l.Lk)("i",{class:"fa fa-check text-success"}),(0,l.eW)(" You have successfully registered!")])])],-1),q={class:"panel mt15"},N={class:"panel-body pt30 p25 pb15"},U={class:"lead"},B=(0,l.Lk)("hr",{class:"alt short mv25"},null,-1),O=(0,l.Lk)("p",{class:"lh25 text-muted fs15"}," Thank you for registering for the anniversary celebration. You may take a picture or save a screenshot of this page for your own copy of proof of registration. ",-1),j=(0,l.Lk)("br",null,null,-1),X=(0,l.Lk)("p",{class:"lh25 text-muted fs15"},"We'll contact you once again by the email and number you provided for further details of the said event. ",-1),W=(0,l.Lk)("br",null,null,-1),Y=(0,l.Lk)("p",{class:"lh25 text-muted fs15"},"You may now close this page. ",-1);var z=i(8465),G=i.n(z);const H={mixins:[i(3628).A],data:function(){return{aMstList:[],sInpEmail:"#inp_email",sInpSalute:"#inp_salute",sInpFname:"#inp_fname",sInpMInitial:"#inp_minitial",sInpLname:"#inp_lname",sInpDept:"#inp_dept",sInpDesig:"#inp_desig",sInpMst:"#inp_mst",sInpContact:"#inp_contact",sInpPicture:"#inp_picture",sInpPicturePreview:"#inp_pic_name_preview",sInpIdCode:"#inp_idcode",sEmailValidStat:"false",bFormValid:!1,bFormSubmitted:!1,sConvertedImage:"",aSubmitResult:[],sTempEmailValue:""}},created:function(){this.sActivePage="registration",document.title="Anniversary Celebration Registration"},watch:{sEmailValidStat:function(e){"valid"===e?($("#div_main_form").css("display",""),$("#div_footer_form").css("display",""),$(".mst-select").select2()):($("#div_main_form").css("display","none"),$("#div_footer_form").css("display","none"))}},mounted:function(){this.getMstList(),this.initEventListeners()},methods:{getMstList:function(){var e=this;this.getRequest("get-mst",(function(a){e.aMstList=a.data}))},initEventListeners:function(){var e=this;document.body.addEventListener("click",(function(a){a.preventDefault(),"btnValidateEmail"===a.target.id&&e.validateEmail(),"inp_picture"===a.target.id&&e.getImageUpload(),"btnSubmitForm"===a.target.id&&e.submitForm()}),!1),$(this.sInpEmail).keyup((function(a){a.preventDefault(),"valid"===e.sEmailValidStat&&G().fire({title:"Wait!",text:"By changing the email, you need to revalidate the email once again and you won't be able to submit your entries until it's validated (Your progress will be saved). Are you sure you want to proceed?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, I want to proceed."}).then((function(a){a.isConfirmed?(e.sEmailValidStat="false",$(e.sInpEmail).css("background-color","#ffffff")):$(e.sInpEmail).val(e.sTempEmailValue)}))}))},getImageUpload:function(){var e=this,a=document.createElement("input");a.type="file",a.onchange=function(a){var i=a.target.files[0];if(i){var l=e.validateImage(i);if(!0===l.bResult){$(e.sInpPicturePreview).val(i.name);var s=new FileReader;s.readAsDataURL(i),s.onload=function(){var a=s.result.split(",")[1];e.sConvertedImage="data:"+i.type+";base64,"+a},s.onerror=function(a){e.showErrorAlert("Error:",a)}}else $(e.sInpPicturePreview).val(""),$(e.sInpPicturePreview).css("background-color","#ffffff"),e.sConvertedImage="",e.showErrorAlert(l.sMessage)}else e.showErrorAlert("No file selected")},a.click()},validateImage:function(e){var a=e.size/1048576,i=e.type,l=!0,s="Successfully validated the file.";return 5<=a&&(l=!1,s="The file size must not exceed 5 MB!"),!0===["image/png","image/jpg","image/jpeg"].some((function(e){return e.includes(i)}))&&""!==i||(l=!1,s="The accepted file types that are .jpg, .jpeg, and .png only!"),{bResult:l,sMessage:s}},validateEmail:function(){var e=this,a=$(this.sInpEmail).val();""!==this.sTempEmailValue&&this.sEmail===this.sTempEmailValue?($(this.sInpEmail).css("background-color","#c3ffd6"),this.sEmailValidStat="valid",this.sTempEmailValue=a):""===a?(this.showErrorAlert("Email is required!"),$(this.sInpEmail).css("background-color","#ffcbcb")):(this.sEmailValidStat="pending",this.sActiveAction="email_verify",this.postRequest("validate-email",{email:a},(function(i){500!==i.code?(e.sEmailValidStat="valid",e.sTempEmailValue=a,$(e.sInpEmail).css("background-color","#c3ffd6")):(e.sEmailValidStat="false",$(e.sInpEmail).css("background-color","#ffcbcb"))})))},validateForm:function(){var e=this,a=[this.sInpSalute,this.sInpFname,this.sInpMInitial,this.sInpLname,this.sInpDept,this.sInpDesig,this.sInpMst,this.sInpContact,this.sInpPicturePreview,this.sInpIdCode],i=[];return a.forEach((function(a){var l=$(a);a!==e.sInpMInitial?""===l.val()||null===l.val()?(l.css("background-color","#ffcbcb"),i.push("false")):(l.css("background-color","#c3ffd6"),i.push("true")):""!==l.val()&&l.css("background-color","#c3ffd6")})),i.some((function(e){return e.includes("false")}))},validateFormByValue:function(){var e=[];return 11!=$(this.sInpContact).val().length?($(this.sInpContact).css("background-color","#ffcbcb"),e.push("false")):($(this.sInpContact).css("background-color","#c3ffd6"),e.push("true")),5!=$(this.sInpIdCode).val().length?($(this.sInpIdCode).css("background-color","#ffcbcb"),e.push("false")):($(this.sInpIdCode).css("background-color","#c3ffd6"),e.push("true")),e.some((function(e){return e.includes("false")}))},submitForm:function(){var e=this,a=this.validateForm(),i=this.validateFormByValue();if(!0===a&&!0===i)this.showErrorAlert("Please double check and correct your entries!");else{var l={email:$(this.sInpEmail).val(),first_name:$(this.sInpFname).val(),middle_initial:$(this.sInpMInitial).val(),last_name:$(this.sInpLname).val(),salutation:$(this.sInpSalute).val(),department:$(this.sInpDept).val(),designation:$(this.sInpDesig).val(),contact_number:$(this.sInpContact).val(),id_code:$(this.sInpIdCode).val(),picture:this.sConvertedImage,mst_id:$(this.sInpMst).val()};this.sActiveAction="form_validate",this.postRequest("submit-form",l,(function(a){201===a.code&&(e.bFormSubmitted=!0,window.scrollTo(0,0),e.aSubmitResult=a.data)}))}}}};var J=i(5072),K=i.n(J),Q=i(8992),Z={insert:"head",singleton:!1};K()(Q.A,Z);Q.A.locals;const ee=(0,i(6262).A)(H,[["render",function(e,a,i,$,z,G){return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",t,[!1===z.bFormSubmitted?((0,l.uX)(),(0,l.CE)("div",n,[o,(0,l.Lk)("div",c,[(0,l.Lk)("div",d,[r,(0,l.Lk)("div",p,[(0,l.Lk)("div",m,[u,"false"===z.sEmailValidStat?((0,l.uX)(),(0,l.CE)("span",f,"Note: You must validate your email first in order to proceed to the next fields.")):(0,l.Q3)("",!0)]),(0,l.Lk)("div",v,["false"===z.sEmailValidStat?((0,l.uX)(),(0,l.CE)("button",b,[g,(0,l.eW)(" Validate Email ")])):"pending"===z.sEmailValidStat?((0,l.uX)(),(0,l.CE)("p",h,[y,(0,l.eW)("  Validating... Please wait. ")])):((0,l.uX)(),(0,l.CE)("p",_,[I,(0,l.eW)("  Email is valid. ")]))])])]),(0,l.Lk)("div",k,[E,(0,l.Lk)("div",L,[w,(0,l.Lk)("div",C,[(0,l.Lk)("div",x,[(0,l.Lk)("div",S,[(0,l.Lk)("select",A,[F,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(z.aMstList,(function(e){return(0,l.uX)(),(0,l.CE)("option",{value:e.mst_id},(0,l.v_)(e.mst_desc),9,R)})),256))])])])])]),M])]),V])):((0,l.uX)(),(0,l.CE)("div",T,[(0,l.Lk)("div",P,[D,(0,l.Lk)("div",q,[(0,l.Lk)("div",N,[(0,l.Lk)("p",U,"Hello "+(0,l.v_)(z.aSubmitResult.salutation)+" "+(0,l.v_)(z.aSubmitResult.first_name)+" "+(0,l.v_)(z.aSubmitResult.middle_initial)+" "+(0,l.v_)(z.aSubmitResult.last_name)+",",1),B,O,j,X,W,Y])])])]))])])}]])}}]);