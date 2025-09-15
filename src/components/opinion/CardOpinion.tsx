import styles from "./cardOpinion.module.css"
import Image from "next/image";
import {OpinionsProps} from "@/type/definitions";



export default function CardOpinion({ opinions }: { opinions: OpinionsProps }) {

    const {author, rating, text, date, avatar} = opinions;

    return (
        <>
            <article className={styles.card}>
                <article>
                    <figure className={styles.figure}>
                        <Image className={styles.image} src={avatar} alt={author} fill={true} />
                    </figure>
                    <div>
                        <figcaption>{author}</figcaption>
                        <p>{rating}</p>
                    </div>
                </article>
                <p>{text}</p>
                <p>{date}</p>
            </article>
        </>
    )
}