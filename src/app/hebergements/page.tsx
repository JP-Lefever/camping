import styles from "./page.module.css";
import {presCamping } from "@/assets/data/camping";
import {dataLocations } from "@/assets/data/locations";
import CardLocation from "@/components/cardLocation/CardLocation";


export default function LocationsPage(){


    return (
        <>
            <section  >
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <article >
                    <h2 className={styles.h2}>{"Nos hébergements"}</h2>
                    <h3 className={styles.h3}>{"Votre prochaine destination vous ouvre ses portes pour des vacances inoubliables."}</h3>
                </article>
                <article className={styles.articleLocations}>
                    {dataLocations.map(location =>
                        <CardLocation key={location.id} dataLocation={location} />
                    )}

                </article>
            </section>
        </>
    )
}