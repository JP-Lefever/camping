import styles from "./page.module.css"
import ContactForm from "@/features/contactForm/components/ContactForm"

export default function ContactPage() {


    return (
        <>
            <section>
                <article className={styles.article}>
                    <h1>Contact</h1>
                </article>
                <article>
                    <ContactForm/>
                </article>
            </section>
        </>
    )
}