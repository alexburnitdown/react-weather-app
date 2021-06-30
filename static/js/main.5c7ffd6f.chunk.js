(this["webpackJsonpreact-secret-keys"]=this["webpackJsonpreact-secret-keys"]||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(59),i=n.n(r),s=(n(67),n(68),n(13)),o=n.n(s),l=n(37),b=n(2),d=(n(70),n(1)),u=function(e){var t=e.location,n=e.temperature,a=e.description,c=e.setTemperature,r=e.icon;return Object(d.jsxs)("div",{class:"location",children:[Object(d.jsx)("h1",{class:"location-place",children:t}),Object(d.jsx)("div",{class:"temperature",children:Object(d.jsxs)("div",{class:"degree-section",children:[Object(d.jsxs)("h2",{class:"temperature-degree",onClick:function(){var e=document.querySelector(".scale-name");"C"===e.textContent?(e.textContent="F",c(Math.floor(n/5*9+32))):(e.textContent="C",c(Math.floor(5/9*(n-32))))},children:[n," ",Object(d.jsx)("span",{className:"scale-name",children:"C"})]}),Object(d.jsx)("span",{})]})}),Object(d.jsxs)("div",{class:"degree-container",children:[Object(d.jsx)("i",{class:"wi wi-icon wi-".concat(r)}),Object(d.jsx)("div",{class:"temperature-description",children:a})]})]})},h=function(e){var t=e.search,n=e.updateSearch,a=e.getSearch;return Object(d.jsxs)("form",{className:"form",onSubmit:a,children:[Object(d.jsx)("input",{className:"input_text",type:"text",value:t,onChange:n,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434..."}),Object(d.jsx)("button",{type:"submit",className:"submit",children:"OK"})]})},m={200:{label:"thunderstorm with light rain",icon:"storm-showers"},201:{label:"thunderstorm with rain",icon:"storm-showers"},202:{label:"thunderstorm with heavy rain",icon:"storm-showers"},210:{label:"light thunderstorm",icon:"storm-showers"},211:{label:"thunderstorm",icon:"thunderstorm"},212:{label:"heavy thunderstorm",icon:"thunderstorm"},221:{label:"ragged thunderstorm",icon:"thunderstorm"},230:{label:"thunderstorm with light drizzle",icon:"storm-showers"},231:{label:"thunderstorm with drizzle",icon:"storm-showers"},232:{label:"thunderstorm with heavy drizzle",icon:"storm-showers"},300:{label:"light intensity drizzle",icon:"sprinkle"},301:{label:"drizzle",icon:"sprinkle"},302:{label:"heavy intensity drizzle",icon:"sprinkle"},310:{label:"light intensity drizzle rain",icon:"sprinkle"},311:{label:"drizzle rain",icon:"sprinkle"},312:{label:"heavy intensity drizzle rain",icon:"sprinkle"},313:{label:"shower rain and drizzle",icon:"sprinkle"},314:{label:"heavy shower rain and drizzle",icon:"sprinkle"},321:{label:"shower drizzle",icon:"sprinkle"},500:{label:"light rain",icon:"rain"},501:{label:"moderate rain",icon:"rain"},502:{label:"heavy intensity rain",icon:"rain"},503:{label:"very heavy rain",icon:"rain"},504:{label:"extreme rain",icon:"rain"},511:{label:"freezing rain",icon:"rain-mix"},520:{label:"light intensity shower rain",icon:"showers"},521:{label:"shower rain",icon:"showers"},522:{label:"heavy intensity shower rain",icon:"showers"},531:{label:"ragged shower rain",icon:"showers"},600:{label:"light snow",icon:"snow"},601:{label:"snow",icon:"snow"},602:{label:"heavy snow",icon:"snow"},611:{label:"sleet",icon:"sleet"},612:{label:"shower sleet",icon:"sleet"},615:{label:"light rain and snow",icon:"rain-mix"},616:{label:"rain and snow",icon:"rain-mix"},620:{label:"light shower snow",icon:"rain-mix"},621:{label:"shower snow",icon:"rain-mix"},622:{label:"heavy shower snow",icon:"rain-mix"},701:{label:"mist",icon:"sprinkle"},711:{label:"smoke",icon:"smoke"},721:{label:"haze",icon:"day-haze"},731:{label:"sand, dust whirls",icon:"cloudy-gusts"},741:{label:"fog",icon:"fog"},751:{label:"sand",icon:"cloudy-gusts"},761:{label:"dust",icon:"dust"},762:{label:"volcanic ash",icon:"smog"},771:{label:"squalls",icon:"day-windy"},781:{label:"tornado",icon:"tornado"},800:{label:"clear sky",icon:"sunny"},801:{label:"few clouds",icon:"cloudy"},802:{label:"scattered clouds",icon:"cloudy"},803:{label:"broken clouds",icon:"cloudy"},804:{label:"overcast clouds",icon:"cloudy"},900:{label:"tornado",icon:"tornado"},901:{label:"tropical storm",icon:"hurricane"},902:{label:"hurricane",icon:"hurricane"},903:{label:"cold",icon:"snowflake-cold"},904:{label:"hot",icon:"hot"},905:{label:"windy",icon:"windy"},906:{label:"hail",icon:"hail"},951:{label:"calm",icon:"sunny"},952:{label:"light breeze",icon:"cloudy-gusts"},953:{label:"gentle breeze",icon:"cloudy-gusts"},954:{label:"moderate breeze",icon:"cloudy-gusts"},955:{label:"fresh breeze",icon:"cloudy-gusts"},956:{label:"strong breeze",icon:"cloudy-gusts"},957:{label:"high wind, near gale",icon:"cloudy-gusts"},958:{label:"gale",icon:"cloudy-gusts"},959:{label:"severe gale",icon:"cloudy-gusts"},960:{label:"storm",icon:"thunderstorm"},961:{label:"violent storm",icon:"thunderstorm"},962:{label:"hurricane",icon:"cloudy-gusts"}},p=function(e){var t=e.date,n=e.weatherTime,a=e.weatherDegree,c=e.weatherFeels,r=e.weatherCode,i=e.weatherDescription,s=e.iconTimes,o=e.setIconTimes;r>699&&r<800||r>899&&r<1e3||o("day-"+m[r].icon);var l=n.substring(n.length-8,n.length-3),b=new Date(1e3*t).getDate();return Object(d.jsxs)("div",{className:"temperature_container",children:[Object(d.jsx)("p",{className:"temperature-day",children:b}),Object(d.jsx)("p",{className:"temperature-time",children:l}),Object(d.jsx)("p",{className:"temperature-degree",children:a}),Object(d.jsx)("p",{className:"temperature-feels",children:c}),Object(d.jsx)("p",{className:"wi wi-icon wi-".concat(s)}),Object(d.jsx)("p",{className:"temperature-description",children:i})]})},j=n(62),w=function(e){var t={labels:e.xlabels,datasets:[{label:"degrees",data:e.ytemps,fill:!0,backgroundColor:"rgba(255, 99, 132, 0)",borderColor:"rgba(255, 255, 255)"}]};return Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{data:t,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})};var g=function(){var e,t,n="https://cors-anywhere.herokuapp.com/",c=Object(a.useState)("Rostov-on-don"),r=Object(b.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(),g=Object(b.a)(j,2),f=g[0],y=g[1],O=Object(a.useState)(""),x=Object(b.a)(O,2),v=x[0],z=x[1],k=Object(a.useState)(""),S=Object(b.a)(k,2),C=S[0],N=S[1],T=Object(a.useState)(""),D=Object(b.a)(T,2),F=D[0],M=D[1],E=Object(a.useState)(""),I=Object(b.a)(E,2),_=I[0],q=I[1],A=Object(a.useState)(""),P=Object(b.a)(A,2),B=P[0],J=P[1],L=Object(a.useState)([]),H=Object(b.a)(L,2),K=H[0],R=H[1],W=Object(a.useState)(""),Z=Object(b.a)(W,2),G=Z[0],Q=Z[1],U=Object(a.useState)([]),V=Object(b.a)(U,2),X=V[0],Y=V[1],$=Object(a.useState)([]),ee=Object(b.a)($,2),te=ee[0],ne=ee[1];function ae(){return(ae=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.name),z(Math.floor((n.main.temp-32)*(5/9))),N(n.weather[0].description),(a=n.weather[0].id)>699&&a<800||a>899&&a<1e3||M("day-"+m[a].icon);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(n,"api.openweathermap.org/data/2.5/forecast?q=").concat(_,"&cnt=8&units=metric&appid=").concat("ca1bdedf062fbce18adec6c28c5a16bb"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,r=c.list,J(c.city.name),R(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(a){console.log("position",a),e=a.coords.longitude,t=a.coords.latitude;var c="".concat(n,"api.openweathermap.org/data/2.5/weather?lat=").concat(t,"&lon=").concat(e,"&units=imperial&appid=").concat("c5dd93beef11d423d27ed69366c76207");y(c)}))}),[]),Object(a.useEffect)((function(){!function(){var e,t=[],n=[];K.map((function(a){e=new Date(1e3*a.dt).getHours(),t.push(e),n.push(Math.floor(a.main.temp))})),Y(t),ne(n)}()}),[K]),Object(a.useEffect)((function(){!function(){ae.apply(this,arguments)}()}),[f]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{location:i,temperature:v,description:C,setTemperature:z,icon:F}),Object(d.jsx)(h,{search:_,updateSearch:function(e){q(e.target.value)},getSearch:function(e){e.preventDefault(),ce(),q("")}}),Object(d.jsx)("h2",{className:"place",children:B}),Object(d.jsx)("h3",{className:"place",children:"Weather by hours"}),Object(d.jsx)(w,{xlabels:X,ytemps:te}),Object(d.jsx)("div",{className:"weather-container",children:K.map((function(e){return Object(d.jsx)(p,{date:e.dt,weatherTime:e.dt_txt,weatherDegree:e.main.temp,weatherFeels:e.main.feels_like,weatherCode:e.weather[0].id,weatherDescription:e.weather[0].description,setIconTimes:Q,iconTimes:G},e.dt)}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),f()},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){}},[[178,1,2]]]);
//# sourceMappingURL=main.5c7ffd6f.chunk.js.map