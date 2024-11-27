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
  );
}
