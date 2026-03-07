/**
 * ============================================
 * FICHIER DE CONFIGURATION OP360
 * ============================================
 * Pour modifier le site, changez uniquement ce fichier.
 * Pas besoin de toucher aux autres fichiers.
 * 
 * COMMENT MODIFIER :
 * - Changez un texte entre guillemets
 * - Sauvegardez le fichier
 * - Re-déposez le dossier sur Netlify
 * ============================================
 */

const OP360 = {

  // ── INFOS GÉNÉRALES ──────────────────────────────
  entreprise: {
    nom: "Operating Partners 360",
    slogan: "Vous portez la Vision, la Stratégie et le Risque. Nous accélérons et sécurisons l'Exécution.",
    email: "contact@operating360.com",
    emailRichard: "richard.paquette@operating360.com",
    tel: "06 51 72 15 24",
    adresse: "99 avenue Achille Peretti, 92200 Neuilly-sur-Seine",
    linkedin: "https://www.linkedin.com/company/operating360",
    rdv: "https://eu.bigin.online/org20111341014/bookings/contact-op360",
  },

  // ── PHOTOS (URLs Unsplash — libres de droits) ─────
  // Pour changer une photo : remplacez l'URL par une autre URL d'image
  photos: {
    hero:         "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80", // Route montagne
    moments:      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80", // Réunion équipe diverse
    terrain:      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80", // Femme tablette industrie
    equipe_bg:    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", // Équipe collaborative
    workshop:     "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80", // Workshop tableau blanc
    diagnostic:   "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80", // Dashboard stratégie
    // Photos fondateurs (récupérées depuis operating360.com)
    annie:        "https://operating360.com/_assets/v11/fc62ef918429c6b134bc819dcd0ab5300a56aff7.png",
    christophe:   "https://operating360.com/_assets/v11/0d2a1023ad5820c69a65779194a7ffa09d1867a6.png",
    suzanne:      "https://operating360.com/_assets/v11/65a4c6227ef12db51910bb9cb6ab8dee23fa0891.png",
    richard:      "https://operating360.com/_assets/v11/2f8733a0399f8085163edaa1a7d0725dc2b2f4f4.png",
  },

  // ── PAGE HOME ─────────────────────────────────────
  home: {
    hero_titre1:  "Vous portez la Vision,",
    hero_titre2:  "la Stratégie et le Risque.",
    hero_accent:  "Nous accélérons et sécurisons l'Exécution.",
    hero_sous_titre: "Dirigeants de PME, ETI, investisseurs… OP360, des pairs à vos côtés, pour transformer vos ambitions en résultats opérationnels, accroître la valeur et sécuriser vos décisions.",
    stat1_nb: "8", stat1_label: "jours Diagnostic Flash",
    stat2_nb: "12", stat2_label: "domaines d'analyse",
    stat3_nb: "360°", stat3_label: "vision systémique",
    stat4_nb: "4", stat4_label: "pairs dirigeants",
  },

  // ── 3 MOMENTS CLÉS ───────────────────────────────
  moments: [
    {
      icone: "🚀",
      titre: "Ambition de Croissance",
      valeur: "Organisation adaptée, Croissance sécurisée.",
      cas: "PME visant à doubler son CA en 5 ans. Organisation saturée, besoin de structurer sans freiner la dynamique commerciale et innovation.",
    },
    {
      icone: "🔄",
      titre: "Transitions Critiques",
      valeur: "Sécurisation de la transition et maintien de la performance.",
      cas: "Moments de vulnérabilité où continuité opérationnelle et Valeurs sont en jeu : acquisition, transmission, fusion, changement organisationnel ou de stratégie.",
    },
    {
      icone: "⚡",
      titre: "Retournement",
      valeur: "Contribution à la stabilisation et au redressement de la performance.",
      cas: "Rentabilité en chute, trésorerie tendue, nécessitant un diagnostic rapide et des actions ciblées immédiatement actionnables.",
    },
  ],

  // ── 6 DIFFÉRENCIATEURS ───────────────────────────
  differenciateurs: [
    {
      nb:"1",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h2"/><circle cx="17" cy="9" r="3"/><path d="M21 21v-2a5 5 0 0 0-5-5h-1"/></svg>`,
      titre:"Shadow Codir",
      desc:"Collectif de pairs dirigeants, mobilisable ad hoc"
    },
    {
      nb:"2",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
      titre:"Approche 360° systémique",
      desc:"12 domaines pour agir sur les causes profondes"
    },
    {
      nb:"3",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      titre:"Parcours d'exécution",
      desc:"Adapté à votre dimension, immersion ou appui"
    },
    {
      nb:"4",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      titre:"Intelligence de situation",
      desc:"Méthodes adaptées aux dynamiques du terrain"
    },
    {
      nb:"5",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      titre:"Outils numériques dédiés",
      desc:"Plateforme SaaS pour piloter vos projets stratégiques"
    },
    {
      nb:"6",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      titre:"Formation & transmission",
      desc:"Vers l'autonomie durable de vos équipes"
    },
  ],

  // ── 6 OFFRES ──────────────────────────────────────
  offres: [
    { icone:"⚡", titre:"Diagnostic OP360", href:"diagnostic.html", featured:true, badge:"Recommandé", bullets:["Évaluation maturité d'exécution de la stratégie","12 domaines analysés et scorés","Identification des priorités & leviers de valeur","Plan d'action + parcours d'exécution complet","8 jours pour voir clair et agir juste"] },
    { icone:"👥", titre:"Shadow Codir", href:"shadow-codir.html", featured:false, badge:"", bullets:["Collectif ad hoc multisectoriel et multifonctionnel","Mobilisable ponctuellement ou récurrent","Nativement intégré aux diagnostics"] },
    { icone:"🤝", titre:"Accompagnement Terrain", href:"accompagnement.html", featured:false, badge:"", bullets:["À la dimension de l'entreprise","En immersion ou en appui","Individuel ou par une équipe","Formats hybrides et flexibles"] },
    { icone:"🔬", titre:"Due Diligence Opérationnelle", href:"due-diligence.html", featured:false, badge:"", bullets:["Analyse approfondie pré/post investissement","Cession, acquisition, transmission","Volet RSE intégré (CSRD/ESG)"] },
    { icone:"🎓", titre:"Formations & Workshops", href:"formations.html", featured:false, badge:"", bullets:["Résolution de problèmes complexes","Leadership, management, innovation","Finance, Lean, Négociation, IA dirigeants"] },
    { icone:"💻", titre:"Plateforme SaaS OP360", href:"saas.html", featured:false, badge:"", bullets:["Pilotage performance et projets stratégiques","Idea Vault augmentée","Réduction de la charge mentale du dirigeant"] },
  ],

  // ── TÉMOIGNAGES ───────────────────────────────────
  temoignages: [
    { quote:"Avec le seul diagnostic, il y a un avant et un après.", auteur:"Directeur Général", entreprise:"PME Industrielle" },
    { quote:"Un accompagnement bienveillant et une exécution terrain efficace, unanimement salués. Par ces quelques mots, merci.", auteur:"Directeur Général", entreprise:"ETI Agro-alimentaire" },
    { quote:"En quelques mois à nos côtés leurs interventions nous ont fait grandir et passer à une nouvelle étape.", auteur:"Président", entreprise:"Coopérative Mobilités" },
    { quote:"Cet accompagnement a sécurisé la décision, y compris lorsqu'elle a conduit à un non-investissement, en apportant méthode, lucidité et sérénité.", auteur:"Investisseur", entreprise:"" },
  ],

  // ── ÉQUIPE ────────────────────────────────────────
  equipe: [
    { prenom:"Annie", nom:"Belquin", titre:"Présidente", photo:"annie", expertise:"Vision stratégique & gouvernance" },
    { prenom:"Richard", nom:"Paquette", titre:"Directeur Général", photo:"richard", expertise:"Exécution opérationnelle & développement" },
    { prenom:"Suzanne", nom:"Grimal", titre:"Directrice de la Valeur", photo:"suzanne", expertise:"Création de valeur & transformation" },
    { prenom:"Christophe", nom:"Raix", titre:"Directeur de l'Innovation", photo:"christophe", expertise:"Innovation & outils numériques" },
  ],

  // ── PAGE DIAGNOSTIC FLASH ─────────────────────────
  diagnostic: {
    titre: "8 jours pour voir clair et agir juste",
    sous_titre: "Vous maîtrisez la vision et la stratégie. Et l'exécution ?",
    livrables: [
      { icone:"📄", titre:"Rapport de diagnostic détaillé", desc:"12 domaines analysés, scorés et commentés avec lecture croisée de vos enjeux stratégiques." },
      { icone:"🎨", titre:"Executive Pack visuel", desc:"Synthèse avec heatmaps, radar de maturité et matrice impact/priorité pour décider en un coup d'œil." },
      { icone:"⚡", titre:"Plan d'action priorisé", desc:"Actions concrètes actionnables immédiatement pour des résultats mesurables dès les premières semaines." },
      { icone:"🗺", titre:"Parcours d'exécution complet", desc:"Plan intégral adapté à votre dimension et vos ressources, global et par domaine." },
    ],
  },

};

// Export pour utilisation dans les pages HTML
if (typeof module !== 'undefined') module.exports = OP360;
