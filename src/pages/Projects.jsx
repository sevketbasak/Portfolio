import React from "react";
import jobboardImg from "../assets/jobboard.png";

function Projects() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Mes Projets</h1>

      <hr style={styles.divider} />

      <div style={styles.projectSection}>
        <div style={styles.projectWithImage}>
          <div style={styles.projectContent}>
            <h2 style={styles.projectTitle}>Job-board web-app</h2>
            <p style={styles.projectDescription}>
              Application web de création et de consultation d'offres d'emploi
              développé avec React.js et PHP Laravel
            </p>
            <div style={styles.detailsSection}>
              <h3 style={styles.detailsTitle}>Caractéristiques :</h3>
              <ul style={styles.detailsList}>
                <li>Interface utilisateur intuitive et front responsive</li>
                <li>Système d'authentification complet et sécurisé</li>
                <li>
                  Candidature simple et rapide avec upload de CV et lettre de
                  motivation
                </li>
                <li>
                  Filtrage avancé des offres par mots-clés et type de contrat
                </li>
                <li>
                  Gestion du CRUD complet accessible pour administrateurs et
                  routes sécurisées selon le rôle
                </li>
              </ul>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img
              src={jobboardImg}
              alt="Demo Job-board"
              style={styles.projectImage}
            />
          </div>
        </div>

        <hr style={styles.divider} />

        <div style={styles.project}>
          <h2 style={styles.projectTitle}>MemoriaCam</h2>
          <p style={styles.projectDescription}>
            Application mobile d'enregistrement vidéo en mode kiosque développé
            avec React Native
          </p>
          <div style={styles.detailsSection}>
            <h3 style={styles.detailsTitle}>Caractéristiques :</h3>
            <ul style={styles.detailsList}>
              <li>
                Enregistrement de vidéos d'une minute pour divers événements
              </li>
              <li>Interface minimaliste et intuitive</li>
              <li>Filtrage des vidéos selon utilisateur et date</li>
              <li>
                Galerie et paramètres accessibles uniquement par administrateur
              </li>
              <li>Conçu pour utilisation sur tablettes idéalement</li>
            </ul>
          </div>
        </div>

        <hr style={styles.divider} />

        <div style={styles.project}>
          <h2 style={styles.projectTitle}>LangIA</h2>
          <p style={styles.projectDescription}>
            Système de prédiction de langue utilisant l'intelligence
            artificielle.
          </p>
          <div style={styles.detailsSection}>
            <h3 style={styles.detailsTitle}>Caractéristiques :</h3>
            <ul style={styles.detailsList}>
              <li>Support de 7 langues différentes</li>
              <li>Dataset enrichi avec des centaines de phrases par langue</li>
              <li>Haute précision dans la détection de phrases</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px 20px",
    animation: "fadeIn 0.5s ease-in-out",
  },
  header: {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "80px",
  },
  projectSection: {
    marginBottom: "100px",
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  projectWithImage: {
    display: "flex",
    gap: "60px",
    alignItems: "center",
  },
  projectContent: {
    flex: 1,
  },
  imageContainer: {
    flex: "0 0 600px",
  },
  projectImage: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    border: "1px solid #30363d",
    boxShadow: "0 0 20px rgba(102, 126, 234, 0.2)",
  },
  project: {
    color: "white",
    padding: "40px 0",
    transition: "transform 0.3s ease",
  },
  projectTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "white",
  },
  projectDescription: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#8892b0",
    marginBottom: "20px",
  },
  detailsSection: {
    marginTop: "30px",
  },
  detailsTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "white",
  },
  detailsList: {
    color: "#8892b0",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #30363d",
    margin: "40px 0",
  },
};

export default Projects;
