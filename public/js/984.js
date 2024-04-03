/*! For license information please see 984.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[984],{4867:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(6455),r=a.n(n),o=a(860),i=a(475);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(){c=function(){return t};var e,t={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function d(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,a){return e[t]=a}}function f(e,t,a,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),s=new L(n||[]);return r(i,"_invoke",{value:P(e,a,s)}),i}function p(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var m="suspendedStart",h="suspendedYield",v="executing",y="completed",_={};function b(){}function g(){}function w(){}var x={};d(x,i,(function(){return this}));var C=Object.getPrototypeOf,$=C&&C(C(S([])));$&&$!==a&&n.call($,i)&&(x=$);var k=w.prototype=b.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function a(r,o,i,c){var l=p(e[r],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function P(t,a,n){var r=m;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=T(s,n);if(c){if(c===_)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===m)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var l=p(t,a,n);if("normal"===l.type){if(r=n.done?y:h,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=y,n.method="throw",n.arg=l.arg)}}}function T(t,a){var n=a.method,r=t.iterator[n];if(r===e)return a.delegate=null,"throw"===n&&t.iterator.return&&(a.method="return",a.arg=e,T(t,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var o=p(r,t.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,_;var i=o.arg;return i?i.done?(a[t.resultName]=i.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,_):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,_)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function S(t){if(t||""===t){var a=t[i];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function a(){for(;++r<t.length;)if(n.call(t,r))return a.value=t[r],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}throw new TypeError(s(t)+" is not iterable")}return g.prototype=w,r(k,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:g,configurable:!0}),g.displayName=d(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,d(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},E(N.prototype),d(N.prototype,l,(function(){return this})),t.AsyncIterator=N,t.async=function(e,a,n,r,o){void 0===o&&(o=Promise);var i=new N(f(e,a,n,r),o);return t.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(k),d(k,u,"Generator"),d(k,i,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function r(n,r){return s.type="throw",s.arg=t,a.next=n,r&&(a.method="next",a.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),F(a),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;F(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:S(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),_}},t}function l(e,t,a,n,r,o,i){try{var s=e[o](i),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(n,r)}const u={mixins:[o.Z,i.Z],data:function(){return{sFundType:"",aPayeeList:[],iSelectedPayee:0,aUacsList:[],iSelectedUacs:0,aFSList:[],iSelectedFs:0,iNewPayee:!1,aTaxCodes:[],aTaxClass:[],aFilteredTaxCodes:[],sSelectedTax:"",aTaxInputNo:[],fTaxVATValue:1.12,bOrDuplicateCheck:!1,bPayeeDuplicateCheck:!1,bFormValid:!1,bNoFormDuplicates:!1}},watch:{sSelectedTax:function(e){this.computeTax(0),this.filterTaxCodes(e)}},mounted:function(){this.initializePlugins(),this.initLibraries(),this.initEventListener(),document.getElementById("chkbxNewNatPay").checked=!0,$("#inp_nature_payment").attr("readonly",!0),this.initNatureOfPayment()},methods:{initLibraries:function(){var e=this,t=this.$root.parseLocalStorageLib(),a=t.fund_source,n=t.uacs;this.aFSList=a.filter((function(t){return t.fs_type==e.sFundType&&"RELEASED"===t.fs_status})),this.aUacsList=n.filter((function(t){return t.uacs_fund_type==e.sFundType})),this.aPayeeList=t.payees,this.aTaxCodes=t.tax_code,this.aTaxClass=t.tax_class,this.sSelectedTax=5,$(".tax-class-select").select2().val(5).trigger("change")},filterTaxValues:function(e){return this.filterTaxCodes(e),this.aTaxClass.filter((function(t){return t.tcl_id==e}))},computeTax:function(e){var t,a,n,r=this.filterTaxValues($("#inp_tax_class").val()),o=void 0===r[0]?null:r[0].tcl_type,i=parseFloat($("#inp_gross_amount").val());if(null===o)$("#inp_tax_amount").val("0.00"),$("#inp_tax_amount").attr("readonly",!0),$("#inp_net_amount").val(i.toFixed(2));else{$("#inp_tax_amount").attr("readonly",!1),t="vat"===o?i/this.fTaxVATValue:i;var s=this.aFilteredTaxCodes[0].tcd_percentage,c=this.aFilteredTaxCodes[1].tcd_percentage;0===e?(a=t*s+t*c,$("#inp_tax_amount").val(a.toFixed(2))):a=parseFloat($("#inp_tax_amount").val()),n=i-a,$("#inp_net_amount").val(n.toFixed(2))}},initNatureOfPayment:function(){var e=this;$("#inp_uacs").on("select2:select",(function(t){if(!0===document.getElementById("chkbxNewNatPay").checked){var a=$("#inp_uacs option:selected").val(),n=e.filterUacs(a);$("#inp_nature_payment").val(n),$("#inp_nature_payment").attr("readonly",!0)}})),document.body.addEventListener("click",(function(t){if(t.preventDefault(),"spanNewNatPay"===t.target.id)if(1==document.getElementById("chkbxNewNatPay").checked)document.getElementById("chkbxNewNatPay").checked=!1,$("#inp_nature_payment").val(""),$("#inp_nature_payment").attr("readonly",!1);else{document.getElementById("chkbxNewNatPay").checked=!0;var a=$("#inp_uacs option:selected").val(),n=e.filterUacs(a);$("#inp_nature_payment").val(n),$("#inp_nature_payment").attr("readonly",!0)}}),!1)},filterUacs:function(e){return this.aUacsList.filter((function(t){return t.uacs_id==e}))[0].uacs_acc_title},initializePlugins:function(){$(".select2-single").select2(),$("#inpDateTransact").datepicker({prevText:'<i class="fa fa-chevron-left"></i>',nextText:'<i class="fa fa-chevron-right"></i>',showButtonPanel:!1,beforeShow:function(e,t){var a=$(this).parents(".admin-form").attr("class");t.dpDiv.parent().hasClass(a)||t.dpDiv.wrap('<div class="'+a+'"></div>')}}),$("#form-switcher > button").on("click",(function(){var e=$(this).data("form-layout"),t=$("#form-elements-pane .admin-form.active");t.removeClass("slideInUp").addClass("animated fadeOutRight animated-shorter"),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){t.removeClass("active fadeOutRight animated-shorter"),$("#"+e).addClass("active animated slideInUp animated-shorter")}))}));var e=$(".content-header").find("b"),t=$(".admin-form"),a=t.find(".option"),n=t.find(".switch"),r=t.find(".button"),o=t.find(".panel");$("#skin-switcher a").on("click",(function(){var i=$(this).data("form-skin");$("#skin-switcher a").removeClass("item-active"),$(this).addClass("item-active"),t.each((function(t,a){$(a).removeClass("theme-primary theme-info theme-success theme-warning theme-danger theme-alert theme-system theme-dark").addClass("theme-"+i),o.removeClass("panel-primary panel-info panel-success panel-warning panel-danger panel-alert panel-system panel-dark").addClass("panel-"+i),e.removeClass().addClass("text-"+i)})),$(a).each((function(e,t){$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 option option-"+i):$(t).removeClass().addClass("option option-"+i)})),$(n).each((function(e,t){$(t).hasClass("switch-round")?$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 switch switch-round switch-"+i):$(t).removeClass().addClass("switch switch-round switch-"+i):$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 switch switch-"+i):$(t).removeClass().addClass("switch switch-"+i)})),r.removeClass().addClass("button btn-"+i)})),setTimeout((function(){t.addClass("theme-primary"),o.addClass("panel-primary"),e.addClass("text-primary"),$(a).each((function(e,t){$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 option option-primary"):$(t).removeClass().addClass("option option-primary")})),$(n).each((function(e,t){$(t).hasClass("switch-round")?$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 switch switch-round switch-primary"):$(t).removeClass().addClass("switch switch-round switch-primary"):$(t).hasClass("block")?$(t).removeClass().addClass("block mt15 switch switch-primary"):$(t).removeClass().addClass("switch switch-primary")})),r.removeClass().addClass("button btn-primary")}),800)},initEventListener:function(){var e=this;$("#inp_tax_class").on("select2:select",(function(t){e.computeTax(0);var a=t.params.data.id;e.filterTaxCodes(a)})),document.body.addEventListener("click",(function(e){e.preventDefault(),"spanNewPayee"===e.target.id&&(1==document.getElementById("chkbxNewPayee").checked?(document.getElementById("chkbxNewPayee").checked=!1,$("#inp_new_payee").val(""),$("#divNewPayee").css("display","none")):(document.getElementById("chkbxNewPayee").checked=!0,$("#divNewPayee").css("display","")))}),!1),this.setFieldAutoCompute("#inp_gross_amount",0),this.setFieldAutoCompute("#inp_tax_amount",1),this.setFieldAutoCompute("#inp_net_amount",1),$("#inp_or_number").keyup((function(t){t.preventDefault(),e.bFormValid=!1,e.bOrDuplicateCheck=!1,e.bNoFormDuplicates=!1})),$("#inp_new_payee").keyup((function(t){t.preventDefault(),e.bFormValid=!1,e.bPayeeDuplicateCheck=!1,e.bNoFormDuplicates=!1}))},setFieldAutoCompute:function(e,t){var a=this;$(e).keyup((function(e){e.preventDefault(),a.computeTax(t)}))},filterTaxCodes:function(e){var t=this.aTaxCodes.filter((function(t){return t.tcl_id==e}));this.aFilteredTaxCodes=t},filterParams:function(){var e={fund_type:this.sFundType,or_number:$("#inp_or_number").val(),fs_id:$("#inp_fund_source").val(),tcl_id:$("#inp_tax_class").val(),transact_date:$("#inpDateTransact").val(),uacs_id:$("#inp_uacs").val(),nature_payment:$("#inp_nature_payment").val(),gross_amount:$("#inp_gross_amount").val(),tax_amount:$("#inp_tax_amount").val(),net_amount:$("#inp_net_amount").val()};return e=!1===document.getElementById("chkbxNewPayee").checked?Object.assign({},e,{payee_id:$("#inp_payee").val()}):Object.assign({},e,{payee_name:$("#inp_new_payee").val()})},validateEntries:function(){var e=!0;(null===$("#inp_fund_source").val()&&($("#p_fund_source").css("display",""),e=!1),""===$("#inp_or_number").val()&&($("#p_or_number").css("display",""),e=!1),""===$("#inpDateTransact").val()&&($("#p_transact_date").css("display",""),e=!1),null===$("#inp_uacs").val()&&($("#p_uacs").css("display",""),e=!1),!0===document.getElementById("chkbxNewPayee").checked)?""===$("#inp_new_payee").val()&&($("#p_new_payee").css("display",""),e=!1):null===$("#inp_payee").val()&&($("#p_payee").css("display",""),e=!1);var t=$("#inp_gross_amount").val();""===t&&($("#p_gross_amount").css("display",""),e=!1),parseFloat(t)<=0&&($("#p_gross_amount").css("display",""),$("#p_gross_amount").text("Gross amount must not be less than or equal to zero!"));var a=$("#inp_tax_amount").val();""===a&&($("#p_tax_amount").css("display",""),e=!1),parseFloat(a)<0&&($("#p_tax_amount").css("display",""),$("#p_tax_amount").text("Vat amount must not be less than zero!")),""===$("#inp_net_amount").val()&&($("#p_net_amount").css("display",""),e=!1),this.bFormValid=e},processEntries:function(){var e=this,t=this.filterParams();$(".error_msg").css("display","none"),this.validateEntries(),!0===this.bFormValid?(this.checkDuplicates(t),setTimeout((function(){console.log("no form duplicates: "+e.bNoFormDuplicates),!0===e.bNoFormDuplicates&&e.saveEntries()}),1e3)):this.showErrorAlert("Please double check and correct all your entries!")},saveEntries:function(){var e=this,t=this.filterParams();this.postRequest("sdor/save-entry",t,(function(t){e.showSuccessAlert("Successfully saved your entry"),setTimeout((function(){window.location.reload()}),1e3)}))},checkDuplicates:(d=c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1===(a=this).bOrDuplicateCheck?(t=Object.assign({},t,{field:"or_number"}),this.postRequest("sdor/validate-entry",t,(function(e){!1===e.data?(a.bNoFormDuplicates=!1,r().fire({title:"Duplicate Check!",html:e.message,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Proceed."}).then((function(e){e.isConfirmed&&(a.bOrDuplicateCheck=!0,a.processEntries())}))):a.bNoFormDuplicates=!0}))):a.bNoFormDuplicates=!0,!0===document.getElementById("chkbxNewPayee").checked&&(t=Object.assign({},t,{field:"payee"}),this.postRequest("sdor/validate-entry",t,(function(e){!1===e.data?(a.bNoFormDuplicates=!1,r().fire({title:"Duplicate Check!",html:e.message,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Okay I Understand."}).then((function(e){e.isConfirmed&&(a.bFormValid=!1,a.bNoFormDuplicates=!1)}))):(a.bFormValid=!0,a.bNoFormDuplicates=!0)})));case 3:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,t=arguments;return new Promise((function(a,n){var r=d.apply(e,t);function o(e){l(r,a,n,o,i,"next",e)}function i(e){l(r,a,n,o,i,"throw",e)}o(void 0)}))},function(e){return f.apply(this,arguments)})}};var d,f},6578:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(3645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".error_msg[data-v-63eff87c]{color:red}",""]);const o=r},5984:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var n=a(821),r=function(e){return(0,n.dD)("data-v-63eff87c"),e=e(),(0,n.Cn)(),e},o={id:"main"},i={id:"content_wrapper"},s=(0,n.uE)('<header id="topbar" class="alt" data-v-63eff87c><div class="topbar-left" data-v-63eff87c><ol class="breadcrumb" data-v-63eff87c><li class="crumb-trail" data-v-63eff87c> Cash Management </li><li class="crumb-trail" data-v-63eff87c> Add Cash Disbursement </li><li class="crumb-active" data-v-63eff87c><a data-v-63eff87c>Maintenance and Other Operating Expenses</a></li></ol></div></header>',1),c={class:"panel"},l=r((function(){return(0,n._)("div",{class:"panel-heading"},[(0,n._)("span",{class:"panel-title"},"Add Cash Disbursement Entry for MOOE")],-1)})),u={class:"panel-body"},d={class:"form-horizontal",role:"form"},f={class:"col-md-6"},p={class:"form-group"},m=r((function(){return(0,n._)("label",{for:"inputSelect",class:"col-lg-3 control-label"},"ORS/ADA: ",-1)})),h={class:"col-lg-8"},v=r((function(){return(0,n._)("option",{disabled:"",value:"0",selected:""},"Please select fund source",-1)})),y=["value"],_=r((function(){return(0,n._)("p",{id:"p_fund_source",style:{display:"none"},class:"error_msg"},"Please select a fund source!",-1)})),b=(0,n.uE)('<div class="form-group" data-v-63eff87c><label for="inp_or_number" class="col-lg-3 control-label" data-v-63eff87c>OR Number:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_or_number" class="form-control" type="text" data-v-63eff87c><p id="p_or_number" style="display:none;" class="error_msg" data-v-63eff87c>OR Number is required!</p></div></div><div class="form-group" data-v-63eff87c><label for="inputStandard" class="col-lg-3 control-label" data-v-63eff87c>Date of Transaction</label><div class="admin-form mw1000 center-block" data-v-63eff87c><div class="col-lg-8" data-v-63eff87c><label for="datepicker1" class="field prepend-icon" data-v-63eff87c><input type="text" id="inpDateTransact" name="inpDateTransact" class="gui-input" placeholder="Enter date of transaction" readonly data-v-63eff87c><label class="field-icon" data-v-63eff87c><i class="fa fa-calendar-o" data-v-63eff87c></i></label></label><p id="p_transact_date" style="display:none;" class="error_msg" data-v-63eff87c>Date of Transaction is required!</p></div></div></div>',2),g={class:"form-group"},w=r((function(){return(0,n._)("label",{for:"inputSelect",class:"col-lg-3 control-label"},"Payee: ",-1)})),x={class:"col-lg-8"},C=r((function(){return(0,n._)("option",{disabled:"",value:"0",selected:""},"Please select payee",-1)})),$=["value"],k=(0,n.uE)('<p id="p_payee" style="display:none;" class="error_msg" data-v-63eff87c>Please select a payee!</p><div class="admin-form" style="margin-top:5px;" data-v-63eff87c><label class="option" data-v-63eff87c><input id="chkbxNewPayee" type="checkbox" name="checked" value="checked" data-v-63eff87c><span id="spanNewPayee" class="checkbox" data-v-63eff87c></span>(Check if payee is not available in the list)</label></div>',2),E=(0,n.uE)('<div class="form-group" id="divNewPayee" style="display:none;" data-v-63eff87c><label for="inp_gross_amount" class="col-lg-3 control-label" data-v-63eff87c>New Payee:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_new_payee" class="form-control" type="text" placeholder="Create new payee..." style="text-transform:uppercase;" data-v-63eff87c><p id="p_new_payee" style="display:none;" class="error_msg" data-v-63eff87c>New Payee is required!</p></div></div>',1),N={class:"form-group"},P=r((function(){return(0,n._)("label",{for:"inputSelect",class:"col-lg-3 control-label"},"Particular (UACS): ",-1)})),T={class:"col-lg-8"},D=r((function(){return(0,n._)("option",{disabled:"",value:"0",selected:""},"Please select UACS",-1)})),F=["value"],L=r((function(){return(0,n._)("p",{id:"p_uacs",style:{display:"none"},class:"error_msg"},"Please select a UACS!",-1)})),S=(0,n.uE)('<div class="form-group" data-v-63eff87c><label for="inp_nature_payment" class="col-lg-3 control-label" data-v-63eff87c>Nature of Payment:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_nature_payment" class="form-control" type="text" data-v-63eff87c><p id="p_nature_payment" style="display:none;" class="error_msg" data-v-63eff87c>Nature of payment is required!</p><div class="admin-form" style="margin-top:5px;" data-v-63eff87c><label class="option" data-v-63eff87c><input id="chkbxNewNatPay" type="checkbox" name="checked" value="checked" data-v-63eff87c><span id="spanNewNatPay" class="checkbox" data-v-63eff87c></span>(Check if the nature of payment is the same with UACS Account Title)</label></div></div></div>',1),O={class:"col-md-6"},A=(0,n.uE)('<div class="form-group" data-v-63eff87c><label for="inp_gross_amount" class="col-lg-3 control-label" data-v-63eff87c>Gross Amount:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_gross_amount" class="form-control computation" type="number" min="0.00" value="0.00" step=".01" data-v-63eff87c><p id="p_gross_amount" style="display:none;" class="error_msg" data-v-63eff87c>Gross amount is required!</p></div></div>',1),U={class:"form-group"},B=r((function(){return(0,n._)("label",{for:"inp_vat_amount",class:"col-lg-3 control-label"},"Tax Type:",-1)})),I={class:"col-lg-8"},j={class:"select2-single form-control tax-class-select",id:"inp_tax_class"},V=["value"],z=(0,n.uE)('<div class="form-group" data-v-63eff87c><label for="inp_tax_amount" class="col-lg-3 control-label" data-v-63eff87c>Tax Withheld:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_tax_amount" class="form-control computation" type="number" min="0.00" value="0.00" step=".01" data-v-63eff87c><p id="p_tax_amount" style="display:none;" class="error_msg" data-v-63eff87c>Tax amount is required!</p></div></div><div class="form-group" data-v-63eff87c><label for="inp_net_amount" class="col-lg-3 control-label" data-v-63eff87c>Net Amount:</label><div class="col-lg-8" data-v-63eff87c><input id="inp_net_amount" class="form-control computation" type="number" min="0.00" value="0.00" step=".01" data-v-63eff87c><p id="p_net_amount" style="display:none;" class="error_msg" data-v-63eff87c>Net amount is required!</p></div></div><br data-v-63eff87c>',3),q=["onClick"],G=r((function(){return(0,n._)("i",{class:"fa fa-floppy-o"},null,-1)}));const R={mixins:[a(4867).Z],created:function(){this.sFundType="mooe"}};var Z=a(3379),M=a.n(Z),Y=a(6578),H={insert:"head",singleton:!1};M()(Y.Z,H);Y.Z.locals;const K=(0,a(3744).Z)(R,[["render",function(e,t,a,r,R,Z){var M=(0,n.up)("C_Layout_Header"),Y=(0,n.up)("C_Layout_SDOR_Sidebar");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(M),(0,n.Wm)(Y),(0,n._)("section",i,[s,(0,n._)("div",c,[l,(0,n._)("div",u,[(0,n._)("form",d,[(0,n._)("div",f,[(0,n._)("div",p,[m,(0,n._)("div",h,[(0,n.wy)((0,n._)("select",{class:"select2-single form-control",id:"inp_fund_source","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.iSelectedFs=t})},[v,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.aFSList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.fs_id},(0,n.zw)(e.ors_no)+" ("+(0,n.zw)(e.fs_desc)+") ",9,y)})),256))],512),[[n.bM,e.iSelectedFs]]),_])]),b,(0,n._)("div",g,[w,(0,n._)("div",x,[(0,n.wy)((0,n._)("select",{class:"select2-single form-control",id:"inp_payee","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.iSelectedPayee=t})},[C,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.aPayeeList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.payee_id},(0,n.zw)(e.payee_name),9,$)})),256))],512),[[n.bM,e.iSelectedPayee]]),k])]),E,(0,n._)("div",N,[P,(0,n._)("div",T,[(0,n.wy)((0,n._)("select",{class:"select2-single form-control",id:"inp_uacs","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.iSelectedUacs=t})},[D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.aUacsList,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.uacs_id},(0,n.zw)(e.uacs_code)+": "+(0,n.zw)(e.uacs_acc_title),9,F)})),256))],512),[[n.bM,e.iSelectedUacs]]),L])]),S]),(0,n._)("div",O,[A,(0,n._)("div",U,[B,(0,n._)("div",I,[(0,n._)("select",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.aTaxClass,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.tcl_id},(0,n.zw)(e.tcl_desc),9,V)})),256))])])]),z,(0,n._)("button",{type:"button",class:"btn btn-lg btn-success pull-right",style:{"margin-right":"9%"},onClick:e.processEntries},[G,(0,n.Uk)(" Save Entry ")],8,q)])])])])])])}],["__scopeId","data-v-63eff87c"]])}}]);