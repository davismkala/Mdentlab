import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PlusButton } from "./PlusLink";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });

    if (dbError) {
      if (dbError.code === "23505") {
        setStatus("done");
        setMessage("You're already on the list. Thanks for sticking with us.");
        return;
      }
      setStatus("idle");
      setError("Something went wrong. Please try again in a moment.");
      return;
    }
    setStatus("done");
    setEmail("");
    setMessage("You're in! Thanks for subscribing.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="Your email address"
          className="w-full border border-navy-foreground/25 bg-transparent px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-teal focus:outline-none"
        />
        <PlusButton type="submit" disabled={status === "loading"} variant="solid">
          {status === "loading" ? "Sending" : "Sign Up"}
        </PlusButton>
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {message ? <p className="text-sm text-teal-soft">{message}</p> : null}
    </form>
  );
}
