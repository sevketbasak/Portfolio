import { useEffect, useState } from "react";

function NasaSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const API_URL = `https://api.nasa.gov/planetary/apod?count=1&api_key=${API_KEY}`;
  const CACHE_KEY = "nasa_apod_cache";
  const CACHE_DURATION = 24 * 60 * 60 * 1000;

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      const { data: parsedData, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();

      if (now - timestamp < CACHE_DURATION) {
        setData(parsedData);
        setIsLoading(false);
        return;
      }
    }

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        const cacheObject = {
          data: fetchedData,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) return <p style={styles.error}>{error}</p>;
  if (isLoading) return <p style={styles.loading}>Chargement...</p>;

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .nasa-section h2 {
              font-size: 2rem !important;
            }
            .nasa-section {
              padding: 30px 20px !important;
            }
            .apod-subtitle {
              font-size: 1.5rem !important;
            }
            .apod-explanation {
              font-size: 1rem !important;
              text-align: left !important;
            }
            .apod-date {
              font-size: 0.9rem !important;
              margin-top: 1.5rem !important;
            }
          }

          @media (max-width: 400px) {
            .nasa-section h2 {
              font-size: 1.7rem !important;
            }
            .nasa-section {
              padding: 25px 15px !important;
            }
            .apod-subtitle {
              font-size: 1.3rem !important;
              margin-top: 1rem !important;
            }
            .apod-explanation {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
            }
            .apod-date {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
      <section style={styles.section} className="nasa-section">
        <h2 style={styles.title}>Astronomy Picture of the Day</h2>
        <img
          src={data.url}
          alt={data.title}
          style={styles.image}
          className="apod-image"
        />
        <h3 style={styles.subtitle} className="apod-subtitle">
          {data.title}
        </h3>
        <p style={styles.explanation} className="apod-explanation">
          {data.explanation}
        </p>
        <p style={styles.date} className="apod-date">
          Date : {data.date}
        </p>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center",
    color: "white",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "white",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "white",
    marginTop: "1.5rem",
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "12px",
    border: "1px solid #30363d",
    boxShadow: "0 0 20px rgba(102, 126, 234, 0.2)",
  },
  explanation: {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    color: "#8892b0",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  date: {
    marginTop: "2rem",
    fontSize: "1rem",
    color: "#667eea",
    fontStyle: "italic",
  },
  loading: {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "50px",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "50px",
  },
};

export default NasaSection;
