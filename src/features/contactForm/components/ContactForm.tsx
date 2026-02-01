"use client"
import styles from "./contactForm.module.css"
import { useForm } from "react-hook-form";
import errorsMessages from "@/assets/data/errorsMessages.json"
import {ContactProps} from "@/type/definitions"
import {sendMail} from "@/features/contactForm/action";
import {toast} from "react-toastify";
import React, {useState} from "react";

export default function ContactForm() {

    const {register, handleSubmit, formState : {errors}, reset} = useForm<ContactProps>()

    const [selectValue, setSelectValue] = useState("")

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setSelectValue(e.target.value)
    }

    const onSubmit = async (data : ContactProps) => {

        const response = await sendMail(data)

        if (response.success) {
            toast.success(response.data)
            reset()
        } else {
            toast.error(response.error)
        }
    }

    return (
        <>
            <section className={styles.section}>
                <article className={styles.article}>
                    <h1>{"Contact"}</h1>
                    <ul>Pour toute demande d'informations ou réservation, contactez-nous via ce formulaire ou au:
                        <li>0101010101</li>
                        <li>camping@camping.com</li>
                    </ul>
                </article>
                <article>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className={styles.fieldset}>
                            <input
                                type={"text"}
                                placeholder={"Nom*"}
                                {...register("lastname",
                            {
                                required: errorsMessages.required,
                            }
                            )}
                            />
                            {errors.lastname && (<p className={styles.p}>{errors.lastname.message}</p>)}

                            <input
                                type={"text"}
                                placeholder={"Prénom*"}
                                {...register("firstname", {
                                required : errorsMessages.required
                            })}/>
                            {errors.firstname && (<p className={styles.p}>{errors.firstname.message}</p>)}

                            <input
                                type={"email"}
                                placeholder={"Email*"}
                                {...register("email", {
                            required : errorsMessages.required
                            })}/>

                            <input
                                type={"text"}
                                placeholder={"Téléphone*"}
                                {...register("phone", {
                                required: errorsMessages.required
                            })}/>
                        </fieldset>
                        <fieldset className={styles.fieldset}>
                            <select {...register("subject")}
                                    onChange={handleSelectChange}>
                                <option value={"null"}>{"Veuillez selectionner un champ*"}</option>
                                <option value={"reservation"}>{"Réservation"}</option>
                                <option value={"information"}>{"Information camping"}</option>
                                <option value={"autre"}>{"Autre"}</option>
                            </select>
                            {selectValue === "reservation" && (
                                <div role={"group"} className={styles.div}>
                                    <label htmlFor={"arrival"}>{"Dates de séjour du"}</label>
                                    <input type={"date"} {...register("arrival", {
                                    required: errorsMessages.required
                                })} />
                                    <label htmlFor={"departure"}>{"Au"}</label>
                                    <input type={"date"} {...register("departure", {
                                        required: errorsMessages.required
                                    })} />
                                </div>
                            )}
                        </fieldset>
                        <fieldset className={styles.fieldset}>
                            <textarea
                                className={styles.textarea}
                                placeholder={"Message*"}
                                {...register("message", {
                                required: errorsMessages.required
                            })}/>
                        </fieldset>
                            <button className={styles.button} type={"submit"}>Envoyer</button>
                    </form>
                </article>
            </section>
        </>
    )
}
