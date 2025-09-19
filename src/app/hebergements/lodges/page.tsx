import styles from "./page.module.css"
import {presCamping} from "@/assets/data/camping";
import {dataLodges} from "@/assets/data/lodge";
import CardMh from "@/components/cardMh/CardMh";


export default function lodgePage(){


    return(
        <>
            <section>
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <article >
                    <h2 className={styles.h2}>{"Découvrez nos lodges"}</h2>
                    <h3 className={styles.h3}>{"Tous les goûts, toutes les tailles, tous les prix"}</h3>
                </article>
                <article className={styles.articleLocations} >
                    {dataLodges.map(mh => <CardMh key={mh.id} dataMh = {mh} page={"lodges"} />)}
                </article>
            </section>
        </>
    )
}