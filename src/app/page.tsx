import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-32 flex-grow">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
          <h1 className="text-5xl font-bold mb-4 text-emerald-600">John Doe</h1>
          <h2 className="text-2xl mb-6 text-slate-600">Full Stack Developer</h2>
          <p className="text-xl max-w-2xl text-center text-slate-700">
            I build beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
          <h2 className="text-4xl font-bold mb-8 text-emerald-600">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-lg mb-4 text-slate-700">
              I&apos;m a passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. I love building elegant solutions to complex problems.
            </p>
            <p className="text-lg mb-4 text-slate-700">
              With 5+ years of experience in the field, I&apos;ve worked on a variety of projects from small business websites to complex enterprise applications.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-500">Skills</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>JavaScript/TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js & Express</li>
                  <li>HTML5 & CSS3</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-500">Education</h3>
                <p className="font-medium text-slate-700">BSc Computer Science</p>
                <p className="text-slate-600">University of Technology</p>
                <p className="text-slate-600">2015-2019</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
          <h2 className="text-4xl font-bold mb-8 text-emerald-600">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200 mb-4 rounded"></div>
                <h3 className="text-2xl font-bold mb-2 text-emerald-500">Project {project}</h3>
                <p className="text-slate-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors">
                    Demo
                  </button>
                  <button className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-50 transition-colors">
                    Source
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
          <h2 className="text-4xl font-bold mb-8 text-emerald-600">Experience</h2>
          <div className="max-w-3xl w-full">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Solutions Inc",
                period: "2021 - Present",
                description: "Led frontend development for enterprise applications. Implemented responsive design and optimized performance."
              },
              {
                title: "Web Developer",
                company: "Digital Creations",
                period: "2018 - 2021",
                description: "Developed and maintained multiple client websites. Collaborated with designers to implement UX improvements."
              },
              {
                title: "Junior Developer",
                company: "StartUp Labs",
                period: "2016 - 2018",
                description: "Assisted in the development of web applications. Gained experience in frontend frameworks and backend technologies."
              }
            ].map((job, index) => (
              <div key={index} className="mb-8 border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-2xl font-bold text-emerald-500">{job.title}</h3>
                <p className="text-xl font-medium text-slate-700">{job.company}</p>
                <p className="text-slate-600 mb-2">{job.period}</p>
                <p className="text-slate-700">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
          <h2 className="text-4xl font-bold mb-8 text-emerald-600">Contact Me</h2>
          <div className="max-w-xl w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-slate-700 mb-2">Or reach out via:</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-emerald-500 hover:text-emerald-600">
                  LinkedIn
                </a>
                <a href="#" className="text-emerald-500 hover:text-emerald-600">
                  GitHub
                </a>
                <a href="#" className="text-emerald-500 hover:text-emerald-600">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-emerald-600 text-white p-6 text-center">
          <p> {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
