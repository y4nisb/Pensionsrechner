const express = require("express");
const app = express();
const mysql = require("mysql2");

app.use(express.json());

const db = mysql.createConnection({
  user: "SC_PensionBut",
  host: "i-kf.ch",
  password: "Pkj87hG&1",
  database: "SC_PensionButDB",
});

app.listen(3001, () => {
  console.log("Your server is running on 3001");
});

app.post("/create", (req, res) => {
  const prename = req.body.PreName;
  const sirname = req.body.sirname;
  const adress = req.body.adress;
  db.query(
    "select * from TUser where UserAdress = ? and UserPrename = ? and UserSirname = ?",
    [adress, prename, sirname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length > 0) {
        res.send({ message: "der User existiert" });
      } else {
        db.query(
          "INSERT INTO TUser (UserVorname, UserNachname, UserMail, UserPassword) VALUES (?,?,?,?)",
          [prename, sirname, usermail, userpassword],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "der User wurde erstellt" });
            }
          }
        );
      }
    }
  );
});

app.get("/einausgaben", (req, res) => {
  const prename = req.body.PreName;
  const sirname = req.body.sirname;
  const adress = req.body.adress;
  db.query(
    "SELECT * FROM TEinAusgaben where userId IN(SELECT userId WHERE UserAdress = ? and UserPrename = ? and UserSirname = ?)",
    [adress, prename, sirname],
    (err, result) => {
      if (err) {
        //console.log(err);
      } else {
        //console.log(result);
        res.send(result);
      }
    }
  );
});
