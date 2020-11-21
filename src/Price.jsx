import "./Price.css";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;

export default function Price() {
  return (
    <>
      <div className="price_show">
        <div className="blind_section">
          <div className="blind">
            <h4>Roleta 1</h4>
          </div>
          <div className="blind">
            <h4>Roleta 1</h4>
          </div>
        </div>
        <div className="price_section">
          <div className="price1">
            <h4>Cena:&nbsp;</h4>
            <h3> 123zł</h3>
          </div>
          <div className="price">
            <h4>Wylicytuj:&nbsp;</h4>
            <h3> 13 szt.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
