import{d as k,s as v,l as $,m as y,a as w,i as z,r as i,o as C,c as S,b as t,w as l,e as u,F as _,f as V,g as j,h as I,j as L,k as K,n as O,p as q,q as U,t as E,u as J,v as T,x as M,I as R,y as W}from"./vendor.b12144e7.js";const G=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function f(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function g(n){if(n.ep)return;n.ep=!0;const c=f(n);fetch(n.href,c)}};G();var D=(e,o)=>{const f=e.__vccOpts||e;for(const[g,n]of o)f[g]=n;return f};const Y=k({name:"InitView",components:{CRow:v,CCard:$,CInput:y,CButton:w,CModal:z},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0},sdkFetched:{type:Boolean,required:!0}},emits:["update:modelValue","init","set-default-tracker"],data(){return{openConfigsModal:!1}},computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{onSetDefaultTracker(){this.$emit("set-default-tracker")},onWipeStorage(){localStorage.clear()},onReload(){window.location.reload()},onInit(){this.$emit("init")}}}),H=u("div",null,[u("h4",{class:"title"}," Init SDK ")],-1),Q=V(" Set default tracker "),X=u("hr",null,null,-1),Z={class:"init_form"},x=V(" Initialize "),ee=V(" Wipe Storage "),oe=V(" Reload "),te=V(" Close ");function ie(e,o,f,g,n,c){const d=i("c-button"),p=i("c-row"),r=i("c-input"),b=i("c-card"),s=i("c-modal");return C(),S(_,null,[t(b,{class:"mb-4"},{default:l(()=>[t(p,{justify:"between"},{default:l(()=>[H,t(d,{icon:"setting","icon-only":"",variant:"primary",onClick:o[0]||(o[0]=a=>e.openConfigsModal=!0)})]),_:1}),u("section",null,[t(r,{modelValue:e.model.initData.defaultTracker,"onUpdate:modelValue":o[1]||(o[1]=a=>e.model.initData.defaultTracker=a),disabled:e.initialized||!e.sdkFetched,label:"Default Tracker",class:"mb-4",fluid:"",autofocus:""},null,8,["modelValue","disabled"]),t(d,{disabled:e.initialized||!e.sdkFetched,block:"",onClick:e.onSetDefaultTracker},{default:l(()=>[Q]),_:1},8,["disabled","onClick"])]),X,u("form",Z,[t(r,{modelValue:e.model.initData.clientId,"onUpdate:modelValue":o[2]||(o[2]=a=>e.model.initData.clientId=a),disabled:e.initialized||!e.sdkFetched,placeholder:"clientId",label:"Client ID",helper:"required",class:"mb-4",fluid:"",autofocus:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.initData.clientSecret,"onUpdate:modelValue":o[3]||(o[3]=a=>e.model.initData.clientSecret=a),disabled:e.initialized||!e.sdkFetched,placeholder:"clientSecret",label:"Client Secret",helper:"required",class:"mb-4",fluid:"",autofocus:""},null,8,["modelValue","disabled"]),t(d,{disabled:e.initialized||!e.sdkFetched,class:"mb-4",variant:"primary",block:"",onClick:e.onInit},{default:l(()=>[x]),_:1},8,["disabled","onClick"])]),t(d,{variant:"danger",block:"",onClick:e.onWipeStorage},{default:l(()=>[ee]),_:1},8,["onClick"])]),_:1}),t(s,{modelValue:e.openConfigsModal,"onUpdate:modelValue":o[6]||(o[6]=a=>e.openConfigsModal=a),title:"Configs"},{footer:l(()=>[t(p,{justify:"end"},{default:l(()=>[t(d,{variant:"warning",onClick:o[5]||(o[5]=a=>e.openConfigsModal=!1)},{default:l(()=>[te]),_:1})]),_:1})]),default:l(()=>[t(p,{wrap:"nowrap","align-items":"end"},{default:l(()=>[t(r,{modelValue:e.model.configs.cdn,"onUpdate:modelValue":o[4]||(o[4]=a=>e.model.configs.cdn=a),label:"SDK CDN URL",fluid:""},null,8,["modelValue"]),t(d,{variant:"success",class:"ml-4 mb-1",onClick:e.onReload},{default:l(()=>[oe]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue"])],64)}var le=D(Y,[["render",ie]]);const ae=k({name:"ProfileView",components:{CRow:v,CButton:w,CInput:y,CSelect:j,CCard:$},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","profile"],data(){return{genderOptions:[{title:"Male",value:"male"},{title:"Female",value:"female"}]}},computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{profile(){this.$emit("profile")}}}),ne=u("h4",{class:"title"}," Profile ",-1),de=V(" Send ");function se(e,o,f,g,n,c){const d=i("c-row"),p=i("c-select"),r=i("c-input"),b=i("c-button"),s=i("c-card");return C(),I(s,{class:"mb-4"},{default:l(()=>[t(d,null,{default:l(()=>[ne]),_:1}),u("form",null,[t(p,{modelValue:e.model.profileData.gender,"onUpdate:modelValue":o[0]||(o[0]=a=>e.model.profileData.gender=a),options:e.genderOptions,disabled:!e.initialized,label:"Gender",class:"mb-2",inline:"",fluid:""},null,8,["modelValue","options","disabled"]),t(r,{modelValue:e.model.profileData.email,"onUpdate:modelValue":o[1]||(o[1]=a=>e.model.profileData.email=a),disabled:!e.initialized,placeholder:"Email",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.profileData.phoneNumber,"onUpdate:modelValue":o[2]||(o[2]=a=>e.model.profileData.phoneNumber=a),placeholder:"Phone number",disabled:!e.initialized,type:"number",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.profileData.timezone,"onUpdate:modelValue":o[3]||(o[3]=a=>e.model.profileData.timezone=a),disabled:!e.initialized,placeholder:"Timezone",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.profileData.name,"onUpdate:modelValue":o[4]||(o[4]=a=>e.model.profileData.name=a),disabled:!e.initialized,placeholder:"Name",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.profileData.family,"onUpdate:modelValue":o[5]||(o[5]=a=>e.model.profileData.family=a),disabled:!e.initialized,placeholder:"family",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.profileData.birthDate,"onUpdate:modelValue":o[6]||(o[6]=a=>e.model.profileData.birthDate=a),disabled:!e.initialized,placeholder:"Name",class:"mb-4",type:"date",fluid:""},null,8,["modelValue","disabled"]),t(b,{disabled:!e.initialized,variant:"primary",block:"",onClick:e.profile},{default:l(()=>[de]),_:1},8,["disabled","onClick"])])]),_:1})}var re=D(ae,[["render",se]]);const ue=k({name:"LocationView",components:{CRow:v,CCard:$,CInput:y,CButton:w},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","location"],computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},checkLocation(){const{lat:e,lan:o}=this.model.locationData;return!e||!o}},methods:{onSendLocation(){this.$emit("location")}}}),me=u("h4",{class:"title"}," Update Location ",-1),pe=V(" Send ");function ce(e,o,f,g,n,c){const d=i("c-row"),p=i("c-input"),r=i("c-button"),b=i("c-card");return C(),I(b,null,{default:l(()=>[t(d,null,{default:l(()=>[me]),_:1}),u("form",null,[t(p,{modelValue:e.model.locationData.lat,"onUpdate:modelValue":o[0]||(o[0]=s=>e.model.locationData.lat=s),disabled:!e.initialized,type:"number",placeholder:"Latitude",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(p,{modelValue:e.model.locationData.lan,"onUpdate:modelValue":o[1]||(o[1]=s=>e.model.locationData.lan=s),disabled:!e.initialized,type:"number",placeholder:"Longitude",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{disabled:e.checkLocation,variant:"primary",block:"",onClick:e.onSendLocation},{default:l(()=>[pe]),_:1},8,["disabled","onClick"])])]),_:1})}var fe=D(ue,[["render",ce]]);const be=k({name:"UserAttributeView",components:{CRow:v,CCard:$,CInput:y,CButton:w},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","attribute"],computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},disableSubmit(){const{key:e,value:o}=this.model.userAttrData;return!e||!o}},methods:{onSendAttribute(){this.$emit("attribute")}}}),he=u("h4",{class:"title"}," User Attribute ",-1),ge=V(" Send ");function Ve(e,o,f,g,n,c){const d=i("c-row"),p=i("c-input"),r=i("c-button"),b=i("c-card");return C(),I(b,null,{default:l(()=>[t(d,null,{default:l(()=>[he]),_:1}),u("form",null,[t(p,{modelValue:e.model.userAttrData.key,"onUpdate:modelValue":o[0]||(o[0]=s=>e.model.userAttrData.key=s),disabled:!e.initialized,placeholder:"Key",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(p,{modelValue:e.model.userAttrData.value,"onUpdate:modelValue":o[1]||(o[1]=s=>e.model.userAttrData.value=s),disabled:!e.initialized,placeholder:"Value",class:"mb-4",fluid:""},null,8,["modelValue","disabled"]),t(r,{disabled:e.disableSubmit,variant:"primary",block:"",onClick:e.onSendAttribute},{default:l(()=>[ge]),_:1},8,["disabled","onClick"])])]),_:1})}var Ce=D(be,[["render",Ve]]);function F(e,o=20){let f;return(...n)=>{clearTimeout(f),f=setTimeout(()=>e(...n),o)}}const ke=k({name:"EventView",components:{CRow:v,CInput:y,CButton:w,CCard:$,CTextarea:L},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","event"],data(){return{isValidJson:!0}},computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},disableSubmit(){return!this.model.eventData.id||!this.modelValue.eventData.body||!this.isValidJson}},created(){this.debouncedJSONCheck=F(this.debouncedJSONCheck,1e3)},methods:{debouncedJSONCheck(){try{JSON.parse(this.model.eventData.body)?this.isValidJson=!0:this.isValidJson=!1}catch{this.isValidJson=!1}},event(){this.$emit("event")}}}),ve=u("h4",{class:"title"}," Events ",-1),De={class:"mb-4"},$e=V(" Send ");function ye(e,o,f,g,n,c){const d=i("c-row"),p=i("c-input"),r=i("c-textarea"),b=i("c-button"),s=i("c-card");return C(),I(s,{class:"mb-4"},{default:l(()=>[t(d,null,{default:l(()=>[ve]),_:1}),u("form",null,[u("div",De,[t(p,{modelValue:e.model.eventData.id,"onUpdate:modelValue":o[0]||(o[0]=a=>e.model.eventData.id=a),disabled:!e.initialized,label:"Event ID",class:"mb-4",fluid:"",autofocus:""},null,8,["modelValue","disabled"]),t(r,{modelValue:e.model.eventData.body,"onUpdate:modelValue":[o[1]||(o[1]=a=>e.model.eventData.body=a),e.debouncedJSONCheck],disabled:!e.initialized,label:"Event Body",class:"mb-4",error:!e.isValidJson,fluid:"",helper:e.isValidJson?"":"JSON input is not valid"},null,8,["modelValue","disabled","error","helper","onUpdate:modelValue"])]),t(b,{disabled:e.disableSubmit,variant:"primary",block:"",onClick:e.event},{default:l(()=>[$e]),_:1},8,["disabled","onClick"])])]),_:1})}var we=D(ke,[["render",ye]]);const Se=k({name:"LoginView",components:{CRow:v,CInput:y,CButton:w,CCard:$},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","login","logout"],data(){return{loggedIn:!1}},computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},disableLogin(){return!this.model.login.userId},disableLogout(){return!this.initialized}},methods:{onLogin(){this.$emit("login")},onLogout(){this.$emit("logout")}}}),Ie=u("h4",{class:"title"}," Login/Logout ",-1),_e={class:"mb-4"},ze=V(" Login "),Le=V(" Logout ");function Ue(e,o,f,g,n,c){const d=i("c-row"),p=i("c-input"),r=i("c-button"),b=i("c-card");return C(),I(b,{class:"mb-4"},{default:l(()=>[t(d,null,{default:l(()=>[Ie]),_:1}),u("form",null,[u("div",_e,[t(p,{modelValue:e.model.login.userId,"onUpdate:modelValue":o[0]||(o[0]=s=>e.model.login.userId=s),disabled:!e.initialized,label:"User ID",class:"mb-4",fluid:"",autofocus:""},null,8,["modelValue","disabled"])]),t(r,{disabled:e.disableLogin,variant:"primary",class:"mb-2",block:"",onClick:e.onLogin},{default:l(()=>[ze]),_:1},8,["disabled","onClick"]),t(r,{disabled:e.disableLogout,variant:"danger",block:"",onClick:e.onLogout},{default:l(()=>[Le]),_:1},8,["disabled","onClick"])])]),_:1})}var Te=D(Se,[["render",Ue]]);const Fe=k({name:"PushNotificationsView",components:{CTextarea:L,CCard:$,CInput:y,CButton:w,CModal:z,CRow:v},props:{modelValue:{type:Object,required:!0},initialized:{type:Boolean,required:!0}},emits:["update:modelValue","push-id"],data(){return{openFirebaseConfigModal:!1,pushToken:""}},computed:{model:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},canInitializeFirebase(){return Object.keys(this.model.firebaseConfigs).every(o=>this.model.firebaseConfigs[o])}},methods:{onGetToken(){const e={apiKey:this.model.firebaseConfigs.apiKey,authDomain:this.model.firebaseConfigs.authDomain,projectId:this.model.firebaseConfigs.projectId,storageBucket:this.model.firebaseConfigs.storageBucket,messagingSenderId:this.model.firebaseConfigs.messagingSenderId,appId:this.model.firebaseConfigs.appId};K(e);const o=O(),f=this;q(o,{vapidKey:f.model.firebaseConfigs.vapid}).then(g=>{g?f.pushToken=g:this.$toast.warning("No registration token available. Request permission to generate one.")}).catch(()=>{this.$toast.danger("An error occurred while retrieving token.")})},async onSendPushToken(){this.$emit("push-id",this.pushToken)}}}),Ne=u("h4",null," Push Notification ",-1),Ae=V(" Get Push Token "),Be={key:0},Pe=V(" Send push token "),je=V(" Close ");function Ke(e,o,f,g,n,c){const d=i("c-button"),p=i("c-row"),r=i("c-textarea"),b=i("c-card"),s=i("c-input"),a=i("c-modal");return C(),S(_,null,[t(b,null,{default:l(()=>[t(p,{justify:"between",class:"mb-4"},{default:l(()=>[Ne,t(d,{icon:"setting","icon-only":"",variant:"warning",onClick:o[0]||(o[0]=m=>e.openFirebaseConfigModal=!0)})]),_:1}),t(d,{disabled:!e.initialized||!e.canInitializeFirebase,variant:"primary",class:"mb-4",block:"",onClick:e.onGetToken},{default:l(()=>[Ae]),_:1},8,["disabled","onClick"]),e.pushToken?(C(),S("div",Be,[t(r,{modelValue:e.pushToken,"onUpdate:modelValue":o[1]||(o[1]=m=>e.pushToken=m),label:"Your Push Token:",class:"mb-4","read-only":"",fluid:""},null,8,["modelValue"]),t(d,{variant:"primary",block:"",onClick:e.onSendPushToken},{default:l(()=>[Pe]),_:1},8,["onClick"])])):U("",!0)]),_:1}),t(a,{modelValue:e.openFirebaseConfigModal,"onUpdate:modelValue":o[10]||(o[10]=m=>e.openFirebaseConfigModal=m),title:"Firebase Configurations"},{footer:l(()=>[t(p,{justify:"end"},{default:l(()=>[t(d,{variant:"warning",class:"px-5",onClick:o[9]||(o[9]=m=>e.openFirebaseConfigModal=!1)},{default:l(()=>[je]),_:1})]),_:1})]),default:l(()=>[t(s,{modelValue:e.model.firebaseConfigs.apiKey,"onUpdate:modelValue":o[2]||(o[2]=m=>e.model.firebaseConfigs.apiKey=m),label:"API Key",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.authDomain,"onUpdate:modelValue":o[3]||(o[3]=m=>e.model.firebaseConfigs.authDomain=m),label:"Auth Domain",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.projectId,"onUpdate:modelValue":o[4]||(o[4]=m=>e.model.firebaseConfigs.projectId=m),label:"Project ID",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.storageBucket,"onUpdate:modelValue":o[5]||(o[5]=m=>e.model.firebaseConfigs.storageBucket=m),label:"Storage Bucket",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.messagingSenderId,"onUpdate:modelValue":o[6]||(o[6]=m=>e.model.firebaseConfigs.messagingSenderId=m),label:"Messaging Sender ID",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.appId,"onUpdate:modelValue":o[7]||(o[7]=m=>e.model.firebaseConfigs.appId=m),label:"App ID",class:"mb-4",fluid:""},null,8,["modelValue"]),t(s,{modelValue:e.model.firebaseConfigs.vapid,"onUpdate:modelValue":o[8]||(o[8]=m=>e.model.firebaseConfigs.vapid=m),label:"VAPID",class:"mb-4",fluid:""},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)}var Oe=D(Fe,[["render",Ke]]);const qe=k({name:"App",components:{InitView:le,ProfileView:re,LocationView:fe,UserAttributeView:Ce,EventView:we,LoginView:Te,PushNotificationsView:Oe,CRow:v,CCol:E},data(){const e=localStorage.getItem("sdk_demo")?JSON.parse(localStorage.getItem("sdk_demo")):{initData:{clientId:"",clientSecret:""},firebaseConfigs:{apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",vapid:""},configs:{cdn:""}};return{model:{initData:{clientId:e?e.initData.clientId:"",clientSecret:e?e.initData.clientSecret:"",defaultTracker:""},profileData:{email:"",gender:"",phoneNumber:"",timezone:"-210",birthDate:"",name:"",family:""},locationData:{lat:0,lan:0},userAttrData:{key:"",value:""},eventData:{id:"",body:""},login:{userId:""},firebaseConfigs:{apiKey:e.firebaseConfigs?e.firebaseConfigs.apiKey:"",authDomain:e.firebaseConfigs?e.firebaseConfigs.authDomain:"",projectId:e.firebaseConfigs?e.firebaseConfigs.projectId:"",storageBucket:e.firebaseConfigs?e.firebaseConfigs.storageBucket:"",messagingSenderId:e.firebaseConfigs?e.firebaseConfigs.messagingSenderId:"",appId:e.firebaseConfigs?e.firebaseConfigs.appId:"",vapid:e.firebaseConfigs?e.firebaseConfigs.vapid:""},configs:{cdn:e.configs?e.configs.cdn:"https://cdn.chabok.io/chabok.iife.js"}},now:Date.now(),initialized:!1,sdk:null}},computed:{sdkFetched(){return!!this.sdk},getLogs(){let e={};return this.sdkFetched&&(this.now,e=this.sdk.getLogger()),e}},watch:{"model.initData":{handler(){this.debouncedWriteToStorage()},deep:!0},"model.firebaseConfigs":{handler(){this.debouncedWriteToStorage()},deep:!0},"model.configs":{handler(){this.debouncedWriteToStorage()},deep:!0}},created(){this.debouncedWriteToStorage=F(this.debouncedWriteToStorage,500),setInterval(()=>{this.now=Date.now()},1e3),this.loadScript()},methods:{loadScript(){if(this.model.configs.cdn){const{head:e}=document,o=document.createElement("script");o.type="text/javascript",o.src=this.model.configs.cdn,o.onload=this.onFetchSDK,o.onerror=this.inFetchSDKError,e.appendChild(o);return}this.$toast.warning("No valid CDN found. add a new url to fetch the SDK and reload the page.")},debouncedWriteToStorage(){window.localStorage.setItem("sdk_demo",JSON.stringify(this.model))},onFetchSDK(){try{const{chabok:e}=window;let o;e.isInitialized||(o=new e,o.setLogger({logLevel:"verbose",enable:!0,buffersSize:100})),this.sdk=o}catch{this.onFetchSDK()}},inFetchSDKError(){this.$toast.danger("Failed to load the SDK's script. check the CDN URL and try again.")},setDefaultTracker(){!this.initialized&&this.sdkFetched&&this.sdk.setDefaultTracker(this.model.initData.defaultTracker)},init(){this.sdk.init(this.model.initData.clientId,this.model.initData.clientSecret).then(e=>{if(e){this.$toast.success("SDK initialized!"),this.initialized=!0;return}this.$toast.danger("SDK not initialized. check your credentials and try again.")}).catch(e=>{this.$toast.danger("Failed to initialize the SDK. Check the browser's console for more info"),console.log(e)})},login(){this.sdk.user().login(this.model.login.userId).then(()=>{this.$toast.success("Logged in successfully!")})},logout(){this.sdk.user().logout(this.model.login.userId)},attribute(){this.sdk.user().setAttribute(this.model.userAttrData.key,this.model.userAttrData.value).then(e=>{if(e)this.$toast.success("Attribute sent successfully.");else throw new Error}).catch(()=>{this.$toast.danger("Failed to set Attribute.")})},profile(){const e=this.model.profileData.gender==="male"?1:0;this.sdk.user().setProfile({sexBinary:e,email:this.model.profileData.email,phoneNumber:this.model.profileData.phoneNumber,timezone:this.model.profileData.timezone,name:this.model.profileData.name,family:this.model.profileData.family,birthDate:this.model.profileData.birthDate}).then(o=>{o?this.$toast.success("Profile updated!"):this.$toast.danger("Failed to update profile!")})},location(){this.sdk.user().setLocation(Number(this.model.locationData.lat),Number(this.model.locationData.lan)).then(e=>{e?this.$toast.success("Location updated!"):this.$toast.danger("Failed to update location!")})},event(){this.sdk.analytics().sendEvent(this.model.eventData.id,JSON.parse(this.model.eventData.body)).then(e=>{if(e)this.$toast.success("Event sent successfully.");else throw new Error}).catch(()=>{this.$toast.danger("Failed to send event. check the payload and try again")})},pushId(e){this.sdk.user().setPushId(e).then(o=>{if(o)this.$toast.success("Push Token Sent");else throw new Error}).catch(()=>{this.$toast.danger("Failed to update push token.")})}}}),Ee={class:"logger-container"},Je=u("span",{class:"logger-title"}," === Chabok SDK Logger === ",-1),Me={key:0,class:"logger-detail"},Re={class:"logger-time"},We=u("div",{style:{clear:"both"}},null,-1);function Ge(e,o,f,g,n,c){const d=i("init-view"),p=i("login-view"),r=i("user-attribute-view"),b=i("c-col"),s=i("profile-view"),a=i("location-view"),m=i("event-view"),A=i("push-notifications-view"),B=i("c-row");return C(),S(_,null,[t(B,{class:"main -m-2"},{default:l(()=>[t(b,{xs:"12",md:"6",xxl:"3",class:"p-2"},{default:l(()=>[t(d,{modelValue:e.model,"onUpdate:modelValue":o[0]||(o[0]=h=>e.model=h),initialized:e.initialized,"sdk-fetched":e.sdkFetched,onInit:e.init,onSetDefaultTracker:e.setDefaultTracker},null,8,["modelValue","initialized","sdk-fetched","onInit","onSetDefaultTracker"]),t(p,{modelValue:e.model,"onUpdate:modelValue":o[1]||(o[1]=h=>e.model=h),initialized:e.initialized,onLogin:e.login,onLogout:e.logout},null,8,["modelValue","initialized","onLogin","onLogout"]),t(r,{modelValue:e.model,"onUpdate:modelValue":o[2]||(o[2]=h=>e.model=h),initialized:e.initialized,onAttribute:e.attribute},null,8,["modelValue","initialized","onAttribute"])]),_:1}),t(b,{xs:"12",md:"6",xxl:"3",class:"p-2"},{default:l(()=>[t(s,{modelValue:e.model,"onUpdate:modelValue":o[3]||(o[3]=h=>e.model=h),initialized:e.initialized,onProfile:e.profile},null,8,["modelValue","initialized","onProfile"]),t(a,{modelValue:e.model,"onUpdate:modelValue":o[4]||(o[4]=h=>e.model=h),initialized:e.initialized,onLocation:e.location},null,8,["modelValue","initialized","onLocation"])]),_:1}),t(b,{xs:"12",lg:"auto",class:"p-2"},{default:l(()=>[t(m,{modelValue:e.model,"onUpdate:modelValue":o[5]||(o[5]=h=>e.model=h),initialized:e.initialized,onEvent:e.event},null,8,["modelValue","initialized","onEvent"]),t(A,{modelValue:e.model,"onUpdate:modelValue":o[6]||(o[6]=h=>e.model=h),initialized:e.initialized,onPushId:e.pushId},null,8,["modelValue","initialized","onPushId"])]),_:1})]),_:1}),u("div",Ee,[Je,e.sdkFetched?(C(),S("div",Me,[(C(!0),S(_,null,J(e.getLogs,(h,P)=>(C(),S("div",{key:P},[u("div",Re,T(h.time),1),u("div",{style:M(`word-wrap: break-word; color: ${h.color}`)},T(h.message),5),We]))),128))])):U("",!0)])],64)}var Ye=D(qe,[["render",Ge]]);const He={install(e){e.use(R)}};const N=W(Ye);N.use(He);N.mount("#app");
