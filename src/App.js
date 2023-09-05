import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import Skill from "./components/Skill/skill";
import Work from "./components/Work/work";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
