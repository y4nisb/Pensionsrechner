import "./App.css";

function App2() {
  return (
    <div className="App2">
      <div className="titel2">
        <h1>Pensionsrechner.v2</h1>
      </div>
      <div className="inputTextfield2">
        <label> Geben Sie ihr aktuelles Kapital an</label>
        <input type="number" />
      </div>
      <br></br>
      <div className="radio12">
        <input type="radio" name="timeRadio" value="monatlich" />
        <label>Monatlich zahlen</label>
        <input type="radio" name="timeRadio" value="jährlich" />
        <label>Jährlich zahlen</label>
      </div>
      <br></br>
      <div className="inputTextfield2">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="monatBezahlung2">
        <div className="radio22">
          <input type="radio" name="bezEndMonat" value="bezAnfMonat" />
          <label>Bezahlung Anfang Monat</label>
        </div>

        <div className="radio32">
          <input type="radio" name="bezEndMonat" value="bezEndMonat" />
          <label>Bezahlung Ende Monat</label>
        </div>
      </div>
      <br></br>
      <div className="inputTextfield2">
        <label> Wie viele Monate wollen sie sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="inputTextfield2">
        <label> Wie viel möchten Sie im Jahr sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="inputTextfield2">
        <label> Geben Sie den Zins in Prozent an </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="radio42">
        <input type="radio" name="bezAnfJahr" value="bezAnfJahr" />
        <label>Einlage Anfang Jahr</label>
        <input type="radio" name="bezAnfJahr" value="bezEndJahr" />
        <label>Einlage Ende Jahr</label>
      </div>
      <div className="outputAusrechnen2">
        <p id="output"></p>
      </div>
      <div className="berechnenButton2">
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
              let Zinsgeld = sparbetrag * (jahre * 12) + kapital + zinsaddiert;
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

      <div className="reset2">
        <button onClick={() => window.location.reload(false)}>reset</button>
      </div>
    </div>
  );
}

export default App2;
