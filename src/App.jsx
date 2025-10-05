import React, { useState } from "react";
import Header from "./components/Header";
import { ReactTyped } from "react-typed";
import { Card } from "@mui/material";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Header />
      <>
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
                "Pixel Artist",
              ]}
              typeSpeed={50}
              backSpeed={50}
              startDelay={1000}
              showCursor={true}
              loop={true} // Important pour que ça boucle !
              style={{ fontSize: "40px" }}
            />
          </div>
          <Card
            style={{
              maxWidth: "400px",
              margin: "50px 0 0 30px",
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
              style={{ marginTop: 0, fontSize: "1.5rem", marginBottom: "15px" }}
            >
              À propos
            </h3>
            <p style={{ lineHeight: "1.6", fontSize: "1.5rem", margin: 0 }}>
              Passionné par le développement web, je crée des applications
              modernes et performantes. Spécialisé en React et JavaScript,
              j'aime transformer des idées en expériences digitales.
            </p>
          </Card>
        </div>
      </>
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
          margin-left: 30px;
          color: white;
          text-align: center;
          margin-top: 50px;
          font-size: 3rem;
        }
        
        .header h2 {
          font-size: 2.5rem;
          margin-top: -40px;
        }
      `}</style>
    </>
  );
}

export default App;
