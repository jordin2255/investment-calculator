import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1000,
    expectedReturn : 7,
    duration : 12,
  });

  function handleUserInputChange(inputIdentifier,newValue){
    setUserInput((prevUserInput)=>{
      return {
          ...prevUserInput,
          [inputIdentifier] : newValue,
      }
    })
  }

  
  
  return (
    <>
    <Header />
    <Input input={userInput} onChange={handleUserInputChange} />
    </>
  )
}

export default App
