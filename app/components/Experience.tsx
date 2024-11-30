export default function Experience() {
  return (
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
              Developing scalable and efficient backend services using Node.js,
              Express, and Python (Flask/Django).
            </li>
            <li>
              Building interactive web applications and API integrations with
              React, Next.js, and MongoDB.
            </li>
            <li>
              Collaborating with clients on project requirements, timelines, and
              providing continuous support post-launch.
            </li>
            <li>
              Utilizing Git for version control and GitHub for collaboration and
              repository management.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
