import React from "react";

const educationData = [
  {
    institution: "Geethanjali institute of Science and techonology",
    degree: "B.Tech in Computer Science & Engineering",
    year: "2020 – 2024",
    cgpa: "7.89",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Education</h2>
        <div className="space-y-8 text-left ">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105 transition-transform "
            >
              
              <p className="text-white text-3xl">{edu.institution}</p>
              <p className="text-white text-2xl">{edu.degree}</p>
              <p className="text-gray-400 text-1xl ">
                <strong>Year:</strong> {edu.year} | <strong>CGPA:</strong> {edu.cgpa}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
