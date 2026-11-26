import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { glassCard } from "../../theme/mixins";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`;

const Inner = styled.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  max-width: 720px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${sectionTitleGradient}
`;

const Desc = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 56ch;
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${glassCard}
  padding: clamp(24px, 4vw, 32px);
  border-radius: 20px;
  gap: 14px;
  position: relative;
`;

const ContactTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const fieldBase = css`
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.navBorder};
  outline: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}22;
  }
`;

const ContactInput = styled.input`
  ${fieldBase}
`;

const ContactInputMessage = styled.textarea`
  ${fieldBase}
  min-height: 120px;
  resize: vertical;
`;

const ContactButton = styled.button`
  width: 100%;
  margin-top: 4px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primaryFill};
  background: ${({ theme }) => theme.primaryFill};
  color: ${({ theme }) => theme.onPrimary};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.9;
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const form = useRef();
  const spotlight = useSpotlightCardHandlers();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h1go69o",
        "template_ncrlu8e",
        form.current,
        "cIHPxbYwNsgVrUuEz"
      )
      .then(() => {
        setOpen(true);
        form.current.reset();
      })
      .catch(() => {
        setErrorOpen(true);
      });
  };

  return (
    <Container id="contact" aria-labelledby="contact-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <Title id="contact-heading">Contact</Title>
          <Desc>
            Reach out for collaborations, roles, or technical questions. I read
            every message and respond as soon as I can.
          </Desc>
        </SectionHeader>
        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          {...spotlight}
          noValidate
        >
          <ContactTitle>Email me</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Your email"
            name="from_email"
            autoComplete="email"
            required
            aria-label="Your email"
          />
          <ContactInput
            type="text"
            placeholder="Your name"
            name="from_name"
            autoComplete="name"
            required
            aria-label="Your name"
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
            required
            aria-label="Subject"
          />
          <ContactInputMessage
            placeholder="Message"
            rows={4}
            name="message"
            required
            aria-label="Message"
          />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully."
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={() => setErrorOpen(false)}
          message="Could not send email. Please try again later."
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Inner>
    </Container>
  );
};

export default Contact;
