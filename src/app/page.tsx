import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 z-10 shadow-md">
        <div className="mx-auto max-w-5xl px-6 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <span className="font-semibold text-lg text-white">Alex Torres</span>

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
          Alex Torres
        </h1>

        <p className="mt-6 max-w-xl text-xl text-gray-600">
          UVic Software Engineering graduate | Passionate about building software, 
          tackling challenges, and exploring new technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
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
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-3xl px-6 py-24"
      >
        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Welcome! I’m a UVic Software Engineering graduate passionate
          about building software that solves problems. I enjoy tackling
          challenges and keeping up with the latest technologies.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          This site showcases projects I’ve built using React, Next.js,
          Python, Java, and robotics frameworks.
        </p>

          {/* Image */}
        <div className="md:flex-1 flex justify-center">
          <Image
            src="/images/me.jpg"
            alt="Alex Torres"
            width={300}
            height={400}
            className="shadow-lg"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-900 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center text-white">
            Projects
          </h2>

          <div className="mt-12 grid gap-8 justify-center">
            {/* Example Project Card */}
            <div className="rounded-lg border bg-gray-800 p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold text-white">
                Robotics Control System
              </h3>
              <p className="mt-2 text-gray-300">
                ROS-based robotic arm control and simulation using Docker and
                Unity.
              </p>
            </div>

            {/* Add other projects here */}
          </div>
        </div>
      </section>


    </main>
  );
}
