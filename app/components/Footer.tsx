export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Abdulselam Abdurehman. <wbr /> All
          rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            aria-label="GitHub"
          >
            <img
              src="/icons/github.png"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <img
              src="/icons/email.png"
              alt="Email"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
