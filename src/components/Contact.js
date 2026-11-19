import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const inquiryTopics = [
  "Full-Stack Project",
  "AI / Automation",
  "Internship / Role",
  "Collaboration",
];

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Full-Stack Project");

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_qx4rsg8",
        "template_03dbj7k",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-10 py-16 overflow-hidden bg-[#080b14] text-white selection:bg-cyan-400 selection:text-gray-950">
      {/* AMBIENT BACKGROUND LIGHTING */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-160px] left-[10%] w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[10%] w-[480px] h-[480px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE: DETAILS & SOCIALS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-gray-400 font-semibold uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
            Let’s build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              something impactful.
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
            Whether you have a full-stack web project, an AI automation idea,
            or an engineering opportunity—drop a message and I’ll get back to
            you promptly.
          </p>

          {/* INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Location
              </p>
              <p className="text-sm font-semibold text-gray-200">
                Pune, Maharashtra, India
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Availability
              </p>
              <p className="text-sm font-semibold text-cyan-400">
                Open to Internships & Projects
              </p>
            </div>
          </div>

          {/* DIRECT LINKS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/vinitnehe"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://instagram.com/sapnakalaasarees"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-purple-400/40 transition"
            >
              @sapnakalaasarees ↗
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: GLASSMORPHIC FORM CARD */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 sm:p-10 shadow-2xl space-y-6"
        >
          {/* SUBTLE CARD GLOW */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* QUICK TOPIC SELECTOR */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              What are we building?
            </label>
            <div className="flex flex-wrap gap-2">
              {inquiryTopics.map((topic) => {
                const isActive = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition ${
                      isActive
                        ? "bg-cyan-400/15 border-cyan-400/50 text-cyan-300"
                        : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-white/25"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
            {/* Optional hidden field if your EmailJS template supports {{subject}} */}
            <input type="hidden" name="subject" value={selectedTopic} />
          </div>

          {/* INPUT FIELDS */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="user_name"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Your Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:bg-white/[0.08] outline-none transition disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Your Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:bg-white/[0.08] outline-none transition disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={`Hi Vinit, I'd like to discuss a ${selectedTopic.toLowerCase()}...`}
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 h-32 resize-none focus:border-cyan-400/60 focus:bg-white/[0.08] outline-none transition disabled:opacity-60"
              />
            </div>
          </div>

          {/* SUCCESS / ERROR MESSAGE */}
          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                role="status"
                aria-live="polite"
                className={`p-4 rounded-xl text-sm font-medium text-center border ${
                  status === "success"
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                    : "bg-red-500/10 text-red-300 border-red-500/30"
                }`}
              >
                {status === "success"
                  ? "✓ Message sent successfully! I'll get back to you within 24 hours."
                  : "✕ Failed to send your message. Please verify your connection and try again."}
              </motion.div>
            )}
          </AnimatePresence>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl text-gray-950 font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 hover:brightness-110 transition active:scale-[0.99] shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-gray-950 border-t-transparent animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span>↗</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;