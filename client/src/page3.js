function PAGE3() {
  let timecounter = 0; //die zeit bis wann gespart wird in monaten
    return (
      <>
        <h1>Sparplaner</h1>
        <div>
        <div className="inputTextfield">
            <label>Wie viel wollen Sie insgesamt sparen: </label>
            <input type="number" id="endkapital" />
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
          <input type="number" id="endMonth" />
          <label>Jahr als 4 stellige zahl:</label>
          <input type="number" id="endYear" />         
        </div>
        <br></br>
        <div className="inputTextfield">
          <label>Geben Sie den Zins als Prozent an: </label>
          <input type="number" id="zins" />
        </div>
        <br></br>
        <label id="endpoint">
            In 0 Monaten sind Sie fertig mit sparen.
        </label>
  
        <div className="berechnenButton">
          <button
            id="berechenenButton"
            onClick={(event) => {
              //let monatlichZahlen = document.querySelector('input[name="zinsRadio"]')
              const monatlichZahlen = document.getElementById("monatlich").value
              const ziel = document.getElementById("endkapital").value
              const now = new Date(); 
              const year = now.getFullYear(); 
              const month = now.getMonth() + 1;
              const endMonth = document.getElementById("endMonth").value
              const endYear = document.getElementById("endYear").value
              const zins = document.getElementById("zins").value
              const endpoint = document.getElementById("endpoint").value
  

              console.log(year,month,monatlichZahlen,ziel,now,year,endMonth,endYear,zins);
              if (year < endYear && month < endMonth) {
                
              } else if(endMonth > 12){
                endpoint.textContent="geben sie ein Valides Datum an"
              }else if(monatlichZahlen.checked){
                const anzYear = endYear - year
                const anzMonth = endMonth - month + (anzYear * 12)
                const mathpower = Math.pow(zins/100/12+1,anzMonth);
                const Zahlung = (ziel * ((zins / 100)/12)) / (mathpower - 1) 
                console.log(Zahlung, mathpower)
              }else{
                const anzYear = endYear - year
                const mathpower = Math.pow(zins/100 +1,anzYear);
                const Zahlung = (ziel * (zins / 100)) / ( mathpower - 1) 
                console.log(Zahlung, mathpower)
              }

              //Zahlung = (Endguthaben * Zinssatz) / ((1 + Zinssatz)^Anzahl der Perioden - 1)


            }}
          >
            Berechnen
          </button>
        </div>
      </>
    );
  }
  export default PAGE3;