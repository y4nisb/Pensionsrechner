import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="titel">
        <h1>Pensionsrechner</h1>
      </div>
      <div className="inputTextfield">
        <label> Geben Sie ihr aktuelles Kapital an</label>
        <input type="number" />
      </div>
      <br></br>
      <div className="radio1">
        <input type="radio" name="timeRadio" value="monatlich" checked />
        <label>Monatlich zahlen</label>
        <input type="radio" name="timeRadio" value="jährlich" />
        <label>Jährlich zahlen</label>
      </div>
      <br></br>
      <div className="inputTextfield">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="monatBezahlung">
        <div className="radio2">
          <input type="radio" name="bezEndMonat" value="bezAnfMonat" checked/>
          <label>Bezahlung Anfang Monat</label>
        </div>

        <div className="radio3">
          <input type="radio" name="bezEndMonat" value="bezEndMonat" />
          <label>Bezahlung Ende Monat</label>
        </div>
      </div>
      <br></br>
      <div className="inputTextfield">
        <label> Wie viele Monate wollen sie sparen?</label>
        <input type="number" />
      </div>
      <br></br>
      <div className="inputTextfield">
        <label> Wie viel möchten Sie im Jahr sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="inputTextfield">
        <label> Geben Sie den Zins in Prozent an </label>
        <input type="number" />
      </div>      
      <br></br>
      <div className="radio4">
        <input type="radio" name="bezAnfJahr" value="bezAnfJahr" checked/>
        <label>Einlage Anfang Jahr</label>
        <input type="radio" name="bezAnfJahr" value="bezEndJahr" />
        <label>Einlage Ende Jahr</label>
      </div>
      <div className="outputAusrechnen">
        <p id="output"></p>
      </div>
      <div className="berechnenButton">
        <button
          onClick={(event) => {
            const inputs = document.querySelectorAll("input");
            const kapital = inputs[0].valueAsNumber;
            const sparbetrag = inputs[3].valueAsNumber;
            const anzMonate = inputs[6].valueAsNumber;
            //const sparbetragJahr = inputs[7].valueAsNumber;
            const zinsbetrag = inputs[8].valueAsNumber;
            const textoutput = document.getElementById("output");
            
            const jahre_zu_sparen = (anzMonate - (anzMonate % 12))/12
            const monate_ungespart = (anzMonate % 12)
            let zinsaddiert = 0;
            let zinseinkommen = 0;
            

            //console.log(kapital, jahre_zu_sparen * (sparbetrag * 12), monate_ungespart * sparbetrag, sparbetrag, zinsbetrag / 100)

            for (let jahre = 0; jahre <= jahre_zu_sparen; jahre++) {
              let Zinsgeld = (sparbetrag * (jahre * 12)) + kapital + zinsaddiert
              zinseinkommen = Zinsgeld * (zinsbetrag /100)
              zinsaddiert = zinseinkommen
            //console.log(zinseinkommen,zinsaddiert)
            }

            const rueckgabe = + (sparbetrag * anzMonate) + zinseinkommen //alle einzahlungen + der zins auf dem Geld
            //sparbetrag * anzMonate + zinseinkommen + Kapital => das währe mit dem Kaptital


            textoutput.textContent = "so viel haben Sie mit uns gespart! " +rueckgabe;
          }}
          name="berechnen"
        >
          Berechnen
        </button>
      </div>
      <div className="reset">
        <button onClick={() => {
            const inputs = document.querySelectorAll("input");
            const kapital = inputs[0];
            const sparbetrag = inputs[3];
            const anzMonate = inputs[6];
            const zinsbetrag = inputs[8];
            const textoutput = document.getElementById("output");   
                     
            inputs.value="";
            kapital.value="";
            sparbetrag.value="";
            anzMonate.value="";
            zinsbetrag.value="";
            textoutput.textContent ="";
        }}>Zurücksetzten</button>
      </div>
    </div>
  );
}

export default App;
