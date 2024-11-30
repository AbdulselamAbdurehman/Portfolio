// components/SkillItem.tsx
const SkillItem = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="tech-stack-item text-center p-0 sm:p-4 border hover:bg-slate-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 animate-right-to-left">
      <img src={`/icons/${src}`} alt={alt} className="mx-auto w-12 h-12" />
      <p className="text-xs sm:text-xl">{title}</p>
    </div>
  );
};

export default SkillItem;
