import React from "react";
// import photoJpg from "../../assets/photo.jpg"; 
// import photoJpg from "../../assets/photo.png"; 

const About = () => {
  return (
    <section id="about" className="bg-[#171d32] py-40 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        {/* <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={photoJpg}
            alt="Profile"
            className="rounded-[10%] w-64 h-full object-cover shadow-lg"
          />
        </div> */}

        {/* About Text */}
        <div className="w-full  text-center md:text-left">
          <p className="text-white text-lg leading-relaxed">
            I am a <span className="font-semibold text-[#465697]">Python & AI Developer</span> with
            <span className="font-semibold">1.5+ years</span> of experience building backend systems, REST APIs,
            and intelligent automation solutions. I work with
            <span className="font-semibold">FastAPI, Django, Flask</span> and modern AI frameworks like
            <span className="font-semibold">LangChain and RAG</span> to create smart agents for workflow automation,
            invoice processing, and requirement analysis. I focus on secure authentication, clean architecture,
            and performance-driven backend design, supported by strong skills in
            <span className="font-semibold">MySQL, MongoDB</span> and API-based integrations.
            I enjoy turning ideas into real products, improving system reliability, and exploring new AI
            capabilities to build practical, scalable solutions.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
