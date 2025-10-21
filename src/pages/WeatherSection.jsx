import { useEffect, useState } from "react";

function WeatherSection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "5b05a7957bacee612f1e8620df542905";
  const CACHE_KEY = "weather_data_cache";
  const CACHE_DURATION = 1 * 60 * 60 * 1000;
  return;
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

export default WeatherSection;
