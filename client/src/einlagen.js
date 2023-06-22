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
        <label>Vorname</label>
        <input type="text" id="prename"></input>
        <label>Nachname</label>
        <input type="text" id="sirname"></input>
        <label>Adresse</label>
        <input type="text" id="adress"></input>
        <br></br>
        <div className="anmeldeButton">
          <button
            type="button"
            id="anmeldeButton"
            onClick={(event) => {
              //nochmals mit popup anschauen + Yanis fragen
              //Hier kommt code für datenübergabe + popup für Login
              const prename = document.getElementById("prename");
              const sirname = document.getElementById("sirname");
              const adress = document.getElementById("adress");
              axios
                .get(
                  "einausgaben/" +
                    prename.textContent +
                    "/" +
                    sirname.textContent +
                    "/" +
                    adress.textContent
                )
                .then((res) => {
                  console.log(res.data);
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
          ></button>
        </div>
      </div>
    </div>
  );
}
export default einlagen;
