import React from "react";

const skills = [
  {
    name: "Python",
    logo: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
  },
  {
    name: "Java",
    logo: "https://static.vecteezy.com/system/resources/previews/051/336/407/non_2x/java-programming-transparent-logo-free-png.png",
  },
  {
    name: "C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "Fast API",
    logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
  },
  {
    name: "Flask",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTJfxNXCBM5FyRrn8wDFS6k0NBXIp4ipKygykEWToJaze1cRi1-RmEwVbhmREvXcpId4&usqp=CAU",
  },
  {
    name: "Streamlite",
    logo: "https://image.pngaaa.com/798/5084798-middle.png",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MYSQL",
    logo: "https://toppng.com/uploads/preview/mysql-logo-transparent-11660514439mzkqg8ixwn.png",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gray-800/50 border  shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;