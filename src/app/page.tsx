export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex justify-between">
          <span className="font-semibold">Alex Torres</span>
          <div className="flex gap-6 text-gray-600">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#projects" className="hover:text-black">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Alex Torres
        </h1>

        <p className="mt-6 max-w-xl text-xl text-gray-600">
          Software Engineer with experience in systems QA, robotics, and
          full-stack web development.
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
          I’m a software engineer with a background in quality assurance,
          robotics systems, and interactive applications. I enjoy building
          clean, reliable systems and learning new technologies through
          hands-on projects.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          This site showcases projects I’ve built using React, Next.js,
          Python, Java, and robotics frameworks.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-100 py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center">
            Projects
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">
                Portfolio Website
              </h3>
              <p className="mt-2 text-gray-600">
                Personal portfolio built with Next.js and React, deployed on
                Vercel.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-xl font-semibold">
                Robotics Control System
              </h3>
              <p className="mt-2 text-gray-600">
                ROS-based robotic arm control and simulation using Docker and
                Unity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
