import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Bouton hamburger */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay pour fermer en cliquant à côté */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          <li>
            <a href="#home" onClick={toggleSidebar}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleSidebar}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <style>{`
        .hamburger {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
          background: none;  
          border: none;
          cursor: pointer;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: 0.3s;
        }

        .hamburger:hover span {
          background-color: #a8dadc;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(10px);
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 998;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: -300px;
          width: 200px;
          height: 100vh;
          background-color: #161b22;
          padding: 80px 20px 20px 20px;
          z-index: 999;
          transition: left 0.3s ease;
          border-right: 1px solid #30363d;
        }

        .sidebar.open {
          left: 0;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }

        .close-btn:hover {
          color: #a8dadc;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar li {
          width: 100%;
        }

        .sidebar a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 1.2rem;
          position: relative;
          display: block;
          padding: 10px 0;
          transition: all 0.3s ease;
        }

        .sidebar a:hover {
          text-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 
                      0 0 30px rgba(118, 75, 162, 0.6);
          color: #a8dadc;
        }

        .sidebar a::after {
          display: none;  /* Enlève l'ancien underline */
        }
      `}</style>
    </>
  );
}

export default Navbar;
