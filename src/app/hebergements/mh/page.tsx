import styles from "./page.module.css"
import {presCamping} from "@/assets/data/camping";
import {dataMh} from "@/assets/data/mh";
import CardMh from "@/components/cardMh/CardMh";


export default function mhPage(){


    return(
        <>
            <section>
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <article >
                    <h2 className={styles.h2}>{"Découvrez nos mobil'homes"}</h2>
                    <h3 className={styles.h3}>{"Tous les goûts, toutes les tailles, tous les prix"}</h3>
                </article>
                <article className={styles.articleLocations} >
                    {dataMh.map(mh => <CardMh key={mh.id} dataMh = {mh}/>)}
                </article>
            </section>
        </>
    )
}