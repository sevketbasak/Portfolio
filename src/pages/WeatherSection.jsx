import { useEffect, useState } from "react";

function WeatherSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("Strasbourg");
  const [inputCity, setInputCity] = useState("Strasbourg");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const CACHE_DURATION = 1 * 60 * 60 * 1000;

  const fetchWeather = (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`;
    const CACHE_KEY = `weather_${cityName.toLowerCase()}_cache`;

    setIsLoading(true);
    setError(null);

    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      const { data: parsedData, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();

      if (now - timestamp < CACHE_DURATION) {
        console.log("Données météo chargées depuis le cache");
        setData(parsedData);
        setIsLoading(false);
        return;
      }
    }

    console.log("Récupération des données météo depuis l'API");
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ville introuvable");
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
        console.log("Données météo sauvegardées dans le cache");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .weather-section h2 {
              font-size: 2rem !important;
            }
            .weather-section .search-form {
              flex-direction: column;
              padding: 0 20px;
            }
            .weather-section .search-form input,
            .weather-section .search-form button {
              font-size: 1rem !important;
              padding: 12px 18px !important;
            }
            .weather-card {
              padding: 30px !important;
            }
            .city-name {
              font-size: 1.5rem !important;
            }
            .weather-icon {
              width: 100px !important;
              height: 100px !important;
            }
            .temperature {
              font-size: 3rem !important;
            }
            .weather-description {
              font-size: 1.2rem !important;
            }
            .weather-details {
              gap: 15px !important;
            }
            .detail-item {
              padding: 12px !important;
            }
          }

          @media (max-width: 400px) {
            .weather-section h2 {
              font-size: 1.7rem !important;
            }
            .weather-section {
              padding: 30px 15px !important;
            }
            .weather-card {
              padding: 25px !important;
            }
            .city-name {
              font-size: 1.3rem !important;
            }
            .weather-header {
              flex-direction: column !important;
              gap: 10px !important;
            }
            .weather-icon {
              width: 80px !important;
              height: 80px !important;
            }
            .temperature {
              font-size: 2.5rem !important;
            }
            .weather-description {
              font-size: 1rem !important;
              margin-bottom: 20px !important;
            }
            .weather-details {
              grid-template-columns: 1fr !important;
              gap: 10px !important;
            }
            .detail-item {
              padding: 10px !important;
            }
          }
        `}
      </style>
      <section style={styles.section} className="weather-section">
        <h2 style={styles.title}>Météo</h2>

        <form
          onSubmit={handleSubmit}
          style={styles.searchForm}
          className="search-form"
        >
          <input
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Entrez une ville..."
            style={styles.input}
          />
          <button type="submit" style={styles.searchButton}>
            Rechercher
          </button>
        </form>

        {error && <p style={styles.error}>Erreur : {error}</p>}
        {isLoading && <p style={styles.loading}>Chargement...</p>}

        {!error && !isLoading && data && (
          <div style={styles.weatherCard} className="weather-card">
            <h3 style={styles.cityName} className="city-name">
              {data.name}, {data.sys.country}
            </h3>
            <div style={styles.weatherHeader} className="weather-header">
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                alt={data.weather[0].description}
                style={styles.weatherIcon}
              />
              <div style={styles.temperature} className="temperature">
                {Math.round(data.main.temp)}°C
              </div>
            </div>

            <div
              style={styles.weatherDescription}
              className="weather-description"
            >
              {data.weather[0].description}
            </div>

            <div style={styles.weatherDetails} className="weather-details">
              <div style={styles.detailItem} className="detail-item">
                <span style={styles.detailLabel}>Ressenti</span>
                <span style={styles.detailValue}>
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>
              <div style={styles.detailItem} className="detail-item">
                <span style={styles.detailLabel}>Humidité</span>
                <span style={styles.detailValue}>{data.main.humidity}%</span>
              </div>
              <div style={styles.detailItem} className="detail-item">
                <span style={styles.detailLabel}>Vent</span>
                <span style={styles.detailValue}>
                  {Math.round(data.wind.speed * 3.6)} km/h
                </span>
              </div>
              <div style={styles.detailItem} className="detail-item">
                <span style={styles.detailLabel}>Pression</span>
                <span style={styles.detailValue}>{data.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "50px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "80vh",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "white",
  },
  searchForm: {
    display: "flex",
    gap: "15px",
    marginBottom: "3rem",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    flex: 1,
    padding: "15px 20px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "1px solid #30363d",
    backgroundColor: "#1c2128",
    color: "white",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  searchButton: {
    padding: "15px 30px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "1px solid transparent",
    backgroundImage:
      "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },
  cityName: {
    fontSize: "1.8rem",
    color: "white",
    marginBottom: "20px",
    textAlign: "center",
  },
  weatherCard: {
    backgroundColor: "#1c2128",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid transparent",
    backgroundImage:
      "linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    boxShadow: "0 0 30px rgba(102, 126, 234, 0.3)",
    maxWidth: "500px",
    width: "100%",
    marginBottom: "25px",
  },
  weatherHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  weatherIcon: {
    width: "120px",
    height: "120px",
  },
  temperature: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
  },
  weatherDescription: {
    fontSize: "1.5rem",
    color: "#8892b0",
    textAlign: "center",
    marginBottom: "30px",
    textTransform: "capitalize",
  },
  weatherDetails: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  detailItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "rgba(102, 126, 234, 0.1)",
    borderRadius: "8px",
  },
  detailLabel: {
    fontSize: "0.9rem",
    color: "#8892b0",
    marginBottom: "5px",
  },
  detailValue: {
    fontSize: "1.3rem",
    color: "white",
    fontWeight: "600",
  },
  loading: {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "50px",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "1.2rem",
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
  },
};

export default WeatherSection;
