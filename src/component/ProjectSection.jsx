import mart from "../assets/images/mart.png";
import sms2 from "../assets/images/sms2.png";
import smsdemo from "../assets/Videos/SMSProject.mp4"

export default function ProjectSection() {
  const projects = [
    {
      id:1,
      title:"KinmelHub (Multi-Vendor E-commerce Platform)",
      image:"",
      tech:"Spring Boot,HibernatORM,React,MySQL,Cloudinary",
      description:"Built a scalable multi-vendor e-commerce platform enabling vendor product management, secure authentication, product reviews, cart, and payment integration. Implemented REST APIs using Spring Boot and MySQL, focusing on security and performance optimization.",
      demoLink:"abc",
      githubLink:"https://github.com/DipakRajPandey/KinMelHub.git"
    },{
      id: 2,
      title: "Hamro Mart (E-commerce Platform) | February 2025 |",
      image: mart,
      tech: "Spring Boot, JSE, MySQL",
      description:
        "Built an e-commerce platform inspired by Daraz, leveraging Spring Boot for the backend and MySQL for data management. Implemented features like product listing, user authentication, add to cart, and checkout. Ensured a dynamic shopping experience with a responsive UI.",
      demoLink: "abc",
      githubLink: "https://github.com/DipakRajPandey/Hamro_mart",
    },
    {
      id: 3,
      title: "Student Management System | August 2024 |",
      image: sms2,
      tech: "JSE, Java Swing, MySQL",
      description:
        "Developed a Student Management System using JSE, Java Swing, and MySQL. Features include adding, updating, deleting, and viewing student records. Utilized Java Swing for GUI development and JDBC for database integration, reinforcing skills in desktop app development.",
      demoLink:smsdemo,
      githubLink: "https://github.com/DipakRajPandey/StudentManagementStsytem",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <h2 className="text-3xl font-bold text-gray-800 mx-4 whitespace-nowrap">
          My Projects
        </h2>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row items-center hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 object-cover h-64 md:h-auto"
            />

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-2 font-medium">
                Core Technologies Used: {project.tech}
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex justify-between items-center gap-4 mt-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 no-underline"
                  >
                    👁️ Demo
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 no-underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-lg text-gray-700">
          For more, visit{" "}
          <a
            href="https://github.com/DipakRajPandey"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-blue-600 font-semibold transition-all duration-300 hover:text-blue-700 no-underline"
          >
            GitHub
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </h3>
      </div>
    </div>
  );
}
