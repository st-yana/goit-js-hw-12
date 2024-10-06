import{a as L,S as b,i as p}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const w=async(e,r,a)=>{const o=new URLSearchParams({key:"46368026-ceb8dba76cba5a0f9c417db4a",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:r});return L.get(`https://pixabay.com/api/?${o.toString()}`)},S=new b(".search-result li a",{captionsData:"alt",captionDelay:250}),P=e=>{p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},q=e=>{e.innerHTML="",p.error({message:"Something went wrong. Please try again!",position:"topRight"})},M=(e,r)=>{e.insertAdjacentHTML("beforeend",r.map(H).join("")),S.refresh()},T=e=>{e.innerHTML="<span class='loader'/>"},R=e=>{e.innerHTML=""},m=(e,r)=>{r?e.classList.remove("hidden"):e.classList.add("hidden")},H=e=>`
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
  `},g=document.querySelector("form"),f=g.querySelector('button[type="submit"]'),$=document.querySelector("input"),c=document.querySelector(".search-result"),l=document.querySelector(".search-loader-container"),y=document.querySelector(".last-message-container"),d=document.querySelector(".search-load-more"),h=15;let n=1,u="";g.addEventListener("submit",async e=>{e.preventDefault(),n=1,c.innerHTML="",y.innerHTML="",v($.value)});d.addEventListener("click",()=>{v(u,!0)});const v=async(e,r=!1)=>{m(d,!1),T(l),f.disabled=!0;try{u!==e&&(n=1),u=e;const a=await w(e,n,h);if(a.data.hits.length===0)P(c);else{M(c,a.data.hits);const o=n*h;if(a.data.totalHits-o<15?O(y):m(d,!0),r){const i=document.querySelector("li.search-result-item").getBoundingClientRect();window.scrollBy({behavior:"smooth",top:3*(i.height+24)})}n++}}catch{q(l)}finally{R(l),f.disabled=!1}};
//# sourceMappingURL=index.js.map
