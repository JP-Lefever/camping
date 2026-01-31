import styles from "./page.module.css"
import {services} from "@/assets/data/services";
import {presCamping} from "@/assets/data/camping";
import Image from "next/image";

export default function servicesPage() {

  return  (
    <>
        <section>
            <article className={styles.article}>
                <h1>{presCamping.titlePres}</h1>
            </article>
            <article className={styles.articleInfo} >
                <h2 className={styles.h2}>{"Nos services"}</h2>
                <h3>{"Pour des vacances encore plus confortables"}</h3>
            <ul className={styles.ul}>
            {services.map((s) => (
                <li className={styles.li} key={s.id}>
                    <Image src={s.image} alt={s.label} width={60} height={60} />
                    <h2>{s.label}</h2>
                    <p>{s.detail}</p>
                </li>
            ))}
            </ul>
            </article>
        </section>
    </>
    )
}