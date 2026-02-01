
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
                <section>
                    <Activities/>
                </section>
            </section>

        </>
    )
}