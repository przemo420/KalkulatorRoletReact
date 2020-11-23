import "./Price.css";
import Blind from "./Blind"
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;

export default function Price({countp, count, blinds}) {

  return (
    <>
      <div className="price_show">
        {blinds.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
        <div className="price_section">
          <div className="price1">
            <h4>Cena:&nbsp;</h4>
            <h3>{countp}&nbsp;zł</h3>
          </div>
          <div className="price">
            <h4>Wylicytuj:&nbsp;</h4>
            <h3> {count}&nbsp;szt.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
