function PAGE2() {
  return (
    <>
      <h1>Sparrechner</h1>
      <div>
        <div className="inputTextfield">
          <label>Wie viel wollen Sie insgesamt sparen: </label>
          <input type="text" id="endkapital" />
        </div>
        <br></br>
        <div>
          <label>Wollen Sie monatlich oder jährlich sparen: </label>
          <input
            type="radio"
            name="zinsRadio"
            value="monatlich"
            id="monatlich"
          />
          <label>Monatlich sparen</label>
          <input type="radio" name="zinsRadio" value="jährlich" id="jährlich" />
          <label>Jährlich sparen</label>
        </div>
        <br></br>
        <label>In ... Monaten und ... Jahren sind Sie fertig mit sparen.</label>
      </div>
      <br></br>
      <div className="inputTextfield">
        <label>Bis wann möchten Sie sparen: </label>
        <input type="text" id="endpoint" />
      </div>
      <div className="berechnenButton">
        <button
          id="berechenenButton"
          onClick={(event) => {
            const jährlichZahlen = document.getElementById("jährlich");
            const monatlichZahlen = document.getElementById("monatlich");
            const result = document.getElementById("endkapital");
            const now = Date;
            const endpoint = document.getElementById("endpoint");
          }}
        >
          Brechenen
        </button>
      </div>
    </>
  );
}
export default PAGE2;
