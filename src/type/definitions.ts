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