import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import Navbar from "./navbar.js";


function generateData(
  startkapital,
  monatOderJahr,
  einlage,
  anfangOderEnde,
  anzahlMonateOderJahre,
  zinssatz,
  output
) {
  const pdfData = (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={[styles.title, { marginTop: "1cm" }]}>Sparplaner</Text>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Startkapital:</Text>
            <Text style={styles.cellValue}>{startkapital} CHF</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Abstand der Einlagen:</Text>
            <Text style={styles.cellValue}>{monatOderJahr}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Einlage:</Text>
            <Text style={styles.cellValue}>{einlage} CHF</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Wann wird bezahlt:</Text>
            <Text style={styles.cellValue}>{anfangOderEnde}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Anzahl Monate / Jahre:</Text>
            <Text style={styles.cellValue}>{anzahlMonateOderJahre}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Zinssatz:</Text>
            <Text style={styles.cellValue}>{zinssatz}%</Text>
          </View>

          <Text style={[styles.resultValue, { marginTop: "1cm" }]}>
            {output}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return { pdfData };
}

const styles = StyleSheet.create({
  container: {
    margin: "1cm",
  },
  title: {
    fontSize: 30,
    marginBottom: "0.5cm",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: "0.3cm",
  },
  cellLabel: {
    width: "50%",
    marginRight: "0.3cm",
    fontWeight: "bold",
  },
  cellValue: {
    width: "50%",
  },
  resultValue: {
    textAlign: "center",
    textDecoration: "underline",
  },
});

function sparrechner() {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="text-center">
              <h1>Sparrechner</h1>
              <br></br>
              <label>Startkapital</label>
              <br></br>
              <input type="text" id="startkapitalInput" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="links">
              <br></br>

              <div>
                <input
                  type="radio"
                  name="timeRadio"
                  value="monatlich"
                  id="monatlichZahlen"
                  onClick={(event) => {
                    let monatlicheInputs =
                      document.getElementById("monatlicheInputs");
                    let jährlicheInputs =
                      document.getElementById("jährlicheInputs");

                    jährlicheInputs.classList.add("notSelected");
                    monatlicheInputs.classList.remove("notSelected");
                  }}
                />
                <label>Monatlich zahlen</label>
              </div>

              <br></br>

              <div id="monatlicheInputs">
                <div>
                  <label>Monatliche Einlage</label>
                  <br></br>
                  <input type="text" id="monatlicheEinlageInput" />
                </div>

                <br></br>

                <div>
                  <div>
                    <input
                      type="radio"
                      name="bezEndMonat"
                      value="bezAnfMonat"
                      id="bezAnfMonat"
                    />
                    <label>Einlage Anfang Monat</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="bezEndMonat"
                      value="bezEndMonat"
                      id="bezEndMonat"
                    />
                    <label>Einlage Ende Monat</label>
                  </div>
                </div>

                <br></br>

                <div>
                  <label>Anzahl Monate</label>
                  <br></br>
                  <input type="text" id="anzahlMonateInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="rechts">
              <br></br>

              <div>
                <input
                  type="radio"
                  name="timeRadio"
                  value="jährlich"
                  id="jährlichZahlen"
                  onClick={(event) => {
                    let monatlicheInputs =
                      document.getElementById("monatlicheInputs");
                    let jährlicheInputs =
                      document.getElementById("jährlicheInputs");

                    monatlicheInputs.classList.add("notSelected");
                    jährlicheInputs.classList.remove("notSelected");
                  }}
                />
                <label>Jährlich zahlen</label>
              </div>

              <br></br>

              <div id="jährlicheInputs">
                <div>
                  <label>Jährliche Einlage</label>
                  <br></br>
                  <input type="text" id="jährlicheEinlageInput" />
                </div>

                <br></br>

                <div>
                  <input
                    type="radio"
                    name="bezAnfJahr"
                    value="bezAnfJahr"
                    id="bezAnfJahr"
                  />
                  <label>Einlage Anfang Jahr</label>
                  <br></br>
                  <input
                    type="radio"
                    name="bezAnfJahr"
                    value="bezEndJahr"
                    id="bezEndJahr"
                  />
                  <label>Einlage Ende Jahr</label>
                </div>

                <br></br>

                <div>
                  <label>Anzahl Jahre</label>
                  <br></br>
                  <input type="text" id="anzahlJahreInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-6 mx-auto">
            <div className="text-center">
              <div>
                <label>Zinssatz</label>
                <br></br>
                <input type="text" id="zinssatzInput" />
              </div>

              <br></br>

              <div className="outputLabel">
                <p id="output"></p>
              </div>

              <button
                className="cooleButtons"
                onClick={(event) => {
                  let elStartkapital =
                    document.getElementById("startkapitalInput");
                  let selRadioB = document.querySelector(
                    'input[name="timeRadio"]:checked'
                  );
                  let elMonatlicheEinlage = document.getElementById(
                    "monatlicheEinlageInput"
                  );
                  let elJährlicheEinlage = document.getElementById(
                    "järhlicheEinlageInput"
                  );
                  let elAnzahlMonate =
                    document.getElementById("anzahlMonateInput");
                  let elAnzahlJahre =
                    document.getElementById("anzahlJahreInput");
                  let elZinssatz = document.getElementById("zinssatzInput");
                  let resultOutput = document.getElementById("output");

                  // Zuteilung Startkapital Variable
                  let kapital = elStartkapital.value;

                  // Zuteilung Einlage Variable je nach Radio Button Auswahl
                  let sparbetrag = 0;
                  if (selRadioB) {
                    if (
                      selRadioB.value === "monatlich" &&
                      elMonatlicheEinlage
                    ) {
                      sparbetrag = elMonatlicheEinlage.value;
                      console.log("Sparbetrag: " + sparbetrag);
                    } else if (
                      selRadioB.value === "jährlich" &&
                      elJährlicheEinlage
                    ) {
                      sparbetrag = elJährlicheEinlage.value;
                      console.log("Sparbetrag: " + sparbetrag);
                    }
                  }

                  // Zuteilung Anzahl Monate Variable
                  let anzMonate = elAnzahlMonate.value;

                  // Zuteilung Anzahl Jahre Variable
                  let jahre_zu_sparen = 0;
                  if (selRadioB) {
                    if (selRadioB.value === "jährlich") {
                      jahre_zu_sparen = elAnzahlJahre.value;
                    } else if (selRadioB.value === "monatlich") {
                      jahre_zu_sparen = (anzMonate - (anzMonate % 12)) / 12;
                    }
                  }

                  // Zuteilung Zinsbetrag Variable
                  let zinsbetrag = elZinssatz.value;

                  //let monate_ungespart = anzMonate % 12;
                  let zinsaddiert = 0;
                  let zinseinkommen = 0;

                  //console.log(kapital, jahre_zu_sparen * (sparbetrag * 12), monate_ungespart * sparbetrag, sparbetrag, zinsbetrag / 100)

                  // Logik für Output
                  for (let jahre = 0; jahre < jahre_zu_sparen; jahre++) {
                    let Zinsgeld =
                      sparbetrag * (jahre * 12) + kapital + zinsaddiert;
                    zinseinkommen = Zinsgeld * (zinsbetrag / 100);
                    zinsaddiert = zinseinkommen;
                    console.log("Zins Einkommen: " + zinseinkommen);
                    console.log("Zins addiert: " + zinsaddiert);
                  }

                  //rueckgabe = "so viel haben Sie mit uns gespart! "  + Josuha das eingezahlte über zeit + der Zins
                  let rueckgabe = sparbetrag * anzMonate + zinseinkommen;
                  if (rueckgabe) {
                    resultOutput.textContent =
                      "So viel haben Sie mit uns gespart: " + rueckgabe;
                  }
                }}
                name="berechnen"
              >
                Berechnen
              </button>

              <br></br>
              <br></br>

              <button
                className="cooleButtons"
                onClick={() => window.location.reload(false)}
              >
                Zurücksetzen
              </button>

              <br></br>
              <br></br>

              <div className="downloadButton">
                <button
                  className="cooleButtons"
                  onClick={() => {
                    const startkapitalInput =
                      document.getElementById("startkapitalInput");
                    let monatlichZahlenRadio =
                      document.getElementById("monatlichZahlen");
                    let jährlichZahlenRadio =
                      document.getElementById("jährlichZahlen");
                    const monatlicheEinlage = document.getElementById(
                      "monatlicheEinlageInput"
                    );
                    const jährlicheEinlage = document.getElementById(
                      "jährlicheEinlageInput"
                    );
                    const bezAnfMonatRadio =
                      document.getElementById("bezAnfMonat");
                    const bezEndMonatRadio =
                      document.getElementById("bezEndMonat");
                    const bezAnfJahrRadio =
                      document.getElementById("bezAnfJahr");
                    const bezEndJahrRadio =
                      document.getElementById("bezEndJahr");
                    let anzahlMonateInput =
                      document.getElementById("anzahlMonateInput");
                    let anzahlJahreInput =
                      document.getElementById("anzahlJahreInput");
                    const zinssatzInput =
                      document.getElementById("zinssatzInput");
                    const errorText = document.getElementById("errorText");
                    let resultOutput = document.getElementById("output");
                    let monatOderJahr = "";
                    let anfangOderEnde = "";
                    let einlage = 0;
                    let anzahlMonateOderJahre = 0;

                    if (monatlichZahlenRadio.checked) {
                      monatOderJahr = "monatlich";
                      einlage = monatlicheEinlage.value;
                      anzahlMonateOderJahre = anzahlMonateInput.value;
                      if (bezAnfMonatRadio.checked) {
                        anfangOderEnde = "Anfang Monat";
                      } else if (bezEndMonatRadio.checked) {
                        anfangOderEnde = "Ende Monat";
                      }
                    } else if (jährlichZahlenRadio.checked) {
                      monatOderJahr = "Jährlich";
                      einlage = jährlicheEinlage.value;
                      anzahlMonateOderJahre = anzahlJahreInput.value;
                      if (bezAnfJahrRadio.checked) {
                        anfangOderEnde = "Anfang Jahr";
                      } else if (bezEndJahrRadio.checked) {
                        anfangOderEnde = "Ende Jahr";
                      }
                    }

                    if (
                      startkapitalInput.value === "" ||
                      monatOderJahr === "" ||
                      einlage === 0 ||
                      anfangOderEnde === "" ||
                      anzahlMonateOderJahre === 0 ||
                      zinssatzInput.value === ""
                    ) {
                      errorText.textContent = "Bitte fülle alle Eingaben aus";
                      errorText.classList.remove("hidden");
                      return;
                    }

                    const { pdfData } = generateData(
                      startkapitalInput.value,
                      monatOderJahr,
                      einlage,
                      anfangOderEnde,
                      anzahlMonateOderJahre,
                      zinssatzInput.value,
                      resultOutput.textContent
                    );

                    pdf(pdfData)
                      .toBlob()
                      .then((blob) => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          const pdfDataUrl = reader.result;
                          const link = document.createElement("a");
                          link.href = pdfDataUrl;
                          link.download = "sparrechner_data.pdf";
                          link.click();
                        };
                        reader.readAsDataURL(blob);
                      });
                  }}
                >
                  Download
                </button>
              </div>
            </div>

            <div className="errorMessage">
              <p id="errorText" className="hidden"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sparrechner;
