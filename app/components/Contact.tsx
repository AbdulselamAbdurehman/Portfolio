export default function Contact() {
  return (
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
  );
}
