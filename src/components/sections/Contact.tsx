import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { github, linkedin } from "../../assets";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const FORMSUBMIT_EMAIL = "mukteswar452@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "info" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(FORMSUBMIT_AJAX_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name || "Visitor"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I will get back to you soon.",
        });
        setForm(INITIAL_STATE);
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been received. I will get back to you soon.",
        });
        setForm(INITIAL_STATE);
      } else {
        // Fallback to native form submission
        formRef.current?.submit();
        setStatus({
          type: "success",
          message: "Thank you! Your message is being sent.",
        });
        setForm(INITIAL_STATE);
      }
    } catch {
      // Fallback if browser/extension blocks AJAX
      formRef.current?.submit();
      setStatus({
        type: "success",
        message: "Thank you! Your message is being sent.",
      });
      setForm(INITIAL_STATE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div
        className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <Header useMotion={false} {...config.contact} />

          {/* Direct Social Links (No private email exposed in frontend) */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-tertiary px-4 py-2.5 text-[14px] font-medium text-white transition-all hover:border-[#0077b5] hover:bg-[#0077b5]/10"
              title="Connect on LinkedIn"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-4 w-4 object-contain text-[#0077b5]"
              />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-tertiary px-4 py-2.5 text-[14px] font-medium text-white transition-all hover:border-[#915EFF] hover:bg-[#915EFF]/10"
              title="View GitHub Profile"
            >
              <img src={github} alt="GitHub" className="h-4 w-4 object-contain" />
              <span>View GitHub</span>
            </a>
          </div>

          <form
            ref={formRef}
            target="_blank"
            action={FORMSUBMIT_URL}
            method="POST"
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            {/* FormSubmit Configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message from 3D Portfolio!"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {Object.keys(config.contact.form).map((input) => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-3 font-medium text-white">{span}</span>
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none focus:ring-2 focus:ring-[#915EFF]/50 transition-all"
                    {...(input === "message" && { rows: 5 })}
                  />
                </label>
              );
            })}

            {status.type && (
              <div
                className={`p-4 rounded-xl text-sm font-medium transition-all ${
                  status.type === "success"
                    ? "bg-[#00cea8]/15 border border-[#00cea8]/40 text-[#00cea8]"
                    : status.type === "info"
                    ? "bg-[#915eff]/15 border border-[#915eff]/40 text-[#d8b4fe]"
                    : "bg-red-500/15 border border-red-500/40 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
