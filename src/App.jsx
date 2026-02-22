import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Service from './Component/Service';
import Solutions from './Component/Solutions';
import Templates from './Component/Templates';
// import Case from './Component/Case'; // Optional, can replace Templates if needed
import Testonomial from './Component/Testonomial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <About />
      <Service />
      <Solutions />
      <Templates />
      <Testonomial />
      <Contact />
      <Footer /> */}
      <Hero id="home" />
<About id="about" />
<Service id="services" />
<Solutions id="gallery" />
<Templates id="blog" />
<Testonomial id="testimonials" />
<Contact id="contact" />
<Footer />
    </>
  );
}

export default App;