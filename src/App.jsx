import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Tools from "./Components/Tools/Tools";


function App() {
  return(
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">1
    
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Education/>
    <Skills/>
    <Tools/>
    <Contact/>

  </div>
  ) ;  
};

export default App;
