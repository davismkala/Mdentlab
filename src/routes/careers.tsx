import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusButton } from "@/components/mdent/PlusLink";
import { Field, FormStatus, TextArea, TextInput } from "@/components/mdent/FormField";

const title = "Careers at MDent | Middle East Dental Laboratory, Dubai";
const description =
  "Join Middle East Dental Laboratory in Dubai. Send your CV and tell us about your experience in dental technology.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = [".pdf", ".doc", ".docx"];

function CareersPage() {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    position: "",
    years_experience: "",
    cover_note: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.full_name.trim()) next['full_name'] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next['email'] = "Please enter a valid email address.";
    if (file) {
      const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
      if (!ALLOWED.includes(ext)) next['cv'] = "CV must be a PDF, DOC or DOCX file.";
      else if (file.size > MAX_BYTES) next['cv'] = "CV must be 5MB or smaller.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    let cvUrl: string | null = null;
    if (file) {
      const ext = file.name.slice(file.name.lastIndexOf("."));
      const path = `${crypto.randomUUID()}${ext}`;
      const { error: uploadError } = await supabase.storage.from("cvs").upload(path, file);
      if (uploadError) {
        setStatus("error");
        return;
      }
      cvUrl = path;
    }

    const { error } = await supabase.from("career_applications").insert({
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      position: values.position.trim() || null,
      years_experience: values.years_experience.trim() || null,
      cover_note: values.cover_note.trim() || null,
      cv_url: cvUrl,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setValues({
      full_name: "",
      email: "",
      phone: "",
      position: "",
      years_experience: "",
      cover_note: "",
    });
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <>
      <PageHero eyebrow="People" title="Careers" />
      <Section>
        <form onSubmit={onSubmit} noValidate className="max-w-3xl space-y-6">
          {status === "success" ? (
            <FormStatus
              state="success"
              message="Thank you — your application has been received. We will be in touch if there is a suitable role."
            />
          ) : null}
          {status === "error" ? (
            <FormStatus
              state="error"
              message="We couldn't submit your application. Please try again in a moment."
            />
          ) : null}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full Name" name="full_name" required error={errors['full_name']}>
              <TextInput id="full_name" value={values.full_name} onChange={set("full_name")} />
            </Field>
            <Field label="Email" name="email" required error={errors['email']}>
              <TextInput id="email" type="email" value={values.email} onChange={set("email")} />
            </Field>
            <Field label="Phone" name="phone">
              <TextInput id="phone" value={values.phone} onChange={set("phone")} />
            </Field>
            <Field label="Position" name="position">
              <TextInput id="position" value={values.position} onChange={set("position")} />
            </Field>
            <Field label="Years of Experience" name="years_experience">
              <TextInput
                id="years_experience"
                value={values.years_experience}
                onChange={set("years_experience")}
              />
            </Field>
            <Field label="CV (PDF, DOC, DOCX — max 5MB)" name="cv" error={errors['cv']}>
              <input
                id="cv"
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="w-full border border-input bg-background px-4 py-2.5 text-sm file:mr-4 file:border-0 file:bg-navy file:px-3 file:py-2 file:text-xs file:uppercase file:tracking-[0.14em] file:text-navy-foreground"
              />
            </Field>
          </div>
          <Field label="Cover Note" name="cover_note">
            <TextArea id="cover_note" value={values.cover_note} onChange={set("cover_note")} />
          </Field>
          <PlusButton type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending" : "Submit Application"}
          </PlusButton>
        </form>
      </Section>
    </>
  );
}