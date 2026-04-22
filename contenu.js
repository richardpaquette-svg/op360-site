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
 * - Poussez sur GitHub — Cloudflare Pages redéploie automatiquement
 * ============================================
 */

const OP360 = {

  // ── INFOS GÉNÉRALES ─────────────────────────────────
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
    // Photos fondateurs — fichiers locaux servis par Cloudflare Pages
    annie:        "public/team/annie.png",
    christophe:   "public/team/christophe.png",
    suzanne:      "public/team/suzanne.png",
    richard:      "public/team/richard.png",
  },

  // ── PAGE HOME ───────────────────────────────────
  home: {
    hero_titre1:  "Vous portez la Vision,",
    hero_titre2:  "la Stratégie et le Risque.",
    hero_accent:  "Nous accélérons et sécurisons l'Exécution.",
    hero_sous_titre: "Dirigeants de PME, ETI et investisseurs : des pairs-partenaires qui ont vécu les mêmes défis que vous — engagés à vos côtés pour transformer vos ambitions en résultats.",
  },

  // ── 3 MOMENTS CLÉS ──────────────────────────────
  // Icônes en Tangerine #F79009 (Accent 2 charte OP360) — chaleur, urgence, "moment critique"
  moments: [
    {
      icone: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F79009" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/><polyline points="15 7 22 7 22 14"/></svg>`,
      titre: "Ambition de Croissance",
      cas: "Structurer l'organisation pour croître sans se fracturer.",
    },
    {
      icone: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F79009" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>`,
      titre: "Cession-Acquisition",
      cas: "Phases critiques de transmissions, fusion : sécuriser la continuité",
    },
    {
      icone: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F79009" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      titre: "Retournement",
      cas: "Rentabilité en chute : diagnostic rapide, actions immédiates.",
    },
  ],

  // ── 6 DIFFÉRENCIATEURS ──────────────────────────
  differenciateurs: [
    {
      nb:"1",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h2"/><circle cx="17" cy="9" r="3"/><path d="M21 21v-2a5 5 0 0 0-5-5h-1"/></svg>`,
      titre:"Expertise collective",
      desc:"Collectif de pairs dirigeants, mobilisable ad hoc."
    },
    {
      nb:"2",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
      titre:"Approche 360°",
      desc:"12 domaines pour agir sur les causes profondes."
    },
    {
      nb:"3",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      titre:"Solutions personnalisées",
      desc:"Adaptées à votre dimension, en immersion ou en appui."
    },
    {
      nb:"4",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
      titre:"Nouvelles technologies",
      desc:"Méthodes adaptées aux dynamiques du terrain."
    },
    {
      nb:"5",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      titre:"Pairs qui ont vécu vos défis",
      desc:"Plateforme SaaS pour piloter vos projets stratégiques."
    },
    {
      nb:"6",
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      titre:"Exécution",
      desc:"Vers une autonomie durable de vos équipes."
    },
  ],

  // ── 6 OFFRES ────────────────────────────────────
  offres_titre: "Quelques exemples d'intervention",
  offres_sous_titre_1: "De l'analyse à l'exécution — des solutions conçues à votre dimension et vos ressources",
  offres_sous_titre_2: "Des expériences & outils éprouvés et combinables selon vos besoins",

  offres: [
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
      titre:"Diagnostic OP360",
      accroche:"Voir clair avant de décider.",
      tagline:"PME industrielle : 10j pour définir les priorités et le parcours d'exécution de la stratégie",
      desc:"360° sur 12 domaines — 10 jours, plan d'action priorisé.",
      href:"diagnostic.html",
      featured:true,
      badge:"",
      bullets:["Diagnostic opérationnel 360 sur 12 domaines clés avec scoring.","Plan d'action priorisé et parcours d'exécution recommandés."]
    },
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      titre:"Shadow Codir",
      accroche:"Ne plus décider seul.",
      tagline:"ETI agro : des codirs à la demande pour sécuriser la prise de décision",
      desc:"Collectif de pairs-dirigeants mobilisable à la demande.",
      href:"shadow-codir.html",
      featured:false,
      badge:"",
      bullets:["Collectif de pairs-dirigeants mobilisable à la demande sur vos enjeux clés.","Regards croisés pour sécuriser vos choix."]
    },
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      titre:"Accompagnement Terrain",
      accroche:"De la feuille de route aux résultats.",
      tagline:"PME service : Immersion d'une équipe pour exécuter la stratégie de croissance externe",
      desc:"Intervention opérationnelle en immersion ou en appui.",
      href:"accompagnement.html",
      featured:false,
      badge:"",
      bullets:["Intervention opérationnelle en immersion ou en appui auprès de vos équipes.","Animation et pilotage des chantiers jusqu'aux premiers résultats."]
    },
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
      titre:"Due Diligence Opérationnelle",
      accroche:"Sécuriser un deal avant et après signature.",
      tagline:"Fond PE : participer à la prise de décision de non investissement",
      desc:"Analyse des risques et leviers de valeur pré/post deal.",
      href:"due-diligence.html",
      featured:false,
      badge:"",
      bullets:["Analyse opérationnelle des risques et leviers de valeur pré/post deal.","Recommandations concrètes pour traduire la thèse en plan d'action pilotable."]
    },
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      titre:"Formations & Workshops",
      accroche:"Faire grandir vos équipes.",
      tagline:"Start-up de service : interventions mensuelles pour faire monter en compétence un jeune CEO",
      desc:"Ateliers pratiques sur l'exécution et le leadership.",
      href:"formations.html",
      featured:false,
      badge:"",
      bullets:["Ateliers pratiques sur l'exécution, le leadership, le pilotage et l'innovation.","Modules sur-mesure pour renforcer l'autonomie et le passage à l'action."]
    },
    {
      icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="6 8 9 12 12 8 15 12 18 8"/></svg>`,
      titre:"Plateforme SaaS OP360",
      accroche:"Garder une vue claire sur l'exécution.",
      tagline:"(En cours de développement)",
      desc:"Pilotage des projets stratégiques en un seul endroit.",
      href:"saas.html",
      featured:false,
      badge:"",
      bullets:["Pilotage des projets stratégiques et des indicateurs clés en un seul endroit.","Idea Vault et indicateurs de progression."]
    },
  ],

  // ── TÉMOIGNAGES ───────────────────────────────────
  temoignages: [
    { quote:"Avec le seul diagnostic, il y a un avant et un après.", auteur:"Directeur Général", entreprise:"PME Industrielle" },
    { quote:"Un accompagnement bienveillant et une exécution terrain efficace, unanimement salués. Par ces quelques mots, merci.", auteur:"Directeur Général", entreprise:"ETI Agro-alimentaire" },
    { quote:"En quelques mois à nos côtés leurs interventions nous ont fait grandir et passer à une nouvelle étape.", auteur:"Président", entreprise:"Coopérative Mobilités" },
    { quote:"Cet accompagnement a sécurisé la décision, y compris lorsqu'elle a conduit à un non-investissement, en apportant méthode, lucidité et sérénité.", auteur:"Investisseur", entreprise:"" },
  ],

  // ── ÉQUIPE ─────────────────────────────────────────
  equipe: [
    { prenom:"Annie",      nom:"Belquin",  titre:"Présidente",                photo:"annie",      expertise:"Vision stratégique & gouvernance" },
    { prenom:"Suzanne",    nom:"Grimal",   titre:"Directrice de la Valeur",   photo:"suzanne",    expertise:"Création de valeur & transformation" },
    { prenom:"Christophe", nom:"Raix",     titre:"Directeur de l'Innovation", photo:"christophe", expertise:"Innovation & outils numériques" },
    { prenom:"Richard",    nom:"Paquette", titre:"Directeur Général",         photo:"richard",    expertise:"Exécution opérationnelle & développement" },
  ],

  // ── PAGE DIAGNOSTIC FLASH ─────────────────────────
  diagnostic: {
    titre: "10 jours pour voir clair et agir juste",
    sous_titre: "Vous maîtrisez la vision et la stratégie. Et l'exécution ?",
    livrables: [
      { icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`, titre:"Rapport de diagnostic détaillé", desc:"12 domaines analysés, scorés et commentés avec lecture croisée de vos enjeux stratégiques." },
      { icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`, titre:"Executive Pack visuel", desc:"Synthèse avec heatmaps, radar de maturité et matrice impact/priorité pour décider en un coup d'œil." },
      { icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2"/><path d="M9 12l2 2 4-4"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`, titre:"Plan d'action priorisé", desc:"Actions concrètes, séquencées et priorisées pour des résultats mesurables." },
      { icone:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`, titre:"Parcours d'exécution complet", desc:"Plan intégral adapté à votre dimension et vos ressources, global et par domaine." },
    ],
  },

};

// Export pour utilisation dans les pages HTML
if (typeof module !== 'undefined') module.exports = OP360;
