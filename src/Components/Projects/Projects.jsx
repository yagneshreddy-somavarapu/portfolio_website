
const projects = [
  {
    name: "Software Developer | TexUb | Greet Labs Pvt Ltd",
    data:"Bengaluru | Aug 2024 - Present",
    description: [
      "Developed RESTful APIs for the User Module ensuring scalability and reusability.",
      "Built reusable, data-driven frontend components integrated with backend APIs.",
      "Reduced system downtime by 40% with retry policies and error fallback logic.",
      "Collaborated with UI/UX teams to align implementation with design goals.",
    ],
  },
  {
    name: "Software Developer | Setup Filings | Greet Labs Pvt Ltd",
    data:"Bengaluru",
    description: [
      "Assisted in backend service development with Spring Boot for real-time processing.",
      "Optimized SQL queries, reducing API response time by 25%.",
      "Integrated APIs for seamless data exchange across microservices.",
      "Collaborated with cross-functional teams to validate UI and backend consistency.",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800/50 border rounded-lg shadow-md p-6 text-left shadow-xl transition-transform"
            >
              <h3 className="text-xl font-semibold text-white m-2">
                {project.name}
              </h3>
              <p className="font-itlaic text-gray-400 m-2">{project.data}</p>

              {/* Default list styling restored */}
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
