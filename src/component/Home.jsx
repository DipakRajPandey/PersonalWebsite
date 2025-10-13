import logo from "../assets/images/dipak3.jpg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-20 py-10">
     
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={logo}
          alt="Dipak Raj Pandey"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>

 
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-xl text-gray-700">Hey, I'm</h3>
        <h4 className="text-3xl md:text-4xl font-bold text-blue-600">
          Dipak Raj Pandey
        </h4>
        <p className="text-gray-600 mt-2 mb-6">
          Software Engineer / Student / Learner
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 mb-3">
            Hello! I'm Dipak Raj Pandey, a passionate software engineer,
            student, and lifelong learner. I enjoy solving real-world problems
            using technology, especially in Java and web systems.
          </p>
          <p className="text-gray-600">
            I'm currently exploring full-stack development using React.js,
            Spring Boot, and modern tools. I love building clean, functional
            apps that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}
