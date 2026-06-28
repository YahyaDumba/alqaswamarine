"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  message: string;
};

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  message: "",
};

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const mapSrc = useMemo(() => {
    const query = encodeURIComponent("Bhavnagar, Gujarat, India");
    return `https://www.google.com/maps?q=${query}&output=embed`;
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_STATE);
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
        <Image
          src="/Images/site/hero.jpg"
          alt="Contact Al Qaswa Marine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062644]/70 via-[#062644]/40 to-[#062644]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 py-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
                Write us a letter
              </h2>
              <p className="text-gray-600 mt-2">
                Need marine equipment support? Contact Us Now...
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Name *"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="Email address *"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  type="email"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="Contact No*"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  value={form.whatsapp}
                  onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
                  placeholder="Whatsapp No*"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <textarea
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Your Message"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 min-h-[140px]"
              />

              <div className="border border-gray-200 rounded-md p-4 bg-gray-50 flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-gray-700 select-none">
                  <input type="checkbox" className="accent-blue-600" required />
                  I&apos;m not a robot
                </label>
                <div className="text-xs text-gray-500">reCAPTCHA</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-blue-700 transition"
                >
                  Submit
                </button>
                <div
                  className={classNames(
                    "text-sm font-semibold",
                    submitted ? "text-green-600" : "text-transparent"
                  )}
                >
                  Message sent successfully
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-8 h-fit">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-blue-600 uppercase">
                  Office Address
                </h3>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <div className="text-sm text-gray-700 font-semibold">
                    AL-QASWA TRADING
                  </div>
                  SHERI NO. 7, CITY SURVEY NO. 2680,
                  <br />
                  PLOT NO. 52, KUMBHARWADA CIRCLE
                  <br />
                  TO MADHIYA ROAD, BHAVNAGAR 364001
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-blue-600 uppercase">
                  Call Us
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-600" />
                    <span>+91 9825183207</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-600" />
                    <span>+91 9624243854</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-600" />
                    <span>+91 9925016868</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-blue-600 uppercase">
                  Mail Us
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    <span>info@alqaswamarine.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    <span>spares@alqaswamarine.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
          <div className="w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src={mapSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Qaswa Marine map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
