import './App.scss'
import Navbar from './component/NavBar/Navbar';
import Hero from './component/hero/Hero';
import Parallax from './component/parallax/Parallax';
import Services from './component/services/Services';
import Projects from './component/projects/Projects';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='certifications' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Projects'>
        <Parallax type='projects' />
      </section>
      <Projects />
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  ) 
};

export default App;
