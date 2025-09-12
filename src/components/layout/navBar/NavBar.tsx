import styles from "./navBar.module.css"

import Image from "next/image";
import {Menu, Phone, CircleQuestionMark  } from "lucide-react"
import Link from "next/link";


export default function NavBar() {

    return(
        <>
            <nav className={styles.nav}>
                <section>
                    <figure>
                        <Image className={styles.logo} src={"/images/logo.jpg"} alt={"logo camping, petite cabane"} width={100} height={100} />
                    </figure>
                    <article>
                        <Menu size={56} color={"#fc841c"}/>
                    </article>
                </section>
                <section>
                    <article>
                        <CircleQuestionMark size={48} color={"#fc841c"}/>
                        <Link className={styles.link} href="#"> Nous contacter </Link>
                    </article>
                    <article>
                        <Phone/>
                        <p>01.01.01.01.01</p>
                    </article>
                </section>
            </nav>
        </>
    )
}