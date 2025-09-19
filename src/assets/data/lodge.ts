import {DetailMhProps, MhProps} from "@/type/definitions";

export const dataLodges : MhProps[] = [
    {
        id : 1,
        title : "Lodge Safari",
        image : "/images/lodges/lodge.jpg",
        arrayImage: [
            { "id": 1, "image": "/images/lodges/lodge.jpg", "label": "lodge" },
            { "id": 2, "image": "/images/lodges/salon.jpg", "label": "salon" },
            { "id": 3, "image": "/images/lodges/cuisine.webp", "label": "cuisine" },
            { "id": 4, "image": "/images/lodges/chambre.jpg", "label": "chambres" },

        ],
        slug : "safari",
        button : "A partir de 220€/semaine",
        characteristics : [
            {
                id : 1,
                image : "/images/mh/picto/taille.png",
                label : "25 m2",
            },
            {
                id : 2,
                image : "/images/mh/picto/utilisateur.png",
                label : "5 personnes",
            },
            {
                id : 3,
                image : "/images/mh/picto/cuisson.png",
                label : "1 coin cuisine",
            },
            {
                id : 4,
                image : "/images/mh/picto/chambre.png",
                label : "2 chambres",
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
        title : "Lodge Massai",
        image : "/images/lodges/lodge2.jpg",
        arrayImage: [
            { "id": 1, "image": "/images/lodges/lodge2.jpg", "label": "mh" },
            { "id": 2, "image": "/images/lodges/salon.jpg", "label": "salon" },
            { "id": 3, "image": "/images/lodges/cuisine.webp", "label": "cuisine" },
            { "id": 4, "image": "/images/lodges/chambre.jpg", "label": "chambres" },

        ],
        button : "A partir de 260€/semaine",
        slug : "massai",
        characteristics : [
            {
                id : 1,
                image : "/images/mh/picto/taille.png",
                label : "29 m2",
            },
            {
                id : 2,
                image : "/images/mh/picto/utilisateur.png",
                label : "5 personnes",
            },
            {
                id : 3,
                image : "/images/mh/picto/cuisson.png",
                label : "1 coin cuisine",
            },
            {
                id : 4,
                image : "/images/mh/picto/chambre.png",
                label : "2 chambres",
            },
            {
                id : 6,
                image : "/images/mh/picto/chien.png",
                label : "Animaux acceptés"
            }
        ]

    },

]

export const dataDetailLodges : DetailMhProps[]  = [
    {
        id : 1,
        slug : "safari",
        characteristics : [
            {
                id : 1,
                label : "Salon",
                image : "/images/mh/picto/canape.png",
                detail : "Table et chaises"
            },
            {
                id : 2,
                label : "Cuisine",
                image : "/images/mh/picto/cuisson.png",
                detail : "Vaisselle, Ustensiles de cuisine, Bouilloire, Evier, Cafetière électrique, Plaques de cuisson, Micro-ondes, Réfrigérateur/congélateur"
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
                detail : "1 Lits simples : 80x190cm, 1 lit superposé : 80x190cm"
            },
            {
                id : 6,
                label : "Extérieur",
                image : "/images/mh/picto/transat.png",
                detail : "Terrasse, Salon de jardin, Bains de soleil, Etendoir à linge"
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
        slug : "massai",
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