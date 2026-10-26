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

  // b = badge facultatif ("Nouveau", "Promo")
  produits: [
    { id: 1, nom: "Chemise élégante", prix: 8000, cat: "Vêtements", e: "👕", b: "Nouveau" },
    { id: 2, nom: "Pantalon classe", prix: 12000, cat: "Vêtements", e: "👖" },
    { id: 3, nom: "Robe d'été", prix: 15000, cat: "Vêtements", e: "👗", b: "Promo" },
    { id: 4, nom: "Baskets sport", prix: 20000, cat: "Chaussures", e: "👟", b: "Nouveau" },
    { id: 5, nom: "Sandales", prix: 6000, cat: "Chaussures", e: "🩴" },
    { id: 6, nom: "Casquette", prix: 3000, cat: "Accessoires", e: "🧢" },
    { id: 7, nom: "Sac à main", prix: 10000, cat: "Accessoires", e: "👜", b: "Promo" },
    { id: 8, nom: "Montre", prix: 18000, cat: "Accessoires", e: "⌚" }
  ]
};
