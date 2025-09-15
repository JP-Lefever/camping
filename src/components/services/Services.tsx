
import styles from "./services.module.css"
import {services} from "@/assets/data/services";
import Image from "next/image";
import Link from "next/link";


export default function Services() {


    return (
        <>
            <section className={styles.section}>
                <article>
                    <h2 className={styles.h2}>{"Nos services"}</h2>
                    <Link className={styles.link} href={"/services"}>{"Plus d'informations ?"}</Link>
                </article>
                <ul className={styles.services}>
                    {services.map((service) => (
                        <li key={service.id}>
                            <figure className={styles.figure}>
                                <Image className={styles.image} src={service.image} alt={service.label} fill={true} />
                            </figure>
                            <figcaption>{service.label}</figcaption>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}