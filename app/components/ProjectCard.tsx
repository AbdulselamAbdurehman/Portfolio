const ProjectCard = ({
  title,
  description,
  technologies,
  links,
  imageSrc,
}: {
  title: string;
  description: string;
  technologies: string[];
  links: { github: string; demo: string };
  imageSrc: string;
}) => {
  return (
    <div className="project-card p-4 border-4 rounded-lg hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
      <img
        src={imageSrc}
        alt={`${title} preview`}
        className=" hobject-cover rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-200 rounded dark:bg-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          GitHub
        </a>
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
