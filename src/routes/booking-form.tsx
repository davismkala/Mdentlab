import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusButton } from "@/components/mdent/PlusLink";
import { Field, FormStatus, SelectInput, TextArea, TextInput } from "@/components/mdent/FormField";
import { PRODUCT_CARDS, IMAGES } from "@/lib/site";

const title = "Get in Touch with the MDent Team | Booking Form";
const description =
  "Request a call back from MDent, the leading dental laboratory in Dubai. Tell us about your clinic and the restorations you need.";

export const Route = createFileRoute("/booking-form")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/booking-form" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/booking-form" }],
  }),
  component: BookingPage,
});

const SERVICES = [
  ...PRODUCT_CARDS.map((p) => p.title),
  "Digital products",
  "Orthodontics",
  "Night guards",
  "Other",
];

function BookingPage() {
  const [values, setValues] = useState({
    full_name: "",
    clinic_name: "",
    email: "",
    phone: "",
    country: "",
    service_interest: "",
    preferred_contact_method: "Email",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.full_name.trim()) next["full_name"] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next["email"] = "Please enter a valid email address.";
    if (!values.phone.trim()) next["phone"] = "Please enter a phone number so we can reach you.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    const { error } = await supabase.from("booking_requests").insert({
      full_name: values.full_name.trim(),
      clinic_name: values.clinic_name.trim() || null,
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim() || null,
      service_interest: values.service_interest || null,
      preferred_contact_method: values.preferred_contact_method,
      message: values.message.trim() || null,
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
      service_interest: "",
      preferred_contact_method: "Email",
      message: "",
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Get in Touch with the MDent Team"
        image={IMAGES.closing}
      />
      <Section>
        <form onSubmit={onSubmit} noValidate className="max-w-3xl space-y-6">
          {status === "success" ? (
            <FormStatus
              state="success"
              message="Thank you — your request has been received. A member of the MDent team will contact you shortly."
            />
          ) : null}
          {status === "error" ? (
            <FormStatus
              state="error"
              message="We couldn't submit your request. Please try again, or call us on +971 4 332 9201."
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
            <Field label="Phone" name="phone" required error={errors["phone"]}>
              <TextInput id="phone" value={values.phone} onChange={set("phone")} />
            </Field>
            <Field label="Country" name="country">
              <TextInput id="country" value={values.country} onChange={set("country")} />
            </Field>
            <Field label="Service of Interest" name="service_interest">
              <SelectInput
                id="service_interest"
                value={values.service_interest}
                onChange={set("service_interest")}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Preferred Contact Method" name="preferred_contact_method">
              <SelectInput
                id="preferred_contact_method"
                value={values.preferred_contact_method}
                onChange={set("preferred_contact_method")}
              >
                {["Email", "Phone", "WhatsApp"].map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </SelectInput>
            </Field>
          </div>
          <Field label="Message" name="message">
            <TextArea id="message" value={values.message} onChange={set("message")} />
          </Field>
          <PlusButton type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending" : "Send Request"}
          </PlusButton>
        </form>
      </Section>
    </>
  );
}
