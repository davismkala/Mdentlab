import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-teal px-4 py-3 text-sm font-medium text-navy-foreground shadow-lg transition-colors hover:bg-navy"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.96L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01a9.9 9.9 0 0 0 9.9-9.9A9.9 9.9 0 0 0 12.04 2Zm0 18.1c-1.5 0-2.97-.4-4.25-1.17l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 1 1 7.04 3.89Zm4.5-6.14c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.13-.17.24-.64.79-.78.95-.15.16-.29.18-.53.06-.25-.13-1.04-.39-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.05-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.13.17 1.71 2.62 4.15 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z" />
      </svg>
      WhatsApp us
    </a>
  );
}