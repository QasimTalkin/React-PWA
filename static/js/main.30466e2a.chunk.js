(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{42:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(47),a(31)),s=a(32),u=a(41),i=a(40),m=a(61),p=a(62),E=a(60),v=a(39),h=a(59),f=(a(48),a(17)),d=a(5);function b(){return r.a.createElement("div",null,"Home Page RED")}function g(){return r.a.createElement("div",null,"Bus Page")}function k(){return r.a.createElement("div",null,"Stops Page")}var x=function(e){var t=e.next3buses;return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"Next 3 buses #3#")),t.map((function(e){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.TripDestination)))})))},N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={next3bus:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.octranspo1.com/v1.3/GetNextTripsForStop?appID=9558d7ea&apiKey=45f450a3480871cb9965070ac9a51040&stopNo=3037&format=json&routeNo=6").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({next3bus:t.GetNextTripsForStopResult.Route.RouteDirection[1].Trips.Trip})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"#home"},"Navbar"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,null," ",r.a.createElement(f.b,{to:"/"},"Home")),r.a.createElement(p.a.Link,null," ",r.a.createElement(f.b,{to:"/Bus"},"Bus")),r.a.createElement(p.a.Link,null," ",r.a.createElement(f.b,{to:"/Stops"},"Stops"))),r.a.createElement(E.a,{inline:!0},r.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(h.a,{variant:"outline-info"},"Search"))),r.a.createElement(d.c,null,r.a.createElement(d.a,{component:g,path:"/Bus"}),r.a.createElement(d.a,{component:k,path:"/Stops"}),r.a.createElement(d.a,{component:b,path:"/"}))),r.a.createElement("div",null,r.a.createElement(x,{next3buses:this.state.next3bus})))}}]),a}(n.Component);a(55);o.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){var e="".concat("/React-PWA.git","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.warn("registration event",e)}))}()}},[[42,1,2]]]);
//# sourceMappingURL=main.30466e2a.chunk.js.map