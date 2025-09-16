import styles from "./page.module.css"
import {presCamping, infoCamping} from "@/assets/data/camping";
import ReactMarkdown from "react-markdown";


export default function CampingPage(){

    const {titlePres, subtitle,slogan, description} = presCamping
    const {title, ...rest} = infoCamping;

    return(
        <>
            <section className={styles.section}>
                <article className={styles.article}>
                    <h1>{titlePres}</h1>
                </article>
                <article className={styles.articlePres}>
                    <h2>{subtitle}</h2>
                    <h3>{slogan}</h3>
                    <div className={styles.markdown}>
                        <ReactMarkdown >{description}</ReactMarkdown>
                    </div>
                </article>
                <article>
                    <video
                        className={styles.video}
                        src="/videos/vacances.mp4"
                        controls={true}
                        muted

                    />
                </article>
            </section>
            <section className={styles.sectionInfo}>
                <article className={styles.articlePres}>
                    <h2>{title}</h2>
                    <ul className={styles.list}>
                        {Object.values(rest).map((info, i)=>(
                            <li className={styles.infoList} key={i}>
                               <ReactMarkdown>{info}</ReactMarkdown>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </>
    )
}