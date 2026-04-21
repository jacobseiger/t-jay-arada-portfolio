import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { SectionHeader } from "./About";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    // Open user's mail client with prefilled message to t.arada.karbon@outlook.com
    window.location.href = `mailto:t.arada.karbon@outlook.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader index="05" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="p-8 rounded-2xl border border-border/60 bg-card/50 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Let's talk</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Open to U.S. remote roles with EST or CST overlap. Reach out for senior
              engineering opportunities or to discuss a project.
            </p>

            <div className="space-y-4 mb-8">
              <ContactRow icon={Mail} label="Email" value="t.arada.karbon@outlook.com" href="mailto:t.arada.karbon@outlook.com" />
              <ContactRow icon={Phone} label="Phone" value="+63 991 912 5197" href="tel:+639919125197" />
              <ContactRow icon={MapPin} label="Location" value="Lipa City, Batangas, Philippines" />
            </div>

            <div className="mt-auto flex gap-3">
              <a href="https://github.com/amnweb" target="_blank" rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/t-jay-arada" target="_blank" rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-border/60 bg-card/50 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2">Send a message</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Fill in the form and your default mail app will open with the message
              ready to send.
            </p>

            <div className="space-y-4">
              <Field label="Name" value={form.name} onChange={set("name")} required maxLength={100} />
              <Field label="Email" type="email" value={form.email} onChange={set("email")} required maxLength={255} />
              <Field label="Phone" value={form.phone} onChange={set("phone")} maxLength={30} />
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm resize-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition disabled:opacity-60 glow-border"
            >
              {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {status === "sent" ? "Message ready" : "Contact me"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-xs text-destructive">Please fill in name, email, and message.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate group-hover:text-primary transition">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label, value, onChange, type = "text", required, maxLength,
}: {
  label: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition"
      />
    </div>
  );
}