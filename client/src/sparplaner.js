import Navbar from "./navbar.js";
let Moneycounter = 0; //die zeit bis wann gespart wird in monaten
function sparplaner() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1>Sparplaner</h1>
          <br></br>
          <div className="inputTextfield">
            <label>Gewünschtes Endkapital</label>
            <br></br>
            <input type="number" id="endkapital" />
          </div>

          <br></br>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <input
                type="radio"
                name="zinsRadio"
                id="monatlich"
                defaultChecked
                onClick={(event) => {
                  const endpoint = document.getElementById("output");
                  endpoint.textContent =
                    "Sie müssen " +
                    Moneycounter +
                    " Monatlich einzahlen um den Betrag bis dann zu erhalten.";
                }}
              />
              <label>Monatliche Einlage</label>
            </div>

            <div className="col-3">
              <input
                type="radio"
                name="zinsRadio"
                id="jaehrlich"
                onClick={(event) => {
                  const endpoint = document.getElementById("output");
                  endpoint.textContent =
                    "Sie müssen " +
                    Moneycounter * 12 +
                    " Jährlich einzahlen um den Betrag bis dann zu erhalten.";
                }}
              />
              <label>Jährliche Einlage</label>
            </div>
            <div className="col-3"></div>
          </div>

          <br></br>

          <p2>Zieldatum:</p2>
          <div className="inputTextfield">
            <label>Monat:</label>
            <input type="number" id="endMonth" className="Datum" />
            <label>Jahr:</label>
            <input type="number" id="endYear" className="Datum" />
          </div>

          <br></br>

          <div className="inputTextfield">
            <label>Zinssatz</label>
            <br></br>
            <input type="number" step="0.01" id="zins" />
          </div>

          <br></br>

          <div className="outputLabel">
            <p class="hidden" id="output"></p>
          </div>

          <div className="calculateButton">
            <button
              id="berechenenButton"
              onClick={(event) => {
                const monatlichZahlen = document.getElementById("monatlich");
                const jaehrlichZahlen = document.getElementById("jaehrlich");
                const ziel = parseInt(
                  document.getElementById("endkapital").value
                );
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth() + 1;
                const endMonth = parseInt(
                  document.getElementById("endMonth").value
                );
                const endYear = parseInt(
                  document.getElementById("endYear").value
                );
                const zins = parseInt(document.getElementById("zins").value);
                const output = document.getElementById("output");

                console.log(
                  year,
                  month,
                  jaehrlichZahlen,
                  ziel,
                  now,
                  year,
                  endMonth,
                  endYear,
                  zins
                );

                if (endYear > year) {
                  if (endMonth < 13 && endMonth > 0) {
                    if (monatlichZahlen.checked) {
                      const anzYear = endYear - year;
                      const mathpower = Math.pow(zins / 100 + 1, anzYear);
                      const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                      console.log(Zahlung, mathpower);
                      Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                      output.textContent =
                        "Sie müssen " +
                        Moneycounter +
                        " Monatlich einzahlen um den Betrag bis dann zu erhalten.";

                      document
                        .getElementById("output")
                        .classList.remove("hidden");
                    } else if (jaehrlichZahlen.checked) {
                      const anzYear = endYear - year;
                      const mathpower = Math.pow(zins / 100 + 1, anzYear);
                      const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                      console.log(Zahlung, mathpower);
                      Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                      output.textContent =
                        "Sie müssen " +
                        Moneycounter * 12 +
                        " Jährlich einzahlen um den Betrag bis dann zu erhalten.";

                      document
                        .getElementById("output")
                        .classList.remove("hidden");
                    }
                  } else {
                    output.textContent = "Geben sie ein validen Monat an";
                    document
                      .getElementById("output")
                      .classList.remove("hidden");
                  }
                } else {
                  output.textContent = "Geben sie ein valides Jahr an";
                  document.getElementById("output").classList.remove("hidden");
                }
              }}
            >
              Berechnen
            </button>
            <div className="resetButton">
              <button onClick={() => window.location.reload(false)}>
                Zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default sparplaner;
