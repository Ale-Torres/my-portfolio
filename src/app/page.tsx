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
            href="#about"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
          >
            About Me
          </a>
          
          <a
            href="#projects"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
          >
            View Projects
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

        <p className="mt-6 text-lg text-white-400 text-center leading-relaxed">
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
            Baseball is my favorite sport to watch, and I am very passionate about 
            studying baseball analytics.
          </p>
        </div>

      </section>


      {/* ===== Engineering Journey Section ===== */}
      <section id="journey" className="hidden md:block bg-gray-900 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-3xl font-bold text-center text-white">
            My Software Engineering Journey
          </h2>

          <div className="relative mt-20">

            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-700"></div>

            {/* ===== 2017 - Start UVic ===== */}
            <div className="relative w-full flex justify-start mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2017
              </div>

              <div className="w-1/2 pr-12 text-right">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Bachelor of Software Engineering — University of Victoria
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Started formal training in software engineering, algorithms, and system design </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* ===== 2018 - Western Digital ===== */}
            <div className="relative w-full flex justify-end mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2018
              </div>

              <div className="w-1/2"></div>

              <div className="w-1/2 pl-12 text-left">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Product Design Engineer — Western Digital
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Built machine learning models to predict hard drive failures</li>
                    <li>• Analyzed large-scale datasets using SQL and statistical tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== 2020 - Scotiabank (Analyst) ===== */}
            <div className="relative w-full flex justify-start mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2020
              </div>

              <div className="w-1/2 pr-12 text-right">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Technical Business Analyst — Scotiabank
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Developed automation tools to streamline workflows</li>
                    <li>• Designed interactive visual system to map bank technologies</li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* ===== 2021 - Scotiabank (DevOps) ===== */}
            <div className="relative w-full flex justify-end mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2021
              </div>

              <div className="w-1/2"></div>

              <div className="w-1/2 pl-12 text-left">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    DevOps Engineer — Scotiabank
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Built Docker-based development environments for distributed teams</li>
                    <li>• Supported CI/CD pipelines and managed deployment workflows</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== 2024 - Graduation ===== */}
            <div className="relative w-full flex justify-start mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2023
              </div>

              <div className="w-1/2 pr-12 text-right">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Bachelor of Software Engineering — Graduation
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Led capstone project as Scrum Master</li>
                    <li>• Focused on Software System Scalability, Software Testing, Artificial Intelligence, and Software Architecture</li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2"></div>
            </div>

            {/* ===== 2024–Present - UVic ===== */}
            <div className="relative w-full flex justify-end">
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-3 text-sm text-gray-400">
                2024
              </div>

              <div className="w-1/2"></div>

              <div className="w-1/2 pl-12 text-left">
                <div className="rounded-lg border bg-gray-800 p-6 inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Engineering Recruitment Officer — University of Victoria
                  </h3>
                  <ul className="mt-3 text-gray-300 text-sm space-y-1">
                    <li>• Travel to present UVic engineering programs and technical initiatives across North America</li>
                    <li>• Bridged technical concepts with students, faculty, and industry partners</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
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
                A ROS 2–based robotic arm control and simulation system built in a Dockerized environment. 
                I developed a plug-and-play workflow that enables controlling the xArm robot through multiple interfaces, 
                including keyboard input, Unity, and RViz visualization.
              </p>
              <ul className="mt-3 text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Built a Docker-based ROS 2 environment (Galactic) to enable interactive robotic control and simulation</li>              <li>Integrated xArm6 robotic arm with ROS 2 for real-time control and simulation</li>
              <li>Enabled multiple control modes: keyboard teleoperation, Unity-based control, and RViz visualization</li>
              <li>Configured X11 display forwarding to visualize Gazebo and RViz from Docker on Windows</li>
            </ul>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Image src="/images/meXarm.jpg" alt="Robotics system 1" width={300} height={200} className="object-cover rounded-md"/>
                <Image src="/images/xArm6.jpg" alt="Robotics system 2" width={300} height={200} className="object-cover rounded-md"/>
                <Image src="/images/rosBridge1.png" alt="Robotics system 3" width={300} height={300} className="object-cover rounded-md"/>
                <Image src="/images/rViz.jpg" alt="Robotics system 4" width={300} height={300} className="object-cover rounded-md"/>
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
              My UVic Software Engineering capstone project: a university course scheduling system designed to assign professors 
              to courses, time slots, and classrooms based on constraints and preferences. 
              I was an active front-end developer responsible for designing and implementing the user interface, 
              and served as Scrum Master, coordinating collaboration across front-end, back-end, and algorithm teams. 
              The system leverages time-series forecasting using Seasonal Autoregressive Integrated Moving Average (SARIMA) 
              to model and predict scheduling patterns.
              </p>
              <ul className="mt-3 text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>Role-based interfaces for Professors and Administrators</li>
                <li>Cross-team collaboration between frontend, backend, and algorithm development</li>
                <li>Git-based workflow including branching, merging, integration, and smoke testing</li>
                <li>Designed and developed the UI including the landing page, interactive schedule, and navigation components</li>
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
                  View on GitHub →
                </a>
              </div>
            </div>


            {/* Fantasy Baseball Draft Engine */}
            <div className="rounded-lg border bg-gray-800 p-6 w-full max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white">
                Fantasy Baseball Draft Engine <span className="text-sm text-yellow-400">(In Progress)</span>
              </h3>
              <p className="mt-2 text-gray-300">
                A custom fantasy baseball draft engine built to analyze player performance data and 
                optimize draft strategies using data driven models. The system simulates draft scenarios 
                to evaluate draft time decision-making outcomes and provide strategic recommendations.
              </p>
              <ul className="mt-3 text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Analyzes historical player statistics and performance trends</li>
              <li>Simulates draft scenarios using algorithmic ranking and probability models</li>
              <li>Implements custom scoring metrics to evaluate draft value and risk</li>
              <li>Planned: Machine learning models to predict player performance</li>
              <li>Planned: Interactive UI to visualize draft outcomes and strategy comparisons</li>
              <li>Planned: Support for multiple league formats and scoring systems</li>
            </ul>
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
