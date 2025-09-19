import styles from "@/app/hebergements/mh/[slug]/page.module.css"
import {dataLodges, dataDetailLodges} from "@/assets/data/lodge";
import Carousel from "@/components/ui/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from 'lucide-react';

export default async function DetailMhPage(props : {params : Promise<{slug : string}>}){

    const params = await props.params;
    const slug = params.slug

    const lodges = dataLodges.filter(f => f.slug === slug);
    const detailLodges = dataDetailLodges.filter(f => f.slug === slug);



    return (
        <>
            {lodges.map((l)=>(
                <section className={styles.section}  key={l.id}>
                    <article className={styles.articleImages}>
                        <Link className={styles.link}  href={"/hebergements/lodges"}>
                            <MoveLeft color={"#fc841c"}/>
                            <p>{"Retour a la liste des lodges"}</p>
                        </Link>
                        <Carousel images={l.arrayImage}/>
                    </article>
                    <article className={styles.articlePres} >
                        <h1 className={styles.h1}>{l.title}</h1>
                        <ul>
                            {l.characteristics.map((c) => (
                                <li key={c.id}>
                                    <Image src={c.image} alt={c.label} width={40} height={40}/>
                                    {c.label}
                                </li>
                            ))}
                        </ul>
                    </article>

                </section>
            ))}
            <section className={styles.sectionDetail}>
                {detailLodges.map((c) => (
                    <ul className={styles.articleDetail} key={c.id}>
                        {c.characteristics.map((item) => (
                            <li key={item.id}>
                                <Image src={item.image} alt={item.label} width={40} height={40}/>
                                <div>
                                    <h2>{item.label}</h2>
                                    <p>{item.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ))}
            </section>
        </>
    )
}