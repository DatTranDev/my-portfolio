"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/DatTranDev",
    color: "hover:bg-[#333] hover:border-[#333]",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/dat-tran-dev/",
    color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
  },
  {
    name: "Gmail",
    icon: GmailIcon,
    href: "https://mail.google.com/mail/u/0/?fs=1&to=dattran.uit.se@gmail.com&su=Contact%20for%20collaboration&body=Hi%20Dat,%0AI%27d%20like%20to...&tf=cm",
    color: "hover:bg-[#EA4335] hover:border-[#EA4335]",
  },
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const JSONdata = JSON.stringify(formData);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        setEmailSubmitted(true);
        setFormData({ email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-gradient-thermal">Get In Touch</span>
        </h2>
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-ember to-teal rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-outfit font-bold text-2xl text-silver-light mb-4">
            Let&apos;s Connect
          </h3>
          <p className="text-silver leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project idea, or just want to say hi - my inbox is
            always open. I&apos;ll try my best to get back to you!
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className={`w-12 h-12 rounded-xl bg-night-lighter border border-silver/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="mt-12 hidden md:block">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-ember/20 to-teal/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-night-lighter/50 rounded-3xl border border-silver/10 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg className="w-16 h-16 text-ember/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {emailSubmitted ? (
            <motion.div
              className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-teal/10 border border-teal/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-outfit font-bold text-xl text-silver-light mb-2">
                Message Sent!
              </h4>
              <p className="text-silver">
                Thank you for reaching out. I&apos;ll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-silver-light mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-night-lighter border border-silver/10 text-silver-light placeholder-silver-dark focus:outline-none focus:border-ember/50 focus:ring-2 focus:ring-ember/20 transition-all duration-200"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-silver-light mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-night-lighter border border-silver/10 text-silver-light placeholder-silver-dark focus:outline-none focus:border-ember/50 focus:ring-2 focus:ring-ember/20 transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-silver-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Let's talk about..."
                  className="w-full px-4 py-3 rounded-xl bg-night-lighter border border-silver/10 text-silver-light placeholder-silver-dark focus:outline-none focus:border-ember/50 focus:ring-2 focus:ring-ember/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-br from-cyan to-ocean text-white font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
