import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Project";

const App = () => {
  return (
    <div>
      <Header />
      <SocialLinks />
      <Home />
      <About />
      <Skills />

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
