import{s as l}from"./footer-C7QiAhEq.js";import{c as o,g as c,r as i}from"./storage-IqBxPCzt.js";l();const a=document.getElementById("favorites-list"),n=document.getElementById("clear-all"),d=document.getElementById("status");function s(){const t=c();if(t.length===0){a.innerHTML='<p class="empty">No favorites yet. Go save some on the Home page!</p>',n.style.display="none";return}n.style.display="inline-block",a.innerHTML=t.map((e,r)=>`
      <div class="card">
        <img src="${e.image}" alt="Saved dog" />
        <p class="advice">${m(e.advice)}</p>
        <button class="danger" data-index="${r}">Remove</button>
      </div>`).join(""),a.querySelectorAll("button[data-index]").forEach(e=>{e.addEventListener("click",()=>{i(Number(e.dataset.index)),s()})})}n.addEventListener("click",()=>{o(),d.textContent="All favorites cleared.",s()});function m(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}s();
