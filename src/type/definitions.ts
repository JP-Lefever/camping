export type LocationsProps = {
    id : number;
    title : string;
    image : string;
    button : string;
    link : string;
    characteristics ? : characteristicsProps [];
}

export type characteristicsProps = {
    id: number;
    label?: string;
}

export type ServicesProps  = {
    id : number;
    label : string;
    image : string;
}

export type OpinionsProps = {
    id: number;
    author : string;
    rating : string;
    text : string;
    date : string;
    avatar : string;
}

export type CampingProps  = {
    titlePres : string;
    subtitle : string;
    slogan : string;
    description : string;
}

export type InfosProps = {
    title: string;
    address: string;
    opening: string;
    closing: string;
    tel: string;
    mail: string;
    access: string;
    pmr: string;
    pitches: string;
    taxes: string;
    payment: string;
    checkMH: string;
    checkoutMh: string;
    checkPitch: string;
    checkoutPitch: string;
}

export type characteristicsMhProps = {
    id: number;
    image : string;
    label: string;
}


export type MhProps = {
    id : number;
    title : string;
    image : string;
    arrayImage : ArrayImagesProps[];
    slug : string;
    button : string;
    characteristics : characteristicsMhProps [];
}

export type ArrayImagesProps = {
    id : number;
    image : string;
    label : string;
}

export type InfoMhProps = {
    id: number;
    label: string;
    image : string;
    detail: string;
}

export type DetailMhProps = {
    id: number;
    slug: string;
    characteristics: InfoMhProps[];
}