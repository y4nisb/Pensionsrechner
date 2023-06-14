import "./home.css";

function Home() {
  return (
    <div className="homepage">
      <div>
        <h1>Finanztool App</h1>
      </div>
      <div className="Willkommen">
        <p>Willkommen bei unserer Spaarbank Untersee!</p>
      </div>
      <div className="block-text">
        <div className="text2">
          {" "}
          <p>
            Unser Sparrechner ist Ihr treuer Begleiter, um herauszufinden, wie
            Ihre Ersparnisse wachsen können. Geben Sie einfach Ihre
            Anfangssumme, die gewünschte Laufzeit und den Zinssatz ein, und der
            Rechner erledigt den Rest. Sehen Sie, wie Ihre Investitionen im
            Laufe der Zeit wachsen und wie Sie schneller und effizienter auf
            Ihre Ziele hinarbeiten können.
          </p>
        </div>
        <br></br>
        <div className="text3">
          {" "}
          <p>
            Der Sparplaner ist ein unverzichtbares Werkzeug für alle, die
            langfristig für finanzielle Meilensteine sparen möchten. Mit diesem
            Tool können Sie Ihre Sparziele festlegen, den Betrag und die Dauer
            angeben, und wir kümmern uns um den Rest. Verfolgen Sie Ihren
            Fortschritt, passen Sie Ihre Pläne an und bleiben Sie auf dem
            richtigen Weg, um Ihre finanziellen Träume zu verwirklichen.
          </p>
        </div>
        <br></br>
        <div className="schlusstext">
          <p>
            Willkommen bei Spaarbank Untersee – Ihrem vertrauenswürdigen Partner
            für Finanzrechnungen und mehr.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
