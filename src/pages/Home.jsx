function Home() {
  return (
    <div className="container">
      <div className="hero">
  <div className="hero-overlay"></div>

  <div className="hero-inner">
    {/* LEFT CONTENT */}
    <div className="hero-content">
      <h1 className="fade-slide">
        Find Your Perfect <br /> Roommate
      </h1>

      <p className="fade-slide-delay">
        A modern platform for freshers and job joiners to find compatible
        room partners in a new city.
      </p>

      <p className="fade-slide-delay">
        Match by lifestyle, occupation and city — so you live with people
        who actually fit your vibe.
      </p>

      <a href="/find" className="hero-cta">
        Browse Roommates
      </a>
    </div>

    {/* RIGHT CONTENT */}
    <div className="hero-visual">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA8DJXZwMDzluvSZzyu87wpRtF5V0XJK5Ag&s"
        alt="Roommate search illustration"
      />

      <div className="hero-stats">
        <div>
          <h3>500+</h3>
          <p>Active Listings</p>
        </div>
        <div>
          <h3>20+</h3>
          <p>Cities Covered</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Free to Use</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
