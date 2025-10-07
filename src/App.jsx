import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ReactTyped } from "react-typed";
import { Card } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Navbar />

      {/* Section Accueil */}
      <section id="home">
        <div id="main-content">
          <div className="header">
            <ReactTyped
              strings={["Sevket BASAK"]}
              typeSpeed={50}
              showCursor={false}
              style={{ fontSize: "60px" }}
            />
            <br />
            <ReactTyped
              strings={[
                "Developer",
                "Web Developer",
                "Game Developer",
                "Pixel artist",
              ]}
              typeSpeed={50}
              backSpeed={50}
              startDelay={1000}
              showCursor={true}
              loop={true}
              style={{ fontSize: "40px" }}
            />
          </div>

          <div className="card-container">
            <Card
              style={{
                maxWidth: "400px",
                padding: "30px",
                backgroundColor: "#1c2128",
                color: "white",
                borderRadius: "12px",
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 30px rgba(102, 126, 234, 0.3)",
                animation: "slideInLeft 0.8s ease-out 2s both",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                }}
              >
                À propos
              </h3>
              <p style={{ lineHeight: "1.6", fontSize: "1.5rem", margin: 0 }}>
                Actuellement en Pré-MSc chez EPITECH Strasbourg, je suis depuis
                longtemps passionné par le développement informatique.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Projets</h2>
          <p style={{ color: "white", textAlign: "center" }}>
            Mes projets arrivent bientôt...
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact">
        <Footer />
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        #main-content {
          animation: fadeIn 1s ease-in-out;
        }
        
        .header {
          line-height: 1;
          color: white;
          text-align: center;
          margin-top: 50px;
          font-size: 3rem;
        }
        
        .card-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        
        .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 20px;
        }
        
        .section-content {
          max-width: 1200px;
          width: 100%;
        }
        
        .section-title {
          color: white;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 50px;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;
