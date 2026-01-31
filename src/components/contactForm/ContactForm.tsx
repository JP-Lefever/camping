"use client"
import { useForm } from "react-hook-form";
import errorsMessages from "@/assets/data/errorsMessages.json"
import {ContactProps} from "@/type/definitions"

export default function ContactForm() {

    const {register, handleSubmit, formState : {errors}, reset} = useForm<ContactProps>()

    return (
        <>
        <form>
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
                {errors.lastname && (<p>{errors.lastname.message}</p>)}

                <button type={"submit"}>Envoyer</button>
            </fieldset>
        </form>
        </>
    )
}