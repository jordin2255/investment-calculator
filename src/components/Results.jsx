import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({input}){

const annualData=calculateInvestmentResults(input);
const initialInvestment=annualData[0].valueEndOfYear-annualData[0].interest-annualData[0].annualInvestment;

  return(
    <>
    <table id="result">
      <thead>
        <tr>
        <td>Year</td>
        <td>Investment Value</td>
        <td>Interest (Year)</td>
        <td>Total Interest</td>
        <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
       {annualData.map((data)=>{
        const totalInterest=data.valueEndOfYear-data.annualInvestment*data.year-initialInvestment;
        const totalAmountInvested=data.valueEndOfYear-totalInterest;
        return (<tr key={data.year}><td>{data.year}</td>
      <td>{data.interest}</td>
      <td>{formatter.format(data.valueEndOfYear)}</td>
      <td>{formatter.format(data.annualInvestment)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
      </tr>)
})}
      </tbody>

    </table>
    </>
  );
}