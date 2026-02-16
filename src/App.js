import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Brands from "./components/Brands";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Brands />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
