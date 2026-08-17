import { cn } from "@/lib/utils";

const control =
  "w-full border border-input bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none";

export function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children?: React.ReactNode | undefined;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy"
      >
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(control, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={5} {...props} className={cn(control, props.className)} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(control, props.className)} />;
}

export function FormStatus({
  state,
  message,
}: {
  state: "error" | "success";
  message: string;
}) {
  return (
    <div
      role="status"
      className={cn(
        "border-l-2 px-4 py-3 text-sm",
        state === "success"
          ? "border-teal bg-teal/5 text-navy"
          : "border-destructive bg-destructive/5 text-destructive",
      )}
    >
      {message}
    </div>
  );
}