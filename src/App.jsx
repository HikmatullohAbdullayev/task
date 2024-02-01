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
  const [step, setstep] = useState(1)

  return (
   <>
   <Setep1/>
   <Step2/>
   <Step3/>
   <Step4/>
   <Step5/>
   <Step6/>
   </>
  )
}

export default App