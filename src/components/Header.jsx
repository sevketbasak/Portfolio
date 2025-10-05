function Header() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          justify-content: center;
          padding: 1.5rem 0;
          background-color: #1d3557;
          border-bottom: 1px solid #1d3557;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .navbar a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          position: relative;
        }

        .navbar a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: #a8dadc; /* ou une couleur qui contraste */
          transition: width 0.3s ease;
        }

        .navbar a:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Header;
