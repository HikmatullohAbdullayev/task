import { useState } from 'react'
import './App.css'
import Setep1 from './step/Setep1'
import Step2 from './step/Step2'
import Step3 from './step/Step3'
import Step4 from './step/Step4'
import Step5 from './step/Step5'
import Step6 from './step/Step6'
// import StepSwitch from "./step/StepSwitch"

function App() {
  const [data, setData] = useState({
    login:"",
    password:"",
    confirmPassword:"",
    subscriptionType:"",
    fristName:"",
    lastName:"",
    middleName:"",
    brithDate:"",
    email:"",
    gender:"",
    older18: false,
    cardNumber:"",
    personalData:false,
    cookie: false,

  })

  return (

   <>

   <Setep1 data={data}/>
   <Step2/>
   <Step3/>
   <Step4/>
   <Step5/>
   <Step6/>
   </>
  )
}

export default App
