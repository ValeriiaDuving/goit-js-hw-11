import{a as f,S as d,i as n}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="49761325-2d6c711c31334dde327695ca9",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(m,{params:o})).data}catch(e){throw console.error("Pixabay API Error:",e),e}}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
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
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){c.innerHTML=""}function w(){u.classList.add("visible")}function b(){u.classList.remove("visible")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const o=l.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const e=await y(o);if(!e.hits.length){n.info({title:"No results",message:"Sorry, nothing found for your query.",position:"topRight"});return}h(e.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
