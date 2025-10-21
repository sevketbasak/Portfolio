import { useEffect, useState } from "react";

function NasaSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "hRfqhUE8JY0fPY3XBnqrseonMtLBmpox4rriqbTl";
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
    <section style={styles.section}>
      <h2 style={styles.title}>Image du jour - NASA</h2>
      <img src={data.url} alt={data.title} style={styles.image} />
      <h3 style={styles.subtitle}>{data.title}</h3>
      <p style={styles.explanation}>{data.explanation}</p>
      <p style={styles.date}>Date : {data.date}</p>
    </section>
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
