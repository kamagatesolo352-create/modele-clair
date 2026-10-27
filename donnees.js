// Connexion à Supabase : articles et commandes
(function(){
var S = window.CONFIG && window.CONFIG.supabase;
if(!S || !S.url || !S.cle){ return; }
var H = {apikey:S.cle, Authorization:"Bearer "+S.cle, "Content-Type":"application/json"};

function charger(){
  var u = S.url+"/rest/v1/products?select=id,nom,description,prix,categorie,emoji,image_url,badge,stock&actif=eq.true&order=id";
  fetch(u,{headers:H})
  .then(function(r){ if(!r.ok){ throw new Error(r.status); } return r.json(); })
  .then(function(l){
    if(!l.length){ return; }
    produits.length = 0;
    l.forEach(function(p){
      if(p.stock > 0){
        produits.push({id:p.id, nom:p.nom, prix:p.prix, cat:p.categorie||"Divers", e:p.emoji||"🛍️", b:p.badge||"", desc:p.description||"", img:p.image_url||"", stock:p.stock});
      }
    });
    cats.length = 1;
    produits.forEach(function(p){ if(cats.indexOf(p.cat)<0){ cats.push(p.cat); } });
    filtre = "Tout";
    barre(); grille();
  })
  .catch(function(){ /* problème : on garde les articles de config.js */ });
}

window.commander = function(){
  var ids = Object.keys(panier);
  if(!ids.length){ alert("Votre panier est vide"); return; }
  var nom = document.getElementById("nom").value.trim();
  var lieu = document.getElementById("lieu").value.trim();
  if(!nom || !lieu){ alert("Indiquez votre nom et votre lieu de livraison"); return; }
  var btn = document.getElementById("send");
  btn.disabled = true; btn.textContent = "Envoi en cours...";
  var items = ids.map(function(id){ return {id:Number(id), q:panier[id]}; });
  fetch(S.url+"/rest/v1/rpc/create_order",{
    method:"POST", headers:H,
    body:JSON.stringify({p_nom:nom, p_lieu:lieu, p_tel:null, p_items:items})
  })
  .then(function(r){ return r.json().then(function(d){ return {ok:r.ok, d:d}; }); })
  .then(function(x){
    if(!x.ok){ throw new Error((x.d && x.d.message) || "Erreur"); }
    var m = "Bonjour, je souhaite commander (commande n° "+x.d+") :\n", t = 0;
    ids.forEach(function(id){
      var p = trouve(id);
      m += "- "+p.nom+" x"+panier[id]+" = "+fcfa(p.prix*panier[id])+"\n";
      t += p.prix*panier[id];
    });
    m += "\nTotal : "+fcfa(t)+"\nNom : "+nom+"\nLivraison : "+lieu;
    panier = {}; maj(); toggle();
    window.location.href = "https://wa.me/"+window.CONFIG.whatsapp+"?text="+encodeURIComponent(m);
  })
  .catch(function(e){ alert("La commande n'a pas pu être enregistrée : "+e.message); })
  .then(function(){ btn.disabled = false; btn.textContent = "Commander sur WhatsApp"; });
};

charger();
})();
