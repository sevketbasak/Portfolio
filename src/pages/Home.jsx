import { ReactTyped } from "react-typed";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import epitechLogo from "../assets/EPILOGO.png";
import cvPdf from "../assets/BASAK_Sevket_CV6.pdf";

function Home() {
  return (
    <>
      <section id="home">
        <div id="main-content">
          <div className="header">
            <ReactTyped
              strings={["Sevket BASAK"]}
              typeSpeed={50}
              showCursor={false}
              className="main-title"
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
              className="subtitle"
            />
          </div>

          <div className="card-container">
            <Card className="about-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <img
                  src={epitechLogo}
                  alt="EPITECH Logo"
                  className="logo-img"
                />
                <div>
                  <h3 className="card-title">À propos</h3>
                  <p className="card-subtitle">Étudiant à EPITECH Strasbourg</p>
                </div>
              </div>
              <p className="desc-text">
                Actuellement en Pré-MSc chez EPITECH Strasbourg, je suis depuis
                longtemps passionné par le développement informatique.
              </p>
              <p className="desc-text">
                Passionné par l'intelligence artificielle, je vise une
                spéacialisation dans le domaine à partir de ma deuxième année de
                MSc.
              </p>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span className="tag-item">React.js</span>
                <span className="tag-item">PHP Laravel</span>
                <span className="tag-item">Java</span>
                <span className="tag-item">C#</span>
                <span className="tag-item">Python</span>
              </div>

              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <a
                  href={cvPdf}
                  download="BASAK_Sevket_CV.pdf"
                  className="cv-button"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(102, 126, 234, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 3px 15px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  Télécharger mon CV
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Projets</h2>

          <div className="projects-grid">
            <Card className="project-card">
              <h3 className="project-title">Job-board web-app</h3>
              <p className="project-description">
                Application web effectuée en React.js & PHP Laravel
              </p>
              <p className="project-description">
                L'application permet aux utilisateurs de postuler à plusieurs
                offres d'emploi en renseignant CV, Lettre de Motivation et +
              </p>
              <p className="project-description">
                Possibilité de filtrer les offres par mots-clés et type de
                contrat
              </p>
            </Card>

            <Card className="project-card">
              <h3 className="project-title">"MemoriaCam"</h3>
              <p className="project-description">
                Application mobile d'enregistrement vidéo en mode kiosque
              </p>
              <p className="project-description">
                L'utilisateur peut enregistrer de courte vidéos
              </p>

              <p className="project-description">
                L'admin, grâce à un mot de passe, peut quitter le mode kiosque
                pour accéder à la galerie, et ainsi supprimer des vidéos
                indésirables
              </p>
            </Card>

            <Card className="project-card">
              <h3 className="project-title">"LangIA"</h3>
              <p className="project-description">
                Projet simple de prédiction de la langue d'un texte entre
                français, anglais, et 5 autres langues
              </p>
              <p className="project-description">
                Dataset contenant des centaines de phrases pour chaque langue
              </p>
            </Card>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              to="/projects"
              className="more-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(102, 126, 234, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 3px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>
      <style>{`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  padding: 0 20px;
}

.header {
  line-height: 1;
  color: white;
  text-align: center;
  margin-top: 50px;
  font-size: 3rem;
}

.main-title {
  font-size: 60px;
}

.subtitle {
  font-size: 40px;
}

@media (max-width: 768px) {
  .header {
    margin-top: 30px;
    font-size: 2rem;
  }
  
  .main-title {
    font-size: 40px;
  }
  
  .subtitle {
    font-size: 28px;
  }
}

.card-container {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .card-container {
    margin-top: 40px;
    margin-bottom: 60px;
  }
}

.section {
  margin-top: 200px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
}

@media (max-width: 768px) {
  .section {
    margin-top: 100px;
    padding: 30px 15px;
    min-height: auto;
  }
}

.section-content {
  max-width: 1400px;
  width: 100%;
}

.section-title {
  color: white;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
}

html {
  scroll-behavior: smooth;
}

.projects-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 0 15px;
}

.project-card {
  max-width: 350px;
  width: 100%;
  padding: 30px;
  background-color: #1c2128;
  color: white;
  border-radius: 12px;
  border: 1px solid transparent;
  background-image: linear-gradient(#1c2128, #1c2128),
    linear-gradient(135deg, #667eea, #764ba2);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .project-card {
    max-width: 100%;
    padding: 20px;
  }
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 40px rgba(102, 126, 234, 0.2);
}

.project-title {
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .project-title {
    font-size: 1.3rem;
  }
}

.project-description {
  margin-bot: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: #8892b0;
}

@media (max-width: 768px) {
  .project-description {
    font-size: 1rem;
  }
}

.about-card {
  max-width: 900px;
  width: 100%;
  padding: 60px;
  background-color: #1c2128;
  color: white;
  border-radius: 12px;
  border: 1px solid transparent;
  background-image: linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
  animation: slideInLeft 0.8s ease-out 2s both;
}

@media (max-width: 768px) {
  .about-card {
    padding: 30px 20px !important;
  }
}

.logo-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {
  .logo-img {
    width: 80px !important;
    height: 80px !important;
  }
}

.card-title {
  margin-top: 0;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  .card-title {
    font-size: 1.5rem !important;
  }
}

.card-subtitle {
  font-size: 1.1rem;
  color: #667eea;
  margin: 0;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .card-subtitle {
    font-size: 0.95rem !important;
  }
}

.desc-text {
  line-height: 1.8;
  font-size: 1.3rem;
  margin: 0;
  color: #8892b0;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .desc-text {
    font-size: 1rem;
  }
}

.tag-item {
  padding: 8px 20px;
  background-color: rgba(102, 126, 234, 0.2);
  color: #667eea;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .tag-item {
    padding: 6px 15px;
    font-size: 0.85rem;
  }
}

.cv-button, .more-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: transparent;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  border: 2px solid #667eea;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 3px 15px rgba(102, 126, 234, 0.3);
  cursor: pointer;
}

@media (max-width: 768px) {
  .cv-button, .more-button {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
`}</style>
    </>
  );
}

export default Home;
