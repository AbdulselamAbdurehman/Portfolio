export default function About() {
  return (
    <section id="about" className="px-8 my-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-60 h-60 rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        <div className="text-left flex flex-col justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white ">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            I am a Full-Stack software developer with a strong foundation in
            creating scalable, efficient systems. My expertise spans
            technologies like <strong>Python (Flask, Django)</strong>,{" "}
            <strong>MERN stack</strong>, <strong>Flutter</strong>, and{" "}
            <strong>SQL</strong>, enabling me to deliver robust, user-friendly
            solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            With experience in building interactive applications and designing
            efficient APIs, I thrive on solving complex challenges and
            delivering high-quality software. I am passionate about crafting
            solutions that make a tangible impact.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Currently, I am seeking opportunities to collaborate on meaningful
            projects &ndash; be it full-time roles or freelance work.
          </p>
          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
