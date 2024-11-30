export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-100 to-blue-500"
    >
      <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-800 dark:text-white">
        Hi, I&apos;m Abdulselam
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl px-8">
        Building scalable and efficient backend solutions. Passionate about
        solving complex problems with <strong>CLEAN</strong> code.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
