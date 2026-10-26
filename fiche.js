// Fiche produit (commune aux deux modèles)
(function(){
var css=".fm{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.65);z-index:30;display:none;align-items:flex-end;justify-content:center}"
+".fm.on{display:flex}"
+".fb{position:relative;background:var(--card,#fff);color:var(--t,#1a2540);width:100%;max-width:420px;border-radius:18px 18px 0 0;padding:18px;max-height:90vh;overflow-y:auto}"
+".fx{position:absolute;top:8px;right:12px;background:none;border:0;color:inherit;font-size:24px}"
+".fp{height:200px;display:flex;align-items:center;justify-content:center;font-size:90px;background:rgba(128,128,128,.15);border-radius:12px;margin-bottom:12px;overflow:hidden}"
+".fp img{width:100%;height:100%;object-fit:cover}"
+".fb h3{font-size:20px;margin-bottom:4px}"
+".fpr{color:var(--c);font-weight:bold;font-size:20px;margin-bottom:10px}"
+".fb p{font-size:14px;opacity:.85;margin-bottom:14px;line-height:1.5}"
+".fq{display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:14px}"
+".fq button{width:38px;height:38px;border-radius:50%;border:1px solid var(--c);background:transparent;color:var(--c);font-size:20px}"
+".fq span{font-size:18px;min-width:24px;text-align:center}"
+".fa{width:100%;background:var(--c);color:var(--card,#fff);border:0;border-radius:10px;padding:14px;font-size:16px;font-weight:bold}"
+".card .img,.card h3{cursor:pointer}"
+".card .img{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
var m=document.createElement("div");m.className="fm";
m.innerHTML='<div class="fb"><button class="fx" id="fx">✕</button><div class="fp" id="fp"></div><h3 id="fn"></h3><div class="fpr" id="fpr"></div><p id="fd"></p><div class="fq"><button id="fmn">-</button><span id="fqt">1</span><button id="fpl">+</button></div><button class="fa" id="fa">Ajouter au panier</button></div>';
document.body.appendChild(m);
var cur=null,q=1;
function g(i){return document.getElementById(i);}
function show(p){
cur=p;q=1;
g("fp").innerHTML=p.img?'<img src="'+p.img+'" alt="">':p.e;
g("fn").textContent=p.nom;
g("fpr").textContent=fcfa(p.prix);
g("fd").textContent=p.desc||"Article de qualité. Commandez-le facilement sur WhatsApp.";
g("fqt").textContent=1;
m.classList.add("on");
}
function hide(){m.classList.remove("on");}
m.addEventListener("click",function(e){if(e.target===m)hide();});
g("fx").onclick=hide;
g("fmn").onclick=function(){if(q>1){q--;g("fqt").textContent=q;}};
g("fpl").onclick=function(){q++;g("fqt").textContent=q;};
g("fa").onclick=function(){for(var i=0;i<q;i++){ajouter(cur.id);}hide();};
document.addEventListener("click",function(e){
var grid=g("grid");
if(!grid||!grid.contains(e.target)||e.target.closest(".add"))return;
var card=e.target.closest(".card");
if(!card)return;
var b=card.querySelector(".add");
var id=b&&b.getAttribute("onclick").match(/\d+/);
if(id){var p=trouve(id[0]);if(p){show(p);}}
});
})();
