(this.webpackJsonpspiceblue=this.webpackJsonpspiceblue||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),i=a.n(c),r=(a(39),a(40),a(41),a(5)),l=a(13);var o=function(e,t){return{type:e,payload:t}},d="handleEditing",u="handleDescription",j="handleDate",h="handleTime",p="handleCancle",b="handleSubmit",m="handleEdit",O="handleDone",g="handleDelete",f="handleEmail",x="handlePassword",v="handleLoginData",k="handleUserData",_="handleTaskData",D="handleTeamData",y="handleUser",N="handleLogout",S="updateToken",w=a(2);var E=Object(l.b)((function(e){return{token:e.token}}),(function(e){return{handleLogout:function(){return localStorage.removeItem("auth_token_jeeva"),e(o(N,null))},updateToken:function(t){return e(o(S,t))}}}))((function(e){var t=e.token,a=e.handleLogout,n=e.updateToken,s=Object(r.g)();return JSON.parse(localStorage.getItem("auth_token_jeeva"))&&!t&&n(JSON.parse(localStorage.getItem("auth_token_jeeva"))),JSON.parse(localStorage.getItem("auth_token_jeeva"))?Object(w.jsxs)("div",{className:"layout",children:[Object(w.jsx)("div",{className:"sidebar"}),Object(w.jsxs)("div",{className:"right_container",children:[Object(w.jsx)("div",{className:"topbar",children:Object(w.jsx)("button",{onClick:a,children:"Log Out"})}),Object(w.jsx)("div",{className:"content",children:e.children})]})]}):(s.push("/spiceblue/login"),Object(w.jsx)(w.Fragment,{}))})),T=a(6),C=a.n(T),L=a(12),U=(a(49),a(50),a(18)),F=a(14),I=a.n(F);function J(e,t){return P.apply(this,arguments)}function P(){return(P=Object(L.a)(C.a.mark((function e(t,a){var n,s,c,i,r=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.length>2&&void 0!==r[2]?r[2]:{},s=r.length>3&&void 0!==r[3]?r[3]:"",i={headers:{Authorization:"Bearer ".concat(t),Accept:"application/json","Content-Type":"application/json"}},"POST"!=a){e.next=7;break}return e.next=6,I.a.post("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",n,i).catch((function(e){return e}));case 6:c=e.sent;case 7:if("PUT"!=a){e.next=11;break}return e.next=10,I.a.put("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/".concat(s),n,i).catch((function(e){return e}));case 10:c=e.sent;case 11:if("GET"!=a){e.next=15;break}return e.next=14,I.a.get("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",i).catch((function(e){return e}));case 14:c=e.sent;case 15:if("DELETE"!=a){e.next=19;break}return e.next=18,I.a.delete("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/".concat(s),i).catch((function(e){return e}));case 18:c=e.sent;case 19:return e.abrupt("return",c.data);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return z.apply(this,arguments)}function z(){return(z=Object(L.a)(C.a.mark((function e(t,a){var n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{Authorization:"Bearer ".concat(t),Accept:"application/json","Content-Type":"application/json"}},e.next=3,I.a.get(a,s).catch((function(e){return e}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){var t=new Date;return{assigned_user:e.assignedUser,task_msg:e.description,task_date:e.date,task_time:e.time,is_completed:0,time_zone:-1*t.getTimezoneOffset()}}function B(e){var t=Math.floor(e/3600),a=e%3600/60;return t=t<10?"0".concat(t):t,a=a<10?"0".concat(a):a,"".concat(t,":").concat(a)}var G=Object(l.b)((function(e){return{isValid:e.isValid,description:e.description,date:e.date,time:e.time,teamData:e.teamData,assignedUser:e.assignedUser,idState:e.idState,isComplete:e.isComplete,taskList:e.taskList}}),(function(e){return{handleSubmit:function(t){return e(o(b,t))},handleDescription:function(t){return e(o(u,t.target.value))},handleDate:function(t){return e(o(j,t.target.value))},handleTime:function(t){var a=t.target.value,n=a.substr(0,2),s=a.substr(3,2),c=60*(60*parseInt(n)+parseInt(s));return e(o(h,c))},handleDelete:function(t){return e(o(g,t))},handleCancle:function(){return e(o(p,""))},handleUser:function(t){return e(o(y,t.target.value))}}}))((function(e){var t=e.handleSubmit,a=e.handleDescription,n=e.handleDate,s=e.handleTime,c=e.handleDelete,i=e.handleCancle,r=e.handleUser,l=e.isValid,o=e.description,d=e.date,u=e.time,j=e.teamData,h=e.assignedUser,p=e.idState;function b(e){return m.apply(this,arguments)}function m(){return(m=Object(L.a)(C.a.mark((function a(n){var s,c,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),s=JSON.parse(localStorage.getItem("auth_token_jeeva")),c=A(e),e.idState){a.next=8;break}return a.next=6,J(s,"POST",c).catch((function(e){return console.log(e)}));case 6:a.next=11;break;case 8:return c.is_completed=e.isComplete,a.next=11,J(s,"PUT",c,e.idState).catch((function(e){return console.log(e)}));case 11:return a.next=13,J(s,"GET").catch((function(e){return console.log(e)}));case 13:i=a.sent,t(i.results);case 15:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function O(){return(O=Object(L.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("auth_token_jeeva")),e.next=3,J(t,"DELETE",{},p).catch((function(e){return console.log(e)}));case 3:return e.next=5,J(t,"GET");case 5:a=e.sent,c(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsxs)("form",{className:"task_form",onSubmit:b,children:[Object(w.jsxs)("div",{className:"task_description",children:[Object(w.jsx)("label",{htmlFor:"description",children:"Task description"}),Object(w.jsx)("input",{type:"text",id:"description",onChange:a,value:o}),!l&&Object(w.jsx)("p",{style:{color:"red"},children:"Required"})]}),Object(w.jsxs)("div",{className:"date_time",children:[Object(w.jsxs)("div",{className:"date",children:[Object(w.jsx)("label",{htmlFor:"date",children:"Date"}),Object(w.jsx)("input",{id:"date",type:"date",onChange:n,value:d})]}),Object(w.jsxs)("div",{className:"time",children:[Object(w.jsx)("label",{htmlFor:"time",children:"Time"}),Object(w.jsx)("input",{id:"time",type:"time",onChange:s,value:B(u)})]})]}),Object(w.jsxs)("div",{className:"assign_user",children:[Object(w.jsx)("label",{children:"Assign User"}),Object(w.jsx)("select",{onChange:r,children:j.map((function(e){return Object(w.jsx)("option",{value:e.id,selected:e.id==h,children:e.name},e.id)}))})]}),Object(w.jsxs)("div",{className:"button_container",children:[Object(w.jsx)("button",{type:"button",className:"delete",onClick:function(){return O.apply(this,arguments)},children:Object(w.jsx)(U.c,{})}),Object(w.jsxs)("span",{className:"rignt_buttons",children:[Object(w.jsx)("button",{type:"button",className:"cancel",onClick:i,children:"Cancel"}),Object(w.jsx)("button",{type:"submit",className:"save",onClick:b,children:"Save"})]})]})]})})),M=a(33);a(69);var q=function(e){var t=e.data,a=e.icon,n=e.handleEdit,s=e.updateStatus,c=t.id,i=t.task_msg,r=t.task_date,l=t.task_time,o=t.is_completed;return Object(w.jsx)("li",{className:"item",children:Object(w.jsxs)("div",{className:"item_wrap",children:[Object(w.jsx)("div",{className:"item_profile",children:Object(w.jsx)("img",{src:a,height:"32px",width:"32px"})}),Object(w.jsxs)("div",{className:"item_detail",children:[Object(w.jsx)("div",{className:"item_title",children:Object(w.jsx)("span",{style:{color:o?"white":"black",backgroundColor:o?"green":"white"},children:i})}),Object(w.jsxs)("div",{className:"item_time",children:[Object(w.jsx)("span",{children:r}),l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{children:"at"}),Object(w.jsx)("span",{children:B(l)})]}):""]})]}),Object(w.jsxs)("div",{className:"item_editing",children:[Object(w.jsx)("button",{className:"edit",onClick:function(){return n(c)},children:Object(w.jsx)(U.b,{})}),Object(w.jsx)("button",{className:"check",onClick:function(){return s(c)},children:Object(w.jsx)(U.a,{})})]})]})})};var K=Object(l.b)((function(e){return{taskList:e.taskList,isEditing:e.isEditing,userData:e.userData}}),(function(e){return{handleEditing:function(){return e(o(d,""))},handleEdit:function(t){return e(o(m,t))},handleDone:function(t){return e(o(O,t))},handleUserData:function(t){return e(o(k,t))},handleTaskData:function(t){return e(o(_,t))},handleTeamData:function(t){return e(o(D,t))}}}))((function(e){var t=e.taskList,a=e.isEditing,s=e.userData,c=e.handleEditing,i=e.handleEdit,r=e.handleDone,l=e.handleUserData,o=e.handleTaskData,d=e.handleTeamData;function u(e){return j.apply(this,arguments)}function j(){return(j=Object(L.a)(C.a.mark((function e(a){var n,s,c,i,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("auth_token_jeeva")),s=t.find((function(e){return e.id==a})),c=new Date,i={assigned_user:s.assigned_user,task_msg:s.task_msg,task_date:s.task_date,task_time:s.task_time,is_completed:s.is_completed?0:1,time_zone:-1*c.getTimezoneOffset()},e.next=6,J(n,"PUT",i,a).catch((function(e){return console.log(e)}));case 6:return e.next=8,J(n,"GET").catch((function(e){return console.log(e)}));case 8:l=e.sent,console.log(a),r(l.results);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)(Object(L.a)(C.a.mark((function e(){var t,a,n,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(localStorage.getItem("auth_token_jeeva")))){e.next=14;break}return e.next=4,V(t,"https://stage.api.sloovi.com/user");case 4:return a=e.sent,e.next=7,J(t,"GET","https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38");case 7:return n=e.sent,e.next=10,V(t,"https://stage.api.sloovi.com/team");case 10:s=e.sent,l(a.results),o(n.results),d(s.results.data);case 14:case"end":return e.stop()}}),e)}))),[]),Object(w.jsxs)("div",{className:"task_container",children:[Object(w.jsx)("h1",{style:{paddingBottom:"10px"},children:null===s||void 0===s?void 0:s.name}),Object(w.jsxs)("div",{className:"task_header",children:[Object(w.jsx)("div",{className:"task",children:"TASKS ".concat(null===t||void 0===t?void 0:t.length)}),Object(w.jsx)("button",{className:"task_add",onClick:c,children:Object(w.jsx)(M.a,{size:"1.8em"})})]}),a?Object(w.jsx)(G,{}):Object(w.jsx)("ul",{children:(null===t||void 0===t?void 0:t.length)?t.map((function(e){return Object(w.jsx)(q,{data:e,icon:s.icon,handleEdit:i,updateStatus:u},e.id)})):""})]})}));a(70);var R="https://stage.api.sloovi.com/login",Y=null;var H=Object(l.b)((function(e){return{email:e.email,password:e.password,loginData:e.loginData}}),(function(e){return{handleEmail:function(t){return e(o(f,t.target.value))},handlePassword:function(t){return e(o(x,t.target.value))},handleLoginData:function(t){return e(o(v,t))}}}))((function(e){var t,a,n=e.email,s=e.password,c=e.loginData,i=e.handleEmail,l=e.handlePassword,o=e.handleLoginData,d=Object(r.g)();if(c&&(200==(Y=c.code)&&localStorage.setItem("auth_token_jeeva",JSON.stringify(c.results.token)),console.log(c)),JSON.parse(localStorage.getItem("auth_token_jeeva")))return d.push("/spiceblue/dashboard"),Object(w.jsx)(w.Fragment,{});function u(){return(u=Object(L.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,I.a.post(R,{email:n,password:s});case 3:return e.next=5,e.sent.data;case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"login",children:Object(w.jsx)("div",{children:Object(w.jsxs)("form",{className:"login_form",onSubmit:function(e){return u.apply(this,arguments)},children:[Object(w.jsx)("p",{className:"top_error_message",children:401==Y?c.message:""}),Object(w.jsxs)("div",{className:"login_form_control",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"text",id:"email",onChange:i,value:n,placeholder:"example@mail.com"}),Object(w.jsx)("p",{children:400==Y?null===(t=c.results.find((function(e){return"email"==e.key})))||void 0===t?void 0:t.msg:""})]}),Object(w.jsxs)("div",{className:"login_form_control",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{type:"text",id:"password",onChange:l,value:s,placeholder:"Minimum 8 Characters"}),Object(w.jsx)("p",{children:400==Y?null===(a=c.results.find((function(e){return"password"==e.key})))||void 0===a?void 0:a.msg:""})]}),Object(w.jsx)("div",{className:"login_button",children:Object(w.jsx)("button",{children:"Login"})})]})})})}));var Q=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(r.d,{children:[Object(w.jsx)(r.b,{exact:!0,path:"/spiceblue/login",children:Object(w.jsx)(H,{})}),Object(w.jsx)(r.b,{exact:!0,path:"/spiceblue/dashboard",children:Object(w.jsx)(E,{children:Object(w.jsx)(K,{})})}),Object(w.jsx)(r.a,{exact:!0,from:"/spiceblue",to:"/spiceblue/login"}),Object(w.jsx)(r.a,{exact:!0,from:"/",to:"/spiceblue/login"})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},X=a(34),Z=a(3),$={taskList:[],isEditing:!1,isValid:!0,idState:null,description:"Follow Up",assignedUser:null,date:"",time:0,email:"",password:"",loginData:null,userData:null,teamData:null,isComplete:0,token:null};var ee=function(){var e,t,a,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Object(Z.a)({},s);switch(c.type){case f:return Object(Z.a)(Object(Z.a)({},s),{},{email:c.payload});case x:return Object(Z.a)(Object(Z.a)({},s),{},{password:c.payload});case v:return Object(Z.a)(Object(Z.a)({},s),{},{loginData:c.payload});case k:return Object(Z.a)(Object(Z.a)({},s),{},{userData:c.payload});case _:return Object(Z.a)(Object(Z.a)({},s),{},{taskList:c.payload});case D:return Object(Z.a)(Object(Z.a)({},s),{},{teamData:c.payload,assignedUser:c.payload[0].id});case d:return s.isEditing||(a=[(t=new Date).getFullYear(),t.getMonth()+1,t.getDate()],n="".concat(a[0],"-").concat(a[1]<10?0:"").concat(a[1],"-").concat(a[2]<10?0:"").concat(a[2]),i.description="Follow Up",i.date=n,i.time="",i.isValid=!0,i.idState=null,i.assignedUser=i.teamData[0].id),i.isEditing=!i.isEditing,Object(Z.a)({},i);case u:return Object(Z.a)(Object(Z.a)({},s),{},{description:c.payload});case j:return Object(Z.a)(Object(Z.a)({},s),{},{date:c.payload});case h:return Object(Z.a)(Object(Z.a)({},s),{},{time:c.payload});case y:return Object(Z.a)(Object(Z.a)({},s),{},{assignedUser:c.payload});case p:return Object(Z.a)(Object(Z.a)({},s),{},{isEditing:!1,isValid:!0,idState:null});case b:return i.description&&i.description.trim()?(i.taskList=c.payload,i.isEditing=!1,i.isValid=!0,Object(Z.a)({},i)):Object(Z.a)(Object(Z.a)({},s),{},{isValid:!1});case m:return e=i.taskList.find((function(e){return e.id==c.payload})),i.idState=c.payload,i.description=e.task_msg,i.date=e.task_date,i.time=e.task_time,i.assignedUser=e.assigned_user,i.isComplete=e.is_completed,i.isEditing=!0,Object(Z.a)({},i);case O:return Object(Z.a)(Object(Z.a)({},i),{},{taskList:c.payload});case g:return Object(Z.a)(Object(Z.a)({},i),{},{taskList:c.payload,idState:null,isEditing:!1});case N:return Object(Z.a)(Object(Z.a)({},i),{},{loginData:c.payload,email:"",password:"",token:null});case S:return Object(Z.a)(Object(Z.a)({},i),{},{token:c.payload,loginData:null});default:return s}},te=Object(X.a)(ee),ae=a(16);i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(ae.a,{children:Object(w.jsx)(l.a,{store:te,children:Object(w.jsx)(Q,{})})})}),document.getElementById("root")),W()}},[[71,1,2]]]);
//# sourceMappingURL=main.39544e4f.chunk.js.map