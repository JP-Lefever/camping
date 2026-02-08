"use client"
import styles from "./activities.module.css"
import React from "react";
import {market, randonnees, visites, activites} from "@/assets/data/tourisme"
import Image from "next/image"


export default function Activities() {

    const [openMenu, setOpenMenu] = React.useState<string | false>("market");

    const handleOpenMenu = (e : React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setOpenMenu(openMenu === value ? false : value);
    }

    return (
        <>

            <section className={styles.buttons}>
                <button onClick={handleOpenMenu} type={"button"} value={"market"}><h2>{"Les marchés"}</h2></button>
                <button onClick={handleOpenMenu} type={"button"} value={"visites"}><h2>{"Les visites"}</h2></button>
                <button onClick={handleOpenMenu} type={"button"} value={"randonnees"}><h2>{"Les randonnées"}</h2></button>
                <button onClick={handleOpenMenu} type={"button"} value={"tourisme"}><h2>{"Les activités"}</h2></button>
            </section>

            <section className={styles.content} >
                <article>
                    {openMenu === "market" && (
                        market.map((m) => (
                            <article key={m.id}>
                                <h3>{m.title}</h3>
                                <div className={styles.div} role={"group"}>
                                    <figure className={styles.figure}>
                                        <Image src={m.image} alt={m.title} fill={true}  />
                                    </figure>
                                    <p>{m.description}</p>
                                </div>
                            </article>
                        ))
                    )}
                </article>
                <article>
                    {openMenu === "visites" && (
                        visites.map((m) => (
                            <article key={m.id}>
                                <h3>{m.title}</h3>
                                <div className={styles.div} role={"group"}>
                                    <figure className={styles.figure}>
                                        <Image src={m.image} alt={m.title} fill={true} />
                                    </figure>
                                    <p>{m.description}</p>
                                </div>
                            </article>
                        ))
                    )}
                </article>
                <article>
                    {openMenu === "randonnees" && (
                        randonnees.map((m) => (
                            <article key={m.id}>
                                <h3>{m.title}</h3>
                                <div className={styles.div} role={"group"}>
                                    <figure className={styles.figure}>
                                        <Image src={m.image} alt={m.title} fill={true} />
                                    </figure>
                                    <p>{m.description}</p>
                                </div>
                            </article>
                        ))
                    )}
                </article>
                <article>
                    {openMenu === "tourisme" && (
                        activites.map((m) => (
                            <article key={m.id}>
                                <h3>{m.title}</h3>
                                <div className={styles.div} role={"group"}>
                                    <figure className={styles.figure}>
                                        <Image src={m.image} alt={m.title} fill={true} />
                                    </figure>
                                    <p>{m.description}</p>
                                </div>
                            </article>
                        ))
                    )}
                </article>
            </section>

        </>
    )
}