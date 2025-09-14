import styles from "./cardLocation.module.css"
import Image from "next/image";
import {characteristicsProps, LocationsProps} from "@/type/definitions";
import Link from "next/link";



export default function CardLocation({dataLocation} : {dataLocation : LocationsProps }) {

   const {title, image, button, link, characteristics} = dataLocation;

    return (
        <>
            <Link  href={link} className={styles.article}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={image} alt={title} fill={true}/>
                </figure>
                <figcaption className={styles.figcaption}>{title}</figcaption>
                <ul className={styles.ul} >
                    {characteristics?.map((c : characteristicsProps)=>(
                        <li key={c.id}>
                            {c.label}
                        </li>
                    ))}
                </ul>
                <Link className={styles.link} href={link}>{button}</Link>
            </Link>
        </>
    )
}