import "./pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PAGE2() {
  return (
    <div className="gugus">
      <div class="container">
        <div class="row">
          <div class="col-6 mx-auto">
            <div class="text-center">
              <h1>Planer</h1>
            </div>
          </div>
        </div>

        <br></br>

        <div class="row">
          <div class="col-8">
            <div>
              <label>Gewünschtes Endkapital</label>
              <br></br>
              <input type="text" id="endkapital" />
            </div>

            <br></br>

            <div class="row">
              <div class="col-4"></div>

              <div class="col-3">
                <input type="radio" name="zinsRadio" id="monatlich" />
                <label>Monatliche Einlage</label>
              </div>

              <div class="col-4">
                <input type="radio" name="zinsRadio" id="jährlich" checked />
                <label>Jährliche Einlage</label>
              </div>
            </div>

            <br></br>

            <div>
              <label>Zieldatum</label>
              <br></br>
              <input type="text" id="endpoint" />
            </div>

            <br></br>

            <div>
              <label>Zinssatz</label>
              <br></br>
              <input type="text" id="zins" />
            </div>

            <br></br>

            <div class="row">
              <div class="col-9"></div>
              <div class="col-3">
                <div className="outputBox">
                  <p id="output">
                  </p>
                </div>
              </div>
            </div>

            <br></br>

            <div className="calculateButton">
              <button
                id="berechenenButton"
                onClick={(event) => {
                  const jaehrlichZahlen =
                    document.getElementById("jährlich").checked;
                  const monatlichZahlen =
                    document.getElementById("monatlich").checked;
                  const ziel = document.getElementById("endkapital");
                  const now = Date();
                  const zins = document.getElementById("zins");
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

            <br></br>

            <div className="resetButton">
              <button onClick={() => window.location.reload(false)}>
                Zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PAGE2;
