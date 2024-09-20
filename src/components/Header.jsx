import investmentImg from "../assets/investment-calculator-logo.png"; 
import "../index.css";
export default function Header(){
  return(
    <div id="header">
      <img src={investmentImg} alt="Investement Calculator"/>
      <h1>Investment Calculator</h1>
    </div>
  );
}