import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { BiMobile } from "react-icons/bi";
import ContactForm from "./Email/ContactForm";

const Contact = () => {
  return (
     <section id="contact" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        <ContactForm/>

        <p className="mb-10 text-lg">
          Get in Touch
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:somavarapuyagneshreddy@gmail.com"
            className="flex items-center justify-center gap-3 rounded-full bg-light/10 px-6 py-2 border hover:scale-105  hover:bg-grey-700 transition "
          >
            <Mail className="w-5 h-5" />
            somavarapuyagneshreddy@gmail.com
          </a>
          <a
            href="Mobileto:(+91)93914-72367"
            className="flex items-center justify-center gap-3 rounded-full bg-light/10 px-6 py-2 border hover:scale-105  hover:bg-grey-700 transition "
          >
            <BiMobile className="w-5 h-5" />
            (+91) 93914-72367
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/yagneshreddysomavarapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-full bg-light/10 px-8 py-2 border hover:scale-105  hover:bg-grey-700 transition "
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;