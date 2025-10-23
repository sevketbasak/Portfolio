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
            <div className="pixel-card-wrapper">
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
                  Actuellement en Pré-MSc chez EPITECH Strasbourg, je suis
                  depuis longtemps passionné par le développement informatique.
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
                  <span className="pixel-tag">React.js</span>
                  <span className="pixel-tag">PHP Laravel</span>
                  <span className="pixel-tag">Java</span>
                  <span className="pixel-tag">C#</span>
                  <span className="pixel-tag">Python</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Projets</h2>

          <div className="projects-grid">
            <div className="pixel-wrapper">
              <Card className="project-card pixel-effect">
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
            </div>

            <div className="pixel-wrapper">
              <Card className="project-card pixel-effect">
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
            </div>

            <div className="pixel-wrapper">
              <Card className="project-card pixel-effect">
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
        </div>
      </section>
      <style>{`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.pixel-clip {
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
}

.pixel-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 350px;
}

.pixel-wrapper::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  right: -6px;
  bottom: -6px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0.4;
  z-index: -1;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
}

.pixel-effect {
  image-rendering: pixelated;
  border-radius: 0 !important;
  border: none !important;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
  position: relative;
  z-index: 1;
  width: 100%;
}

.pixel-card-wrapper {
  position: relative;
  display: inline-block;
}

.pixel-card-wrapper::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0.4;
  z-index: -1;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
}

.pixel-card {
  image-rendering: pixelated;
  border-radius: 0 !important;
  border: 4px solid;
  border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
  position: relative;
  z-index: 1;
}

.pixel-tag {
  padding: 8px 16px;
  background-color: rgba(102, 126, 234, 0.2);
  color: #667eea;
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid #667eea;
  image-rendering: pixelated;
  border-radius: 0;
  clip-path: polygon(
    0 4px, 4px 4px, 4px 0,
    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
  );
  display: inline-block;
  position: relative;
  box-shadow: 3px 3px 0 rgba(102, 126, 234, 0.3);
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
  justify-content: center;
  gap: 2rem;
}

.project-card {
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #1c2128;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-title {
  margin: 0 0 15px 0;
  font-size: 1.8rem;
  text-align: center;
}

.project-description {
  margin-bottom: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: #8892b0;
}
`}</style>
    </>
  );
}

export default Home;
