import{a as f,S as d,i as a}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="49761325-2d6c711c31334dde327695ca9",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(m,{params:o})).data}catch(e){throw console.error("Pixabay API Error:",e),e}}const u=document.querySelector(".gallery"),i=document.createElement("span");i.classList.add("loader");gallery.append(i);let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="info-list">
        <li class="info-item">Likes:<span> ${e.likes}</span></li>
        <li class="info-item">Views:<span> ${e.views}</span></li>
        <li class="info-item">Comments:<span> ${e.comments}</span></li>
        <li class="info-item">Downloads:<span> ${e.downloads}</span></li>
      </ul>
    </li>`).join("");u.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){u.innerHTML=""}function w(){i.classList.add("visible")}function b(){i.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const e=await y(o);if(!e.hits.length){a.info({title:"No results",message:"Sorry, nothing found for your query.",position:"topRight"});return}h(e.hits)}catch{a.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
