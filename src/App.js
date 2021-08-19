import introVideo from "./assets/videos/intro.mp4";
import telegramImg from "./assets/images/telegram.png";
import telegramImg2 from "./assets/images/tele2.png";
import telegramImg3 from "./assets/images/tele3.png";
import ytb from "./assets/images/ytb.png";
import tw from "./assets/images/twitter.png";

function App() {
  return (
    <div className="wrapper">
      <video autoPlay muted loop id="myVideo" playsInline>
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="container coming-soon">
        <div className="content d-flex align-items-center justify-content-center">
          <div>
            {/* <h1>
              <span></span>
            </h1> */}
          </div>
        </div>
      </div>

      <footer>
        <div>
          <a
            href="https://t.me/FIREVenture"
            target="_blank"
            rel="noreferrer"
            className="telegram-link"
            title="Chat"
          >
            <img src={telegramImg} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://t.me/Fire_Ventures"
            target="_blank"
            rel="noreferrer"
            className="telegram-link"
            title="Kênh NEWS"
          >
            <img src={telegramImg2} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://t.me/FIREVentures_GEM"
            target="_blank"
            rel="noreferrer"
            className="telegram-link"
            title="Kênh soi kèo Gem Hunter"
          >
            <img src={telegramImg3} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=IrH-H724NOY"
            target="_blank"
            rel="noreferrer"
            className="telegram-link"
            title="Youtube"
          >
            <img src={ytb} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/FIREVENTURESnet"
            target="_blank"
            rel="noreferrer"
            className="telegram-link"
            title="Youtube"
          >
            <img src={tw} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
