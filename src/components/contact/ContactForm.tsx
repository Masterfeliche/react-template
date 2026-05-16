import { useMemo, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  CONTACT_EMAIL,
  SUBJECT_OPTIONS,
  subjectFromQueryParam,
} from "../../data/contactContent";
import { bodyLead, sectionTitle } from "../../lib/ui";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const defaultSubject = useMemo(() => {
    const fromSubject = subjectFromQueryParam(searchParams.get("subject"));
    const fromService = subjectFromQueryParam(searchParams.get("service"));
    return fromSubject || fromService;
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim() || "Website inquiry";
    const message = String(fd.get("message") ?? "").trim();

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      message || "(No message provided)",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="min-w-0 space-y-6 rounded-2xl border border-gray-200/80 bg-gray-50 p-6 shadow-xl shadow-blue-950/5 dark:border-slate-700 dark:bg-slate-900 sm:p-8"
      noValidate
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact-form"
    >
      <h2 className={`${sectionTitle} !text-2xl sm:!text-3xl`}>Send a message</h2>
      <p
        className={cn(
          bodyLead,
          "!max-w-none !text-sm !leading-relaxed !text-gray-700 dark:!text-slate-300"
        )}
      >
        Submit opens your email app with this message to{" "}
        <strong className="text-blue-950 dark:text-slate-200">{CONTACT_EMAIL}</strong>. For instant
        help, use WhatsApp above.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
          Full name
        </label>
        <input type="text" id="name" name="name" autoComplete="name" className={inputClass} placeholder="Your name" required />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
            Email
          </label>
          <input type="email" id="email" name="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
            Phone <span className="font-normal text-gray-600 dark:text-slate-400">(recommended)</span>
          </label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" className={inputClass} placeholder="07xx xxx xxx" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          list="subject-suggestions"
          defaultValue={defaultSubject}
          className={inputClass}
          placeholder="e.g. Quote for CCTV"
        />
        <datalist id="subject-suggestions">
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt} />
          ))}
        </datalist>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          placeholder="Describe what you need — products, services, timelines, location…"
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        className="min-h-12 w-full rounded-full bg-yellow-400 py-3 px-6 text-base font-bold text-blue-950 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        Open email to send
      </motion.button>
    </motion.form>
  );
}
