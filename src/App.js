import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'aos/dist/aos.css'
import Particles from 'react-tsparticles';
import particleOption from './particle.json'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Particles options={particleOption}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
