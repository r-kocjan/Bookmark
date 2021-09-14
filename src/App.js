import "./App.css";
import Contact from "./components/Contact";
import Extensions from "./components/Extensions";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
