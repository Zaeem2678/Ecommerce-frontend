import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src="hand_icon.png" alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="arrow.png" alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src="hero_image.png" alt="" />
      </div>
    </div>
  );
}
