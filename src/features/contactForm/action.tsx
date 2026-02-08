"use server"

import nodemailer from "nodemailer"

import {ContactProps} from "@/type/definitions";

export const sendMail = async (data: ContactProps) => {


  const {firstname, lastname, email, message, subject, arrival, departure, phone} = data;

try {
  const transporter = nodemailer.createTransport({

    host : process.env.SMTP_HOST,
    port : parseInt(process.env.SMTP_PORT || "587" ,10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })

  await transporter.sendMail({
    from: `"Nouveau message camping" <${process.env.SMTP_USER}>`,
    to : process.env.CONTACT_RECEIVER,
    subject: `Nouveau message de ${firstname} ${lastname}`,
    text : `
        Email : ${email}
        sujet : ${subject}
        Message : ${message}
        `,
    html: `
        <p>Nom:${lastname}</p>
        <p>Prénom: ${firstname}</p>
        <p>Email: ${email}</p>
        <p>Telephone: ${phone}</p>
        <p>Sujet: ${subject}</p>
        <p>date de réservation: Du ${arrival} au ${departure} </p>
        <p>Message:</br>${message}</p>
        `,
    replyTo: email,
  })

  return {success: true, data: "Le message a bien été envoyé"}
} catch (error) {
  console.error(error)
  return {success: false, error: "Une erreur est survenue"}
}
}