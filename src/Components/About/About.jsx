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
            I am a <span className="font-semibold text-[#465697]">Software Developer </span> 
             with hands-on experience in building scalable and high-performance 
            applications using <span className="font-semibold">Python, FastAPI, MongoDB,</span> and 
            <span className="font-semibold"> SQL</span>.
            At <span className="font-semibold text-[#465697]">Greet Labs</span>, I designed and implemented RESTful APIs, optimized backend performance, 
            and integrated seamless UI workflows — improving system reliability and reducing downtime by 40%.
            <br />
            During my internship at <span className="font-semibold text-[#465697]">Greet Labs Pvt Ltd</span>, 
            I gained strong exposure to real-time data processing, debugging, and API integration. 
            By optimizing SQL queries, I successfully reduced API response time by 25%, ensuring smoother data access and faster application performance.
            <br />
            Beyond backend expertise, I am also proficient in frontend technologies such as 
            <span className="font-semibold"> HTML, CSS, JavaScript,</span> and <span className="font-semibold">React</span>, 
            allowing me to deliver full-stack solutions that are both efficient and user-friendly. 
            My toolset includes <span className="font-semibold">GitHub, Postman, VS Code,</span> and <span className="font-semibold">MySQL Workbench</span> — 
            enabling me to maintain clean, collaborative, and high-quality code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
