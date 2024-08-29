import{i as d,S as m}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="https://pixabay.com/api",f=t=>{const s=new URLSearchParams({key:"45695124-2521d690be74d3f32382c65dc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${s}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},h=t=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img 
      class="gallery-img" 
      src="${t.webformatURL}" 
      alt="${t.tags}" />
    </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${t.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${t.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${t.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${t.downloads}</span>
      </li>
    </ul>
  </div>
</li>
    `,n=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),y=t=>{t.preventDefault();const s=n.elements.user_query.value;function a(){c.classList.remove("is-hidden")}function o(){c.classList.add("is-hidden")}a(),setTimeout(o,300),f(s).then(e=>{if(!e.hits.length){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),i.innerHTML="",n.reset();return}const r=e.hits.map(u=>h(u)).join("");i.innerHTML=r,new m(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0}).refresh()}).catch(e=>{console.log(e)})};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
