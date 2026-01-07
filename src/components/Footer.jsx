function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Roomify</h3>

        <p className="footer-text">
          Helping freshers and professionals find compatible roommates
          with ease and comfort.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Roomify. Built with ❤️ using React by Mayank.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
