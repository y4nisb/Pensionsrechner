import Navbar from "./navbar.js";
let Moneycounter = 0; //die zeit bis wann gespart wird in monaten
function sparplaner() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1>Sparplaner</h1>
          <div className="inputTextfield">
            <label>Wie viel wollen Sie insgesamt sparen: </label>
            <input type="number" id="endkapital" />
          </div>

          <br></br>

          <div>
            <label>Wollen Sie monatlich oder jährlich sparen: </label>
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
            <label>Monatlich sparen</label>
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
            <label>Jährlich sparen</label>
          </div>

          <br></br>
              <p2>Bis wann wird gespart?</p2>
          <div className="inputTextfield">
            <label>Monat:</label>
            <input type="number" id="endMonth" className="Datum"/>
            <label>Jahr:</label>
            <input type="number" id="endYear" className="Datum"/>
          </div>

          <br></br>

          <div className="inputTextfield">
            <label>Geben Sie den Zins als Prozent an: </label>
            <input type="number" step="0.01" id="zins" />
          </div>

          <br></br>

          <label id="output">In 0 Monaten sind Sie fertig mit sparen.</label>

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
                if (year > endYear && month > endMonth) {
                  output.textContent = "geben sie ein Valides Datum an";
                } else if (endMonth > 12) {
                  output.textContent = "geben sie ein Valides Datum an";
                } else if (monatlichZahlen.checked) {
                  const anzYear = endYear - year;
                  const mathpower = Math.pow(zins / 100 + 1, anzYear);
                  const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                  console.log(Zahlung, mathpower);
                  Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                  output.textContent =
                    "Sie müssen " +
                    Moneycounter +
                    " Monatlich einzahlen um den Betrag bis dann zu erhalten.";
                } else {
                  const anzYear = endYear - year;
                  const mathpower = Math.pow(zins / 100 + 1, anzYear);
                  const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                  console.log(Zahlung, mathpower);
                  Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                  output.textContent =
                    "Sie müssen " +
                    Moneycounter * 12 +
                    " Jährlich einzahlen um den Betrag bis dann zu erhalten.";
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
