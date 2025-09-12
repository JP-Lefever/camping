"use client"
import styles from "./navBar.module.css"
import {useState} from "react";
import Image from "next/image";
import {Menu, Phone, CircleQuestionMark, X  } from "lucide-react"
import Link from "next/link";
import dataNav from "@/assets/data/navBar.json"


export default function NavBar() {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <>
            <nav className={styles.nav}>
                <section>
                    <figure className={styles.figure}>
                        <Image className={styles.logo} src={"/images/logo.jpg"} alt={"logo camping, petite cabane"} fill={true} />
                    </figure>
                    <article>
                        <Menu className={styles.buttonMenu} size={56} color={"white"} onClick={handleMenu}/>
                            <ul className={`${styles.ul} ${openMenu ? styles.open : styles.close }`}>
                                <li className={styles.headMenu}>
                                    <p className={styles.p}>Menu</p>
                                    <X className={styles.button} onClick={handleMenu} size={48}/>
                                </li>
                            {dataNav.map((item)=>
                                <li className={styles.li} key={item.id}>
                                    <Link className={styles.linkMenu} href={item.link}>{item.label}</Link>
                                </li>
                            )}
                            </ul>

                    </article>
                </section>
                <section>
                    <article>
                        <CircleQuestionMark size={48} color={"white"}/>
                        <Link className={styles.link} href="#"> Nous contacter </Link>
                    </article>
                    <article>
                        <Phone color={"white"} />
                        <p>01.01.01.01.01</p>
                    </article>
                </section>
            </nav>
        </>
    )
}