/* =====================================================================
   CONTENU DU PORTFOLIO DE KLOÉ BRILLANT
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour faire évoluer le site.
   - Ajouter une expérience : copier un bloc { ... }, dans « experiences »,
     le coller tout en haut de la liste (la plus récente en premier)
     et changer le texte.
   - Supprimer : effacer le bloc { ... } en entier, avec sa virgule.
   - Garder les guillemets "..." autour des textes.
   - Une liste vide [] fait disparaître le bloc concerné, sans casser le site.
   - Les textes marqués  // À VALIDER  sont des premiers jets à relire.
   ===================================================================== */

window.CONTENU = {

  /* ---------- 1. Accueil ---------- */
  identite: {
    prenom: "Kloé",
    nom: "Brillant",
    accroche: "Curieuse, dynamique et à l’aise avec les gens, j’aime les métiers où l’on bouge, où l’on apprend vite et où l’on se sent utile.", // À VALIDER
    disponibilite: "Disponible dès décembre 2026",
    localisation: "La Rochelle",
    mobilite: "Mobile dans toute la France",
    photo: "kloe.jpg",
    cv: "kloe-brillant-cv.pdf",
    email: "kloebrillant15@gmail.com",
    telephone: "",          // ex. "+33 6 61 56 39 41" — laisser vide pour ne pas l'afficher en ligne
    linkedin: ""            // ex. "https://www.linkedin.com/in/kloe-brillant"
  },

  // Chiffres clés : seulement des chiffres vrais.
  // « auto » = calculé à partir des listes plus bas.
  chiffres: [
    { valeur: "auto-experiences", texte: "expériences professionnelles" },
    { valeur: "auto-secteurs",    texte: "secteurs d’activité" },
    { valeur: "10+",              texte: "ans d’équitation" },
    { valeur: "3",                texte: "langues parlées" }
  ],

  /* ---------- 2. À propos ---------- */
  apropos: {
    paragraphes: [ // À VALIDER
      "J’ai commencé à travailler tôt, et j’ai vite compris ce que j’aimais : le contact avec les clients, les journées qui ne se ressemblent pas et les moments où il faut gérer plusieurs choses à la fois.",
      "En caisse, en boutique, en cuisine ou à l’accueil d’un camping, j’ai appris à m’adapter rapidement, à prendre des initiatives et à travailler en autonomie quand on me fait confiance.",
      "Je ne veux pas m’enfermer dans un seul métier. Ce qui me motive, c’est d’apprendre, de prendre des responsabilités et de découvrir de nouveaux secteurs, avec une équipe sur qui compter."
    ],
    facons: [ // ma façon de travailler — À VALIDER
      { icone: "eclair",  titre: "Réactive",        texte: "Je garde mon calme et mon sourire pendant les coups de feu." },
      { icone: "main",    titre: "Initiative",      texte: "Je repère ce qu’il y a à faire sans attendre qu’on me le demande." },
      { icone: "bulle",   titre: "Sens du contact", texte: "J’aime conseiller, écouter et trouver la bonne solution pour le client." },
      { icone: "boussole",titre: "Autonome",        texte: "On peut me confier une tâche et me laisser avancer seule." }
    ],
    valeurs: ["Respect", "Fiabilité", "Engagement", "Bienveillance", "Curiosité"] // À VALIDER
  },

  /* ---------- 3. Parcours professionnel (le plus récent en premier) ---------- */
  experiences: [
    {
      poste: "Employée polyvalente",
      entreprise: "Temporis (intérim)",
      lieu: "",
      dates: "Août – sept. 2026",
      contrat: "Intérim",
      secteur: "Commerce",
      autresSecteurs: ["Restauration", "Services"],
      missions: [
        "Kiabi : réception des marchandises, gestion de la réserve et réassort en magasin",
        "Commis de cuisine : aide au chef, préparation des plats, plonge et rangement",
        "Agent d’entretien : entretien des espaces, en autonomie"
      ],
      competences: ["Réception et réassort", "Polyvalence", "Autonomie"],
      apport: "Changer de poste d’une mission à l’autre m’a appris à m’adapter très vite à une nouvelle équipe et à de nouvelles règles." // À VALIDER
    },
    {
      poste: "Pizzaïola et vendeuse",
      entreprise: "Kpizz",
      lieu: "Saint-Rogatien",
      dates: "Mars – juil. 2026",
      contrat: "CDD",
      secteur: "Restauration",
      missions: [
        "Préparation et cuisson des pizzas, entretien et hygiène du poste",
        "Gestion des commandes, service client et encaissement"
      ],
      competences: ["Préparation et cuisson", "Gestion des commandes", "Hygiène"],
      apport: "J’ai appris à tenir un poste du début à la fin : préparer, cuire, servir et encaisser, sans faire attendre le client." // À VALIDER
    },
    {
      poste: "Hôtesse de caisse",
      entreprise: "Intermarché",
      lieu: "Aigrefeuille-d’Aunis",
      dates: "Févr. 2026",
      contrat: "CDD",
      secteur: "Grande distribution",
      missions: [
        "Encaissement et moyens de paiement",
        "Tenue de caisse et contrôle des transactions"
      ],
      competences: ["Encaissement", "Rigueur", "Relation client"],
      apport: "La caisse demande de la rigueur et de la rapidité, tout en gardant un mot agréable pour chaque client." // À VALIDER
    },
    {
      poste: "Vendeuse en prêt-à-porter",
      entreprise: "Boutique Neuf 17",
      lieu: "Puilboreau",
      dates: "Nov. 2025 – janv. 2026",
      contrat: "CDD",
      secteur: "Vente",
      missions: [
        "Accueil, conseil personnalisé et identification des besoins",
        "Encaissement, satisfaction et fidélisation de la clientèle",
        "Réassort, mise en valeur des produits et tenue de la boutique"
      ],
      competences: ["Conseil personnalisé", "Fidélisation", "Merchandising"],
      apport: "C’est là que j’ai vraiment aimé le conseil : comprendre ce que cherche la personne et l’aider à trouver ce qui lui va." // À VALIDER
    },
    {
      poste: "Équipière polyvalente",
      entreprise: "McDonald’s Les Minimes",
      lieu: "La Rochelle",
      dates: "Juil. – oct. 2025",
      contrat: "CDD",
      secteur: "Restauration",
      missions: [
        "Accueil, service et encaissement dans un environnement très dynamique",
        "Préparation selon les standards de qualité, de rapidité et d’hygiène"
      ],
      competences: ["Travail en rush", "Esprit d’équipe", "Respect des procédures"],
      apport: "J’y ai appris à travailler vite, en équipe, avec des procédures précises, même aux heures de forte affluence." // À VALIDER
    },
    {
      poste: "Employée de services",
      entreprise: "Camping La Taillée",
      lieu: "Aigrefeuille-d’Aunis",
      dates: "Juil. – août 2024",
      contrat: "Saison",
      secteur: "Services",
      missions: [
        "Accueil, orientation et assistance des vacanciers",
        "Entretien des espaces communs"
      ],
      competences: ["Accueil", "Sens du service", "Autonomie"],
      apport: "Accueillir des vacanciers m’a appris à être disponible et souriante, et à répondre à des demandes très variées." // À VALIDER
    },
    {
      poste: "Stage de première – Immobilier",
      entreprise: "ERA Immo",
      lieu: "Surgères",
      dates: "Févr. 2024",
      contrat: "Stage",
      secteur: "Immobilier",
      missions: [
        "Bureautique et aide à la gestion des dossiers clients",
        "Participation aux visites de biens"
      ],
      competences: ["Bureautique", "Dossiers clients", "Présentation"],
      apport: "Une première découverte du monde de l’agence : l’organisation des dossiers et la relation avec les clients pendant les visites." // À VALIDER
    },
    {
      poste: "Employée polyvalente",
      entreprise: "Croco’Pizz Allo Pizza",
      lieu: "Angoulins-sur-Mer",
      dates: "Juil. 2022",
      contrat: "Saison",
      secteur: "Restauration",
      missions: [
        "Accueil, prise de commandes et encaissement",
        "Service et gestion des stocks"
      ],
      competences: ["Prise de commandes", "Gestion des stocks", "Service"],
      apport: "Mon premier job d’été : j’y ai découvert le rythme de la restauration et le plaisir de travailler au contact des clients." // À VALIDER
    }
  ],

  /* ---------- 4. Formations, diplômes et certifications ---------- */
  // « obtenus » = diplômes et certifications réellement obtenus.
  // « suivies » = formations suivies, sans diplôme.
  diplomes: [
    { titre: "Bac STMG – Mercatique (marketing)", detail: "Mention Bien · Lycée Jean Dautet, La Rochelle", annee: "2025", icone: "diplome" },
    { titre: "Certification PIX", detail: "Compétences numériques", annee: "", icone: "ecran" },
    { titre: "Galop 5", detail: "Fédération française d’équitation", annee: "", icone: "fer" },
    { titre: "Permis B et A2", detail: "Voiture et moto", annee: "", icone: "volant" }
  ],
  formations: [
    {
      titre: "Conseillère technique ski",
      photoAFournir: "Toi à l’atelier ski",
      organisme: "éklore-ed",
      dates: "Oct. – nov. 2026",
      contenu: [
        "Connaissance du matériel de glisse",
        "Entretien et réparation des skis",
        "Chaussures et snowboard",
        "Travail en atelier",
        "Techniques de vente et merchandising"
      ]
    }
  ],
  langues: [
    { langue: "Français", niveau: "Langue maternelle", pourcentage: 100 },
    { langue: "Anglais",  niveau: "B1",                pourcentage: 60 },
    { langue: "Espagnol", niveau: "A2",                pourcentage: 38 }
  ],

  /* ---------- 5. Compétences ---------- */
  competences: [
    { categorie: "Commerciales", icone: "sac", liste: [
      "Vente et conseil personnalisé", "Relation et fidélisation client", "Encaissement",
      "Merchandising et mise en valeur des produits", "Réception des marchandises et réassort" ] },
    { categorie: "Opérationnelles", icone: "engrenage", liste: [
      "Gestion des commandes et des stocks", "Organisation du travail", "Travail en autonomie et en équipe",
      "Gestion des périodes de forte affluence", "Respect des procédures et des règles d’hygiène" ] },
    { categorie: "Techniques", icone: "outil", liste: [
      "Préparation et cuisson des pizzas", "Connaissance du matériel de glisse", "Entretien et réparation des skis" ] },
    { categorie: "Numériques", icone: "ecran", liste: [
      "Canva", "Word, Excel et PowerPoint", "Réseaux sociaux", "Connaissances en marketing et communication" ] }
  ],

  /* ---------- 6. Passions ---------- */
  passions: [
    { titre: "Équitation", grand: true, illustration: "cheval", photoAFournir: "Toi à cheval, en concours", detail: "Plus de 10 ans de pratique, en compétition. Galop 5.",
      apport: ["Persévérance", "Patience", "Gestion du stress", "Sens des responsabilités"] }, // À VALIDER
    { titre: "Ski et montagne", illustration: "montagne", photo: "photos/ski.jpg", detail: "Le terrain de jeu qui m’a menée vers le métier de skiman.",
      apport: ["Goût de l’effort", "Autonomie"] }, // À VALIDER
    { titre: "Handball", illustration: "ballon", photo: "photos/handball.jpg", detail: "Deux ans en club.",
      apport: ["Esprit d’équipe", "Discipline"] }, // À VALIDER
    { titre: "Danse", illustration: "danse", photo: "photos/danse.jpg", detail: "",
      apport: ["Discipline", "Persévérance"] }, // À VALIDER
    { titre: "Moto", grand: true, illustration: "moto", photo: "photos/moto.jpg", detail: "Permis A2.",
      apport: ["Autonomie", "Vigilance"] }, // À VALIDER
    { titre: "Animaux", grand: true, illustration: "patte", photo: "photos/animaux.jpg", detail: "Une vraie passion, au cœur de mes projets.",
      apport: ["Patience", "Sens des responsabilités"] }, // À VALIDER
    { titre: "Voyages", grand: true, illustration: "valise", photo: "photos/voyages.jpg", detail: "Découvrir d’autres cultures.",
      apport: ["Ouverture d’esprit", "Adaptabilité"] }, // À VALIDER
    { titre: "Musique", illustration: "note", photo: "photos/musique.jpg", detail: "Au quotidien.",
      apport: [] }
  ],

  /* ---------- 7. Projets et engagements (en réflexion) ---------- */
  // statut : "En réflexion", "En préparation", "En cours" ou "Réalisé"
  projets: [
    { titre: "Bénévolat en refuge animalier", statut: "En réflexion", icone: "patte",
      texte: "J’aimerais donner de mon temps à la SPA ou dans un refuge, pour m’occuper des animaux qui attendent une famille." },
    { titre: "Garde et toilettage d’animaux", statut: "En réflexion", icone: "maison",
      texte: "Je réfléchis à un projet d’entreprise : une garderie et un salon de toilettage pour chiens et chats." },
    { titre: "Entrepreneuriat", statut: "En réflexion", icone: "ampoule",
      texte: "La création d’entreprise m’attire : je m’informe et je garde cette idée en tête pour l’avenir." },
    { titre: "Découvrir d’autres secteurs", statut: "En cours", icone: "boussole",
      texte: "Chaque nouvelle expérience m’apprend quelque chose. Je veux continuer à élargir mes compétences." }
  ],

  /* ---------- 8. Réalisations et recommandations ---------- */
  // Rien n'est inventé : ces listes restent vides tant qu'il n'y a rien de réel.
  // Exemple de réalisation :
  //   { titre: "Affiche pour …", type: "Communication", texte: "…", image: "images/affiche.jpg", lien: "" }
  // Exemple de recommandation :
  //   { auteur: "Prénom Nom", fonction: "Responsable, Entreprise", texte: "…" }
  // Exemple d'attestation :
  //   { titre: "Attestation de formation éklore-ed", fichier: "documents/attestation.pdf" }
  realisations: [],
  recommandations: [],
  attestations: []
};
