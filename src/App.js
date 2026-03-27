import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Promos from "./components/Promos";
import Brands from "./components/Brands";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Promos />
      <Brands />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
