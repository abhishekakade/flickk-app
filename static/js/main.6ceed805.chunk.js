(this.webpackJsonpflickk=this.webpackJsonpflickk||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/404.c35f1447.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/movie404.bdd79ffe.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/404cast.762ddd08.webp"},35:function(e,t,a){e.exports=a.p+"static/media/tmdb.02a9430b.svg"},40:function(e,t,a){e.exports=a(53)},45:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),c=a.n(r),s=(a(45),a(6)),i=a(7),l=a(10),m=a(8),u=a(11),d=(a(46),a(13)),g=a(15),h=a(19),p=a(28),f=a(55),b=a(59),v=a(56),E=a(57),y=a(60),w=a(18),k=a.n(w),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.onChange;return o.a.createElement("div",null,o.a.createElement("input",{"aria-label":"Search Movies",style:{padding:"0.5rem 1rem",display:"block",width:"100%",background:"rgba(0, 0, 0, 0.9)",outline:"none",border:"2px solid #339933",color:"#bbbbbb"},onChange:e,type:"text",placeholder:"Search..."}))}}]),t}(n.Component),S="https://api.themoviedb.org/3/person/",j="https://api.themoviedb.org/3/movie/popular?api_key=",O="df6f6314c5440cba12e1c99403e78dc3",T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[],isLoading:!0,searchQuery:"",pageNum:1},a.searchMovies=function(e){var t=e.target.value.trim();if(""===t)if(document.getElementById("popular-or-results").innerText="Trending Movies",document.getElementById("load-more-btn").style.display="block",sessionStorage.getItem("BaseState")){var n=JSON.parse(sessionStorage.getItem("BaseState"));a.setState(Object(p.a)({},n)),console.log("from session storage")}else fetch("".concat(j).concat(O)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch trending movies")})).then((function(e){a.setState({movies:e.results},(function(){""===t&&(sessionStorage.setItem("BaseState",JSON.stringify(a.state)),console.log("saved data to session storage"))}))})).catch((function(e){return console.error(e)}));else fetch("".concat("https://api.themoviedb.org/3/search/movie?api_key=").concat(O).concat("&query=").concat(t)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch")})).then((function(e){a.setState({movies:e.results,pageNum:1})})).catch((function(e){return console.error(e)})),document.getElementById("popular-or-results").innerText="Results",document.getElementById("load-more-btn").style.display="none"},a.fetchMoreMovies=function(){var e=a.state,t=e.movies,n=e.pageNum,o=document.getElementById("load-more-btn");o.innerText="Load More Movies",fetch("".concat(j).concat(O).concat("&page=").concat(n+1)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch movies")})).then((function(e){a.setState({movies:[].concat(Object(h.a)(t),Object(h.a)(e.results)),pageNum:e.page})})).catch((function(e){console.error(e),o.innerText="Couldn't Load Movies"}))},a.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=k.a,console.log("Image not found!")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.movies;if(sessionStorage.getItem("BaseState")){var a=JSON.parse(sessionStorage.getItem("BaseState"));this.setState(Object(p.a)({},a)),console.log("from session storage")}else fetch("".concat(j).concat(O).concat("&page=").concat(this.state.pageNum)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch")})).then((function(a){e.setState({isLoading:!1,movies:[].concat(Object(h.a)(t),Object(h.a)(a.results))},(function(){sessionStorage.setItem("BaseState",JSON.stringify(e.state)),console.log("saved data to session storage")}))})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.state.movies.map((function(t){return o.a.createElement(f.a,{key:t.id,xs:12,sm:6,md:4,lg:3},o.a.createElement(d.b,{to:"/movie/"+t.id},o.a.createElement(b.a,{bg:"dark",text:"white",className:"mb-3"},o.a.createElement(b.a.Img,{variant:"top",alt:t.title,src:"".concat("https://image.tmdb.org/t/p/").concat("w300").concat(t.poster_path),onError:e.addDefaultSrcToImg}),o.a.createElement(b.a.Body,null,o.a.createElement(b.a.Title,{style:{fontSize:"1rem"}},t.title),o.a.createElement(b.a.Text,null,"Rating: ",t.vote_average)))))}));return o.a.createElement(v.a,{id:"homepage-container"},o.a.createElement("h2",{style:{margin:"1rem"}},"Search"),o.a.createElement(x,{onChange:this.searchMovies}),o.a.createElement("h2",{id:"popular-or-results",style:{margin:"1rem"}},"Trending Movies"),o.a.createElement(E.a,null,t),o.a.createElement(y.a,{id:"load-more-btn",onClick:this.fetchMoreMovies,style:{background:"#0f0f0f",border:"2px solid #339933"},size:"lg",block:!0},"Load More Movies"))}}]),t}(n.Component),N=a(35),I=a.n(N),C=a(61),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"",style:{background:"rgba(0, 0, 0, 0.9)",color:"#eeeeee"}},o.a.createElement("header",{className:"App-header",style:{display:"grid",gridTemplateColumns:"auto auto"}},o.a.createElement(d.b,{to:"/",style:{textAlign:"left",color:"#dddddd"}},o.a.createElement("h1",{style:{fontSize:"1.75rem",textAlign:"left",display:"inline-block",margin:"0.5rem 1rem",userSelect:"none"},id:"title"},o.a.createElement("span",null,o.a.createElement(C.a,{id:"flickk-icon",style:{height:"2rem",verticalAlign:"bottom"}})),"Flickk")),o.a.createElement("span",{style:{textAlign:"right",verticalAlign:"super",margin:"0.5rem 1rem",fontWeight:"bold"},id:"tmdb-logo"},o.a.createElement("a",{style:{textDecoration:"none",color:"#eeeeee",userSelect:"none"},href:"http://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},"Powered by"," ",o.a.createElement("img",{src:I.a,alt:"www.themoviedb.org",style:{height:"2.5rem",verticalAlign:"middle"}})))))}}]),t}(n.Component),M=a(26),_=a.n(M),D=a(27),A=a.n(D),R=a(58),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",cast:[],backdrop:"",budget:"",genres:[],homepage:"",overview:"",release:"",runtime:"",status:"",tagline:"",vote:"",numOfCastItemsToShow:10},a.onScroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&a.state.cast.length&&a.loadCastOnScroll()},a.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=_.a,console.log("Movie poster image not found!")},a.addDefaultSrcToCastImg=function(e){e.target.onError=null,e.target.src=A.a,console.log("Cast image not found!")},a.loadCastOnScroll=function(){a.setState((function(e){return{numOfCastItemsToShow:e.numOfCastItemsToShow+10}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.onScroll,!1);var t=this.props.match.params.movieID;fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t).concat("/credits?api_key=").concat(O)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch cast")})).then((function(t){return e.setState({cast:t.cast.map((function(e){return{id:e.id,name:e.name,profile_path:e.profile_path}}))})})).catch((function(e){return console.log(e)})),fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(O)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch movie details")})).then((function(t){return e.setState({title:t.title,backdrop:t.backdrop_path,budget:t.budget,genres:t.genres,homepage:t.homepage,overview:t.overview,release:t.release_date,runtime:t.runtime,status:t.status,tagline:t.tagline,vote:t.vote_average})}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.backdrop,r=t.budget,c=t.genres,s=t.homepage,i=t.overview,l=t.release,m=t.runtime,u=t.status,g=t.tagline,h=t.vote,p=t.cast,f=t.numOfCastItemsToShow,E=c.map((function(e){return e.name})).join(", "),y=p.slice(0,f).map((function(t){var a=t.id,n=t.name,r=t.profile_path;return o.a.createElement(d.b,{key:a,to:"/cast/"+a},o.a.createElement(b.a,null,o.a.createElement(b.a.Img,{variant:"top",src:r?"https://image.tmdb.org/t/p/w154".concat(r):A.a,width:"154px",height:"auto",style:{width:"154px",height:"auto"},alt:n,loading:"lazy",onError:e.addDefaultSrcToCastImg,className:"cast-images"}),o.a.createElement(b.a.Body,null,o.a.createElement(b.a.Text,null,n))))}));return o.a.createElement("div",{className:"container-div",id:"movie-card-div",style:{padding:"2rem 1rem",background:"#222222",borderRadius:0}},o.a.createElement(v.a,{id:"movie-card-container",style:{background:"#222222",borderRadius:0}},o.a.createElement(b.a,{className:"bg-dark text-white make-text-selectable",style:{border:"none"}},o.a.createElement(b.a.Title,{style:{fontSize:"1.5rem",background:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",color:"#01D277"},className:"align-middle text-center p-3 m-0"},a),g&&o.a.createElement(b.a.Text,{style:{color:"#cccccc",background:"rgba(0, 0, 0, 0.8)",fontSize:"1rem"},className:"m-0 pb-2"},g),o.a.createElement(b.a.Img,{src:n?"".concat("https://image.tmdb.org/t/p/w1280"+n):_.a,alt:a,onError:this.addDefaultSrcToImg}),o.a.createElement(b.a.ImgOverlay,null),o.a.createElement(b.a.Body,{style:{backgroundColor:"#121212"}},o.a.createElement(b.a.Text,{className:"overview-text"},i)),o.a.createElement(b.a.Body,null,m?o.a.createElement(b.a.Text,{className:"green-text"},"Status: ",u,o.a.createElement("span",{"aria-hidden":"true",className:"circle"},"\u26ac"),"Release Date: ",l,o.a.createElement("span",{"aria-hidden":"true",className:"circle"},"\u26ac"),"Runtime: ",m," mins"):o.a.createElement(b.a.Text,{className:"green-text"},"Status: Unkown",o.a.createElement("span",{"aria-hidden":"true",className:"circle"},"\u26ac"),"Release Date: Unknown",o.a.createElement("span",{"aria-hidden":"true",className:"circle"},"\u26ac"),"Runtime: Unknown"),E?o.a.createElement(b.a.Text,{className:"green-text"},"Genres: ",E):o.a.createElement(b.a.Text,{className:"green-text"},"Genres: Unknown"),r?o.a.createElement(b.a.Text,{className:"green-text"},"Budget: $",r):o.a.createElement(b.a.Text,{className:"green-text"},"Budget: Unknown"),h?o.a.createElement(b.a.Text,{className:"green-text"},"Rating: ",h):o.a.createElement(b.a.Text,{className:"green-text"},"Rating: Unknown"))),o.a.createElement(b.a.Body,null,o.a.createElement("p",{id:"cast-heading"},"Cast"),o.a.createElement(R.a,{id:"cast-list"},y)),s&&o.a.createElement("a",{className:"visit-movie-website",target:"_blank",rel:"noopener noreferrer",href:s},"Visit Movie Website")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",birth:"",dept:"",img:"",bio:"",movies:[]},a.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=k.a,console.log("Image not found!")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.personID;fetch("".concat(S).concat(t,"?api_key=").concat(O)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch cast details")})).then((function(t){return e.setState({name:t.name,birth:t.birthday||"Unknown",dept:t.known_for_department||"Unknown",bio:t.biography||"Information unavailable.",img:t.profile_path})})).catch((function(e){return console.log(e)})),fetch("".concat(S).concat(t,"/movie_credits?api_key=").concat(O)).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText,"failed to fetch movies")})).then((function(t){return e.setState({movies:t.cast.map((function(e){return{title:e.title,id:e.id}}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.birth,r=e.dept,c=e.img,s=e.bio,i=e.movies,l=i.length,m=i.map((function(e,t){return t===l-1?o.a.createElement(d.b,{className:"mmm",key:e.id,to:"/movie/"+e.id},o.a.createElement("span",null,e.title,".")):o.a.createElement(d.b,{className:"mmm",key:e.id,to:"/movie/"+e.id},o.a.createElement("span",null,e.title,",\xa0"))}));return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"container-div",style:{padding:"1rem 0",background:"#222222",borderRadius:0}},o.a.createElement(v.a,null,o.a.createElement(b.a,{style:{maxWidth:"500px",background:"#000000",display:"block",margin:"auto",border:"2px solid black"}},o.a.createElement(b.a.Img,{style:{borderRadius:0,height:"auto",width:"100%",maxWidth:"300px"},src:c?"".concat("https://image.tmdb.org/t/p/original/").concat(c):k.a,alt:t,onError:this.addDefaultSrcToImg}),o.a.createElement(b.a.Body,{style:{border:"2px solid #cccccc"}},o.a.createElement(b.a.Title,null,o.a.createElement("span",{className:"green-text"},t)),o.a.createElement(b.a.Text,null,o.a.createElement("span",{className:"green-text"},"Birthday:")," ",a),o.a.createElement(b.a.Text,null,o.a.createElement("span",{className:"green-text"},"Work:")," ",r),o.a.createElement(b.a.Text,null,o.a.createElement("span",{className:"green-text"},"Biography:")," ",s)),o.a.createElement(b.a.Body,{style:{border:"2px solid #cccccc",borderTop:"none"}},o.a.createElement("span",{className:"green-text"},"Movies:")," ",m)))))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:"/"},o.a.createElement(n.Fragment,null,o.a.createElement(B,null),o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/",component:T}),o.a.createElement(g.a,{exact:!0,path:"/movie/:movieID",component:W}),o.a.createElement(g.a,{exact:!0,path:"/cast/:personID",component:U}))))}}]),t}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/flickk-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/flickk-app","/service-worker.js");z?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.6ceed805.chunk.js.map