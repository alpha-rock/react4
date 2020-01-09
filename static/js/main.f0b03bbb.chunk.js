(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){e.exports=a(42)},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(12),i=a.n(o),c=(a(37),a(28)),s=a(13),l=a(14),u=a(16),p=a(15),h=a(17),m=(a(24),a(38),a(19)),d=function(e){var t=e.children;return r.a.createElement("div",{className:"control-panel"},t)},f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.containerComponent||d,a=this.props.settings;return r.a.createElement(t,null,r.a.createElement("h3",null,"Interactive GeoJSON"),r.a.createElement("p",null,"Map showing median household income by state in year ",r.a.createElement("b",null,a.year),". Hover over a state to see details."),r.a.createElement("p",null,"Data source: ",r.a.createElement("a",{href:"www.census.gov"},"US Census Bureau")),r.a.createElement("div",{className:"source-link"},r.a.createElement("a",{href:"https://github.com/uber/react-map-gl/tree/5.0-release/examples/geojson",target:"_new"},"View Code \u2197")),r.a.createElement("hr",null),r.a.createElement("div",{key:"year",className:"input"},r.a.createElement("label",null,"Year"),r.a.createElement("input",{type:"range",value:a.year,min:1990,max:2017,step:1,onChange:function(t){return e.props.onChange("year",t.target.value)}})))}}]),t}(n.PureComponent),v={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"#3288bd"],[1,"#66c2a5"],[2,"#abdda4"],[3,"#e6f598"],[4,"#ffffbf"],[5,"#fee08b"],[6,"#fdae61"],[7,"#f46d43"],[8,"#d53e4f"]]},"fill-opacity":.8}},g=a(5),b=a(26);function y(e,t){var a=e.features,n=Object(b.a)().domain(a.map(t)).range(Object(g.e)(9));a.forEach((function(e){var a=t(e);e.properties.value=a,e.properties.percentile=n(a)}))}var w=a(27),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={year:2015,data:null,hoveredFeature:null,viewport:{latitude:40,longitude:-100,zoom:3,bearing:0,pitch:0}},a._loadData=function(e){y(e,(function(e){return e.properties.income[a.state.year]})),a.setState({data:e})},a._updateSettings=function(e,t){if("year"===e){a.setState({year:t});var n=a.state.data;n&&(y(n,(function(e){return e.properties.income[t]})),a.setState({data:Object(c.a)({},n)}))}},a._onViewportChange=function(e){return a.setState({viewport:e})},a._onHover=function(e){var t=e.features,n=e.srcEvent,r=n.offsetX,o=n.offsetY,i=t&&t.find((function(e){return"data"===e.layer.id}));a.setState({hoveredFeature:i,x:r,y:o})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(w.a)("https://raw.githubusercontent.com/alpha-rock/DataHosting/master/final3.geojson",(function(t,a){t||e._loadData(a)}))}},{key:"_renderTooltip",value:function(){var e=this.state,t=e.hoveredFeature,a=e.x,n=e.y;return t&&r.a.createElement("div",{className:"tooltip",style:{left:a,top:n}},r.a.createElement("div",null,"State: ",t.properties.name),r.a.createElement("div",null,"Median Household Income: ",t.properties.value),r.a.createElement("div",null,"Percentile: ",t.properties.percentile/8*100))}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.data;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(m.c,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix",onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1IjoiYWxwaGEtc2lzb2RpeWEiLCJhIjoiY2p6MmppOXM2MDcwaDNtbDlmeDU2ZDR1biJ9.AMeqwiRdGPHuNjsIC1cJ8w",onHover:this._onHover}),r.a.createElement(m.b,{type:"geojson",data:a},r.a.createElement(m.a,v)),this._renderTooltip()),r.a.createElement(f,{containerComponent:this.props.containerComponent,settings:this.state,onChange:this._updateSettings}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f0b03bbb.chunk.js.map