import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 z-10 shadow-md">
        <div className="mx-auto max-w-5xl px-6 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <span className="font-semibold text-lg text-white">Alejandro Torres</span>

          {/* Navbar Links */}
          <div className="flex items-center gap-8 font-medium">
            <a href="#hero" className="text-gray-200 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-200 hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex min-h-screen flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Alejandro Torres
        </h1>

        <p className="mt-6 max-w-xl text-xl text-gray-600">
          UVic Software Engineering graduate | Passionate about building software 
          and exploring new technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
          >
            About Me
          </a>
        </div>

        {/* Social links */}
        <div className="mt-6 flex gap-6 text-white text-2xl">
          <a href="https://github.com/Ale-Torres" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alejandrotmartn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* About Section + Education */}
      <section
        id="about"
        className="mx-auto max-w-3xl px-6 py-24 flex flex-col items-center"
      >
        <h2 className="text-3xl text-center font-bold">
          About Me
        </h2>

        <p className="mt-6 text-lg text-gray-600 text-center leading-relaxed">
          My shoulder cat Kaiser is always ready to program with me. 
        </p>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/images/me.jpg"
            alt="Alejandro Torres"
            width={300}
            height={400}
            className="shadow-lg"
          />
        </div>

        {/* Education */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700 w-full max-w-3xl text-center">
          <h3 className="text-xl font-semibold">
            Bachelor of Software Engineering (BSEng)
          </h3>

          <p className="mt-2 text-gray-300">
            University of Victoria (UVic), Victoria, British Columbia
          </p>

          <p className="mt-1 text-gray-400">
            Graduation: November 2023
          </p>

          <p className="mt-3 text-gray-300">
            Specialization: Data Mining, Machine Learning, and Artificial Intelligence
          </p>
        </div>

        {/* Hobbies / Interests */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6 border border-gray-700 w-full max-w-3xl text-center">
          <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>
          <p className="text-gray-300">
            Current soccer and baseball player.  
            I enjoy watching every MLB baseball game I can, and I am very 
            passionate about studying baseball analytics.
          </p>
        </div>

      </section>


      
      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center text-white">
            Projects
          </h2>

          {/* Grid containing all project cards */}
          <div className="mt-12 flex flex-col gap-8">
            
            {/* Robotics Project */}
            <div className="rounded-lg border bg-gray-800 p-6 w-full max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white">
                Robotics Control System
              </h3>
              <p className="mt-2 text-gray-300">
                ROS-based robotic arm control and simulation using my Docker file and C++ scripts. 
                In the following images are the views of using the dockerized plug-and-play to allow: 
                controlling with Keyboard, controlling with Unity and simulating with RViz.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Image src="/images/meXarm.jpg" alt="Robotics system 1" width={300} height={200} className="object-cover rounded-md"/>
                <Image src="/images/xArm6.jpg" alt="Robotics system 2" width={300} height={200} className="object-cover rounded-md"/>
                <Image src="/images/rosBridge1.png" alt="Robotics system 3" width={300} height={300} className="object-cover rounded-md"/>
                <Image src="/images/RViz.jpg" alt="Robotics system 4" width={300} height={300} className="object-cover rounded-md"/>
              </div>
              <div className="mt-4">
                <a href="https://github.com/Ale-Torres/xarm-galactic-dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* University Scheduler */}
            <div className="rounded-lg border bg-gray-800 p-6 w-full max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white">
                University Course Scheduling System
              </h3>
              <p className="mt-2 text-gray-300">
                My UVic Software Engineering capstone project. Here are the screenshots of the UI that
                I developed as I was an active developer on the front-end team. As I was scrum master
                for the project, I oversaw development from the front-end, back-end and 
                Algorithm teams to help create a University Scheduler to assign professors
                to classes at times in classrooms.
              </p>
              <ul className="mt-3 text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>Role-based views: Professor & Admin dashboards</li>
                <li>Preference-driven scheduling logic</li>
                <li>Collaborated across frontend, backend, and algorithm teams</li>
                <li>Designed UI for schedules and course management</li>
              </ul>
              {/* Screenshots */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image src="/images/scheduler/AdminLogin.png" alt="Admin dashboard view" width={800} height={500} className="rounded-lg border border-gray-700"/>
                <Image src="/images/scheduler/AllAvailable.png" alt="Admin schedule view" width={800} height={500} className="rounded-lg border border-gray-700"/>
                <Image src="/images/scheduler/ProfAssigned.png" alt="Admin filtering view" width={800} height={500} className="rounded-lg border border-gray-700"/>
                <Image src="/images/scheduler/ScheduleView.png" alt="Admin course assignment view" width={800} height={500} className="rounded-lg border border-gray-700"/>
                <Image src="/images/scheduler/ProfLogin.png" alt="Professor preferences view" width={800} height={500} className="rounded-lg border border-gray-700"/>
                <Image src="/images/scheduler/ProfPref.png" alt="Professor schedule view" width={800} height={500} className="rounded-lg border border-gray-700"/>
              </div>
              {/* GitHub Link */}
              <div className="mt-5">
                <a href="https://github.com/Ale-Torres/Ale-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  View Frontend Code on GitHub →
                </a>
              </div>
            </div>


            {/* Fantasy Baseball Draft Engine */}
            <div className="rounded-lg border bg-gray-800 p-6 w-full max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white">
                Fantasy Baseball Draft Engine <span className="text-sm text-yellow-400">(In Progress)</span>
              </h3>
              <p className="mt-2 text-gray-300">
                My custom fantasy baseball draft tool designed to analyze player data
                to optimize fantasy baseball draft strategies. The project will simulate draft scenarios using algorithms
                and statistical models.
              </p>
              <div className="mt-4">
                <a href="https://github.com/Ale-Torres/alerank-mlb" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  View on GitHub →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center text-gray-400 py-6 border-t border-gray-700">
        Built by Alejandro Torres |{" "}
        <a href="https://github.com/Ale-Torres" className="hover:text-white">GitHub</a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/alejandrotmartn" className="hover:text-white">LinkedIn</a>
      </footer>

    </main>
  );
}
