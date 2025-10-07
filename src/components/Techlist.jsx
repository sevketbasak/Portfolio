import React from "react";

function TechList() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "C#",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "C#",
    "Python", // Dupliqué pour l'effet infini
  ];

  return (
    <>
      <div className="tech-scroll-container">
        <div className="tech-scroll">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-scroll-container {
          width: 100%;
          overflow: hidden;
          background-color: #161b22;
          padding: 20px 0;
          border-top: 1px solid #30363d;
          border-bottom: 1px solid #30363d;
        }

        .tech-scroll {
          display: flex;
          gap: 3rem;
          animation: scroll 20s linear infinite;
          width: fit-content;
        }

        .tech-item {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 10px 20px;
          background-color: #1c2128;
          border-radius: 8px;
          border: 1px solid #30363d;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background-image: linear-gradient(#1c2128, #1c2128), linear-gradient(135deg, #667eea, #764ba2);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
          border: 1px solid transparent;
          transform: translateY(-3px);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tech-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

export default TechList;
