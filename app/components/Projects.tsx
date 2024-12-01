import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
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
          technologies={["Flutter", "NestJs", "TypeScript"]}
          links={{
            github: "https://github.com/AbdulselamAbdurehman/QuizApp.git",
            demo: "",
          }}
          imageSrc="/images/quizapp.png"
        />
        <ProjectCard
          title="Memariya.com"
          description="Personalized learning platform."
          technologies={["React", "Node.js", "PostgreSQL"]}
          links={{
            github: "https://github.com/Bemnet-13/Memariya.com.git",
            demo: "",
          }}
          imageSrc="/images/memariya.png"
        />
        <ProjectCard
          title="Blog Platform"
          description="Web app for creating and managing blogs."
          technologies={["Flask", "DynamoDB", "REST API"]}
          links={{
            github: "https://github.com/AbdulselamAbdurehman/flask-blog.git",
            demo: "",
          }}
          imageSrc="/images/petition.png"
        />
      </div>
    </section>
  );
}
