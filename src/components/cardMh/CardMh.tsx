import styles from "./cardMh.module.css"
import Image from "next/image";
import {characteristicsProps, MhProps} from "@/type/definitions";
import Link from "next/link";



export default function CardMh({dataMh, page} : {dataMh : MhProps, page : string }) {

    const {title, image, button, slug, characteristics} = dataMh;

    return (
        <>
            <Link href={`/hebergements/${page}/${slug}`} className={styles.article}>
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
                <p className={styles.link}>{button}</p>
            </Link>
        </>
    )
}