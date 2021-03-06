import "./App.css";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import HeroCotainer from "./Components/HeroCotainer";
import MidSection from "./Components/MidSection";
import SubHero from "./Components/SubHero";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="App">
      <HeroCotainer />
      <SubHero />
      <MidSection />
      <Community />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
