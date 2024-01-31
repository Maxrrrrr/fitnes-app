import{a as j,S as A}from"./vendor-9a5feb6b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const fe=window.location.pathname,Ee=fe.lastIndexOf("/"),ge=fe.substring(Ee),$e=e=>{localStorage.setItem("theme-preference",e)},Ce=()=>localStorage.getItem("theme-preference")||"light";let p=Ce()==="dark";const oe=document.querySelectorAll(".theme-toggle");oe.forEach(e=>{e.checked=p,e.addEventListener("change",()=>{p=e.checked,oe.forEach(t=>{t!==e&&(t.checked=p)}),document.body.setAttribute("theme",p?"dark":"light"),ge==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light"),$e(p?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",p?"dark":"light"),ge==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",p?"dark":"light")});function Ie(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),n=document.querySelector(".burger-menu"),s=document.querySelector(".burger-menu-close");n.addEventListener("click",()=>{e.classList.toggle("is-open")}),s.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(o=>o.addEventListener("click",()=>{e.classList.remove("is-open")}))}Ie();function Me(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}Me();j.defaults.baseURL="https://energyflow.b.goit.study/api";async function y(e,t={}){try{return(await j.get(`/${e}`,{params:t})).data}catch(n){console.error(n)}}function z(e,t){e.querySelectorAll("button").forEach(n=>n.classList.remove("active")),t.classList.add("active")}function B(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function O(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}const he=window.location.pathname,Pe=he.lastIndexOf("/"),re=he.substring(Pe);let I,M,pe,T,ye;(re==="/index.html"||re==="/")&&(I=document.querySelector(".form-search-exercises"),M=document.querySelector(".cards-workout-list"),pe=document.querySelector(".pagination-cards-workout-box"),T=document.querySelector(".search-info-message"),ye=I.elements.search,I.addEventListener("submit",Be));async function Be(e){e.preventDefault(),B([T]),O([M]),M.innerHTML="",pe.innerHTML="";try{const t=await y(`exercises?${h}=${E}`,{page:d,limit:N,keyword:ye.value});if(!t.results.length){B([M]),O([T]);return}K(t.results)}catch{k()}finally{I.reset()}}const W="/fitnes-app/assets/sprite-31c6263f.svg";let Y,D,S,se,_,ie,R,x,q,F,H,d,h,E,N;const ve=window.location.pathname,Oe=ve.lastIndexOf("/"),ae=ve.substring(Oe);(ae==="/index.html"||ae==="/")&&(Y=document.querySelector(".buttons-filter-container"),D=document.querySelector(".cards-workout-list"),S=document.querySelector(".pagination-cards-workout-box"),se=document.querySelector(".slash"),_=document.querySelector(".exercises-subtitle"),ie=document.querySelector(".form-search-exercises"),x=document.querySelector(".exercises-list"),q=document.querySelector(".pagination-exercises-box"),F=document.querySelector(".exercises-page-container"),R=[se,_,ie,D],H=innerWidth<768?8:12,N=innerWidth<1440?8:9,d=1,h="Muscles",Y.addEventListener("click",De),x.addEventListener("click",Fe),window.addEventListener("load",Te));async function Te(){try{const e=await y(`filters?filter=${h}`,{limit:H,page:d});we(e.totalPages),G(e.results)}catch{k()}}async function De(e){const t=e.target.dataset.filter;if(t){h=t,d=1,z(Y,e.target),B([...R,T]),O([x]);try{const n=await y(`filters?filter=${h}`,{limit:H,page:d});D.innerHTML="",S.innerHTML="",G(n.results),we(n.totalPages)}catch{k()}}}function G(e){const t=e.reduce((n,{name:s,filter:o,imgUrl:r})=>n+`
  <li data-filter="${o==="Body parts"?"bodypart":o.toLowerCase()}" data-name="${s}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${r});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${s}</h2>
      <p class="exercise-card-desc-filter">${o}</p>
    </div>
  </li>
  `,"");x.innerHTML=t}function we(e){q.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const n=document.createElement("button");n.textContent=t,t===1&&n.classList.add("active"),n.addEventListener("click",s=>{z(q,s.target),Ae(t)}),q.appendChild(n)}}async function Ae(e){d=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`filters?filter=${h}`,{limit:H,page:d});G(t.results)}catch{k()}}async function Fe(e){const t=e.target.dataset.filter,n=e.target.dataset.name;if(t){h=t,E=n,d=1,F.scrollIntoView({behavior:"smooth"}),B([x]),_.textContent=E,O(R);try{const s=await y(`exercises?${h}=${E}`,{limit:N,page:d});x.innerHTML="",q.innerHTML="",K(s.results),He(s.totalPages)}catch{k()}}}function K(e){const t=e.reduce((n,{rating:s,target:o,bodyPart:r,burnedCalories:u,name:c,_id:f})=>(n+=`<li class="card-workout-item" data-id=${f}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(s)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="${W}#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button data-id=${f} class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="${W}#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="${W}#icon-human-ex"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${c}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${u} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${r}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${o}</p>
                    </div>
                </div>
            </li>`,n),"");D.innerHTML=t}function He(e){S.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const n=document.createElement("button");n.textContent=t,t===1&&n.classList.add("active"),n.addEventListener("click",s=>{z(S,s.target),Ne(t)}),S.appendChild(n)}}async function Ne(e){d=e;try{F.scrollIntoView({behavior:"smooth"});const t=await y(`exercises?${h}=${E}`,{limit:N,page:d});K(t.results)}catch{k()}}function k(){A.fire({text:"Oops, it seems something went wrong.",icon:"error"})}const xe=window.location.pathname,We=xe.lastIndexOf("/"),ce=xe.substring(We);if(ce==="/index.html"||ce==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),Ue(),e.reset()})}async function Ue(){const e=document.querySelector(".footer-form"),s={email:new FormData(e).get("email")};try{const r=(await j.post(e.action,s,{headers:{"Content-Type":"application/json"}})).data;r&&r.message&&_e()}catch(o){o.response&&o.response.status!==409&&Ve(),o.response&&o.response.status===409&&Ye()}}function Ve(){A.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function Ye(){A.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function _e(){A.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Je(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),n=document.querySelector(".modal-overlay"),s=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>n.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open"))}const ke=window.location.pathname,je=ke.lastIndexOf("/"),le=ke.substring(je);(le==="/index.html"||le==="/")&&Je();const be=window.location.pathname,ze=be.lastIndexOf("/"),Re=be.substring(ze);Re==="/page-2.html"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".favorites-list"),t=document.querySelector(".favorites-pagination-block"),n=document.querySelector(".message-info"),s=document.querySelector(".favorites-contanier-block");function o(){window.location.pathname==="/page-2.html"&&window.innerWidth<=767&&r()?t.style.display="flex":t.style.display="none"}function r(){return e&&e.offsetParent!==null}function u(){const f=window.innerWidth<=767&&r()?6:e.children.length;if(window.innerWidth>767&&r()){for(let a=0;a<e.children.length;a++)e.children[a].style.display="block";return}Math.ceil(e.children.length/f);let g=1;function b(a){const v=(a-1)*f,w=v+f;for(let l=0;l<e.children.length;l++)e.children[l].style.display="none";for(let l=v;l<w&&l<e.children.length;l++)e.children[l].style.display="block"}b(g),t.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(t.querySelectorAll("button").forEach(w=>w.classList.remove("active-btn")),a.target.classList.add("active-btn"),g=parseInt(a.target.textContent),b(g))})}r()?n.style.display="none":n.style.display="block";function c(){window.matchMedia("(min-width: 768px)").matches?s.style.overflowY="scroll":s.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?s.style.maxHeight="480px":s.style.maxHeight="none"}c(),o(),window.addEventListener("resize",function(){o(),u(),c()}),r()&&e.children.length>=6&&u()});const P="quoteDay",L=JSON.parse(localStorage.getItem(P)),U=document.querySelector(".quote-container-text"),de=document.querySelector(".quote-container-author"),V=new Date,$={date:V.getDate(),month:V.getMonth(),year:V.getFullYear()};!localStorage.getItem(P)||$.date!=L.date.date||$.month!=L.date.month||$.year!=L.date.year?(localStorage.removeItem(P),y("quote").then(e=>{U.textContent=e.quote,de.textContent=e.author,localStorage.setItem(P,JSON.stringify({author:e.author,quote:e.quote,date:$}))}).catch(e=>{console.log(e),U.textContent="Sorry, there was an error on the server"})):(U.textContent=L.quote,de.textContent=L.author);const J=document.querySelector(".scroll-top-btn");function Ge(){window.scrollY>700?J.classList.remove("is-hidden"):window.scrollY<700&&J.classList.add("is-hidden")}window.onscroll=Ge;J.onclick=()=>window.scrollTo(0,0);const Ke=document.getElementById("contact_modal"),C=document.querySelectorAll(".rating_button"),Ze=document.getElementById("rating_value"),ue=document.getElementById("email"),Qe=document.getElementById("text_fieldl"),Xe=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,et=document.getElementsByName("rate"),tt=document.getElementById("submit_btn"),Le=()=>{Ke.classList.toggle("active")};document.getElementById("contact_us").addEventListener("click",Le);document.getElementById("close_modal").addEventListener("click",Le);C.forEach((e,t)=>{e.addEventListener("change",function(){Ze.textContent=e.value,e.classList.add("active");for(let n=0;n<t;n++)C[n].classList.add("active");for(let n=t+1;n<C.length;n++)C[n].classList.remove("active")})});tt.addEventListener("click",e=>{if(e.preventDefault(),!Xe.test(ue.value))return alert("Incorrect email value");axios.post("https://energyflow.b.goit.study/api/",{rate:et.value,email:ue.value,review:Qe.value}).then(t=>{}).catch(t=>{})});const Se=window.location.pathname,nt=Se.lastIndexOf("/"),me=Se.substring(nt);if(me==="/index.html"||me==="/"){const e="#eea10c",t="#e8e8e8";let n,s,o="favorites",r=localStorage.getItem(o);r?r=JSON.parse(r):r=[];const u=document.querySelectorAll(".ex-rate-icon"),c=document.querySelector(".ex-add-favorities"),f=document.querySelector(".cards-workout-list"),g=document.querySelector(".ex-backdrop"),b=document.querySelector(".gif-ex"),a=document.querySelector(".exercise-name"),v=document.querySelector(".ex-current-rating"),w=document.querySelector(".ex-target"),l=document.querySelector(".ex-body-part"),Z=document.querySelector(".ex-equipment"),Q=document.querySelector(".ex-popular"),X=document.querySelector(".ex-burned-calories"),ee=document.querySelector(".ex-description");f.addEventListener("click",async m=>{m.target.classList.contains("btn-start-workout")|m.target.classList.contains("card-workout-start-icon")&&(n=m.target.closest(".card-workout-item").id,await y(`exercises/${n}`).then(i=>{b.src=i.gifUrl,a.textContent=i.name,v.textContent=i.rating,w.textContent=i.target,Q.textContent=i.popularity,l.textContent=i.bodyPart,Z.textContent=i.equipment,X.textContent=`${i.burnedCalories} / ${i.time}min`,ee.textContent=i.description,s=Math.round(v.textContent),u.forEach((ne,qe)=>{qe<s?ne.style.fill=e:ne.style.fill=t})}),r.find(i=>i.id===n)?c.textContent="Delete from favorites":c.textContent="Add to favorities",g.classList.add("is-open"))}),c.addEventListener("click",m=>{if(c.textContent.trim()=="Add to favorities")r.push({id:n,gifUrl:b.src,name:a.textContent,rating:v.textContent,target:w.textContent,popular:Q.textContent,bodyPart:l.textContent,equipment:Z.textContent,burnedCalories:X.textContent,description:ee.textContent}),localStorage.setItem(o,JSON.stringify(r)),c.textContent="Delete from favorites";else{const te=r.findIndex(i=>i.id==n);r.splice(te,1),localStorage.setItem(o,JSON.stringify(r)),c.textContent="Add to favorities"}}),g.addEventListener("click",m=>{(m.target==g||m.target.classList.contains("ex-close-btn-icon")||m.target.classList.contains("ex-close-btn"))&&g.classList.remove("is-open")}),document.addEventListener("keydown",m=>{m.key==="Escape"&&g.classList.remove("is-open")})}
//# sourceMappingURL=cardModal-2993339d.js.map
