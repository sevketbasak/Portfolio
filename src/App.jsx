import React, { useState } from "react";
import Header from "./components/Header";
import { ReactTyped } from "react-typed";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <>
        <div id="main-content">
          <Header />
          <div className="header">
            <ReactTyped
              strings={["Sevket BASAK"]}
              typeSpeed={50}
              showCursor={false}
            />
            <br />
            <ReactTyped
              strings={["Développeur"]}
              typeSpeed={50}
              startDelay={1500}
              showCursor={false}
              style={{ fontSize: "40px" }}
            />
          </div>
        </div>
      </>

      <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
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
