(this["webpackJsonpreact-agora"]=this["webpackJsonpreact-agora"]||[]).push([[0],{253:function(e,n,t){},257:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(24),r=t.n(c),o=t(106),l=t(59),s=t(60),u=t(49),d=t(70),h=t(69),p=t(23),j=t(9),b=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={},a}return Object(s.a)(t,[{key:"render",value:function(){return Object(j.jsx)("h3",{children:"Home"})}}]),t}(a.Component),f=t(56),O=t(30),k=t.n(O),x=t(48),g=t(74),m=t.n(g),C=t(121),v=t.n(C),w=t(147),y=t(38),A=t(261),F=t(51),T=t(264),S=t(259),L=t(75),N=t(262),M=t(263),I={labelCol:{span:8},wrapperCol:{span:16}},D={wrapperCol:{offset:8,span:16}},J={uplinkClient:null,downlinkClient:null,localAudioTrack:null},q={client:null,localAudioTrack:null},V=["\u8d28\u91cf\u672a\u77e5","\u8d28\u91cf\u6781\u597d","\u7528\u6237\u4e3b\u89c2\u611f\u89c9\u548c\u6781\u597d\u5dee\u4e0d\u591a\uff0c\u4f46\u7801\u7387\u53ef\u80fd\u7565\u4f4e\u4e8e\u6781\u597d","\u7528\u6237\u4e3b\u89c2\u611f\u53d7\u6709\u7455\u75b5\u4f46\u4e0d\u5f71\u54cd\u6c9f\u901a","\u52c9\u5f3a\u80fd\u6c9f\u901a\u4f46\u4e0d\u987a\u7545","\u7f51\u7edc\u8d28\u91cf\u975e\u5e38\u5dee\uff0c\u57fa\u672c\u4e0d\u80fd\u6c9f\u901a","\u7f51\u7edc\u8fde\u63a5\u65ad\u5f00\uff0c\u5b8c\u5168\u65e0\u6cd5\u6c9f\u901a"],H=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=n.call(this,e)).handleJoinChannel=Object(x.a)(k.a.mark((function e(){var n,t,a,i,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.state.config,t=n.appid,a=n.channel,i=n.token,!n.online){e.next=3;break}return e.abrupt("return",w.b.warning("\u5f53\u524d\u4ee5\u52a0\u5165\u9891\u9053\u4e2d\uff01"));case 3:return c.setState((function(e){return e.config.onlineLoading=!0,e})),q.client=m.a.createClient(),e.next=7,q.client.join(t,a,i);case 7:return r=e.sent,e.next=10,m.a.createMicrophoneAudioTrack();case 10:return q.localAudioTrack=e.sent,e.next=13,q.client.publish([q.localAudioTrack]);case 13:q.client.on("user-published",function(){var e=Object(x.a)(k.a.mark((function e(n,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.client.subscribe(n,t);case 2:"audio"==t&&n.audioTrack.play();case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),c.setState((function(e){return e.config.uid=r,e.config.online=!0,e.config.onlineLoading=!1,e}));case 15:case"end":return e.stop()}}),e)}))),c.handleLeaveChannel=Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.localAudioTrack.close(),e.next=3,q.client.leave();case 3:c.setState((function(e){return e.config.appid="",e.config.uid="",e.config.online=!1,e})),w.b.success("\u79bb\u5f00\u5f53\u524d\u9891\u9053\uff01");case 5:case"end":return e.stop()}}),e)}))),c.handleCheckNetwork=Object(x.a)(k.a.mark((function e(){var n,t,a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({loading:!0,networkLog:[],isModalVisible:!0}),n=c.state.config,t=n.appid,a=n.channel,i=n.token,J.uplinkClient=m.a.createClient({mode:"rtc",codec:"vp8"}),J.downlinkClient=m.a.createClient({mode:"rtc",codec:"vp8"}),e.next=6,J.uplinkClient.join(t,a,i);case 6:return e.sent,e.next=9,J.downlinkClient.join(t,a,i);case 9:return e.sent,e.next=12,m.a.createMicrophoneAudioTrack();case 12:J.localAudioTrack=e.sent,J.uplinkClient.publish([J.localAudioTrack]),J.downlinkClient.on("user-published",function(){var e=Object(x.a)(k.a.mark((function e(n,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.downlinkClient.subscribe(n,t);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),J.downlinkClient.on("network-quality",(function(e){var n=c.state.networkLog;n.push("\u4e0b\u884c\u7f51\u7edc\u8d28\u91cf\uff1a".concat(V[e.downlinkNetworkQuality],"...")),c.setState({networkLog:n,loading:!1})})),J.uplinkClient.on("network-quality",(function(e){var n=c.state.networkLog;n.push("\u4e0a\u884c\u7f51\u7edc\u8d28\u91cf\uff1a".concat(V[e.uplinkNetworkQuality],"...")),c.setState({networkLog:n,loading:!1})}));case 17:case"end":return e.stop()}}),e)}))),c.handleCloseDialog=Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({loading:!0}),J.localAudioTrack.close(),e.next=4,J.uplinkClient.leave();case 4:return e.next=6,J.downlinkClient.leave();case 6:c.setState({isModalVisible:!1,loading:!1});case 7:case"end":return e.stop()}}),e)}))),c.loadChannels=function(){var e=c.state,n=e.config,t=e.isModalVisible,i=e.networkLog;if(""!=n.appid)return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(y.a,{span:4}),Object(j.jsx)(y.a,{span:16,children:Object(j.jsxs)(A.a,{title:"Channel",extra:Object(j.jsx)("a",{href:"#",onClick:c.handleLeaveChannel,children:"Delete"}),actions:[Object(j.jsx)(F.a,{type:"primary",className:"button-color-volcano",onClick:c.handleCheckNetwork,children:"\u901a\u8bdd\u8d28\u91cf\u68c0\u6d4b"}),Object(j.jsx)(F.a,{type:"primary",className:"button-color-green",loading:n.onlineLoading,onClick:c.handleJoinChannel,children:"\u8fde\u63a5\u9891\u9053"}),Object(j.jsx)(F.a,{type:"primary",className:"button-color-dust",onClick:c.handleLeaveChannel,disabled:!n.online,children:"\u79bb\u5f00\u9891\u9053"}),Object(j.jsx)(F.a,{type:"primary",className:"button-color-purple",onClick:function(e){c.handleToggleMicrophone(!1)},disabled:!n.online,children:"\u7981\u6b62\u9ea6\u514b\u98ce"}),Object(j.jsx)(F.a,{type:"primary",className:"button-color-cyan",onClick:function(e){c.handleToggleMicrophone(!0)},disabled:!n.online,children:"\u6062\u590d\u9ea6\u514b\u98ce"})],children:[Object(j.jsxs)("p",{children:["Appid: ",n.appid]}),Object(j.jsxs)("p",{children:["Channel: ",n.channel]}),Object(j.jsxs)("p",{children:["Uid: ",n.uid]}),Object(j.jsxs)("p",{children:["Online: ",n.online.toString()]})]})}),Object(j.jsx)(y.a,{span:4}),Object(j.jsx)(T.a,{title:"Basic Modal",visible:t,onOk:c.handleCloseDialog,onCancel:c.handleCloseDialog,bodyStyle:{height:"400px",overflow:"auto"},children:Object(j.jsx)(S.a,{spinning:c.state.loading,delay:500,children:i.map((function(e,n){return Object(j.jsx)("p",{children:e},n)}))})})]})},c.state={config:{appid:"",channel:"",token:"",uid:"",online:!1,onlineLoading:!1},networkLog:[],loading:!1,isModalVisible:!1},c.formRef=i.a.createRef(),c.onFinish=c.onFinish.bind(Object(u.a)(c)),c.onFinishFailed=c.onFinishFailed.bind(Object(u.a)(c)),c}return Object(s.a)(t,[{key:"onFinish",value:function(e){v.a.set("config",JSON.stringify(e)),this.setState((function(n){return n.config=Object(f.a)(Object(f.a)({},n.config),e),n})),w.b.success("Channel created successfully!")}},{key:"onFinishFailed",value:function(e){w.b.error("fail!")}},{key:"componentDidMount",value:function(){var e=JSON.parse(v.a.get("config")||"{}");this.formRef.current.setFieldsValue(e)}},{key:"handleToggleMicrophone",value:function(){var e=Object(x.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.localAudioTrack.setEnabled(n);case 2:w.b.success(n?"\u9ea6\u514b\u98ce\u5df2\u5f00\u542f\uff01":"\u9ea6\u514b\u98ce\u5df2\u7981\u7528\uff01");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)(L.a,{gutter:[0,30],children:[Object(j.jsx)(y.a,{span:6}),Object(j.jsx)(y.a,{span:12,children:Object(j.jsxs)(N.a,Object(f.a)(Object(f.a)({},I),{},{ref:this.formRef,name:"basic",onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:[Object(j.jsx)(N.a.Item,{label:"AppId",name:"appid",rules:[{required:!0,message:"Please input appid!"}],children:Object(j.jsx)(M.a,{})}),Object(j.jsx)(N.a.Item,{label:"Channel",name:"channel",rules:[{required:!0,message:"Please input channel!"}],children:Object(j.jsx)(M.a,{})}),Object(j.jsx)(N.a.Item,{label:"Token",name:"token",rules:[{required:!0,message:"Please input token!"}],children:Object(j.jsx)(M.a,{})}),Object(j.jsx)(N.a.Item,Object(f.a)(Object(f.a)({},D),{},{children:Object(j.jsx)(F.a,{type:"primary",htmlType:"submit",children:"Create Channel"})}))]}))}),Object(j.jsx)(y.a,{span:6}),this.loadChannels()]})}}]),t}(a.Component),R=t(266),P=t(267),B=[{id:1,title:"Home",icon:R.a,path:"/home",component:b},{id:2,title:"Agora Audio",icon:P.a,path:"/agora-audio",component:H}],E=t(260),Q=t(265),K=(t(252),t(253),E.a.Header),U=E.a.Sider,z=E.a.Content,G=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={current:""},a.handleAsideChange=a.handleAsideChange.bind(Object(u.a)(a)),a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname;this.setState({current:e})}},{key:"handleAsideChange",value:function(e){this.setState({current:e.key})}},{key:"render",value:function(){var e=this.state.current;return Object(j.jsxs)(E.a,{className:"wrap",children:[Object(j.jsx)(K,{children:"Header"}),Object(j.jsxs)(E.a,{children:[Object(j.jsx)(U,{children:Object(j.jsx)(Q.a,{selectedKeys:[e],onClick:this.handleAsideChange,mode:"inline",theme:"dark",children:B.map((function(e){return Object(j.jsx)(Q.a.Item,{icon:Object(j.jsx)(e.icon,{}),children:Object(j.jsx)(o.b,{to:e.path,children:e.title})},e.path)}))})}),Object(j.jsx)(z,{className:"content",children:Object(j.jsxs)(p.d,{children:[B.map((function(e){return Object(j.jsx)(p.b,{path:e.path,component:e.component},e.path)})),Object(j.jsx)(p.a,{from:"/",to:"/home"})]})})]})]})}}]),t}(a.Component),W=Object(p.g)(G);r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.e34e2ee1.chunk.js.map