"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Não foi possível enviar seu contato.");
      }

      form.reset();
      setStatus("success");
      setMessage("Contato enviado. Em breve, Wladmir falará com você.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar seu contato agora. Tente novamente.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "submitting"}>
      <div className="form-heading">
        <span>Solicite seu atendimento</span>
        <h3>Deixe seus dados para eu falar com você.</h3>
      </div>

      <div className="form-field">
        <label htmlFor="contact-name">Seu nome</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Como posso chamar você?"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-phone">Seu telefone ou WhatsApp</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          pattern="[0-9() +.-]{10,22}"
          required
        />
      </div>

      <label className="form-consent">
        <input type="checkbox" required />
        <span>Autorizo a Wmainiere Corretora de Seguros a entrar em contato pelos dados informados.</span>
      </label>

      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando contato..." : "Quero receber uma orientação"}
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className={`form-status ${status}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
