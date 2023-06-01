import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PAGE1() {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="text-center">
              <h1>Sparrechner</h1>
              <br></br>
              <label>Startkapital</label>
              <br></br>
              <input type="text" id="startkapitalInput" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="links">
              <br></br>

              <div>
                <input
                  type="radio"
                  name="timeRadio"
                  value="monatlich"
                  onClick={(event) => {
                    let monatlicheInputs =
                      document.getElementById("monatlicheInputs");
                    let jährlicheInputs =
                      document.getElementById("jährlicheInputs");

                    jährlicheInputs.classList.add("notSelected");
                    monatlicheInputs.classList.remove("notSelected");
                  }}
                />
                <label>Monatlich zahlen</label>
              </div>

              <br></br>

              <div id="monatlicheInputs">
                <div>
                  <label>Monatliche Einlage</label>
                  <br></br>
                  <input type="text" id="monatlicheEinlageInput" />
                </div>

                <br></br>

                <div>
                  <div>
                    <input
                      type="radio"
                      name="bezEndMonat"
                      value="bezAnfMonat"
                    />
                    <label>Einlage Anfang Monat</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="bezEndMonat"
                      value="bezEndMonat"
                    />
                    <label>Einlage Ende Monat</label>
                  </div>
                </div>

                <br></br>

                <div>
                  <label>Anzahl Monate</label>
                  <br></br>
                  <input type="text" id="anzahlMonateInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="rechts">
              <br></br>

              <div>
                <input
                  type="radio"
                  name="timeRadio"
                  value="jährlich"
                  onClick={(event) => {
                    let monatlicheInputs =
                      document.getElementById("monatlicheInputs");
                    let jährlicheInputs =
                      document.getElementById("jährlicheInputs");

                    monatlicheInputs.classList.add("notSelected");
                    jährlicheInputs.classList.remove("notSelected");
                  }}
                />
                <label>Jährlich zahlen</label>
              </div>

              <br></br>

              <div id="jährlicheInputs">
                <div>
                  <label>Jährliche Einlage</label>
                  <br></br>
                  <input type="text" id="jährlicheEinlageInput" />
                </div>

                <br></br>

                <div>
                  <input type="radio" name="bezAnfJahr" value="bezAnfJahr" />
                  <label>Einlage Anfang Jahr</label>
                  <br></br>
                  <input type="radio" name="bezAnfJahr" value="bezEndJahr" />
                  <label>Einlage Ende Jahr</label>
                </div>

                <br></br>

                <div>
                  <label>Anzahl Jahre</label>
                  <br></br>
                  <input type="text" id="anzahlJahreInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-6 mx-auto">
            <div className="text-center">
              <div>
                <label>Zinssatz</label>
                <br></br>
                <input type="text" id="zinssatzInput" />
              </div>

              <br></br>
              <br></br>

              <div className="calculateButton">
                <button
                  onClick={(event) => {
                    let elStartkapital =
                      document.getElementById("startkapitalInput");
                    let selRadioB = document.querySelector(
                      'input[name="timeRadio"]:checked'
                    );
                    let monatlichRadioB = document.querySelector(
                      'input[value="monatlich"]'
                    );
                    let jährlichRadioB = document.querySelector(
                      'input[value="jährlich"]'
                    );
                    let elMonatlicheEinlage = document.getElementById(
                      "monatlicheEinlageInput"
                    );
                    let elJährlicheEinlage = document.getElementById(
                      "järhlicheEinlageInput"
                    );
                    let elAnzahlMonate =
                      document.getElementById("anzahlMonateInput");
                    let elAnzahlJahre =
                      document.getElementById("anzahlJahreInput");
                    let elZinssatz = document.getElementById("zinssatzInput");
                    let resultOutput = document.getElementById("output");

                    // Zuteilung Startkapital Variable
                    let kapital = elStartkapital.value;

                    // Zuteilung Einlage Variable je nach Radio Button Auswahl
                    let sparbetrag = 0;
                    if (selRadioB) {
                      if (
                        selRadioB.value == "monatlich" &&
                        elMonatlicheEinlage
                      ) {
                        sparbetrag = elMonatlicheEinlage.value;
                        console.log("Sparbetrag: " + sparbetrag);
                      } else if (
                        selRadioB.value == "jährlich" &&
                        elJährlicheEinlage
                      ) {
                        sparbetrag = elJährlicheEinlage.value;
                        console.log("Sparbetrag: " + sparbetrag);
                      }
                    }

                    // Zuteilung Anzahl Monate Variable
                    let anzMonate = elAnzahlMonate.value;

                    // Zuteilung Anzahl Jahre Variable
                    let jahre_zu_sparen = 0;
                    if (selRadioB) {
                      if (selRadioB.value == "jährlich") {
                        jahre_zu_sparen = elAnzahlJahre.value;
                      } else if (selRadioB.value == "monatlich") {
                        jahre_zu_sparen = (anzMonate - (anzMonate % 12)) / 12;
                      }
                    }

                    // Zuteilung Zinsbetrag Variable
                    let zinsbetrag = elZinssatz.value;

                    //let monate_ungespart = anzMonate % 12;
                    let zinsaddiert = 0;
                    let zinseinkommen = 0;

                    //console.log(kapital, jahre_zu_sparen * (sparbetrag * 12), monate_ungespart * sparbetrag, sparbetrag, zinsbetrag / 100)

                    // Logik für Output
                    for (let jahre = 0; jahre < jahre_zu_sparen; jahre++) {
                      let Zinsgeld =
                        sparbetrag * (jahre * 12) + kapital + zinsaddiert;
                      zinseinkommen = Zinsgeld * (zinsbetrag / 100);
                      zinsaddiert = zinseinkommen;
                      console.log("Zins Einkommen: " + zinseinkommen);
                      console.log("Zins addiert: " + zinsaddiert);
                    }

                    //rueckgabe = "so viel haben Sie mit uns gespart! "  + Josuha das eingezahlte über zeit + der Zins
                    let rueckgabe = sparbetrag * anzMonate + zinseinkommen;
                    if (rueckgabe) {
                      resultOutput.textContent =
                      "So viel haben Sie mit uns gespart: " + rueckgabe;
                    }
                  }}
                  name="berechnen"
                >
                  Berechnen
                </button>
              </div>

              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <div className="outputLabel">
                    <p id="output"></p>
                  </div>
                </div>
              </div>

              <div className="resetButton">
                <button onClick={() => window.location.reload(false)}>
                  Zurücksetzen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PAGE1;
