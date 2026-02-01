import styles from "./page.module.css";
import {presCamping} from "@/assets/data/camping";

export default function ActivitiesPage(){

    return (
        <>
            <section>
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <section>
                    <button type={"button"}><h2>{"Les marchés"}</h2></button>
                    <button type={"button"}><h2>{"Les visites"}</h2></button>
                    <button type={"button"}><h2>{"Les randonnées"}</h2></button>
                    <button type={"button"}><h2>{"Les tourisme"}</h2></button>
                </section>
            </section>

        </>
    )
}