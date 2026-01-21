import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume_logo.png"
import linkdin from "../../assets/linkdin.png"
import gitIcon from "../../assets/github-icon.png";

import TextChange from "../TextChange";
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-#171d32 px-6 pt-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <TextChange/>
        </h1>
        <p className="text-xl md:text-2xl  text-white font-medium mb-6">
          A Python Developer 
        </p>
        <p className="text-white text-lg leading-relaxed">
          Experienced in Python, FastAPI, Flask and React.JS — delivering scalable solutions, optimizing performance, and mentoring teams to success.
        </p>
       
        {/* Social Icons */}

        <div className="flex justify-center items-center gap-6 mt-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://github.com/yagneshreddy-somavarapu"
            target="_blank"
            className="bg-white rounded-full shadow hover:scale-110 transition border"
          >
            <img
              src={gitIcon}
              alt="GitHub"
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/yagneshreddysomavarapu/"
            target="_blank"
            className="bg-white rounded-full shadow hover:scale-110 transition border"
          >
            <img
              src={linkdin}
              alt="LinkedIn"
              className=" w-12 h-12 "
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1WPwDMINOBahC00nPbEuGQ_8sGiZNwguz/view?usp=sharing"
            target="_blank"
             className="bg-white rounded-full shadow hover:scale-110 transition border"
          >
            <img
              src={resume}
              alt="Resume"
              className=" w-12 h-12 "
            />
          </a>
        </div>
        
       <div class=" text-white flex flex-wrap justify-center gap-3 !mt-12 text-light/60 aos-init aos-animate " data-aos="fade-up" data-aos-delay="500" data-aos-offset="10">
         <span class="rounded-full bg-light/10 px-4 py-2 border">Python</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">FastAPI</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">Flask</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">Django</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">React js</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">MYSQL</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">MongoDB</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">C</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">Java</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">HTML</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">CSS</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">JavaScript</span>
         </div>
      
      </div>
    </section>
  );
};

export default Home;


