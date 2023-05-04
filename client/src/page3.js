function PAGE3() {
  let timecounter = 0; //die zeit bis wann gespart wird in monaten
    return (
      <>
        <h1>Sparplaner</h1>
        <div>
          <div className="inputTextfield">
            <label>Wie viel wollen Sie insgesamt sparen: </label>
            <input type="text" id="endkapital" />
          </div>
          <br></br>
          <div>
            <label>Wollen Sie monatlich oder jährlich sparen: </label>
            <input type="radio" name="zinsRadio" id="monatlich" defaultChecked onClick={(event) => {
              const endpoint = document.getElementById("endpoint");
              endpoint.textContent="In "+ timecounter +" Monaten sind Sie fertig mit sparen."
            }}/>
            <label>Monatlich sparen</label>
            <input type="radio" name="zinsRadio" id="jaehrlich" onClick={(event) => {
              const endpoint = document.getElementById("endpoint");
              endpoint.textContent="In "+ (timecounter / 12) +" Jahren sind Sie fertig mit sparen."
            }}/>
            <label>Jährlich sparen</label>
          </div>
        </div>
        <br></br>
        <div className="inputTextfield">

          <label>Datum bis wann gespart wird Monat als zahl:</label>
          <input type="text" id="endMonth" />
          <label>Jahr als 4 stellige zahl:</label>
          <input type="text" id="endYear" />         
        </div>
        <br></br>
        <div className="inputTextfield">
          <label>Geben Sie den Zins an: </label>
          <input type="text" id="zins" />
        </div>
        <br></br>
        <label id="endpoint">
            In 0 Monaten sind Sie fertig mit sparen.
        </label>
  
        <div className="berechnenButton">
          <button
            id="berechenenButton"
            onClick={(event) => {
              const jaehrlichZahlen = document.getElementById("jährlich");
              const ziel = document.getElementById("endkapital");
              const now = new Date(); // creates a new Date object with the current date and time
              const year = now.getFullYear(); // gets the year (4 digits)
              const month = now.getMonth() + 1; // gets the month (0-11) and adds 1 to make it 1-12
              const zins = document.getElementById("zins");
              const endpoint = document.getElementById("endpoint");
  
              console.log(now,year,month);
              if (jaehrlichZahlen == true) {
                endpoint.textContent =
                  "In "+ timecounter +" Monaten sind Sie fertig mit sparen."
              } else {
                endpoint.textContent =
                  "In "+ (timecounter / 12) +" Jahren sind Sie fertig mit sparen."
              }
            }}
          >
            Berechnen
          </button>
        </div>
      </>
    );
  }
  export default PAGE3;