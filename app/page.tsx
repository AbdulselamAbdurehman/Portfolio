import Header from "./components/Header";
import SkillItem from "./components/SkillItem";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import About from "./components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-100 to-blue-500"
      >
        <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-800 dark:text-white">
          Hi, I'm Abdulselam
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
      <About />
      <div className="flex justify-center">
        <div className="h-0.5 w-2/5 bg-slate-300 text-center rounded"></div>
      </div>
      <section id="skills" className="p-8 md:px-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6">
          <SkillItem src="react.png" alt="React" title="React" />
          <SkillItem src="javascript.png" alt="JavaScript" title="JavaScript" />
          <SkillItem src="typescript.png" alt="TypeScript" title="TypeScript" />
          <SkillItem src="python.png" alt="Python" title="Python" />
          <SkillItem src="java.png" alt="Java" title="Java" />
          <SkillItem src="cpp.png" alt="C++" title="C++" />
          <SkillItem src="postgresql.png" alt="PostgreSQL" title="PostgreSQL" />
          <SkillItem src="go.png" alt="Go" title="Go" />
          <SkillItem src="docker.png" alt="Docker" title="Docker" />
          <SkillItem src="git.png" alt="Git" title="Git" />
          <SkillItem src="flutter.png" alt="Flutter" title="Flutter" />
          <SkillItem src="express.png" alt="Express" title="Express" />
          <SkillItem src="flask.png" alt="Flask" title="Flask" />
          <SkillItem
            src="tailwindcss.png"
            alt="Tailwind CSS"
            title="Tailwind CSS"
          />
          <SkillItem src="mongodb.png" alt="MongoDB" title="MongoDB" />
          <SkillItem src="nestjs.png" alt="NestJS" title="NestJS" />
          <SkillItem src="nextjs.png" alt="Next.js" title="Next.js" />
          <SkillItem src="github.png" alt="github.js" title="GitHub" />
        </div>
      </section>

      <div className="flex justify-center">
        <div className="h-0.5 w-2/5 bg-slate-300 text-center rounded"></div>
      </div>
      <section id="projects" className="p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          Here are some projects I've worked on recently, demonstrating my
          expertise in backend and full-stack development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProjectCard
            title="QuizApp"
            description="Interactive quizzes for learning."
            technologies={["Flutter", "Firebase", "TypeScript"]}
            links={{ github: "https://github.com/yourrepo/quizapp", demo: "" }}
            imageSrc="/images/quizapp.png"
          />
          <ProjectCard
            title="Memariya.com"
            description="Personalized learning platform."
            technologies={["React", "Node.js", "PostgreSQL"]}
            links={{ github: "https://github.com/yourrepo/memariya", demo: "" }}
            imageSrc="/images/memariya.png"
          />
          <ProjectCard
            title="Petition Platform"
            description="Web app for creating and managing petitions."
            technologies={["Flask", "DynamoDB", "HTML"]}
            links={{ github: "https://github.com/yourrepo/petition", demo: "" }}
            imageSrc="/images/petition.png"
          />
        </div>
      </section>

      <div className="flex justify-center">
        <div className="h-0.5 w-2/5 bg-slate-300 text-center rounded"></div>
      </div>
      <section id="experience" className="p-8 md:px-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-around  ">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Freelance Software Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jan 2023 - Present
              </p>
            </div>
            <ul className="list-disc text-gray-700 dark:text-gray-300 mt-2 md:mt-0">
              <li>
                Developing scalable and efficient backend services using
                Node.js, Express, and Python (Flask/Django).
              </li>
              <li>
                Building interactive web applications and API integrations with
                React, Next.js, and MongoDB.
              </li>
              <li>
                Collaborating with clients on project requirements, timelines,
                and providing continuous support post-launch.
              </li>
              <li>
                Utilizing Git for version control and GitHub for collaboration
                and repository management.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="h-0.5 w-2/5 bg-slate-300 text-center rounded"></div>
      </div>
      <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Interested in working together? Feel free to reach out via the form
            below or connect with me on my social platforms.
          </p>
          <form
            action="https://formspree.io/f/yourformid" // Replace with actual Formspree or backend handler
            method="POST"
            className="mt-6 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="p-4 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="p-4 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="p-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
