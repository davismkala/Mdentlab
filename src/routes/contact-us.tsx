import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusButton } from "@/components/mdent/PlusLink";
import { Field, FormStatus, TextArea, TextInput } from "@/components/mdent/FormField";
import { SITE, IMAGES } from "@/lib/site";

const title = "Contact Us | MDent — Middle East Dental Laboratory, Dubai";
const description =
  "Contact MDent, the leading dental lab in Dubai. Call +971 4 332 9201, email info@mdentlab.com or send us a message and our team will respond promptly.";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
  component: ContactPage,
});

type Errors = Record<string, string>;

function ContactPage() {
  const [values, setValues] = useState({
    full_name: "",
    clinic_name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!values.full_name.trim()) next["full_name"] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next["email"] = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next["message"] = "Please tell us a little more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    const { error } = await supabase.from("contact_submissions").insert({
      full_name: values.full_name.trim(),
      clinic_name: values.clinic_name.trim() || null,
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      country: values.country.trim() || null,
      subject: values.subject.trim() || null,
      message: values.message.trim(),
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setValues({
      full_name: "",
      clinic_name: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    });
  }

  return (
    <>
      <PageHero title="Contact Us" image={IMAGES.technicians} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Address
              </span>
              {SITE.address}
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Email
              </span>
              <a href={`mailto:${SITE.email}`} className="text-teal hover:text-navy">
                {SITE.email}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Phone
              </span>
              <a href={SITE.phoneHref} className="text-teal hover:text-navy">
                Call Us {SITE.phone}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                Business Hours
              </span>
              Monday to Friday 8AM - 8PM
              <br />
              Saturday to Sunday 10AM - 7PM
            </p>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-6">
            {status === "success" ? (
              <FormStatus
                state="success"
                message="Thank you — your message has been sent. Our team will be in touch shortly."
              />
            ) : null}
            {status === "error" ? (
              <FormStatus
                state="error"
                message="We couldn't send your message. Please try again, or email info@mdentlab.com."
              />
            ) : null}
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" name="full_name" required error={errors["full_name"]}>
                <TextInput id="full_name" value={values.full_name} onChange={set("full_name")} />
              </Field>
              <Field label="Clinic Name" name="clinic_name">
                <TextInput
                  id="clinic_name"
                  value={values.clinic_name}
                  onChange={set("clinic_name")}
                />
              </Field>
              <Field label="Email" name="email" required error={errors["email"]}>
                <TextInput id="email" type="email" value={values.email} onChange={set("email")} />
              </Field>
              <Field label="Phone" name="phone">
                <TextInput id="phone" value={values.phone} onChange={set("phone")} />
              </Field>
              <Field label="Country" name="country">
                <TextInput id="country" value={values.country} onChange={set("country")} />
              </Field>
              <Field label="Subject" name="subject">
                <TextInput id="subject" value={values.subject} onChange={set("subject")} />
              </Field>
            </div>
            <Field label="Message" name="message" required error={errors["message"]}>
              <TextArea id="message" value={values.message} onChange={set("message")} />
            </Field>
            <PlusButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending" : "Send Message"}
            </PlusButton>
          </form>
        </div>
      </Section>
    </>
  );
}
