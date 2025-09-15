export type LocationsProps = {
    id : number;
    title : string;
    image : string;
    button : string;
    link : string;
    characteristics ? : characteristicsProps [];
}

export interface characteristicsProps  {
    id: number;
    label?: string;

    
}