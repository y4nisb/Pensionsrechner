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
          <input type="radio" name="zinsRadio" id="monatlich" />
          <label>Monatlich sparen</label>
          <input type="radio" name="zinsRadio" id="jährlich" checked />
          <label>Jährlich sparen</label>
        </div>
      </div>
      <br></br>
      <div className="inputTextfield">
        <label>Bis wann möchten Sie sparen: </label>
        <input type="text" id="endpoint" />
      </div>
      <p id="endpunkt">
        In ... Monaten und ... Jahren sind Sie fertig mit sparen.
      </p>

      <div className="berechnenButton">
        <button
          id="berechenenButton"
          onClick={(event) => {
            const jaehrlichZahlen = document.getElementById("jährlich").checked;
            const monatlichZahlen =
              document.getElementById("monatlich").checked;
            const result = document.getElementById("endkapital");
            const now = Date;
            const endpoint = document.getElementById("endpoint");

            console.log(endpoint);
            if (jaehrlichZahlen == true) {
              endpoint.textContent =
                "In ??? Monaten und ??? Jahren sind Sie fertig mit sparen.";
            } else {
              endpoint.textContent =
                "In ___ Monaten und ___ Jahren sind Sie fertig mit sparen.";
            }
          }}
        >
          Berechnen
        </button>
      </div>
    </>
  );
}
export default PAGE2;
