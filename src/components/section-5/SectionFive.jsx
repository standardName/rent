import "../section-5/sectionFive.css";
export default function SectionFive() {
  return (
    <div className="sectionFive">
      <div className="section-five-info">
        <h1 className="section-five-title">Drive With Rental Car </h1>
        <span className="section-five-description">
          Get the app to explore the worlf of premium <br />
          cars - that's exciting
        </span>
        <button class="app-download section-five-button">
          <i class="fa-brands fa-apple "></i>Download App
        </button>
      </div>
      <div className="footer">
        <div className="footer-first-block">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#a">Our Cars </a>
            </li>
            <li>
              <a href="#b">Mobile App</a>
            </li>
            <li>
              <a href="#c">Key Features</a>
            </li>
            <li>
              <a href="#d">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <span className="subscribe">Subscribe to News</span>
          <form>
            <label htmlFor="subscribe">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </label>
            <input type="text" id="subscribe" placeholder="Your Email" />
          </form>
        </div>
      </div>
    </div>
  );
}
