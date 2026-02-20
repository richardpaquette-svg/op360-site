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
    linkedin: "https://www.linkedin.com/company/operating-partners-360",
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
    stat1_nb: "5", stat1_label: "jours Diagnostic Flash",
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
    { nb:"1", icone:"👥", titre:"Shadow Codir", desc:"L'appui d'un collectif de pairs, dirigeants, proches du terrain qui ont déjà vécu vos défis de l'intérieur. Mobilisable ad hoc, à tout moment.", tag:"Collectif structuré" },
    { nb:"2", icone:"🔍", titre:"Approche 360° systémique", desc:"Pragmatique et systémique, pour une action sur les causes profondes. Méthodologie sur 12 domaines d'analyse avec vision globale ancrée dans la réalité.", tag:"12 domaines" },
    { nb:"3", icone:"🗺", titre:"Parcours d'exécution", desc:"Adapté à votre dimension et vos ressources, en immersion ou en appui, individuel ou en équipe. Du diagnostic au déploiement terrain.", tag:"Sur mesure" },
    { nb:"4", icone:"🧭", titre:"Intelligence de situation", desc:"Évolution et adaptation des méthodes & objectifs avec les dynamiques du terrain. Flexibilité et ajustement fin plutôt que déploiement rigide.", tag:"Agilité terrain" },
    { nb:"5", icone:"💻", titre:"Outils numériques dédiés", desc:"Plateforme SaaS dédiée : pilotage de la performance, des projets stratégiques et Idea Vault augmentée. Monitoring en temps réel.", tag:"SaaS OP360" },
    { nb:"6", icone:"🎓", titre:"Formation & Transmission", desc:"Montée en compétence visant l'autonomie des équipes, accompagnement dans la durée. Limite le risque de dépendance à un prestataire externe.", tag:"Autonomie durable" },
  ],

  // ── 6 OFFRES ──────────────────────────────────────
  offres: [
    { icone:"⚡", titre:"Diagnostic Flash", featured:true, badge:"Recommandé", bullets:["Évaluation maturité d'exécution de la stratégie","12 domaines analysés et scorés","Identification des priorités & leviers de valeur","Quick wins + parcours d'exécution complet","5 jours pour voir clair et agir juste"] },
    { icone:"👥", titre:"Shadow Codir", featured:false, badge:"", bullets:["Collectif ad hoc multisectoriel et multifonctionnel","Mobilisable ponctuellement ou récurrent","Nativement intégré aux diagnostics"] },
    { icone:"🤝", titre:"Accompagnement Terrain", featured:false, badge:"", bullets:["À la dimension de l'entreprise","En immersion ou en appui","Individuel ou par une équipe","Formats hybrides et flexibles"] },
    { icone:"🔬", titre:"Due Diligence Opérationnelle", featured:false, badge:"", bullets:["Analyse approfondie pré/post investissement","Cession, acquisition, transmission","Volet RSE intégré (CSRD/ESG)"] },
    { icone:"🎓", titre:"Formations & Workshops", featured:false, badge:"", bullets:["Résolution de problèmes complexes","Leadership, management, innovation","Finance, Lean, Négociation, IA dirigeants"] },
    { icone:"💻", titre:"Plateforme SaaS OP360", featured:false, badge:"", bullets:["Pilotage performance et projets stratégiques","Idea Vault augmentée","Réduction de la charge mentale du dirigeant"] },
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
    titre: "5 jours pour voir clair et agir juste",
    sous_titre: "Vous maîtrisez la vision et la stratégie. Et l'exécution ?",
    livrables: [
      { icone:"📄", titre:"Rapport de diagnostic détaillé", desc:"12 domaines analysés, scorés et commentés avec lecture croisée de vos enjeux stratégiques." },
      { icone:"🎨", titre:"Executive Pack visuel", desc:"Synthèse avec heatmaps, radar de maturité et matrice impact/priorité pour décider en un coup d'œil." },
      { icone:"🏆", titre:"Top 3-5-7 domaines prioritaires", desc:"Les domaines critiques alignés sur vos enjeux, ordonnés par impact et faisabilité." },
      { icone:"⚡", titre:"Plan d'action + Quick wins", desc:"Actions concrètes actionnables immédiatement pour des résultats mesurables dès les premières semaines." },
      { icone:"🗺", titre:"Parcours d'exécution complet", desc:"Plan intégral adapté à votre dimension et vos ressources, global et par domaine." },
    ],
  },

};

// Export pour utilisation dans les pages HTML
if (typeof module !== 'undefined') module.exports = OP360;
