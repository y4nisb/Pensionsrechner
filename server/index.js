const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql2");

app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

const db = mysql.createConnection({
  user: "SC_PensionBut",
  host: "i-kf.ch",
  password: "Pkj87hG&1",
  database: "SC_PensionButDB",
});

app.listen(3001, () => {
  console.log("Your server is running on 3001");
});

app.get(["/einlagen", "/sparplaner", "/sparrechner"], (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/create/:prename/:sirname/:adress", (req, res) => {
  const prename = req.params.prename;
  const sirname = req.params.sirname;
  const adress = req.params.adress;
  db.query(
    "select * from TUser where UserAdresse = (?) and UserVorname = (?) and UserNachname = (?)",
    [adress, prename, sirname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.data.length > 0) {
        res.send({ message: "der User existiert" });
      } else {
        db.query(
          "INSERT INTO TUser (UserVorname, UserNachname, UserMail, UserPassword) VALUES (?,?,?,?)",
          [prename, sirname, usermail, userpassword],
          (err, result) => {
            if (err) {
              //console.log(err);
              res.send(err);
            } else {
              res.send({ message: "der User wurde erstellt" });
            }
          }
        );
      }
    }
  );
});

app.post("/createEinAusgaben/:var1/:var2/:var3", (req, res) => {
  const var1 = req.params.var1;
  const var2 = req.params.var2;
  const var3 = req.params.var3;
  db.query(
    "INSERT INTO TBewegungen (, , ) VALUES (?,?,?)",
    [, ,],
    (err, result) => {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        res.send({ message: "erfolgreich erstellt" });
      }
    }
  );
});

app.delete("/deleteEinAusgaben/:EinlagenId", (req, res) => {
  const EinlagenId = req.params.EinlagenId;
  db.query(
    "DELETE FROM TBewegungen WHERE EinlagenId = (?) ",
    [EinlagenId],
    (err, result) => {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        res.send({ message: "erfolgreich gelöscht" });
      }
    }
  );
});

app.get("/einausgaben/:prename/:sirname/:adress", (req, res) => {
  const prename = req.params.prename;
  const sirname = req.params.sirname;
  const adress = req.params.adress;
  console.log(prename, sirname, adress);
  db.query(
    "SELECT * FROM TBewegungen where UserId IN(SELECT UserId FROM TUser WHERE UserAdresse = (?) and UserVorname = (?) and UserNachname = (?))",
    [adress, prename, sirname],
    (err, result) => {
      if (err) {
        //console.log(err);
        res.send(err);
      } else {
        //console.log(result);
        res.send(result);
      }
    }
  );
});
