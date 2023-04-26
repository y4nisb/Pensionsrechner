import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="titel">
        <h1>Pensionsrechner</h1>
      </div>
      <div className="inputTextfield" id="kapital">
        <label> Geben Sie ihr aktuelles Kapital an</label>
        <input type="number" />
      </div>
      <br></br>
      <div className="radio">
        <input type="radio" name="timeRadio" defaultChecked onClick={(event) => {
        const monatlichBetrag = document.getElementById("MonatlichSparen");
        const jaerhlichBetrag = document.getElementById("JaehrlichSparen");
          
        jaerhlichBetrag.classList.add("invisible");
        monatlichBetrag.classList.remove("invisible");
      }}/>
        <label>Monatlich zahlen</label>

        <input type="radio" name="timeRadio"onClick={(event) => {
          const monatlichBetrag = document.getElementById("MonatlichSparen");
          const jaerhlichBetrag = document.getElementById("JaehrlichSparen");
          
          jaerhlichBetrag.classList.remove("invisible");
          monatlichBetrag.classList.add("invisible");
      }}/>
        <label>Jährlich zahlen</label>

      </div>
      <br></br>


      <div className="inputTextfield " id="MonatlichSparen">
        <label> Wie viel möchten Sie monatlich sparen? </label>
        <input type="number" /> 
      </div>
      <br></br>
      <div className="inputTextfield invisible" id="JaehrlichSparen">
        <label> Wie viel möchten Sie im Jahr sparen? </label>
        <input type="number" />
      </div>
      <br></br>
      <div className="monatBezahlung">
        <div className="radio">
          <input type="radio" name="bezEndMonat" defaultChecked value="bezAnfMonat" />
          <label>Bezahlung Anfang Monat</label>   
      </div>

        <div className="radio">
          <input type="radio" name="bezEndMonat" value="bezEndMonat"  />
          <label>Bezahlung Ende Monat</label>
        </div>
      </div>
      <br></br>
      <div className="inputTextfield" id="AnzahlMonate">
        <label> Wie viele Monate wollen sie sparen?</label>
        <input type="number" />
      </div>
      <br></br>
      <div className="inputTextfield" id="ZinsProzent">
        <label> Geben Sie den Zins in Prozent an </label>
        <input type="number" />
      </div>      
      <br></br>
      <div className="radio">
        <input type="radio" name="bezAnfJahr" defaultChecked value="bezAnfJahr"  />
        <label>Einlage Anfang Jahr</label>
        <input type="radio" name="bezAnfJahr" value="bezEndJahr"  />
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
            const sparbetragjaehrlich = inputs[4].valueAsNumber;
            const anzMonate = inputs[7].valueAsNumber;
            const zinsbetrag = inputs[8].valueAsNumber;
            const textoutput = document.getElementById("output");   
            const jahre_zu_sparen = (anzMonate - (anzMonate % 12))/12
            let zinsaddiert = 0;
            let zinseinkommen = 0;
            

            for (let jahre = 0; jahre <= jahre_zu_sparen; jahre++) {
              let Zinsgeld = (sparbetrag * (jahre * 12)) + kapital + zinsaddiert
              zinseinkommen = Zinsgeld * (zinsbetrag /100)
              zinsaddiert = zinseinkommen
            }

          const rueckgabe = (sparbetrag * anzMonate) + zinseinkommen - ((sparbetrag * anzMonate) + zinseinkommen) % 0.05

            textoutput.textContent = "so viel haben Sie mit uns gespart! " + rueckgabe;
          }}
        >Berechnen</button>
      </div>
      <div className="reset">
        <button onClick={() => {
            const inputs = document.querySelectorAll("input");
            const kapital = inputs[0];
            const sparbetrag = inputs[3];
            const sparbetragjaehrlich = inputs[4];
            const anzMonate = inputs[7];
            const zinsbetrag = inputs[8];
            const textoutput = document.getElementById("output");   
                    
            inputs.value="";
            kapital.value="";
            sparbetrag.value="";
            sparbetragjaehrlich.value="";
            anzMonate.value="";
            zinsbetrag.value="";
            textoutput.textContent ="";
        }}>Zurücksetzten</button>
      </div>
    </div>
  );
}

export default App;
