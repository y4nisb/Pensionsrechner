import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="titel">
          <h1>Pensionsrechner</h1>
      </div>

      <div className="input">
        <label> Geben Sie ihr aktuelles Kapital an</label>
        <input type="number" />
      </div>

      <br></br>

      <div className="radio1">
        <input type="radio" name="monatlich" value="monatlich" />
        <label>Monatlich zahlen</label>
        <input type="radio" name="jährlich" value="jährlich" />
        <label>Jährlich zahlen</label>
      </div>

      <br></br>

      <div className="input">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" />
      </div>

      <br></br>

      <div className="monatBezahlung">
        <div className="radio2">
          <input type="radio" name="bezAnfMonat" value="bezAnfMonat" />
          <label>Bez. Annfang Monat</label>
        </div>

        <div className="radio3">
          <input type="radio" name="bezEndMonat" value="bezEndMonat" />
          <label>Bez. Ende Monat</label>
        </div>
      </div>

      <br></br>

      <div className="input">
        <label> Wie viele Monate wollen sie sparen? </label>
        <input type="number" />
      </div>

      <br></br>

      <div className="input">
        <label> Wie viel möchten Sie im Jahr sparen? </label>
        <input type="number" />
      </div>

      <br></br>

      <div className="radio4">
        <input type="radio" name="bezAnfJahr" value="bezAnfJahr" />
        <label>Bez. Anfang jahr</label>
        <input type="radio" name="bezEndJahr" value="bezEndJahr" />
        <label>Bez. Ende Jahr</label>
      </div>

      <div className="outputAusrechnen">
        <p id="output"></p>
      </div>

      <div className="berechnenButton">
        <button onClick={(event)=>{        
          const inputs = document.querySelectorAll('input')
          //const kapital = inputs[0].value;
          const sparbetrag = inputs[3].value;
          const anzMonate = inputs[6].value;
          //const sparbetragJahr = inputs[7].value;
          const textoutput = document.getElementById('output');
          const rueckgabe = "Sie hätten "+ sparbetrag * anzMonate+ " mit uns Gespart!"
          textoutput.textContent=(rueckgabe);
        }}
        name="berechnen">Berechnen</button>
      </div>
    </div>
  );
}

export default App;
