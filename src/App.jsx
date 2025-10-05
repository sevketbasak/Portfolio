import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <>
        <div id="main-content">
          <Header />
          <div className="header">
            <h1>Sevket BASAK</h1>
            <h2>Développeur</h2>
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
          line-height: 1.1;
          margin-left: 30px;
          color: #1d3557;
          }

          .header h1 {
          font-size: 4rem;
          text-align:center;
          }

          .header h2 {
          font-size: 2.5rem;
          margin-top: -40px;
          text-align:center;
}
      `}</style>
    </>
  );
}

export default App;
