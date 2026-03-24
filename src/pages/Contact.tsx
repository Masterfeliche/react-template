import type { FormEvent } from "react";
import { bodyLead, sectionSurface, sectionTitle } from "../lib/ui";
import { cn } from "@/lib/utils";

const SOCIAL = {
  instagram: "https://www.instagram.com/eunica_graphics/",
  tiktok: "https://www.tiktok.com/@eunicatech",
} as const;

export default function Contact() {
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

    const mailto = `mailto:info@eunicatech.co.tz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden bg-blue-950 bg-cover bg-center px-6 py-16 sm:px-8 md:min-h-[26rem] md:py-20 md:bg-[url('/pakata-goh-Ovb-MejXjOg-unsplash.jpg')]">
        <div className="absolute inset-0 bg-blue-950/88 md:bg-blue-950/78" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl px-1 text-center sm:px-0">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Get in <span className="text-yellow-400">touch</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-100 md:text-xl">
            Quotes, technical questions, or after-sales support — reach us by form, phone, or email.
          </p>
        </div>
      </div>

      <div
        className={cn(
          sectionSurface,
          "mx-auto grid w-full max-w-7xl gap-10 sm:gap-12 md:grid-cols-2 md:gap-16"
        )}
      >
          <div className="min-w-0 space-y-8">
            <h2 className="text-2xl font-bold text-blue-950 dark:text-slate-50 sm:text-3xl">
              Contact information
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 dark:text-slate-200">
              Prefer WhatsApp or a call? Use the number below. For detailed requests, the form opens
              your email client with your message ready to send.
            </p>

            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-1 h-6 w-6 shrink-0 text-yellow-500"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-200">Phone</h3>
                <a
                  href="tel:+255714880379"
                  className="font-medium text-gray-800 transition-colors hover:text-blue-950 dark:text-slate-200 dark:hover:text-yellow-400"
                >
                  0714 880 379
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-1 h-6 w-6 shrink-0 text-yellow-500"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-200">Email</h3>
                <a
                  href="mailto:info@eunicatech.co.tz"
                  className="break-words font-medium text-gray-800 transition-colors hover:text-blue-950 dark:text-slate-200 dark:hover:text-yellow-400"
                >
                  info@eunicatech.co.tz
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-1 h-6 w-6 shrink-0 text-yellow-500"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-200">Locations</h3>
                <p className="text-gray-800 dark:text-slate-200">Kariakoo · Mwananyamala · Komakoma</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-950 dark:text-slate-200">Social</h3>
              <ul className="mt-2 space-y-3 text-gray-800 dark:text-slate-200">
                <li>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block min-h-11 rounded-md py-2 font-medium hover:text-blue-950 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 dark:hover:text-yellow-400"
                  >
                    Instagram — @eunica_graphics
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block min-h-11 rounded-md py-2 font-medium hover:text-blue-950 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 dark:hover:text-yellow-400"
                  >
                    TikTok — @eunicatech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="min-w-0 space-y-6 rounded-2xl border border-gray-200/80 bg-gray-50 p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:p-8"
            noValidate
          >
            <h2 className={`${sectionTitle} !text-2xl sm:!text-3xl`}>Send a message</h2>
            <p
              className={cn(
                bodyLead,
                "!max-w-none !text-sm !leading-relaxed !text-gray-700 dark:!text-slate-300"
              )}
            >
              Submitting opens your email app with this message addressed to{" "}
              <strong className="text-blue-950 dark:text-slate-200">info@eunicatech.co.tz</strong>. You
              can send from the account you choose.
            </p>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
                Phone <span className="font-normal text-gray-600 dark:text-slate-400">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                placeholder="07xx xxx xxx"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                placeholder="e.g. Quote for CCTV"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-blue-950 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-blue-950 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                placeholder="Describe what you need — products, services, timelines, location…"
              />
            </div>
            <button
              type="submit"
              className="min-h-12 w-full rounded-full bg-yellow-400 py-3 px-6 text-base font-bold text-blue-950 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Open email to send
            </button>
          </form>
      </div>
    </>
  );
}
