import mobapp from "../src/img/mob-app.png";
export default function SectionTwo() {
  return (
    <div id="about" className="section-two">
      <div className="mobile-app-img">
        <img src={mobapp} alt="app" />
      </div>
      <div className="mobile-app-info">
        <h2>Modern App</h2>
        <p>
          Our mobile application for car rental <br /> offers numerous advantages, <br />
          making it an ideal choice <br /> for your next journey.
        </p>
        <button className="app-download">
          <i className="fa-brands fa-apple"></i>Download App
        </button>
      </div>
    </div>
  );
}
