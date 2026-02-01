"use client"
import styles from "./activities.module.css"
import React from "react";
import {market, randonnees, visites, activites} from "@/assets/data/tourisme"
import Image from "next/image"


export default function Activities() {

    const [openMenu, setOpenMenu] = React.useState<string | false>(false);

    const handleOpenMenu = (e : React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        setOpenMenu(openMenu === value ? false : value);
    }

    return (
        <>

            <article className={styles.article}>
                <button onClick={handleOpenMenu} type={"button"} value={"market"}><h2>{"Les marchés"}</h2></button>
                {openMenu === "market" && (
                    market.map((m) => (
                        <article key={m.id}>
                            <h3>{m.title}</h3>
                            <p>{m.description}</p>
                            <Image src={m.image} alt={m.title} width={100} height={100} />
                        </article>
                        ))
                )}
            </article>
            <article className={styles.article}>
                <button onClick={handleOpenMenu} type={"button"} value={"visites"}><h2>{"Les visites"}</h2></button>
                {openMenu === "visites" && (
                    visites.map((m) => (
                        <article key={m.id}>
                            <h3>{m.title}</h3>
                            <p>{m.description}</p>
                            <Image src={m.image} alt={m.title} width={100} height={100} />
                        </article>
                    ))
                )}
            </article>
            <article className={styles.article}>
                <button onClick={handleOpenMenu} type={"button"} value={"randonnees"}><h2>{"Les randonnées"}</h2></button>
                {openMenu === "randonnees" && (
                    randonnees.map((m) => (
                        <article key={m.id}>
                            <h3>{m.title}</h3>
                            <p>{m.description}</p>
                            <Image src={m.image} alt={m.title} width={100} height={100} />
                        </article>
                    ))
                )}
            </article>
            <article className={styles.article}>
                <button onClick={handleOpenMenu} type={"button"} value={"tourisme"}><h2>{"Les tourisme"}</h2></button>
                {openMenu === "tourisme" && (
                    activites.map((m) => (
                        <article key={m.id}>
                            <h3>{m.title}</h3>
                            <p>{m.description}</p>
                            <Image src={m.image} alt={m.title} width={100} height={100} />
                        </article>
                    ))
                )}
            </article>

        </>
    )
}