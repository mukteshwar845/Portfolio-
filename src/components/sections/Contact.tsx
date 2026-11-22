import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { github, linkedin } from "../../assets";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong. Please connect via LinkedIn or GitHub.");
        }
      );
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
              <img src={linkedin} alt="LinkedIn" className="h-4 w-4 object-contain text-[#0077b5]" />
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
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
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
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === "message" && { rows: 5 })}
                  />
                </label>
              );
            })}
            <button
              type="submit"
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-transform hover:scale-105"
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