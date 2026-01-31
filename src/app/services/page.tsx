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
            <article >
                <h2>{"Nos services"}</h2>
                <h3>{"Pour des vacances encore plus confortables"}</h3>
            <ul>
            {services.map((s) => (
                <li key={s.id}>
                    <Image src={s.image} alt={s.label} width={40} height={40} />
                    <div>
                        <h2>{s.label}</h2>
                        <p>{s.detail}</p>
                    </div>
                </li>
            ))}
            </ul>
            </article>
        </section>
    </>
    )
}