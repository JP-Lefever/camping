import styles from "@/app/hebergements/mh/[slug]/page.module.css"
import {MoveLeft} from "lucide-react";
import {dataPitches} from "@/assets/data/pitches"
import Carousel from "@/components/ui/carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import {dataDetailPitches} from "@/assets/data/pitches";


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
                <article className={styles.articlePres}>
                    <h1 className={styles.h1}>{dataPitches.title}</h1>
                        <ul>
                    {dataPitches.characteristics.map((c) =>
                            <li key={c.id}>
                                <Image src={c.image} alt={c.label} width={40} height ={40}/>
                                {c.label}
                            </li>
                    )}
                        </ul>
                </article>
            </section>
            <section className={styles.sectionDetail}>
                <ul className={styles.articleDetail}>
                    <li >
                        <Image src={dataDetailPitches.image} alt={dataDetailPitches.label} width={40} height={40}/>
                        <div>
                            <h2>{dataDetailPitches.label}</h2>
                            <p>{dataDetailPitches.detail}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}