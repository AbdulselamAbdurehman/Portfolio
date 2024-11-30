import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import LineBreak from "./components/LineBreak";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <LineBreak />
      <Skills />
      <LineBreak />
      <Projects />
      <LineBreak />
      <Experience />
      <LineBreak />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
