function PAGE2() {
  return (
    <>
      <h1>Sparrechner</h1>
      <div>
        <div>
          <label>Wie viel wollen Sie insgesamt sparen: </label>
          <input type="text" />
        </div>
        <br></br>
        <div>
          <label>Wollen Sie monatlich oder jährlich sparen: </label>
          <input type="radio" name="zinsRadio" value="monatlich" />
          <label>Monatlich sparen</label>
          <input type="radio" name="zinsRadio" value="jährlich" />
          <label>Jährlich sparen</label>
        </div>
        <div>
          <label>Wie viel sind sie bereit in dieser Zeitspanne zu sparen: </label>
          <input type="text" />
        </div>
        <br></br>
        <label>In ... Monaten und ... Jahren sind Sie fertig mit sparen.</label>
      </div>
    </>
  );
}
export default PAGE2;
