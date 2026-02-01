import styles from "./page.module.css"
import ContactForm from "@/features/contactForm/components/ContactForm"
import {presCamping} from "@/assets/data/camping";

export default function ContactPage() {


    return (
        <>
            <section>
                <article className={styles.article}>
                    <h1>{presCamping.titlePres}</h1>
                </article>
                <article>
                    <ContactForm/>
                </article>
            </section>
        </>
    )
}