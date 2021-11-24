import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-section-left">
        <p className="footer-section-left-par">&copy;All rights reserved!</p>
      </div>
      <div className="footer-section-right">
        <nav>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-github-square"></i>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
