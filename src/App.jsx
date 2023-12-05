import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-300/20">
      <Navigation />
      <Scene />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
