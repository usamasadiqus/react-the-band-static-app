import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Band from "./components/Band";
import Tour from "./components/Tour";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Band />
      <Tour />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
