function PAGE3() {
  let Moneycounter = 0; //die zeit bis wann gespart wird in monaten
    return (
      <>
        <div className="gugus">
          <div className="container">       
            <h1>Sparplaner</h1>
              <div className="inputTextfield">
                <label>Wie viel wollen Sie insgesamt sparen: </label>
                <input type="number" id="endkapital" />
              </div>

            <br></br>

              <div>
                <label>Wollen Sie monatlich oder jährlich sparen: </label>
                  <input type="radio" name="zinsRadio" id="monatlich" defaultChecked onClick={(event) => {
                    const endpoint = document.getElementById("endpoint");
                    endpoint.textContent="Sie müssen "+ Moneycounter +" Monatlich einzahlen um den Betrag bis dann zu erhalten."
                  }}/>
                <label>Monatlich sparen</label>
                  <input type="radio" name="zinsRadio" id="jaehrlich" onClick={(event) => {
                    const endpoint = document.getElementById("endpoint");
                    endpoint.textContent="Sie müssen "+ Moneycounter*12 +" Jährlich einzahlen um den Betrag bis dann zu erhalten."
                  }}/>
                <label>Jährlich sparen</label>
              </div>

            <br></br>

              <div className="inputTextfield">
                <label>Datum bis wann gespart wird Monat als zahl:</label>
                <input type="number" id="endMonth" />
                <label>Jahr als 4 stellige zahl:</label>
                <input type="number" id="endYear"  />         
              </div>
        
            <br></br>
        
              <div className="inputTextfield">
                <label>Geben Sie den Zins als Prozent an: </label>
                <input type="number" id="zins" />
              </div>

            <br></br>

              <label id="output">
                In 0 Monaten sind Sie fertig mit sparen.
              </label>

              <div className="calculateButton">
                <button
                  id="berechenenButton"
                  onClick={(event) => {
                    const monatlichZahlen = document.getElementById("monatlich")
                    const jaehrlichZahlen = document.getElementById("jaehrlich")
                    const ziel = parseInt(document.getElementById("endkapital").value)
                    const now = new Date(); 
                    const year = now.getFullYear(); 
                    const month = now.getMonth() + 1;
                    const endMonth = parseInt(document.getElementById("endMonth").value)
                    const endYear = parseInt(document.getElementById("endYear").value)
                    const zins = parseInt(document.getElementById("zins").value)
                    const output = document.getElementById("output")

                    console.log(year,month,jaehrlichZahlen,ziel,now,year,endMonth,endYear,zins);
                    if (year > endYear && month > endMonth) {
                      output.textContent="geben sie ein Valides Datum an"
                    } else if(endMonth > 12){
                      output.textContent="geben sie ein Valides Datum an"
                    }else if(monatlichZahlen.checked){
                      const anzYear = endYear - year
                      const mathpower = Math.pow(zins/100 +1 ,anzYear);
                      const Zahlung = (ziel * (zins / 100)) / ( mathpower - 1) 
                      console.log(Zahlung, mathpower)
                      Moneycounter = (Zahlung - Zahlung % 1)/12
                      output.textContent="Sie müssen "+ Moneycounter +" Monatlich einzahlen um den Betrag bis dann zu erhalten."
                    }else{
                      const anzYear = endYear - year
                      const mathpower = Math.pow(zins/100 +1 ,anzYear);
                      const Zahlung = (ziel * (zins / 100)) / ( mathpower - 1) 
                      console.log(Zahlung, mathpower)
                      Moneycounter = (Zahlung - Zahlung % 1)/12
                      output.textContent="Sie müssen "+ Moneycounter*12 +" Jährlich einzahlen um den Betrag bis dann zu erhalten."
                    }
                  }}>
                  Berechnen
                </button>
        </div>
        </div>
        </div>
      </>
    );
  }
  export default PAGE3;