import './App.scss'
import Navbar from './component/NavBar/Navbar';
import Hero from './component/hero/Hero';
import Parallax from './component/parallax/Parallax';
import Resume from './component/resume/Resume';
import Projects from './component/projects/Projects';
import Contact from './component/contact/Contact';
import Cursor from './component/cursor/Cursor';
import { Maintenance } from './component/maintenance/Maintenance';

const App = () => {
  return (
    <div id='portfolio-page'>
      {/* <Cursor />
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Resume'>
        <Parallax type='certifications' />
      </section>
      <section>
        <Resume />
      </section>
      <section id='Projects'>
        <Parallax type='projects' />
      </section>
      <Projects />
      <section id='Contact'>
        <Contact />
      </section> */}
      <section>
        <Maintenance id='Maintenance'/>
      </section>
    </div>
  ) 
};

export default App;
