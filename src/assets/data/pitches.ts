import {InfoMhProps, PitchesProps} from "@/type/definitions";

export const dataPitches  : PitchesProps = {
    id : 1,
    title : "Emplacements nus",
    arrayImage : [
        {"id" : 1, "image" : "/images/pitches/emplacement.jpg", "label" : "Emplacement nus"} ,
        {"id" : 2, "image" : "/images/pitches/pitch.jpg", "label" : "Emplacement nus"} ,
        {"id" : 3, "image" : "/images/pitches/pitch2.jpg", "label" : "Emplacement nus"} ,

    ],
    characteristics : [
        {
            id : 1,
            image : "/images/mh/picto/taille.png",
            label : "80 m2"
        },
        {
            id : 2,
            image : "/images/mh/picto/utilisateur.png",
            label : "1 à 6 personnes"
        },
        {
            id : 3,
            image : "/images/mh/picto/elec.png",
            label : "Avec éléctricité"
        },
        {
            id : 4,
            image : "/images/mh/picto/douche.png",
            label : "Sanitaire commun ou privé"
        }
    ]
}


export const dataDetailPitches : InfoMhProps  = {
                id : 8,
                label : "Services en option",
                image : "/images/mh/picto/euros.png",
                detail : "Frigo, Connexion WiFi (1 code pour 1 appareil), Malle du camping, Location de barbecue (sur place)"

    }