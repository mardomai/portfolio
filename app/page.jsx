import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer />
    </>
  );
}

export default App; 