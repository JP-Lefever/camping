import styles from "./cardLocation.module.css"
import Image from "next/image";
import {LocationsProps} from "@/type/definitions";
import Link from "next/link";



export default function CardLocation({dataLocation} : {dataLocation : LocationsProps }) {

   const {title, image, button, link} = dataLocation;

    return (
        <>
            <article className={styles.article}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={image} alt={"Mobil'home"} fill={true}/>
                </figure>
                    <figcaption className={styles.figcaption}>{title}</figcaption>
                <Link className={styles.link} href={link}>{button}</Link>
            </article>
        </>
    )
}