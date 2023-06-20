import Navbar from "./main.css";
import "./main.css";
import axios from "axios";

function einlagen() {
  return (
    <div className="Page">
      <div className="container">
        <div className="text-center"></div>
        <h1>Einlagen und Ausgaben</h1>
        <h2>EinAuslagen</h2>
        <div id="rueckgabe"></div>

        <input type="text" id="prename"></input>
        <input type="text" id="sirname"></input>
        <input type="text" id="adress"></input>

        <div
          class="popup"
          onClick={(event) => {
            //nochmals mit popup anschauen + Yanis fragen
            //Hier kommt code für datenübergabe + popup für Login
            const prename = document.getElementById("prename");
            const sirname = document.getElementById("sirname");
            const adress = document.getElementById("adress");
            axios
              .get(
                "http://localhost:3001/einausgaben/" +
                  prename +
                  "/" +
                  sirname +
                  "/" +
                  adress
              )
              .then((res) => {
                const rueckgabe = document.getElementById("rueckgabe");
                for (let x = 0; res.length > 0; x++) {
                  //einauslagen listen villeicht noch unterscheiden mit einlage auszahlung zinsänderung
                  let EinAuslagen = document.createElement("div");
                  let Datum = document.createElement("li");
                  Datum.textContent = "Datum: " + res.data[x].Datum;
                  EinAuslagen.appendChild(Datum);
                  let Art = document.createElement("li");
                  Art.textContent = "Art: " + res.data[x].Art;
                  EinAuslagen.appendChild(Art);
                  let Betrag = document.createElement("li");
                  Betrag.textContent = "Betrag: " + res.data[x].Betrag;
                  EinAuslagen.appendChild(Betrag);
                  rueckgabe.appendChild(EinAuslagen);
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
