import { Navbar } from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import BMICalculator from './Components/BMICalculator';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Stories from './Components/Stories';
import Register from './Components/Register';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Gallery />
      <BMICalculator />
      <Stories />
      <Pricing />
      <Register />
      <Footer />
    </>
  );
}

export default App;
