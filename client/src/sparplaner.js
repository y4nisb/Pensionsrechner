import { saveAs } from "file-saver";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import * as XLSX from "xlsx";

let Moneycounter = 0; // the time until saving is done in months

function generateData(endkapital, zahlungstyp, monat, jahr, zinssatz, output) {
  const zielMonat = getMonthName(monat);
  const zielJahr = jahr.toString();

  const pdfData = (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={[styles.title, { marginTop: "1cm" }]}>Sparplaner</Text>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Gewünschtes Endkapital:</Text>
            <Text style={styles.cellValue}>{endkapital}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Zahlungstyp:</Text>
            <Text style={styles.cellValue}>{zahlungstyp}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Zieldatum:</Text>
            <Text style={styles.cellValue}>
              {zielMonat} {zielJahr}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Zinssatz:</Text>
            <Text style={styles.cellValue}>{zinssatz}%</Text>
          </View>

            <Text style={[styles.resultValue, { marginTop: "1cm" }]}>{output}</Text>
        </View>
      </Page>
    </Document>
  );

  return { pdfData };
}

function getMonthName(month) {
  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  return monthNames[month - 1];
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

function sparplaner() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1>Sparplaner</h1>
          <br></br>
          <div className="inputTextfield">
            <label>Gewünschtes Endkapital</label>
            <br></br>
            <input type="number" id="endkapital" />
          </div>

          <br></br>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <input
                type="radio"
                name="zinsRadio"
                id="monatlich"
                defaultChecked
                onClick={(event) => {
                  const endpoint = document.getElementById("output");
                  endpoint.textContent =
                    "Sie müssen " +
                    Moneycounter +
                    " Monatlich einzahlen um den Betrag bis dann zu erhalten.";
                }}
              />
              <label>Monatliche Einlage</label>
            </div>

            <div className="col-3">
              <input
                type="radio"
                name="zinsRadio"
                id="jaehrlich"
                onClick={(event) => {
                  const endpoint = document.getElementById("output");
                  endpoint.textContent =
                    "Sie müssen " +
                    Moneycounter * 12 +
                    " Jährlich einzahlen um den Betrag bis dann zu erhalten.";
                }}
              />
              <label>Jährliche Einlage</label>
            </div>
            <div className="col-3"></div>
          </div>

          <br></br>

          <p2>Zieldatum:</p2>
          <div className="inputTextfield">
            <label>Monat:</label>
            <input type="number" id="endMonth" className="Datum" />
            <label>Jahr:</label>
            <input type="number" id="endYear" className="Datum" />
          </div>

          <br></br>

          <div className="inputTextfield">
            <label>Zinssatz</label>
            <br></br>
            <input type="number" step="0.01" id="zins" />
          </div>

          <br></br>

          <div className="outputLabel">
            <p class="hidden" id="output"></p>
          </div>

          <div className="calculateButton">
            <button
              id="berechenenButton"
              onClick={(event) => {
                const monatlichZahlen = document.getElementById("monatlich");
                const jaehrlichZahlen = document.getElementById("jaehrlich");
                const ziel = parseInt(
                  document.getElementById("endkapital").value
                );
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth() + 1;
                const endMonth = parseInt(
                  document.getElementById("endMonth").value
                );
                const endYear = parseInt(
                  document.getElementById("endYear").value
                );
                const zins = parseInt(document.getElementById("zins").value);
                const output = document.getElementById("output");

                if (endYear > year) {
                  if (endMonth < 13 && endMonth > 0) {
                    if (monatlichZahlen.checked) {
                      const anzYear = endYear - year;
                      const mathpower = Math.pow(zins / 100 + 1, anzYear);
                      const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                      console.log(Zahlung, mathpower);
                      Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                      output.textContent =
                        "Sie müssen " +
                        Moneycounter +
                        " Monatlich einzahlen um den Betrag bis dann zu erhalten.";

                      document
                        .getElementById("output")
                        .classList.remove("hidden");
                    } else if (jaehrlichZahlen.checked) {
                      const anzYear = endYear - year;
                      const mathpower = Math.pow(zins / 100 + 1, anzYear);
                      const Zahlung = (ziel * (zins / 100)) / (mathpower - 1);
                      console.log(Zahlung, mathpower);
                      Moneycounter = (Zahlung - (Zahlung % 1)) / 12;
                      output.textContent =
                        "Sie müssen " +
                        Moneycounter * 12 +
                        " Jährlich einzahlen um den Betrag bis dann zu erhalten.";

                      document
                        .getElementById("output")
                        .classList.remove("hidden");
                    }
                  } else {
                    output.textContent = "Geben sie ein validen Monat an";
                    document
                      .getElementById("output")
                      .classList.remove("hidden");
                  }
                } else {
                  output.textContent = "Geben sie ein valides Jahr an";
                  document.getElementById("output").classList.remove("hidden");
                }

                document.getElementById("errorText").classList.add("hidden");
              }}
            >
              Berechnen
            </button>
            <div className="resetButton">
              <button onClick={() => window.location.reload(false)}>
                Zurücksetzen
              </button>
            </div>

            <br></br>

            <div className="downloadButton">
              <button
                onClick={() => {
                  const endkapitalInput = document.getElementById("endkapital");
                  const monatlichZahlen = document.getElementById("monatlich");
                  const jaehrlichZahlen = document.getElementById("jaehrlich");
                  const endMonthInput = document.getElementById("endMonth");
                  const endYearInput = document.getElementById("endYear");
                  const zinsInput = document.getElementById("zins");
                  const errorText = document.getElementById("errorText");
                  let resultOutput = document.getElementById("output");
                  let monatOderJahr = "";

                  if (monatlichZahlen.checked) {
                    monatOderJahr = "Monatliche Einlage";
                  } else if (jaehrlichZahlen.checked) {
                    monatOderJahr = "Jährliche Einlage";
                  }

                  if (
                    endkapitalInput.value === "" ||
                    endMonthInput.value === "" ||
                    endYearInput.value === "" ||
                    zinsInput.value === ""
                  ) {
                    errorText.textContent = "Bitte fülle alle Eingaben aus";
                    errorText.classList.remove("hidden");
                    return;
                  }

                  const { pdfData } = generateData(
                    endkapitalInput.value,
                    monatOderJahr,
                    endMonthInput.value,
                    endYearInput.value,
                    zinsInput.value,
                    resultOutput.textContent
                  );
                  console.log(endMonthInput.value);
                  pdf(pdfData)
                    .toBlob()
                    .then((blob) => {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const pdfDataUrl = reader.result;
                        const link = document.createElement("a");
                        link.href = pdfDataUrl;
                        link.download = "sparplaner_data.pdf";
                        link.click();
                      };
                      reader.readAsDataURL(blob);
                    });
                }}
              >
                Download
              </button>
            </div>

            <div className="errorMessage">
              <p id="errorText" className="hidden"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default sparplaner;
