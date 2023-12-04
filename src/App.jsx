import './App.scss'
import Navbar from './component/NavBar/Navbar';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
      </section>
      <section id='Services'>Parllax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>PortFolio3</section>
      <section id='Contact'>Contact</section>
      {/* <Test /> */}
    </div>
  ) 
};

export default App;
