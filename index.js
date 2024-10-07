import{a as b,S as w,i as p}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S=async(e,r,a)=>{const o=new URLSearchParams({key:"46368026-ceb8dba76cba5a0f9c417db4a",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:r});return b.get(`https://pixabay.com/api/?${o.toString()}`)},P=new w(".search-result li a",{captionsData:"alt",captionDelay:250}),f=e=>{p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},q=e=>{e.innerHTML="",p.error({message:"Something went wrong. Please try again!",position:"topRight"})},M=(e,r)=>{e.insertAdjacentHTML("beforeend",r.map(H).join("")),P.refresh()},T=e=>{e.innerHTML="<span class='loader'/>"},R=e=>{e.innerHTML=""},c=(e,r)=>{r?e.classList.remove("hidden"):e.classList.add("hidden")},H=e=>`
    <li class='search-result-item'>
      <a href='${e.largeImageURL}'>
        <img class='search-result-item-image' src='${e.webformatURL}' alt='${e.tags}'/>
      </a>
      <ul class='search-result-item-text'>
        <li class='field'>
          <div class='label'>
            Likes
          </div>
          <div class='value'>
            ${e.likes}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Views
          </div>
          <div class='value'>
            ${e.views}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Comments
          </div>
          <div class='value'>
            ${e.comments}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Downloads
          </div>
          <div class='value'>
            ${e.downloads}
          </div>
        </li>
      </ul>
    </li>
  `,O=e=>{e.innerHTML=`
    <div class='last-message'>We're sorry, but you've reached the end of search results.</div>
  `},y=document.querySelector("form"),h=y.querySelector('button[type="submit"]'),$=document.querySelector("input"),u=document.querySelector(".search-result"),d=document.querySelector(".search-loader-container"),v=document.querySelector(".last-message-container"),l=document.querySelector(".search-load-more"),g=15;let i=1,m="";y.addEventListener("submit",async e=>{e.preventDefault(),i=1,u.innerHTML="",v.innerHTML="",L($.value.trim())});l.addEventListener("click",()=>{L(m,!0)});const L=async(e,r=!1)=>{if(e.length===0){c(l,!1),i=1,f();return}c(l,!1),T(d),h.disabled=!0;try{m!==e&&(i=1),m=e;const a=await S(e,i,g);if(a.data.hits.length===0)f(u);else{M(u,a.data.hits);const o=i*g;if(a.data.totalHits-o<0?O(v):c(l,!0),r){const n=document.querySelector("li.search-result-item").getBoundingClientRect();window.scrollBy({behavior:"smooth",top:3*(n.height+24)})}i++}}catch{q(d)}finally{R(d),h.disabled=!1}};
//# sourceMappingURL=index.js.map
