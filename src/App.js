import introVideo from "./assets/videos/intro.mp4";
import telegramImg from "./assets/images/telegram.png";

function App() {
  return (
    <div className="wrapper">
      <video autoPlay muted loop id="myVideo">
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
        <a
          href="https://t.me/FIREVenture"
          target="_blank"
          rel="noreferrer"
          className="telegram-link"
        >
          <img src={telegramImg} alt="" />
        </a>
      </footer>
    </div>
  );
}

export default App;
