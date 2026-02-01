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
            <section>
                <h1>{"Contact"}</h1>
                <ul>Pour toute demande d'informations ou réservation, contactez-nous via ce formulaire ou :
                    <li>0101010101</li>
                    <li>camping@camping.com</li>
                </ul>
            </section>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <label htmlFor={"lastname"}>Nom</label>
                        <input
                            type={"text"}
                            {...register("lastname",
                        {
                            required: errorsMessages.required,
                        }
                        )}
                        />
                        {errors.lastname && (<p className={styles.p}>{errors.lastname.message}</p>)}
                        <label htmlFor={"firstname"}>Prénom</label>
                        <input type={"text"} {...register("firstname", {
                            required : errorsMessages.required
                        })}/>
                        {errors.firstname && (<p className={styles.p}>{errors.firstname.message}</p>)}
                        <label htmlFor={"email"}>{"Email"}</label>
                        <input type={"email"} {...register("email", {
                        required : errorsMessages.required
                        })}/>
                        <label htmlFor={"phone"}>{"Téléphone"}</label>
                        <input type={"text"} {...register("phone", {
                            required: errorsMessages.required
                        })}/>
                    </fieldset>
                    <fieldset>

                        <select onChange={handleSelectChange}>
                            <option value={"null"}>{"Veuillez selectionner un champ"}</option>
                            <option value={"reservation"}>{"Réservation"}</option>
                            <option value={"information"}>{"Information camping"}</option>
                            <option value={"autre"}>{"Autre"}</option>
                        </select>
                        {selectValue === "reservation" && (
                            <>
                                <label htmlFor={"date"}>{"Dates de séjour du"}</label>
                                <input type={"date"} {...register("date", {
                                required: errorsMessages.required
                            })} />
                                <label htmlFor={"date"}>{"Au"}</label>
                                <input type={"date"} {...register("date", {
                                    required: errorsMessages.required
                                })} />
                            </>
                        )}
                    </fieldset>
                    <fieldset>
                        <label htmlFor={"message"}>{"Message"}</label>
                        <textarea {...register("message", {
                            required: errorsMessages.required
                        })}/>
                    </fieldset>
                        <button type={"submit"}>Envoyer</button>
                </form>
            </section>
        </>
    )
}
