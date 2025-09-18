import {DetailMhProps, MhProps} from "@/type/definitions";

export const dataMh : MhProps[] = [
    {
        id : 1,
        title : "Mobil'home Bergame",
        image : "/images/mh/mh.jpg",
        arrayImage: [
            { "id": 1, "image": "/images/mh/mh.jpg", "label": "mh" },
            { "id": 2, "image": "/images/mh/salon.jpg", "label": "salon" },
            { "id": 3, "image": "/images/mh/cuisine.jpg", "label": "cuisine" },
            { "id": 4, "image": "/images/mh/sdb.jpg", "label": "sdb" },
            { "id": 5, "image": "/images/mh/chambre.jpg", "label": "chambre" },
            { "id": 6, "image": "/images/mh/chambre2.jpg", "label": "chambre2" }
        ],
        slug : "bergame",
        button : "A partir de 375€/semaine",
        characteristics : [
            {
                id : 1,
                image : "/images/mh/picto/taille.png",
                label : "32 m2",
            },
            {
                id : 2,
                image : "/images/mh/picto/utilisateur.png",
                label : "4 personnes",
            },
            {
                id : 3,
                image : "/images/mh/picto/douche.png",
                label : "1 Salle de bain",
            },
            {
                id : 4,
                image : "/images/mh/picto/chambre.png",
                label : "2 chambres",
            },
            {
                id : 5,
                image : "/images/mh/picto/television.png",
                label : "Télévision"
            },
            {
                id : 6,
                image : "/images/mh/picto/chien.png",
                label : "Animaux acceptés"
            }
        ]

    },
    {
        id : 2,
        title : "Mobil'home Toscane",
        image : "/images/mh/toscane.webp",
        arrayImage: [
            { "id": 1, "image": "/images/mh/toscane.webp", "label": "mh" },
            { "id": 2, "image": "/images/mh/salon.jpg", "label": "salon" },
            { "id": 3, "image": "/images/mh/cuisine.jpg", "label": "cuisine" },
            { "id": 4, "image": "/images/mh/sdb.jpg", "label": "sdb" },
            { "id": 5, "image": "/images/mh/chambre.jpg", "label": "chambre" },
            { "id": 6, "image": "/images/mh/chambre2.jpg", "label": "chambre2" }
        ],
        button : "A partir de 440€/semaine",
        slug : "toscane",
        characteristics : [
            {
                id : 1,
                image : "/images/mh/picto/taille.png",
                label : "35 m2",
            },
            {
                id : 2,
                image : "/images/mh/picto/utilisateur.png",
                label : "4/6 personnes",
            },
            {
                id : 3,
                image : "/images/mh/picto/douche.png",
                label : "1 Salle de bain",
            },
            {
                id : 4,
                image : "/images/mh/picto/chambre.png",
                label : "2 chambres",
            },
            {
                id : 5,
                image : "/images/mh/picto/television.png",
                label : "Télévision"
            },
            {
                id : 6,
                image : "/images/mh/picto/chien.png",
                label : "Animaux accéptés"
            }
        ]

    },
    {
        id : 3,
        title : "Mobil'home Premium",
        image : "/images/mh/premium.png",
        arrayImage: [
            { "id": 1, "image": "/images/mh/premium.png", "label": "mh" },
            { "id": 2, "image": "/images/mh/salon.jpg", "label": "salon" },
            { "id": 3, "image": "/images/mh/cuisine.jpg", "label": "cuisine" },
            { "id": 4, "image": "/images/mh/sdb.jpg", "label": "sdb" },
            { "id": 5, "image": "/images/mh/chambre.jpg", "label": "chambre" },
            { "id": 6, "image": "/images/mh/chambre2.jpg", "label": "chambre2" }
        ],
        button : "A partir de 550€/semaine",
        slug : "premium",
        characteristics : [
            {
                id : 1,
                image : "/images/mh/picto/taille.png",
                label : "38 m2",
            },
            {
                id : 2,
                image : "/images/mh/picto/utilisateur.png",
                label : "6/8 personnes",
            },
            {
                id : 3,
                image : "/images/mh/picto/douche.png",
                label : "2 Douches",
            },
            {
                id : 4,
                image : "/images/mh/picto/chambre.png",
                label : "3 chambres",
            },
            {
                id : 5,
                image : "/images/mh/picto/climatisation.png",
                label : "Climatisation"
            },
            {
                id : 6,
                image : "/images/mh/picto/television.png",
                label : "Télévision"
            },
            {
                id : 7,
                image : "/images/mh/picto/lave-vaisselle.png",
                label : "Lave-Vaisselle"
            },
            {
                id : 8,
                image : "/images/mh/picto/chien.png",
                label : "Animaux accéptés"
            }
        ]

    },
]

export const dataDetailMh : DetailMhProps[]  = [
    {
        id : 1,
        slug : "bergame",
        characteristics : [
            {
                id : 1,
                label : "Salon",
                image : "/images/mh/picto/canape.png",
                detail : "Table et chaises, Télévision, Chauffage"
            },
            {
                id : 2,
                label : "Cuisine",
                image : "/images/mh/picto/cuisson.png",
                detail : "Vaisselle, Ustensiles de cuisine, Bouilloire, Evier, Lave-vaisselle, Cafetière électrique, Plaques de cuisson, Micro-ondes, Réfrigérateur/congélateur"
            },
            {
                id : 3,
                label : "Chambre 1",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits rapprochés : 160x200cm"
            },
            {
                id : 4,
                label : "Chambre 2",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits simples : 80x190cm"
            },
            {
                id : 5,
                label : "Salle de bain",
                image : "/images/mh/picto/douche.png",
                detail : "Douche, Lavabo, WC, Chauffage, Chaise de douche, Salle de bain adaptée aux personnes à mobilité réduite"
            },
            {
                id : 6,
                label : "Extérieur",
                image : "/images/mh/picto/transat.png",
                detail : "Terrasse, Salon de jardin, Bains de soleil, Etendoir à linge, Rampe d'accès"
            },
            {
                id : 7,
                label : "Services inclus",
                image : "/images/mh/picto/cloche.png",
                detail : "Couvertures et oreillers, Draps et serviettes de toilette, Kit bébé (lit parapluie, chaise haute, baignoire - sur réservation, matelas non fourni), Place de parking incluse"
            },
            {
                id : 8,
                label : "Services en option (sur réservation)",
                image : "/images/mh/picto/euros.png",
                detail : "Ménage de fin de séjour, Connexion WiFi (1 code pour 1 appareil), Lits faits à l'arrivée, Location de barbecue (sur place)"
            },
        ]
    },
    {
        id : 2,
        slug : "toscane",
        characteristics : [
            {
                id : 1,
                label : "Salon",
                image : "/images/mh/picto/canape.png",
                detail : "Table et chaises, Télévision, Chauffage"
            },
            {
                id : 2,
                label : "Cuisine",
                image : "/images/mh/picto/cuisson.png",
                detail : "Vaisselle, Ustensiles de cuisine, Bouilloire, Evier, Lave-vaisselle, Cafetière électrique, Plaques de cuisson, Micro-ondes, Réfrigérateur/congélateur"
            },
            {
                id : 3,
                label : "Chambre 1",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits rapprochés : 160x200cm"
            },
            {
                id : 4,
                label : "Chambre 2",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits simples : 80x190cm"
            },
            {
                id : 5,
                label : "Salle de bain",
                image : "/images/mh/picto/douche.png",
                detail : "Douche, Lavabo, WC, Chauffage, Chaise de douche, Salle de bain adaptée aux personnes à mobilité réduite"
            },
            {
                id : 6,
                label : "Extérieur",
                image : "/images/mh/picto/transat.png",
                detail : "Terrasse, Salon de jardin, Bains de soleil, Etendoir à linge, Rampe d'accès"
            },
            {
                id : 7,
                label : "Services inclus",
                image : "/images/mh/picto/cloche.png",
                detail : "Couvertures et oreillers, Draps et serviettes de toilette, Kit bébé (lit parapluie, chaise haute, baignoire - sur réservation, matelas non fourni), Place de parking incluse"
            },
            {
                id : 8,
                label : "Services en option (sur réservation)",
                image : "/images/mh/picto/euros.png",
                detail : "Ménage de fin de séjour, Connexion WiFi (1 code pour 1 appareil), Lits faits à l'arrivée, Location de barbecue (sur place)"
            },
        ]
    },
    {
        id : 3,
        slug : "premium",
        characteristics : [
            {
                id : 1,
                label : "Salon",
                image : "/images/mh/picto/canape.png",
                detail : "Table et chaises, Télévision, Chauffage"
            },
            {
                id : 2,
                label : "Cuisine",
                image : "/images/mh/picto/cuisson.png",
                detail : "Vaisselle, Ustensiles de cuisine, Bouilloire, Evier, Lave-vaisselle, Cafetière électrique, Plaques de cuisson, Micro-ondes, Réfrigérateur/congélateur"
            },
            {
                id : 3,
                label : "Chambre 1",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits rapprochés : 160x200cm"
            },
            {
                id : 4,
                label : "Chambre 2",
                image : "/images/mh/picto/chambre.png",
                detail : "2 Lits simples : 80x190cm"
            },
            {
                id : 5,
                label : "Salle de bain",
                image : "/images/mh/picto/douche.png",
                detail : "Douche, Lavabo, WC, Chauffage, Chaise de douche, Salle de bain adaptée aux personnes à mobilité réduite"
            },
            {
                id : 6,
                label : "Extérieur",
                image : "/images/mh/picto/transat.png",
                detail : "Terrasse, Salon de jardin, Bains de soleil, Etendoir à linge, Rampe d'accès"
            },
            {
                id : 7,
                label : "Services inclus",
                image : "/images/mh/picto/cloche.png",
                detail : "Couvertures et oreillers, Draps et serviettes de toilette, Kit bébé (lit parapluie, chaise haute, baignoire - sur réservation, matelas non fourni), Place de parking incluse"
            },
            {
                id : 8,
                label : "Services en option (sur réservation)",
                image : "/images/mh/picto/euros.png",
                detail : "Ménage de fin de séjour, Connexion WiFi (1 code pour 1 appareil), Lits faits à l'arrivée, Location de barbecue (sur place)"
            },
        ]
    },



]