import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-subtitle">N'hésitez pas à me contacter!</p>

          <div className="contact-links">
            <a
              href="mailto:sevket.basak@epitech.eu"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">
                <img src={emailIcon} className="svg-icon" alt="Email" />{" "}
              </span>
              Email
            </a>

            <a
              href="https://github.com/sevketbasak"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">
                <img src={githubIcon} className="svg-icon" alt="GitHub" />{" "}
              </span>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sevketbasak"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">
                <img src={linkedinIcon} className="svg-icon" alt="LinkedIn" />{" "}
              </span>
              LinkedIn
            </a>
          </div>

          <div className="footer-bottom">
            <p>Sevket BASAK</p>
          </div>
        </div>
      </footer>
      <style>{`.footer {
  background-color: #161b22;
  border-top: 1px solid #30363d;
  padding: 20px 20px 30px 20px;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.footer-title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.footer-subtitle {
  color: #8892b0;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 30px;
  background-color: #1c2128;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid #30363d;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 150px;
}

.contact-link:hover {
  background-image: linear-gradient(#1c2128, #1c2128),
    linear-gradient(135deg, #667eea, #764ba2);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 0 25px rgba(102, 126, 234, 0.4);
  border: 1px solid transparent;
  transform: translateY(-5px);
}

.link-icon {
  font-size: 2rem;
}

.footer-bottom {
  color: #8892b0;
  font-size: 0.9rem;
  padding-top: 20px;
  border-top: 1px solid #30363d;
}

.footer-bottom p {
  margin: 0;
}

.svg-icon {
  width: 30px;
  height: 30px;
}

.link-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`}</style>
    </>
  );
}

export default Footer;
