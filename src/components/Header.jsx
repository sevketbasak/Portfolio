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
          transition: color 0.2s;
        }

        .navbar a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Header;
