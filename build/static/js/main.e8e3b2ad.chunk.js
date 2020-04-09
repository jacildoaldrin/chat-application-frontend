(this["webpackJsonpchat-application"]=this["webpackJsonpchat-application"]||[]).push([[0],{123:function(e,t,a){e.exports=a(249)},128:function(e,t,a){},145:function(e,t,a){},184:function(e,t){},187:function(e,t,a){},188:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},245:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a.n(r),l=a(12),c=a.n(l),s=(a(128),a(10)),m=a(29),i=a(9),u=a(13),d=a.n(u),E=(a(145),function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),c=Object(i.a)(l,2),m=c[0],u=c[1],E=Object(r.useState)(Boolean),h=Object(i.a)(E,2),p=h[0],f=h[1];return Object(r.useEffect)((function(){d.a.post("".concat("https://chat-application-backend.herokuapp.com","/user/login"),{username:a,password:m},{headers:{"Content-Type":"application/json"}}).then((function(e){f(null!=e.data[0])}))}),[a,m]),o.a.createElement("section",{id:"loginCover",className:"min-vh-100"},o.a.createElement("div",{id:"cover-caption"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row text-white"},o.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4"},o.a.createElement("div",{className:"formContainer"},o.a.createElement("h1",{className:"display-4 py-2"},"Admin Login"),o.a.createElement("div",null,o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("form",{className:"form-group"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Username",onChange:function(e){return n(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)},required:!0})),o.a.createElement(s.b,{onClick:function(e){return p?null:e.preventDefault()},to:"/admin"},o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg full-width"},"Submit"))),o.a.createElement(s.b,{to:"/"},o.a.createElement("strong",null,o.a.createElement("u",null,"back to main")))))))))))}),h=a(122),p=a(112),f=a.n(p),v=a(113),b=a.n(v),g=(a(187),a(188),function(e){var t=e.message,a=e.sendMessage,n=e.setMessage;return o.a.createElement("form",{id:"form",onSubmit:function(e){return t?a(e):e.preventDefault()}},o.a.createElement("input",{id:"input",type:"text",value:t,onChange:function(e){n(e.target.value)},placeholder:"Aa."}),o.a.createElement("button",{id:"sendButton",type:"submit"},o.a.createElement("i",{className:"material-icons",id:"send-icon"},"send")))}),w=a(47),y=a.n(w),N=(a(222),function(e){var t;switch(e.message.username){case e.username:t=o.a.createElement("div",null,o.a.createElement("strong",{className:"userMessage colorDark"},"You"),o.a.createElement("div",{className:"messageContainer justifyEnd"},o.a.createElement("div",{className:"messageBox-sender backgroundBlue"},o.a.createElement("p",{className:"messageText colorWhite"},e.message.message))));break;case"System":t=e.message.user===e.username?o.a.createElement("div",{className:"systemMessage"},o.a.createElement("p",{className:"messageText colorDark"},"You joined the room, ",e.message.roomname,".")):o.a.createElement("div",{className:"systemMessage"},o.a.createElement("p",{className:"messageText colorDark"},e.message.message));break;default:t=o.a.createElement("div",null,o.a.createElement("strong",{className:"chatMessage colorDark"},e.message.username),o.a.createElement("div",{className:"messageContainer justifyStart"},o.a.createElement("div",{className:"messageBox backgroundLight"},o.a.createElement("p",{className:"messageText colorDark"},e.message.message))))}return t}),j=(a(223),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{className:"messages"},e.messages.map((function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("div",null,o.a.createElement(N,{message:t,username:e.username})))}))))}),k=(a(224),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{className:"rooms-container"},e.rooms.map((function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("div",{onClick:function(a){return e.currentroom===t.roomname?a.preventDefault():e.switchRoom(a,t.roomname)}},e.currentroom===t.roomname?o.a.createElement("div",{className:"room-item room-selected"},o.a.createElement("i",{className:"material-icons enter-icon mr-5"},"input"),o.a.createElement("strong",null,t.roomname)):o.a.createElement("div",{className:"room-item"},o.a.createElement("i",{className:"material-icons enter-icon mr-5"},"input"),o.a.createElement("strong",null,t.roomname))))}))))}),S=function(e){return o.a.createElement("div",{className:"infoBar"},o.a.createElement("div",{className:"leftChatContainer"},o.a.createElement("h3",null,o.a.createElement("strong",null,"Welcome, ",e.username," !!!"))))},O=function(){return o.a.createElement("div",{className:"infoBar"},o.a.createElement("h3",{className:"centered"},o.a.createElement("strong",null,"Room List")))},D=function(e){var t=e.location,a=Object(r.useState)(""),l=Object(i.a)(a,2),c=l[0],s=l[1],m=Object(r.useState)(""),u=Object(i.a)(m,2),E=u[0],p=u[1],v=Object(r.useState)([]),w=Object(i.a)(v,2),y=w[0],N=w[1],D=Object(r.useState)(""),C=Object(i.a)(D,2),R=C[0],x=C[1],M=Object(r.useState)([]),T=Object(i.a)(M,2),Y=T[0],B=T[1];Object(r.useEffect)((function(){var e=f.a.parse(t.search).username;s(e),p("Default"),I(),(n=b()("https://chat-application-backend.herokuapp.com")).emit("new-user",{username:e,room:"Default"})}),[t.search]),Object(r.useEffect)((function(){n.on("new-room",(function(e){p(e)}))}),[E]),Object(r.useEffect)((function(){n.on("chat-message",(function(e){B((function(t){return[].concat(Object(h.a)(t),[e])}))}))}),[]);var I=function(){d.a.get("".concat("https://chat-application-backend.herokuapp.com","/room/room-list-active")).then((function(e){N(e.data)}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"outerContainer"},o.a.createElement("div",{className:"chatContainer"},o.a.createElement(S,{username:c,room:E}),o.a.createElement(j,{messages:Y,username:c}),o.a.createElement(g,{message:R,setMessage:x,sendMessage:function(e){e.preventDefault(),R&&(n.emit("send-message",R),x(""))}})),o.a.createElement("div",{className:"roomsContainer"},o.a.createElement("div",{className:"roomList"},o.a.createElement(O,null),o.a.createElement(k,{rooms:y,currentroom:E,username:c,switchRoom:function(e,t){e.preventDefault(),B([]),n.emit("leave-room",E),n.emit("join-room",t)}})))))},C=(a(225),function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement("section",{id:"cover",className:"min-vh-100"},o.a.createElement("div",{id:"cover-caption"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row text-white"},o.a.createElement("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4"},o.a.createElement("h1",{className:"display-4 py-1 text-truncate"},"Enter Username"),o.a.createElement("div",{className:"px-2"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement(s.b,{onClick:function(e){return a?null:e.preventDefault()},to:{pathname:"/chatroom",search:"?username=".concat(a)}},o.a.createElement("form",{className:"form-group",id:"join-form"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Username",onChange:function(e){return n(e.target.value)}})),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg full-width"},"Submit"))),o.a.createElement(s.b,{to:"/login"},o.a.createElement("strong",{style:{color:"white"}},o.a.createElement("u",null,"admin login"))))))))))}),R=a(24),x=a(25),M=a(26),T=a(27),Y=a(258),B=a(255),I=a(20),L=a.n(I),A=a(52),H=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).wrapper=o.a.createRef(),n.state={columns:[{label:"ID",field:"id",sort:"asc",width:150},{label:"Type",field:"type",sort:"asc",width:150},{label:"Date",field:"date",sort:"asc",width:150},{label:"Time",field:"time",sort:"asc",width:150},{label:"User",field:"user",sort:"asc",width:150},{label:"Room",field:"room",sort:"asc",width:150},{label:"Description",field:"description",sort:"asc",width:150}],rows:[]},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;d.a.get("https://chat-application-backend.herokuapp.com/event/event-history").then((function(t){e.setState({rows:t.data});var a=[];for(var n in e.state.rows){var r={id:e.state.rows[n]._id,type:e.state.rows[n].type,date:L()(new Date(e.state.rows[n].date)).format("MM/DD/YYYY"),time:L()(new Date(e.state.rows[n].date)).format("hh:mm:ss"),user:e.state.rows[n].user,room:e.state.rows[n].room,description:e.state.rows[n].description};a.push(r)}e.setState({rows:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"tableContainer"},o.a.createElement(A.c,{striped:!0,bordered:!0,small:!0,data:this.state,className:"mdb"}))}}]),a}(o.a.Component),F=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).wrapper=o.a.createRef(),n.state={columns:[{label:"ID",field:"id",sort:"asc",width:150},{label:"Date",field:"date",sort:"asc",width:150},{label:"Time",field:"time",sort:"asc",width:150},{label:"Sender",field:"sender",sort:"asc",width:150},{label:"Room",field:"room",sort:"asc",width:150},{label:"Message",field:"messages",sort:"asc",width:150},{label:"Type",field:"type",sort:"asc",width:150}],rows:[]},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;d.a.get("https://chat-application-backend.herokuapp.com/message/message-history").then((function(t){e.setState({rows:t.data});var a=[];for(var n in e.state.rows){var r={id:e.state.rows[n]._id,date:L()(new Date(e.state.rows[n].date)).format("MM/DD/YYYY"),time:L()(new Date(e.state.rows[n].date)).format("hh:mm:ss a"),sender:e.state.rows[n].sender,room:e.state.rows[n].room,messages:e.state.rows[n].message,type:e.state.rows[n].type};a.push(r)}e.setState({rows:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"tableContainer"},o.a.createElement(A.c,{striped:!0,bordered:!0,hover:!0,data:this.state,className:"mdb"}))}}]),a}(o.a.Component),q=a(253),G=a(256),K=a(257),U=a(254),W=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).wrapper=o.a.createRef(),n.state={show:!1,currId:"",newRoomName:"",newRoomStatus:"active",myRooms:[]},n}return Object(x.a)(a,[{key:"handleChangeRoom",value:function(e){this.setState({newRoomName:e.target.value}),console.log(e.target.value)}},{key:"handleChangeStatus",value:function(e){this.setState({newRoomStatus:e.target.value}),console.log(e.target.value)}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(e,t,a){this.setState({show:!0,currId:e,newRoomName:t,newRoomStatus:a})}},{key:"componentDidMount",value:function(){this.fetchRooms()}},{key:"fetchRooms",value:function(){var e=this;d.a.get("https://chat-application-backend.herokuapp.com/room/room-list").then((function(t){e.setState({myRooms:t.data})}))}},{key:"editRoom",value:function(e,t,a){var n=Date(Date.now()).toString();d.a.put("https://chat-application-backend.herokuapp.com/room/room-status-update/".concat(e),{roomname:t,edited:n,status:a},{headers:{"Content-Type":"application/json"}}).then((function(e){alert("A Room was edited!"),window.location.reload()}))}},{key:"renderTableData",value:function(){var e=this;return this.state.myRooms.map((function(t,a){var n=t._id,r=t.roomname,l=t.created,c=t.edited,s=t.status;return o.a.createElement("tr",{key:n},o.a.createElement("td",null,n),o.a.createElement("td",null,r),o.a.createElement("td",null,L()(new Date(l)).format("MM/DD/YYYY - hh:mm:ss a")),o.a.createElement("td",null,c?L()(new Date(c)).format("MM/DD/YYYY - hh:mm:ss a"):"Not Applicable"),o.a.createElement("td",null,s),o.a.createElement("td",null,o.a.createElement(q.a,{variant:"primary",onClick:function(){return e.handleShow(n,r,s)}},"Edit")))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginTop:"3em"}},o.a.createElement(U.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",id:"students"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Room"),o.a.createElement("th",null,"Create Date"),o.a.createElement("th",null,"Edit Date"),o.a.createElement("th",null,"Status"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,this.renderTableData())),o.a.createElement("br",null),o.a.createElement(G.a,{show:this.state.show,onHide:function(){return e.handleClose()}},o.a.createElement(G.a.Header,{closeButton:!0},o.a.createElement(G.a.Title,null,"Edit Room")),o.a.createElement(G.a.Body,null,o.a.createElement(K.a,{onSubmit:function(){return e.editRoom(e.state.currId,e.state.newRoomName,e.state.newRoomStatus)}},o.a.createElement(K.a.Group,{controlId:"roomName"},o.a.createElement(K.a.Label,null,"Room Name"),o.a.createElement(K.a.Control,{value:this.state.newRoomName,onChange:function(t){return e.handleChangeRoom(t)},type:"text",placeholder:"Enter Room Here",required:!0})),o.a.createElement(K.a.Group,{controlId:"roomStatus"},o.a.createElement(K.a.Label,null,"Room Status"),o.a.createElement(K.a.Control,{as:"select",value:this.state.newRoomStatus,onChange:function(t){return e.handleChangeStatus(t)}},o.a.createElement("option",null,"active"),o.a.createElement("option",null,"inactive"))),o.a.createElement(q.a,{variant:"primary",type:"submit"},"Save"))),o.a.createElement(G.a.Footer,null)))}}]),a}(o.a.Component);var _=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),c=Object(i.a)(l,2),s=c[0],m=c[1],u=Object(r.useState)("active"),E=Object(i.a)(u,2),h=E[0],p=E[1],f=function(){return n(!1)};return o.a.createElement("div",null,o.a.createElement("div",{style:{width:"10em",margin:"1em",marginTop:"2em",marginLeft:"3%"}},o.a.createElement(q.a,{variant:"primary",onClick:function(){return n(!0)}},"Add Room")),o.a.createElement("div",{className:"modal"},o.a.createElement(G.a,{show:a,onHide:f},o.a.createElement(G.a.Header,{closeButton:!0},o.a.createElement(G.a.Title,null,"Add Room")),o.a.createElement(G.a.Body,null,o.a.createElement(K.a,{onSubmit:function(){var e=Date(Date.now()).toString();d.a.post("https://chat-application-backend.herokuapp.com/room/create-room",{roomname:s,created:e,edited:null,status:h},{headers:{"Content-Type":"application/json"}}).then((function(e){alert("A Room was created!"),f(),window.location.reload()}))}},o.a.createElement(K.a.Group,{controlId:"roomName"},o.a.createElement(K.a.Label,null,"Room Name"),o.a.createElement(K.a.Control,{onChange:function(e){m(e.target.value)},type:"text",placeholder:"Enter Room Here",required:!0})),o.a.createElement(K.a.Group,{controlId:"roomStatus"},o.a.createElement(K.a.Label,null,"Room Status"),o.a.createElement(K.a.Control,{as:"select",value:h,onChange:function(e){p(e.target.value)}},o.a.createElement("option",null,"active"),o.a.createElement("option",null,"inactive"))),o.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"))),o.a.createElement(G.a.Footer,null))),o.a.createElement(W,null))},J=(a(245),function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={},n.wrapper=o.a.createRef(),n}return Object(x.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:"myTabs",defaultActiveKey:"rooms",id:"uncontrolled-tab-example"},o.a.createElement(B.a,{className:"myTab",eventKey:"eventHistory",title:"Event History"},o.a.createElement(H,null)),o.a.createElement(B.a,{eventKey:"messageHistory",title:"Message History"},o.a.createElement(F,null)),o.a.createElement(B.a,{eventKey:"rooms",title:"Rooms"},o.a.createElement(_,null))))}}]),a}(o.a.Component)),P=(a(247),function(){return o.a.createElement("div",{id:"body"},o.a.createElement("h1",null,o.a.createElement("i",{className:"material-icons enter-icon mr-2",id:"adminIcon"},"perm_identity"),o.a.createElement("b",null,"Admin Page")),o.a.createElement("div",{className:"logoutBtn"},o.a.createElement(s.b,{to:"/"},o.a.createElement("button",{id:"adminLogoutBtn"},"Logout"))),o.a.createElement(J,null),o.a.createElement("div",{id:"adminFooter"},"\xa0"))}),$=(a(248),function(){return o.a.createElement(s.a,null,o.a.createElement(m.a,{path:"/",exact:!0,component:C}),o.a.createElement(m.a,{path:"/login",component:E}),o.a.createElement(m.a,{path:"/chatroom",component:D}),o.a.createElement(m.a,{path:"/admin",component:P}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);