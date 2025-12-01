import React, { useState } from "react";
import {
  ContactWrapper,
  Title,
  Form,
  Input,
  TextArea,
  Button
} from "../styles/contact.styles"; 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Aqui você pode integrar com emailjs, API, backend etc.
    console.log("Form enviado:", form);

    // Mostra mensagem flutuante
    setSent(true);

    // Some depois de 3 segundos
    setTimeout(() => setSent(false), 3000);

    // Limpa o formulário
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <ContactWrapper id="contact">
      <Title>Entre em Contato</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
        />

        <TextArea
          name="message"
          placeholder="Digite sua mensagem..."
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button type="submit">Enviar</Button>
      </Form>

      {sent && (
        <div
          style={{
            position: "fixed",
            bottom: "132px",
            right: "32px",
            padding: "14px 20px",
            background: "linear-gradient(90deg, #7c5cff, #5a3cff)",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: "600",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
            animation: "fadeIn 0.3s ease"
          }}
        >
          Mensagem enviada!
        </div>
      )}
    </ContactWrapper>
  );
}
