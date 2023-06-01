import "./pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PAGE1() {
  return (
    <div className="gugus">
      <div class="container">
        <div class="row">
          <div class="col-6 mx-auto">
            <div class="text-center">
              <h1>Sparrechner</h1>
              <br></br>
              <label>Startkapital</label>
              <br></br>
              <input type="text" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-7">
            <div className="linke-binke">
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

              <div>
                <label>Monatliche Einlage</label>
                <br></br>
                <input type="text" />
              </div>

              <br></br>

              <div>
                <div>
                  <input type="radio" name="bezEndMonat" value="bezAnfMonat" />
                  <label>Einlage Anfang Monat</label>
                </div>

                <div>
                  <input type="radio" name="bezEndMonat" value="bezEndMonat" />
                  <label>Einlage Ende Monat</label>
                </div>
              </div>

              <br></br>

              <div>
                <label>Anzahl Monate</label>
                <br></br>
                <input type="text" />
              </div>
            </div>
          </div>
          <div class="col-3">
            <div className="rechte-mechte">
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

              <div>
                <label>Jährliche Einlage</label>
                <br></br>
                <input type="text" />
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
                <input type="text" />
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>

        <br></br>

        <div class="row">
          <div class="col-6 mx-auto">
            <div class="text-center">
              <div>
                <label>Zinssatz</label>
                <br></br>
                <input type="text" />
              </div>

              <br></br>
              <br></br>

              <div className="calculateButton">
                <button
                  onClick={(event) => {
                    const inputs = document.querySelectorAll("input");
                    const kapital = inputs[0].valueAsNumber;
                    const sparbetrag = inputs[3].valueAsNumber;
                    const anzMonate = inputs[6].valueAsNumber;
                    //const sparbetragJahr = inputs[7].valueAsNumber;
                    const zinsbetrag = inputs[8].valueAsNumber;
                    const textoutput = document.getElementById("output");

                    const jahre_zu_sparen = (anzMonate - (anzMonate % 12)) / 12;
                    const monate_ungespart = anzMonate % 12;
                    let zinsaddiert = 0;
                    let zinseinkommen = 0;

                    //console.log(kapital, jahre_zu_sparen * (sparbetrag * 12), monate_ungespart * sparbetrag, sparbetrag, zinsbetrag / 100)

                    for (let jahre = 0; jahre < jahre_zu_sparen; jahre++) {
                      let Zinsgeld =
                        sparbetrag * (jahre * 12) + kapital + zinsaddiert;
                      zinseinkommen = Zinsgeld * (zinsbetrag / 100);
                      zinsaddiert = zinseinkommen;
                      console.log(zinseinkommen, zinsaddiert);
                    }

                    const rueckgabe = sparbetrag * anzMonate + zinseinkommen;

                    //rueckgabe = "so viel haben Sie mit uns gespart! "  + Josuha  //das eingezahlte über zeit + der Zins
                    textoutput.textContent =
                      "so viel haben Sie mit uns gespart! " + rueckgabe;
                  }}
                  name="berechnen"
                >
                  Berechnen
                </button>
              </div>

              <div class="row">
                <div class="col-8"></div>
                <div class="col-4" className="outputLabel">
                  <p id="output"></p>
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
