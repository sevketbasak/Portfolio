import React from "react";
import jobboardImg from "../assets/jobboard.png";

function Projects() {
  const projects = [
    {
      title: "Job-board web-app",
      description:
        "Application web de création et de consultation d'offres d'emploi",
      image: jobboardImg,
      tags: ["React.js", "PHP Laravel", "MySQL"],
      features: [
        "Interface utilisateur intuitive et front responsive",
        "Système d'authentification complet et sécurisé",
        "Candidature simple et rapide avec upload de CV et lettre de motivation",
        "Filtrage avancé des offres par mots-clés et type de contrat",
        "Gestion du CRUD complet accessible pour administrateurs et routes sécurisées selon le rôle",
      ],
      github: "https://github.com/sevketbasak",
    },
    {
      title: "MemoriaCam",
      description: "Application mobile d'enregistrement vidéo en mode kiosque",
      tags: ["React Native", "Expo", "JavaScript"],
      features: [
        "Enregistrement de vidéos d'une minute pour divers événements",
        "Interface minimaliste et intuitive",
        "Filtrage des vidéos selon utilisateur et date",
        "Galerie et paramètres accessibles uniquement par administrateur",
        "Conçu pour utilisation sur tablettes idéalement",
      ],
      github: "https://github.com/sevketbasak",
    },
    {
      title: "LangIA",
      description:
        "Système de prédiction de langue utilisant l'intelligence artificielle",
      tags: ["Python"],
      features: [
        "Support de 7 langues différentes",
        "Dataset enrichi avec des centaines de phrases par langue",
        "Haute précision dans la détection de phrases",
      ],
      github: "https://github.com/sevketbasak",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Mes Projets</h1>
      <p style={styles.subtitle}>
        Ensemble de mes projets réalisés (Web, Mobile, IA)
      </p>

      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            {project.image && (
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImage}
                />
              </div>
            )}

            <div style={styles.cardContent}>
              <h2 style={styles.projectTitle}>{project.title}</h2>

              <div style={styles.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p style={styles.projectDescription}>{project.description}</p>

              <div style={styles.detailsSection}>
                <h3 style={styles.detailsTitle}>Caractéristiques :</h3>
                <ul style={styles.detailsList}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
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
    fontSize: "3.5rem",
    textAlign: "center",
  },
  subtitle: {
    color: "#8892b0",
    fontSize: "1.3rem",
    textAlign: "center",
    marginBottom: "60px",
  },
  projectsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  projectCard: {
    backgroundColor: "#1c2128",
    borderRadius: "12px",
    border: "1px solid transparent",
    backgroundImage:
      "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    boxShadow: "0 0 30px rgba(102, 126, 234, 0.2)",
    overflow: "hidden",
  },
  imageContainer: {
    height: "400px",
    overflow: "hidden",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardContent: {
    padding: "40px",
  },
  projectTitle: {
    fontSize: "2.5rem",
    margin: "0 0 20px 0",
    color: "white",
  },
  tagsContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  tag: {
    padding: "8px 20px",
    backgroundColor: "rgba(102, 126, 234, 0.2)",
    color: "#667eea",
    borderRadius: "20px",
    fontSize: "0.95rem",
    fontWeight: "600",
    border: "1px solid rgba(102, 126, 234, 0.3)",
  },
  projectDescription: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#8892b0",
    margin: "0 0 30px 0",
  },
  detailsTitle: {
    fontSize: "1.4rem",
    margin: "0 0 15px 0",
    color: "white",
    fontWeight: "600",
  },
  detailsList: {
    color: "#8892b0",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    paddingLeft: "20px",
    margin: 0,
  },
};

export default Projects;
