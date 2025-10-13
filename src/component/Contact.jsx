export default function Contact() {
  return (
    <div className="py-10 px-6 md:px-20 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-black mb-12 drop-shadow-lg">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      
        <div className="flex items-center gap-4 p-6 bg-black/20 rounded-xl backdrop-blur-sm hover:bg-black/30 transition duration-300 shadow-lg">
          <span className="text-black text-2xl">📧</span>
          <div>
            <h3 className="font-semibold text-black text-lg">Gmail</h3>
            <a
              href="mailto:dipakrajpandey31@gmail.com"
              className=" text-black/90 hover:text-yellow-200 no-underline"
            >
              dipakrajpandey31@gmail.com
            </a>
          </div>
        </div>

     
        <div className="flex items-center gap-4 p-6 bg-black/20 rounded-xl backdrop-blur-sm hover:bg-black/30 transition duration-300 shadow-lg">
          <span className="text-black text-2xl">📞</span>
          <div>
            <h3 className="font-semibold text-black text-lg">Phone</h3>
            <a
              href="tel:+977-9862460349"
              className="text-black/90 hover:text-yellow-200 no-underline"
            >
              +977-9862460349
            </a>
          </div>
        </div>


        <div className="flex items-center gap-4 p-6 bg-black/20 rounded-xl backdrop-blur-sm hover:bg-black/30 transition duration-300 shadow-lg">
          <span className="text-black text-2xl">🐙</span>
          <div>
            <h3 className="font-semibold text-black text-lg">GitHub</h3>
            <a
              href="https://github.com/DipakRajPandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 hover:text-yellow-200 no-underline"
            >
              github.com/DipakRajPandey
            </a>
          </div>
        </div>

       
        <div className="flex items-center gap-4 p-6 bg-black/20 rounded-xl backdrop-blur-sm hover:bg-black/30 transition duration-300 shadow-lg">
          <span className="text-black text-2xl">💼</span>
          <div>
            <h3 className="font-semibold text-black text-lg">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/dipak-raj-pandey-19224a239/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/90 hover:text-yellow-200 no-underline"
            >
              linkedin.com/in/dipak-raj-pandey
            </a>
          </div>
        </div>
      </div>

    <div className="mt-16">
  <footer className="text-center text-gray-700 text-sm py-4 border-t border-gray-300">
    &copy; {new Date().getFullYear()} Dipak Raj Pandey. All rights reserved.
  </footer>
</div>

    </div>
  );
}
