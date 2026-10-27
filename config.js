// ============================================
// CONFIGURATION DE LA BOUTIQUE
// C'est le SEUL fichier à modifier pour un client
// ============================================
window.CONFIG = {
  nom: "Ma Boutique",
  icone: "🛍️",
  logo: "",
  whatsapp: "2250000000000",
  lieu: "Abidjan",
  email: "",
  devise: "FCFA",

  // Connexion à la base de données (clé PUBLIQUE uniquement)
  supabase: {
    url: "https://sqdlxotqhwfkfaleaynt.supabase.co",
    cle: "sb_publishable_kIrNaNVL8V-BbCAZREEfsw_d3cSeTbG"
  },

  // Laisser vide = couleurs du modèle. Sinon, code couleur, ex: "#e11d48"
  couleurs: { principale: "", secondaire: "", fond: "" },

  textes: {
    accroche: "Vos articles préférés, livrés chez vous",
    sousTitre: "Commandez en quelques clics sur WhatsApp",
    bouton: "Voir les articles",
    titreCatalogue: "Nos articles",
    titreAvis: "Avis de nos clients",
    titreContact: "Une question ? Écrivez-nous",
    messageContact: "Réponse rapide sur WhatsApp"
  },

  livraison: {
    rapide: "Livraison rapide",
    paiement: "Mobile Money ou à la livraison",
    garantie: "Qualité garantie"
  },

  avis: [
    { texte: "Très bon service, j'ai reçu ma commande le jour même !", auteur: "Awa, Abobo", etoiles: 5 },
    { texte: "Les articles sont conformes aux photos. Je recommande.", auteur: "Koffi, Yopougon", etoiles: 5 },
    { texte: "Prix corrects et vendeur très sérieux.", auteur: "Mariam, Cocody", etoiles: 4 }
  ],

  // Articles de secours (utilisés si la base ne répond pas)
  produits: [
    { id: 1, nom: "Chemise élégante", prix: 8000, cat: "Vêtements", e: "👕", b: "Nouveau", desc: "Chemise légère et confortable, parfaite pour le travail comme pour les sorties." },
    { id: 2, nom: "Pantalon classe", prix: 12000, cat: "Vêtements", e: "👖", desc: "Pantalon bien coupé, tissu résistant, facile à associer." },
    { id: 3, nom: "Robe d'été", prix: 15000, cat: "Vêtements", e: "👗", b: "Promo", desc: "Robe fluide et élégante, idéale pour la chaleur." },
    { id: 4, nom: "Baskets sport", prix: 20000, cat: "Chaussures", e: "👟", b: "Nouveau", desc: "Baskets confortables avec bonne adhérence, pour le sport et tous les jours." },
    { id: 5, nom: "Sandales", prix: 6000, cat: "Chaussures", e: "🩴", desc: "Sandales légères et pratiques pour tous les jours." },
    { id: 6, nom: "Casquette", prix: 3000, cat: "Accessoires", e: "🧢", desc: "Casquette ajustable, protège du soleil avec style." },
    { id: 7, nom: "Sac à main", prix: 10000, cat: "Accessoires", e: "👜", b: "Promo", desc: "Sac spacieux et solide, plusieurs compartiments." },
    { id: 8, nom: "Montre", prix: 18000, cat: "Accessoires", e: "⌚", desc: "Montre élégante, bracelet réglable." }
  ]
};

// Chargement automatique de la fiche produit et de la base de données
window.addEventListener("load", function () {
  ["fiche.js", "donnees.js"].forEach(function (f) {
    var s = document.createElement("script");
    s.src = f;
    document.body.appendChild(s);
  });
});
