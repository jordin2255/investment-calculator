import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1000,
    expectedReturn : 7,
    duration : 12,
  });

  const InputIsValid=userInput.duration>=1;

  function handleUserInputChange(inputIdentifier,newValue){
    setUserInput((prevUserInput)=>{
      return {
          ...prevUserInput,
          [inputIdentifier] : +newValue,
      }
    })
  }

  
  
  return (
    <>
    <Header />
    <Input input={userInput} onChange={handleUserInputChange} />
    {!InputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    {InputIsValid && <Results input={userInput} />}
    
    </>
  )
}

export default App
