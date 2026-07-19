"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, User, Mail, Package, MessageSquare } from "lucide-react";

export default function Footer() {
  const siteMapLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brand", href: "/brand" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/our-services" },
    { label: "Contact Us", href: "/contact" }
  ];

  const [form, setForm] = useState({ name: "", email: "", productName: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", productName: "", message: "" });
        // Clear success message after 4 seconds
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0b2b42] text-white pt-16 pb-8 px-4 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Office Address */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-100 border-b border-slate-700/50 pb-2">
            Office Address
          </h3>
          <h4 className="font-semibold mb-3 text-blue-400">AL-QASWA TRADING</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            SHERI NO. 7, CITY SURVEY NO. 2680,<br />
            PLOT NO. 52, KUMBHARWADA CIRCLE<br />
            TO MADHIYA ROAD, BHAVNAGAR 364001
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-100 border-b border-slate-700/50 pb-2">
            Contact Us
          </h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p className="hover:text-blue-400 transition-colors">+91 9825183207</p>
            <p className="hover:text-blue-400 transition-colors">+91 9624243854</p>
            <p className="hover:text-blue-400 transition-colors">+91 9925016868</p>
            <p className="hover:text-blue-400 transition-colors">info@alqaswamarine.com</p>
            <p className="hover:text-blue-400 transition-colors">spares@alqaswamarine.com</p>
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-100 border-b border-slate-700/50 pb-2">
            Site Map
          </h3>
          <ul className="space-y-3 text-sm">
            {siteMapLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Inquiry Form */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-100 border-b border-slate-700/50 pb-2">
            Quick Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                required
                placeholder="Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#082234] border border-slate-700/60 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#082234] border border-slate-700/60 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Package className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Product Name (Optional)"
                value={form.productName}
                onChange={(e) => setForm({ ...form, productName: e.target.value })}
                className="w-full bg-[#082234] border border-slate-700/60 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div className="relative">
              <span className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </span>
              <textarea
                required
                placeholder="Your Message *"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#082234] border border-slate-700/60 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-150 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Submit Inquiry
                </>
              )}
            </button>

            {success && (
              <p className="text-emerald-400 text-xs mt-1 animate-pulse font-medium text-center">
                ✓ Inquiry submitted successfully!
              </p>
            )}
            {error && (
              <p className="text-red-400 text-xs mt-1 font-medium text-center">
                ⚠ {error}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © 2026 Al Qaswa Marine.</p>
      </div>
    </footer>
  );
}

