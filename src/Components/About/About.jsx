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
            I am a <span className="font-semibold text-[#465697]">Python Developer</span> with
            <span className="font-semibold"> 1.5+ years</span> of hands-on experience building and integrating
            RESTful APIs using <span className="font-semibold">FastAPI, Flask, Django,</span> and
            <span className="font-semibold"> React.js</span>. Skilled in designing secure authentication systems,
            optimizing backend performance, and collaborating with cross-functional teams to deliver
            production-ready applications. Strong background in
            <span className="font-semibold"> MySQL, MongoDB,</span> and API-driven development, with a focus on
            clean, scalable code and reliable deployments. Passionate about solving real-world problems
            through efficient backend design and smooth frontend integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
