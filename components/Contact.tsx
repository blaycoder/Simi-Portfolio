import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("./contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      // Attempt to parse JSON response
      let result;
      try {
        result = await response.json();
      } catch (err) {
        throw new Error("Invalid server response");
      }

      if (response.ok && result.success) {
        setStatus({ type: "success", message: result.message });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-8 leading-tight">
              Let's work <span className="text-primary">together</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
              I'm currently available for new opportunities. Whether you have a
              question, a project idea, or just want to say hello, drop me a
              line!
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-5 group">
                <div className="p-4 bg-surface border border-white/10 rounded-2xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xl text-secondary font-medium hover:text-primary transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="p-4 bg-surface border border-white/10 rounded-2xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                    Phone
                  </h4>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xl text-secondary font-medium hover:text-primary transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="p-4 bg-surface border border-white/10 rounded-2xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                    Location
                  </h4>
                  <span className="text-xl text-secondary font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status && (
                <div
                  className={`p-4 rounded-xl flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="shrink-0" size={20} />
                  ) : (
                    <AlertCircle className="shrink-0" size={20} />
                  )}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-muted mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-muted mb-2 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-muted mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold font-heading text-lg py-4 px-6 rounded-xl hover:bg-primaryDark transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
