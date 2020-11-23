
import "./PriceQuantity.css";
import Blind from './Blind.jsx';
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function PriceQuantity({countp, count, setCount, setCountP, setBlinds, blinds}) {
 const onButtonSetCountP = (mode) => {
  setCountP(mode);
 };
 const onButtonSetCount = (mode) => {
  setCount(mode);
 };
 const addBlinds= () => {
  setBlinds(blinds=> [...blinds, <Blind/>]);
};
  
  
  return (
    <>
      <div className="priceSection">
        <h2>Cena/ ilość sztuk na akcji</h2>
        <hr className="PriceQuantityHr" />
        <div className="PriceShow">
          <div className="priceAll1">
            <h4>Cena:&nbsp;</h4>
            <h3> {countp}&nbsp;zł</h3>
          </div>
          <div className="priceAll">
            <h4>Wylicytuj&nbsp;</h4>
            <h3>{count}&nbsp;szt.</h3>
          </div>
        </div>
        <div className="buttonPrice">
          <button className="buttonColor"  onClick={() => { onButtonSetCount(count + 1); onButtonSetCountP(countp + 10);addBlinds(setBlinds)}}>
            <h1>+dodaj kolejną roletę</h1>
          </button>
          <button className="linkAction">
          <a href ='https://allegro.pl/' target="_blank"><h1>Przejdź do akcji</h1></a>
          </button>
        </div>
      </div>
    </>
  );
}
