import styles from "@/app/hebergements/mh/[slug]/page.module.css"
import {MoveLeft} from "lucide-react";
import {dataPitches} from "@/assets/data/pitches"
import Carousel from "@/components/ui/carousel/Carousel";
import Link from "next/link";


export default function emplacementsPage() {



    return (
        <>
            <section className={styles.section}>
                <article className={styles.articleImages}>
                    <Link className={styles.link} href={"/hebergements"}>
                        <MoveLeft color={"#fc841c"}/>
                        <p>{"Retour a la liste des hébergements"}</p>
                    </Link>
                        <Carousel images={dataPitches.arrayImage}/>
                </article>
            </section>
        </>
    )
}