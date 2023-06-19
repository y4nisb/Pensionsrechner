import Navbar from "./main.css";
import "./main.css";
import axios from "axios";

function einlagen() {
  return (
    <div className="Page">
      <div className="container">
        <div className="text-center"></div>
        <h1>Einlagen und Ausgaben</h1>
        <h2>Einlagen</h2>
        <p>hier sind dann die Einlagen</p>
        <div className="einlagen"></div>
        <h2>Ausgaben</h2>
        <p>hier sind dann die Ausgaben</p>
        <div className="ausgaben"></div>
        <div
          class="popup"
          onClick={(event) => {
            //nochmals mit popup anschauen + Yanis fragen
            //Hier kommt code für datenübergabe + popup für Login
            axios.get("http://localhost:3001/einausgaben").then((res) => {
              for (x = 0; res.length > 0; x++) {
                //einauslagen listen
              }
            });
          }}
        >
          Anmeldebutton
          <span class="popuptext" id="myPopup"></span>
        </div>
      </div>
    </div>
  );
}
export default einlagen;
