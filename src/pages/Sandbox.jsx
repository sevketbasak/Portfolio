import nasasvg from "../assets/nasa.svg";
import weathersvg from "../assets/weather.svg";
import snakesvg from "../assets/snake.svg";
import memorysvg from "../assets/memory.svg";
import pongsvg from "../assets/pong.svg";

function Sandbox() {
  const apis = [
    { id: 1, title: "NASA", description: "API NASA", icon: nasasvg },
    { id: 2, title: "Weather", description: "API météo", icon: weathersvg },
  ];
  const games = [
    {
      id: 1,
      title: "Snake",
      description: "Le célèbre jeu du serpent",
      icon: snakesvg,
    },
    {
      id: 2,
      title: "Memory",
      description: "Jeu de mémoire avec des cartes",
      icon: memorysvg,
    },
    {
      id: 3,
      title: "Pong",
      description: "Le jeu de ping-pong classique",
      icon: pongsvg,
    },
  ];

  const handleGameClick = (gameTitle) => {
    console.log(`Clicked on ${gameTitle}`);
    // ...
  };

  const handleApiClick = (apiTitle) => {
    console.log(`Clicked on ${apiTitle}`);
    // ...
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>APIs</h1>
      <p style={styles.subtitle}>Intégration d'APIs dans le portfolio</p>
      <div style={styles.gamesGrid}>
        {apis.map((api) => (
          <button
            key={api.id}
            style={styles.gameCard}
            onClick={() => handleApiClick(api.title)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(102, 126, 234, 0.2)";
            }}
          >
            <div style={styles.gameIcon}>
              <img src={api.icon} alt={api.title} style={styles.iconImage} />
            </div>
            <h3 style={styles.gameTitle}>{api.title}</h3>
            <p style={styles.gameDescription}>{api.description}</p>
          </button>
        ))}
      </div>
      <h1 style={styles.header}>Sandbox</h1>
      <p style={styles.subtitle}>
        Collection de mini-jeux et projets interactifs
      </p>

      <div style={styles.gamesGrid}>
        {games.map((game) => (
          <button
            key={game.id}
            style={styles.gameCard}
            onClick={() => handleGameClick(game.title)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(102, 126, 234, 0.2)";
            }}
          >
            <div style={styles.gameIcon}>
              <img src={game.icon} alt={game.title} style={styles.iconImage} />
            </div>
            <h3 style={styles.gameTitle}>{game.title}</h3>
            <p style={styles.gameDescription}>{game.description}</p>
          </button>
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
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  subtitle: {
    color: "#8892b0",
    fontSize: "1.3rem",
    textAlign: "center",
    marginBottom: "60px",
  },
  gamesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  gameCard: {
    backgroundColor: "#1c2128",
    color: "white",
    padding: "40px 30px",
    borderRadius: "12px",
    border: "1px solid #30363d",
    marginBottom: "40px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    boxShadow: "0 0 20px rgba(102, 126, 234, 0.2)",
  },
  gameIcon: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  iconImage: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },
  gameTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "white",
  },
  gameDescription: {
    fontSize: "1.1rem",
    color: "#8892b0",
    margin: 0,
  },
};

export default Sandbox;
