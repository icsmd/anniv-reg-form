"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[411],{3574:(n,e,t)=>{t.d(e,{Z:()=>i});var s=t(3645),a=t.n(s)()((function(n){return n[1]}));a.push([n.id,".center[data-v-16432854]{border:5px solid;margin:auto;position:absolute;width:40%}",""]);const i=a},8411:(n,e,t)=>{t.r(e),t.d(e,{default:()=>I});var s=t(821),a=function(n){return(0,s.dD)("data-v-16432854"),n=n(),(0,s.Cn)(),n},i={class:"external-page external-alt sb-l-c sb-r-c"},o={id:"main",class:"animated fadeIn center"},r={id:"content_wrapper"},l={id:"content"},c={class:"admin-form theme-info mw500",id:"login"},d=a((function(){return(0,s._)("div",{class:"row table-layout",style:{"text-align":"center","font-size":"40px"}}," Registration Form Management ",-1)})),u={class:"panel mt30 mb25"},f={class:"panel-body bg-light p25 pb15"},m={class:"section"},p=a((function(){return(0,s._)("label",{for:"username",class:"field-label text-muted fs18 mb10"},"Username",-1)})),b={for:"username",class:"field prepend-icon"},_=a((function(){return(0,s._)("label",{for:"username",class:"field-icon"},[(0,s._)("i",{class:"fa fa-user"})],-1)})),h={class:"section"},w=a((function(){return(0,s._)("label",{for:"username",class:"field-label text-muted fs18 mb10"},"Password",-1)})),g={for:"password",class:"field prepend-icon"},v=a((function(){return(0,s._)("label",{for:"password",class:"field-icon"},[(0,s._)("i",{class:"fa fa-lock"})],-1)})),k={class:"panel-footer clearfix"},y=["onclick"],x=a((function(){return(0,s._)("i",{class:"fa fa-sign-in"},null,-1)})),U=a((function(){return(0,s._)("div",{class:"login-links"},[(0,s._)("p")],-1)}));var Z=t(860),P=t(475);const E={mixins:[Z.Z,P.Z],data:function(){return{sUsername:"",sPassword:""}},created:function(){document.title="RFM Admin"},mounted:function(){this.$root.clearLocalStorage(),this.initializeActions()},methods:{initializeActions:function(){var n=this;document.body.addEventListener("keydown",(function(e){"Enter"===e.key&&n.login()}))},login:function(){var n=this,e={username:btoa(this.sUsername),password:btoa(this.sPassword)};this.postRequest("auth/log-in",e,(function(e){n.$root.setLocalStorageValue("amho",btoa(e.data.amho)),window.location.href=e.data.href}))}}};var L=t(3379),z=t.n(L),A=t(3574),C={insert:"head",singleton:!1};z()(A.Z,C);A.Z.locals;const I=(0,t(3744).Z)(E,[["render",function(n,e,t,a,Z,P){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",o,[(0,s._)("section",r,[(0,s._)("section",l,[(0,s._)("div",c,[d,(0,s._)("div",u,[(0,s._)("div",f,[(0,s._)("div",m,[p,(0,s._)("label",b,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(n){return Z.sUsername=n}),type:"text",name:"username",id:"username",class:"gui-input",placeholder:"Enter username"},null,512),[[s.nr,Z.sUsername]]),_])]),(0,s._)("div",h,[w,(0,s._)("label",g,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(n){return Z.sPassword=n}),type:"password",name:"password",id:"password",class:"gui-input",placeholder:"Enter password"},null,512),[[s.nr,Z.sPassword]]),v])])]),(0,s._)("div",k,[(0,s._)("button",{class:"button btn-primary mr10 pull-right",onclick:P.login},[x,(0,s.Uk)(" Log In ")],8,y)])]),U])])])])])}],["__scopeId","data-v-16432854"]])}}]);