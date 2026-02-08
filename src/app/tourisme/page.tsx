
import styles from "./page.module.css";
import {presCamping} from "@/assets/data/camping";
import Activities from "@/components/activities/Activities";


export default function TourismPage(){



    return (
        <>
            <section>
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <article className={styles.articlePage}>
                    <h2 className={styles.h2}>{"Que faire dans la région ?"}</h2>
                    <h3 className={styles.h3}>{"Des lieux à découvrir et partager pour tous les goûts"}</h3>
                </article>
                <section>
                    <Activities/>
                </section>
            </section>

        </>
    )
}