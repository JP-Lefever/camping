import {LocationsProps} from "@/type/definitions";

export const dataLocations : LocationsProps[] = [
    {
        id : 1,
        title : "Mobil'homes",
        image : "/images/mh/mh.jpg",
        button : "En savoir plus ?",
        link : "/hebergements/mh",
        characteristics : [
            {
                id : 1,
                label : "35 m2",
            },
            {
                id : 2,
                label : "1 à 8 personnes",
            },
            {
                id : 3,
                label : "Douche",
            },
            {
                id : 4,
                label : "Sanitaire",
            },
            {
                id : 5,
                label : "Chauffage"
            },
            {
                id : 6,
                label : "Cuisine"
            }
        ]

    },
    {
        id : 2,
        title : "Lodges",
        image : "/images/lodges/lodge.jpg",
        button : "En savoir plus ?",
        link : "/hebergements/lodges",
        characteristics : [
            {
                id : 1,
                label : "25 m2",
            },
            {
                id : 2,
                label : "1 à 5 personnes",
            },
            {
                id : 6,
                label : "Kitchenette"
            }
        ]
    },
    {
        id : 3,
        title : "Emplacements",
        image : "/images/pitches/emplacement.jpg",
        button : "En savoir plus ?",
        link : "/hebergements/emplacements",
        characteristics : [
            {
                id : 1,
                label : "80 m2",
            },
            {
                id : 2,
                label : "1 à 8 personnes",
            },
            {
                id : 6,
                label : "Avec ou sans electricité"
            }
        ]
    }
]