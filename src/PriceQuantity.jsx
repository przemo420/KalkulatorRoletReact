import "./PriceQuantity.css";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function PriceQuantity() {
  return (
    <>
      <div className="priceSection">
        <h2>Cena/ ilość sztuk na akcji</h2>
        <hr className="PriceQuantityHr" />
        <div className="PriceShow">
          <div className="priceAll1">
            <h4>Cena:&nbsp;</h4>
            <h3> 123zł</h3>
          </div>
          <div className="priceAll">
            <h4>Wylicytuj&nbsp;</h4>
            <h3> 13 szt.</h3>
          </div>
        </div>
        <div className="buttonPrice">
          <button className="buttonColor">
            <h1>+ dodaj kolejną roletę</h1>
          </button>
          <button>
            <h1>Przejdź do akcji</h1>
          </button>
        </div>
      </div>
    </>
  );
}
