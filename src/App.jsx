import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  return (
    <div className=" text-slate-800 font-sans min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
