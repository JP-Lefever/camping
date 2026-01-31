"use client"
import styles from "./contactForm.module.css"
import { useForm } from "react-hook-form";
import errorsMessages from "@/assets/data/errorsMessages.json"
import {ContactProps} from "@/type/definitions"
import {sendMail} from "@/features/contactForm/action";
import {toast} from "react-toastify";

export default function ContactForm() {

    const {register, handleSubmit, formState : {errors}, reset} = useForm<ContactProps>()

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



                <button type={"submit"}>Envoyer</button>
            </fieldset>
        </form>
        </>
    )
}