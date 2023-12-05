import './App.scss'
import Navbar from './component/NavBar/Navbar';
import { motion } from 'framer-motion';
import Hero from './component/hero/Hero';
import Parallax from './component/parallax/Parallax';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallax type='certifications' /></section>
      <section>Services</section>
      <section id='Portfolio'><Parallax type='portfolio' /></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>PortFolio3</section>
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  ) 
};

export default App;
