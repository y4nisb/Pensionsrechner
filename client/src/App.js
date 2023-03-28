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
      </div>

      <br></br>

      <div className="input2">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" />
      </div>

      <br></br>

      <div className="radioMonatBezahlung">
        <div className="radio2">
          <input type="radio" name="bezAnfMonat" value="bezAnfMonat" />
          <label>bez. Annfang Monat</label>
        </div>

        <div className="radio3">
          <input type="radio" name="bezEndMonat" value="bezEndMonat" />
          <label>bez. Ende Monat</label>
        </div>
      </div>
    </div>
  );
}

export default App;
