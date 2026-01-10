import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-[#09090b] py-24 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 italic">
            Get in <span className="text-zinc-500 font-light not-italic">Touch</span>
          </h2>
          <div className="h-[1px] w-12 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details (Span 5) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I’ll get back to you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600">Call me</h4>
                  <p className="text-white font-medium">+94 76 179 4129</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600">Email</h4>
                  <p className="text-white font-medium">ranshika20@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600">Location</h4>
                  <p className="text-white font-medium">Alawwa, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-sm backdrop-blur-sm"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;