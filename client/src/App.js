import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="input1">
        <label> Geben Sie ihr aktuelles Kapital an</label>
        <input type="number" />
      </div>
      <label>Monatlich</label>
      <input type="radio" name="monatlich" value="monatlich" />
      <div className="input2">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" />
      </div>
    </div>
  );
}

export default App;
