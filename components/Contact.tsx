"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

// Chave gratuita do Web3Forms (https://web3forms.com). Ela é pública por design:
// o serviço usa o e-mail cadastrado nela para entregar as mensagens na sua caixa de entrada.
const WEB3FORMS_KEY = "cc1885ba-7d0f-47b9-937e-3c83778a89f0";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // guardar antes do await
    const data = new FormData(form);

    if (WEB3FORMS_KEY.startsWith("COLE")) {
      setErrorMsg("O formulário ainda não foi configurado com a chave do Web3Forms.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const name = String(data.get("name") ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Novo contato pelo portfólio - ${name}`,
          from_name: "Portfólio",
          name,
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          botcheck: data.get("botcheck") ? "true" : "",
        }),
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json.message || "Não foi possível enviar. Tente novamente.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Sem conexão ou serviço indisponível. Tente novamente em instantes.");
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-accent focus:outline-none";

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle index="03" label="contato" title="Vamos trabalhar juntos?" center />

      <Reveal className="mx-auto max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Seu nome" className={field} />
          <input name="email" type="email" required placeholder="Seu e-mail" className={field} />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Sua mensagem"
            className={field}
          />

          {/* Campo invisível para barrar robôs */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="group relative w-full overflow-hidden rounded-lg bg-accent px-6 py-3 font-medium text-ink-950 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-accent-soft hover:shadow-[0_0_30px_rgba(0,240,255,0.65)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative inline-flex items-center gap-2">
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>

          <div aria-live="polite" className="min-h-6 text-center text-sm">
            {status === "success" && (
              <p className="text-emerald-400">
                Mensagem enviada com sucesso! Responderei em breve.
              </p>
            )}
            {status === "error" && <p className="text-red-400">{errorMsg}</p>}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
