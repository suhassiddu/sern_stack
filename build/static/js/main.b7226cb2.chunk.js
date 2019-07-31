(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(34),l=a(14),u=a(68),s=a(77),p=a(33),d=a(38),m=a(110),f=a(150),h=a(151),_=a(111),g=a(160),E=a(149),b=a(69),v=a.n(b),O=window.location,y=O.hostname,j=O.protocol,w=O.port,A="".concat(j,"//").concat(y,":").concat(w,"/"),R=v.a.create({baseURL:A}),k=function(){return function(e){localStorage.removeItem("Auth"),e({type:"AUTH"})}},P=function(e){var t=e.area_code,a=e.store_name,n=e.product_name,r=e.product_detail,i=e.product_image,o=e.offer_detail,c=e.start_date,l=e.end_date;return function(e,u){var s={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(u().Auth.token)}},p=new FormData;p.append("area_code",t),p.append("store_name",a),p.append("product_name",n),p.append("product_detail",r),p.append("product_image",i),p.append("offer_detail",o),p.append("start_date",c),p.append("end_date",l),R.post("api/offers",p,s).then(function(t){console.log(t.data),e({type:"ADD_OFFER",payload:t.data})}).catch(function(t){console.log(t),e(k())})}},x=function(e){var t=e.id,a=e.area_code,n=e.store_name,r=e.product_name,i=e.product_detail,o=e.product_image,c=e.offer_detail,l=e.start_date,u=e.end_date;return function(e,s){var p={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(s().Auth.token)}},d=new FormData;d.append("area_code",a),d.append("store_name",n),d.append("product_name",r),d.append("product_detail",i),d.append("product_image",o),d.append("offer_detail",c),d.append("start_date",l),d.append("end_date",u),R.put("api/offers/".concat(t),d,p).then(function(t){console.log(t.data),e({type:"UPDATE_OFFER",payload:t.data})}).catch(function(t){console.log(t),e(k())})}},F=function(e){return function(t,a){var n={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a().Auth.token)}};R.delete("api/offers/".concat(e),n).then(function(e){console.log(e.data),t({type:"REMOVE_OFFER",id:e.data.id})}).catch(function(e){console.log(e),t(k())})}},N=function(){return function(e,t){var a={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t().Auth.token)}};R.get("api/offers",a).then(function(t){console.log(t.data),e({type:"OFFERS",payload:t.data})}).catch(function(t){console.log(t),e(k())})}},W=function(e,t,a){var n=e.email,r=e.password;return function(e){R.post("login",{email:n,password:r}).then(function(a){var n={isAuthenticated:!0,token:a.data.token};console.log(n),localStorage.setItem("Auth",JSON.stringify(n)),e({type:"AUTH",payload:Object.assign({},n)}),t.push("/")}).catch(function(t){var n={isAuthenticated:!1,token:""};a.setState(function(e){return{ErrMsg:t.message}}),localStorage.setItem("Auth",JSON.stringify(n)),e({type:"AUTH",payload:Object.assign({},n)})})}},D=Object(m.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),S=Object(l.b)(function(e){return{isAuthenticated:e.Auth.isAuthenticated}},function(e){return{onLogout:function(){e(k())}}})(function(e){var t=D();return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,null),r.a.createElement(f.a,{position:"sticky",color:"default",className:t.appBar},r.a.createElement(h.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit",className:t.title},r.a.createElement(d.b,{to:"/"},r.a.createElement(g.a,{color:"inherit"},"Home"))),r.a.createElement(d.b,{to:"/upload"},r.a.createElement(g.a,{color:"inherit"},"Upload")),r.a.createElement(g.a,{color:"inherit",onClick:e.onLogout},"Logout"))))}),C=a(24),U=a(25),T=a(30),L=a(27),V=a(26),B=a(31),q=a(78),M=a(152),I=a(159),H=a(41),J=Object(m.a)(function(e){return{appBar:{position:"relative"},layout:Object(H.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(H.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}),z=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).handle_submit=a.handle_submit.bind(Object(V.a)(a)),a.area_code_input=r.a.createRef(),a.store_name_input=r.a.createRef(),a.product_name_input=r.a.createRef(),a.product_detail_input=r.a.createRef(),a.product_image_input=r.a.createRef(),a.offer_detail_input=r.a.createRef(),a.startdate_input=r.a.createRef(),a.enddate_input=r.a.createRef(),a}return Object(B.a)(t,e),Object(U.a)(t,[{key:"handle_submit",value:function(){var e=this.area_code_input.current.value.trim(),t=this.store_name_input.current.value.trim(),a=this.product_name_input.current.value.trim(),n=this.product_detail_input.current.value.trim(),r=this.product_image_input.current.files[0],i=this.offer_detail_input.current.value.trim(),o=this.startdate_input.current.value.trim(),c=this.enddate_input.current.value.trim();this.props.onUpload({area_code:e,store_name:t,product_name:a,product_detail:n,product_image:r,offer_detail:i,start_date:o,end_date:c})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("main",{className:e.layout},r.a.createElement(q.a,{className:e.paper},r.a.createElement(_.a,{component:"h1",variant:"h4",align:"center"},"Upload Offer"),r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,name:"product_name",label:"Product Name",inputProps:{ref:this.product_name_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement("label",{for:"product_photo"},"Product Photo "),r.a.createElement("input",{id:"product_photo",ref:this.product_image_input,type:"file"})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,name:"area_code",label:"Area Code",inputProps:{ref:this.area_code_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,name:"store_name",label:"Store Name",inputProps:{ref:this.store_name_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,name:"product_detail",label:"Product Details",inputProps:{ref:this.product_detail_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,name:"offer_detail",label:"Offer Details",inputProps:{ref:this.offer_detail_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,fullWidth:!0,id:"date",label:"Start Date",type:"date",defaultValue:"2017-05-24",inputProps:{ref:this.startdate_input},InputLabelProps:{shrink:!0}})),r.a.createElement(M.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,fullWidth:!0,id:"date",label:"End Date",type:"date",defaultValue:"2017-05-24",inputProps:{ref:this.enddate_input},InputLabelProps:{shrink:!0}}))),r.a.createElement("div",{className:e.buttons},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.handle_submit,className:e.button},"Upload"))))))}}]),t}(n.Component);z=Object(l.b)(null,function(e){return{onUpload:function(t){e(P(t))}}})(z);var G=function(e){var t=J();return r.a.createElement(z,{classes:t})},X=a(155),$=a(157),K=a(154),Q=a(156),Y=a(153),Z=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).handle_submit=a.handle_submit.bind(Object(V.a)(a)),a.area_code_input=r.a.createRef(),a.store_name_input=r.a.createRef(),a.product_name_input=r.a.createRef(),a.product_detail_input=r.a.createRef(),a.product_image_input=r.a.createRef(),a.offer_detail_input=r.a.createRef(),a.start_date_input=r.a.createRef(),a.end_date_input=r.a.createRef(),a}return Object(B.a)(t,e),Object(U.a)(t,[{key:"handle_submit",value:function(){var e=this.area_code_input.current.value.trim(),t=this.store_name_input.current.value.trim(),a=this.product_name_input.current.value.trim(),n=this.product_detail_input.current.value.trim(),r=this.product_image_input.current.files[0],i=this.offer_detail_input.current.value.trim(),o=this.start_date_input.current.value.trim(),c=this.end_date_input.current.value.trim();this.props.onUpdate({id:this.props.id,area_code:e,store_name:t,product_name:a,product_detail:n,product_image:r,offer_detail:i,start_date:o,end_date:c})}},{key:"render",value:function(){var e=this;return r.a.createElement(Y.a,{key:this.props.id},r.a.createElement(K.a,{component:"th",scope:"row"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.product_name_input},defaultValue:this.props.Offer.product_name})),r.a.createElement(K.a,{align:"right"},r.a.createElement("img",{width:"150",alt:"",src:A+this.props.Offer.image_path}),r.a.createElement("input",{ref:this.product_image_input,type:"file"})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.area_code_input},defaultValue:this.props.Offer.area_code})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.store_name_input},defaultValue:this.props.Offer.store_name})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.product_detail_input},defaultValue:this.props.Offer.product_detail})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.offer_detail_input},defaultValue:this.props.Offer.offer_detail})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.start_date_input},type:"date",defaultValue:this.props.Offer.start_date})),r.a.createElement(K.a,{align:"right"},r.a.createElement(I.a,{fullWidth:!0,inputProps:{ref:this.end_date_input},type:"date",defaultValue:this.props.Offer.end_date})),r.a.createElement(K.a,{align:"right"},r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0},r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.onDelete(e.props.id)}},"Remove")),r.a.createElement(M.a,{item:!0},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.handle_submit},"Update")))))}}]),t}(n.Component),ee=Object(l.b)(function(e,t){return{Offer:e.Offers.find(function(e){return e.id===t.id})}},function(e){return{onDelete:function(t){e(F(t))},onUpdate:function(t){e(x(t))}}})(Z),te=Object(m.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650}}}),ae=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).state={search_text:""},a.search_input=r.a.createRef(),a}return Object(B.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.onOffers()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(q.a,{className:t.root},r.a.createElement("br",null),r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:3}),r.a.createElement(M.a,{item:!0,xs:3},r.a.createElement(I.a,{name:"search",label:"Search",inputProps:{ref:this.search_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:3},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return e.setState(function(t){return{search_text:e.search_input.current.value.trim()}})},className:t.button},"Search"))),r.a.createElement(X.a,{className:t.table},r.a.createElement(Q.a,null,r.a.createElement(Y.a,null,r.a.createElement(K.a,null,"Product Name"),r.a.createElement(K.a,{align:"right"},"Product Photo"),r.a.createElement(K.a,{align:"right"},"Area Code"),r.a.createElement(K.a,{align:"right"},"Store Name"),r.a.createElement(K.a,{align:"right"},"Product Detail"),r.a.createElement(K.a,{align:"right"},"Offer Detail"),r.a.createElement(K.a,{align:"right"},"Start Date"),r.a.createElement(K.a,{align:"right"},"End Date"),r.a.createElement(K.a,{aligh:"right"},"Update"))),r.a.createElement($.a,null,this.props.Offers.filter(function(t){return Object.values(t).join(",").includes(e.state.search_text)}).map(function(e){return r.a.createElement(ee,{id:e.id})})))))}}]),t}(n.Component);ae=Object(l.b)(function(e){return{Offers:e.Offers}},function(e){return{onOffers:function(){e(N())}}})(ae);var ne=function(e){var t=te();return r.a.createElement(ae,{classes:t})},re=a(158),ie=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).state={ErrMsg:""},a.email_input=r.a.createRef(),a.password_input=r.a.createRef(),a.handle_submit=a.handle_submit.bind(Object(V.a)(a)),a}return Object(B.a)(t,e),Object(U.a)(t,[{key:"handle_submit",value:function(){var e=this.email_input.current.value.trim(),t=this.password_input.current.value.trim();e&&t?(this.setState({ErrMsg:""}),this.props.onLogin({email:e,password:t},this.props.history,this)):this.setState({ErrMsg:"Please provide all the parameters"})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:e.layout},r.a.createElement(q.a,{className:e.paper},r.a.createElement(_.a,{component:"h1",variant:"h4",align:"center"},"Login"),r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,spacing:3},this.state.ErrMsg?r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(re.a,{color:"inherit",className:e.margin,message:this.state.ErrMsg})):r.a.createElement("div",null),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,type:"email",name:"email",label:"Email",defaultValue:"visitor@abc.com",inputProps:{ref:this.email_input},fullWidth:!0})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(I.a,{required:!0,type:"password",name:"password",label:"Password",defaultValue:"123",inputProps:{ref:this.password_input},fullWidth:!0}))),r.a.createElement("div",{className:e.buttons},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.handle_submit,className:e.button},"Login"))))))}}]),t}(n.Component);ie=Object(p.f)(Object(l.b)(null,function(e){return{onLogin:function(t,a,n){e(W(t,a,n))}}})(ie));var oe=function(e){var t=J();return r.a.createElement(ie,{classes:t})},ce=function(e){var t=e.component,a=e.isAuthenticated,n=Object(s.a)(e,["component","isAuthenticated"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};ce=Object(l.b)(function(e){return{isAuthenticated:e.Auth.isAuthenticated}},null)(ce);var le=function(){return r.a.createElement(d.a,null,r.a.createElement(ce,{path:"/",exact:!0,component:ne}),r.a.createElement(ce,{path:"/upload",component:G}),r.a.createElement(p.b,{path:"/login",component:oe}))},ue=a(55),se=a(76);var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OFFERS":return t.payload;case"REMOVE_OFFER":return e.filter(function(e){return e.id!==t.id});case"ADD_OFFER":return[].concat(Object(se.a)(e),[Object(ue.a)({},t.payload)]);case"UPDATE_OFFER":return e.map(function(e){return e.id===t.payload.id?Object(ue.a)({},e,t.payload):e});default:return e}},de={isAuthenticated:!1,token:""};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return void 0===t.payload?de:t.payload;default:return e}},fe=Object(c.c)({Offers:pe,Auth:me});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=Object(c.d)(fe,function(){try{var e=localStorage.getItem("Auth");if(null===e)return;return{Auth:e=JSON.parse(e)}}catch(t){return}}(),Object(c.a)(u.a));o.a.render(r.a.createElement(l.a,{store:he},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(109)}},[[82,1,2]]]);
//# sourceMappingURL=main.b7226cb2.chunk.js.map