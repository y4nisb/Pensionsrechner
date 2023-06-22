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
              const prename = document.getElementById("prename").value;
              const sirname = document.getElementById("sirname").value;
              const adress = document.getElementById("adress").value;
              console.log(prename, sirname, adress);
              axios
                .get("/einausgaben/" + prename + "/" + sirname + "/" + adress)
                .then((res) => {
                  const rueckgabe = document.getElementById("rueckgabe");
                  console.log(res.data);
                  rueckgabe.innerHTML = "";
                  if (res.data.lengt > 0) {
                    for (let x of res.data) {
                      console.log(x);
                      rueckgabe.innerHTML += `<tr>
                        <td>${x.EinlagenId}</td>
                        <td>${x.Datum}</td>
                        <td>${x.Art}</td>
                        <td>${x.Betrag}</td>
                      </tr>`;
                    }
                  } else {
                    rueckgabe.innerHTML += `
                      <tr>
                        <td colspan="4">Nicht gefunden</td>
                      </tr>
                      `;
                  }
                });
            }}
          ></button>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Datum</th>
                <th>Art</th>
                <th>Betrag</th>
              </tr>
            </thead>
            <tbody id="rueckgabe"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default einlagen;
