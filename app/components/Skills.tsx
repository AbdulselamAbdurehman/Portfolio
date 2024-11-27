import SkillItem from "./SkillItem";
export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-16 mt-12 mb-16">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 my-5 md:my-10">
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
  );
}
