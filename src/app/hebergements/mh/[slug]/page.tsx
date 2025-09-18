import styles from "./page.module.css"
import {dataMh, dataDetailMh} from "@/assets/data/mh";
import Carousel from "@/components/ui/carousel/Carousel";
import Image from "next/image";


export default async function DetailMhPage(props : {params : Promise<{slug : string}>}){

    const params = await props.params;
    const slug = params.slug

    const mh = dataMh.filter(f => f.slug === slug);
    const detailMh = dataDetailMh.filter(f => f.slug === slug);

    console.log(mh)

    return (
        <>
        {mh.map((m)=>(
            <section className={styles.section}  key={m.id}>
                <article className={styles.articleImages}>
                    <Carousel images={m.arrayImage}/>
                </article>
                <article className={styles.articlePres} >
                    <h1 className={styles.h1}>{m.title}</h1>
                    <ul>
                        {m.characteristics.map((c) => (
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
                {detailMh.map((c) => (
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