import { ReactTyped } from "react-typed";
import { Card } from "@mui/material";
import epitechLogo from "../assets/EPILOGO.png";

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
              className="pixel-card"
              style={{
                maxWidth: "700px",
                padding: "50px",
                backgroundColor: "#1c2128",
                color: "white",
                border: "none",
                position: "relative",
                animation: "slideInLeft 0.8s ease-out 2s both",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginBottom: "30px",
                }}
              >
                <img
                  src={epitechLogo}
                  alt="EPITECH Logo"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <div>
                  <h3
                    style={{
                      marginTop: 0,
                      fontSize: "2rem",
                      marginBottom: "10px",
                    }}
                  >
                    À propos
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: "#667eea",
                      margin: 0,
                      fontWeight: "600",
                    }}
                  >
                    Étudiant à EPITECH Strasbourg
                  </p>
                </div>
              </div>
              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.3rem",
                  margin: 0,
                  color: "#8892b0",
                }}
              >
                Actuellement en Pré-MSc chez EPITECH Strasbourg, je suis depuis
                longtemps passionné par le développement informatique.
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
                <span style={styles.tag}>React.js</span>
                <span style={styles.tag}>PHP Laravel</span>
                <span style={styles.tag}>React Native</span>
                <span style={styles.tag}>Python</span>
                <span style={styles.tag}>JavaScript</span>
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

.pixel-card {
  image-rendering: pixelated;
  border-radius: 0 !important;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
  box-shadow: 
    0 0 0 3px #667eea,
    6px 0 0 3px #667eea,
    -6px 0 0 3px #667eea,
    0 6px 0 3px #667eea,
    0 -6px 0 3px #667eea,
    6px 6px 0 3px #764ba2,
    -6px -6px 0 3px #764ba2,
    6px -6px 0 3px #764ba2,
    -6px 6px 0 3px #764ba2,
    12px 12px 0 0 rgba(102, 126, 234, 0.3),
    16px 16px 0 0 rgba(102, 126, 234, 0.2),
    20px 20px 0 0 rgba(102, 126, 234, 0.1);
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

.card-container {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
}

.section {
  margin-top: 200px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
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

html {
  scroll-behavior: smooth;
}

.projects-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.project-card {
  max-width: 350px;
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

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 40px rgba(102, 126, 234, 0.2);
}

.project-title {
  margin: 0 0 15px 0;
  font-size: 1.8rem;
  text-align: center;
}

.project-description {
  margin-bot: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: #8892b0;
}
`}</style>
    </>
  );
}

const styles = {
  tag: {
    padding: "8px 20px",
    backgroundColor: "rgba(102, 126, 234, 0.2)",
    color: "#667eea",
    borderRadius: "20px",
    fontSize: "0.95rem",
    fontWeight: "600",
    border: "1px solid rgba(102, 126, 234, 0.3)",
  },
};

export default Home;
