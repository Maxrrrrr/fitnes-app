import{a as M,S as P}from"./vendor-cd480503.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const R=window.location.pathname,ie=R.lastIndexOf("/"),_=R.substring(ie),le=e=>{localStorage.setItem("theme-preference",e)},de=()=>localStorage.getItem("theme-preference")||"light";let i=de()==="dark";const O=document.querySelectorAll(".theme-toggle");O.forEach(e=>{e.checked=i,e.addEventListener("change",()=>{i=e.checked,O.forEach(t=>{t!==e&&(t.checked=i)}),document.body.setAttribute("theme",i?"dark":"light"),_==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",i?"dark":"light"),le(i?"dark":"light")})});document.addEventListener("DOMContentLoaded",()=>{document.body.setAttribute("theme",i?"dark":"light"),_==="/page-2.html"&&document.querySelector(".logo").setAttribute("theme",i?"dark":"light")});function ue(){const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelectorAll(".nav-link"),o=document.querySelector(".burger-menu"),r=document.querySelector(".burger-menu-close");o.addEventListener("click",()=>{e.classList.toggle("is-open")}),r.addEventListener("click",()=>{e.classList.toggle("is-open")}),t.forEach(n=>n.addEventListener("click",()=>{e.classList.remove("is-open")}))}ue();function me(){const e=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const t=window.location.pathname;t.includes("index.html")||t=="/fitnes-app/"?(e[0].classList.add("active-link"),e[2].classList.add("active-link")):t.includes("page-2.html")&&(e[1].classList.add("active-link"),e[3].classList.add("active-link"))})}me();M.defaults.baseURL="https://energyflow.b.goit.study/api";async function l(e,t={}){try{return(await M.get(`/${e}`,{params:t})).data}catch(o){console.error(o)}}function C(e,t){e.querySelectorAll("button").forEach(o=>o.classList.remove("active")),t.classList.add("active")}function z(e=[]){e.forEach(t=>t.classList.add("is-hidden"))}function G(e=[]){e.forEach(t=>t.classList.remove("is-hidden"))}let q,y,f,A,F,H,T,d,g,k,L,a,c,w,x;const K=window.location.pathname,fe=K.lastIndexOf("/"),W=K.substring(fe);(W==="/index.html"||W==="/")&&(q=document.querySelector(".buttons-filter-container"),y=document.querySelector(".cards-workout-list"),f=document.querySelector(".pagination-cards-workout-box"),A=document.querySelector(".slash"),F=document.querySelector(".exercises-subtitle"),H=document.querySelector(".form-search-exercises"),d=document.querySelector(".exercises-list"),g=document.querySelector(".pagination-exercises-box"),k=document.querySelector(".exercises-page-container"),T=[A,F,H,y],L=innerWidth<768?8:12,x=innerWidth<1440?8:9,a=1,c="Muscles",q.addEventListener("click",he),d.addEventListener("click",ve),window.addEventListener("load",ge));async function ge(){try{const e=await l(`filters?filter=${c}`,{limit:L,page:a});Q(e.totalPages),B(e.results)}catch(e){console.error(e)}}async function he(e){const t=e.target.dataset.filter;if(t){c=t,a=1,C(q,e.target),z(T),G([d]);try{const o=await l(`filters?filter=${c}`,{limit:L,page:a});y.innerHTML="",f.innerHTML="",B(o.results),Q(o.totalPages)}catch(o){console.error(o)}}}function B(e){const t=e.reduce((o,{name:r,filter:n,imgUrl:s})=>o+`
  <li data-filter="${n==="Body parts"?"bodypart":n.toLowerCase()}" data-name="${r}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${s});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${r}</h2>
      <p class="exercise-card-desc-filter">${n}</p>
    </div>
  </li>
  `,"");d.innerHTML=t}function Q(e){g.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{C(g,r.target),pe(t)}),g.appendChild(o)}}async function pe(e){a=e;try{k.scrollIntoView({behavior:"smooth"});const t=await l(`filters?filter=${c}`,{limit:L,page:a});B(t.results)}catch(t){console.error(t)}}async function ve(e){const t=e.target.dataset.filter,o=e.target.dataset.name;if(t){c=t,w=o,a=1,k.scrollIntoView({behavior:"smooth"}),z([d]),G(T);try{const r=await l(`exercises?${c}=${w}`,{limit:x,page:a});d.innerHTML="",g.innerHTML="",D(r.results),ye(r.totalPages)}catch(r){console.log(r)}}}function D(e){const t=e.reduce((o,{rating:r,target:n,bodyPart:s,burnedCalories:u,name:ae,_id:ce})=>(o+=`<li class="card-workout-item" id=${ce}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(r)}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="./images/sprite.svg#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="../images/sprite.svg#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="../images/sprite.svg#icon-human"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${ae}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${u} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${s}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${n}</p>
                    </div>
                </div>
            </li>`,o),"");y.innerHTML=t}function ye(e){f.innerHTML="";for(let t=1;t<=e&&!(t>3);t++){const o=document.createElement("button");o.textContent=t,t===1&&o.classList.add("active"),o.addEventListener("click",r=>{C(f,r.target),we(t)}),f.appendChild(o)}}async function we(e){a=e;try{k.scrollIntoView({behavior:"smooth"});const t=await l(`exercises?${c}=${w}`,{limit:x,page:a});D(t.results)}catch(t){console.error(t)}}const X=window.location.pathname,ke=X.lastIndexOf("/"),N=X.substring(ke);if(N==="/index.html"||N==="/"){const e=document.querySelector(".footer-form");e.addEventListener("submit",function(t){t.preventDefault(),Le(),e.reset()})}async function Le(){const e=document.querySelector(".footer-form"),r={email:new FormData(e).get("email")};try{const s=(await M.post(e.action,r,{headers:{"Content-Type":"application/json"}})).data;s&&s.message&&Se()}catch(n){n.response&&n.response.status!==409&&xe(),n.response&&n.response.status===409&&be()}}function xe(){P.fire({title:"Bad request",text:"Something went wrong.",icon:"error"})}function be(){P.fire({title:"Warning!",text:"Subscription already exists",icon:"warning"})}function Se(){P.fire({title:"Good job!",text:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",icon:"success"})}function Ee(){const e=document.querySelector(".foter-privacy-policy"),t=document.querySelector(".footer-terms-of-service"),o=document.querySelector(".modal-overlay"),r=document.querySelector(".privacy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>o.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),o.addEventListener("click",()=>o.classList.remove("is-open"))}const Z=window.location.pathname,qe=Z.lastIndexOf("/"),U=Z.substring(qe);(U==="/index.html"||U==="/")&&Ee();let ee,$;const V=6;window.location.pathname==="/page-2.html"&&(ee=document.querySelector(".favorites-list"),$=document.querySelectorAll(".favorites-pagination-block button"),Y(1),$.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);Y(t)})}));function Y(e){const t=(e-1)*V,o=t+V;ee.querySelectorAll(".favorites-list-item").forEach((n,s)=>{s>=t&&s<o?n.style.display="block":n.style.display="none"}),$.forEach(n=>{parseInt(n.textContent)===e?n.classList.add("active-btn"):n.classList.remove("active-btn")})}const v="quoteDay",m=JSON.parse(localStorage.getItem(v)),b=document.querySelector(".quote-container-text"),j=document.querySelector(".quote-container-author"),S=new Date,h={date:S.getDate(),month:S.getMonth(),year:S.getFullYear()};!localStorage.getItem(v)||h.date!=m.date.date&&h.month!=m.date.month&&h.year!=m.date.year?(localStorage.removeItem(v),l("quote").then(e=>{b.textContent=e.quote,j.textContent=e.author,localStorage.setItem(v,JSON.stringify({author:e.author,quote:e.quote,date:h}))}).catch(e=>{console.log(e),b.textContent="Sorry, there was an error on the server"})):(b.textContent=m.quote,j.textContent=m.author);const te=window.location.pathname,$e=te.lastIndexOf("/"),J=te.substring($e);let E,oe,ne,re;(J==="/index.html"||J==="/")&&(E=document.querySelector(".form-search-exercises"),oe=document.querySelector(".cards-workout-list"),ne=document.querySelector(".pagination-cards-workout-box"),re=E.elements.search,E.addEventListener("submit",Ie));async function Ie(e){oe.innerHTML="",ne.innerHTML="",e.preventDefault();try{const t=await l(`exercises?${c}=${w}`,{page:a,limit:x,keyword:re.value});D(t.results)}catch(t){console.log(t)}}const I=document.querySelector(".scroll-top-btn");function Me(){window.scrollY>700?I.classList.remove("is-hidden"):window.scrollY<700&&I.classList.add("is-hidden")}window.onscroll=Me;I.onclick=()=>window.scrollTo(0,0);const Pe=document.getElementById("rating-contact-modal"),p=document.querySelectorAll(".rating-button"),Ce=document.getElementById("rating-value"),se=()=>{Pe.classList.toggle("active")};document.getElementById("contact_us").addEventListener("click",se);document.getElementById("close_modal").addEventListener("click",se);p.forEach((e,t)=>{e.addEventListener("change",function(){Ce.textContent=e.value,e.classList.add("active");for(let o=0;o<t;o++)p[o].classList.add("active");for(let o=t+1;o<p.length;o++)p[o].classList.remove("active")})});
//# sourceMappingURL=ratingModal-dabd754c.js.map
