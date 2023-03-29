import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="input1">
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

      <div className="input2">
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

      <div className="monatBezahlung">
        <label> Wie viele Monate wollen sie sparen? </label>
        <input type="number" />
      </div>

      <div className="jahreBezahlung">
        <label> Wie viel möchten Sie im Jahr sparen? </label>
        <input type="number" />
      </div>

      <div className="radio4">
        <input type="radio" name="bezAnfJahr" value="bezAnfJahr" />
        <label>Bez. Anfang jahr</label>
        <input type="radio" name="bezEndJahr" value="bezEndJahr" />
        <label>Bez. Ende Jahr</label>
      </div>
    </div>
  );
}

export default App;
