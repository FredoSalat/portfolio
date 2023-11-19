"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      message: "Email is not correct",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      message: "Not a valid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "fredrik@fredmarthinsen.dev",
      subject: "Portfolio",
      reply_to: senderEmail as string,

      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
