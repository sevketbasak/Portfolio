import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sandbox from "./pages/Sandbox";
import NasaSection from "./pages/NasaSection";
import WeatherSection from "./pages/WeatherSection";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/sandbox/nasa" element={<NasaSection />} />
            <Route path="/sandbox/weather" element={<WeatherSection />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
