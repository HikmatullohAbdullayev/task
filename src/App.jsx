import { useState } from 'react'
import './App.css'
// import Setep1 from './step/Setep1'
// import Step2 from './step/Step2'
// import Step3 from './step/Step3'
// import Step4 from './step/Step4'
// import Step5 from './step/Step5'
// import Step6 from './step/Step6'
// import StepSwitch from "./step/StepSwitch"

function App() {
  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    login:"",
    password:"",
    confirmPassword:"",
    subscription:"",
    fristName:"",
    lastName:"",
    middleName:"",
    brithDate:"",
    email:"",
    gender:"",
    older18: false,

  })

  function  onChangeFun (event)  {
console.log(event.target.value);
const {name, value} = event.target;
setData((prevData) => ({
  ...prevData, [name]: value,
}))
}
const handleClik = (e) => {
    e.preventDefault()
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData, [name]: value,
    }))


setStep(step+1)
console.log(step);
}
const handleClikDec =(e) => {
 setStep(step - 1)
}

const [disable,setDisable] = useState(false)
if (step == 1){

  return (
    
 
    <>
      <div>
        <h1 className='text-2xl mb-10'>Setp -{step}</h1>
        <h1>{data.login}</h1>
        {data.password == data.confirmPassword ?  <p className='text-green-700'>Hammasi joyda</p>  :  <p className=' text-red-700'>Parolni qaytadan tering</p> }
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="login"> Login</label>
            <input onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' id='login' type="text" placeholder="login" value={data.login} name='login' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg mx-auto '>
            <label className='p-2 rounded-lg  bg-slate-600' htmlFor="password">Password</label>
            <input onChange={onChangeFun} className='w-full p-4 rounded-lg  bg-gray-300 ' required type="password" id='password' placeholder="password" value={data.password} name='password' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-gray-300 rounded-lg  ' required type="password" id='confirmPassword' placeholder="confirmPassword" value={data.confirmPassword} name='confirmPassword' />
          </div>

          <div className='w-[500px] mx-auto '>
            <button onClick={handleClik }  className='p-3 bg-amber-300 rounded-lg '>Send</button>
          </div>
        </form>
      </div>
   
   

 
       
   



   {/* <Setep1 data={data}/>
   <Step2/>
   <Step3/>
   <Step4/>
   <Step5/>
   <Step6/> */}
      
   </>
  )
}else if (step == 2) {
  return (
    
    
    <>
      <div>
        <h1 className='text-2xl mb-10'>Setp - {step}</h1>
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
        
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="narxi">Narxni Tanlash</label>

<select   id="subscription"   name="subscription" >

  <option onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' value={data.subscription}  name='subscription'   >Oylik</option>
  <option onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' value={data.subscription}  name='subscription'>yillik</option>
  <option onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' value={data.subscription}  name='subscription'>kunlik</option>
</select>
              
          </div>
          

          <div className='w-[500px] mx-auto gap-2 '> 
            <button onClick={handleClikDec }  className='p-3 bg-amber-300 rounded-lg '>Ortga</button>
            <button onClick={handleClik } className='p-3 bg-amber-300 rounded-lg '>Yuborish</button>
          </div>
        </form>
      </div>
      
   </>
  )
}
else if (step == 3){
  
return (
    
 
    <>
      <div>
        <h1 className='text-2xl mb-10'>Setp -{step}</h1>
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="lastName"> Last name</label>
            <input onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' id='lastName' type="text" placeholder="Last name" value={data.lastName} name='lastName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg mx-auto '>
          <label className='p-2 rounded-lg  bg-slate-600' htmlFor="fristName">frist name</label>
            <input onChange={onChangeFun} className='w-full p-4 rounded-lg  bg-gray-300 ' required type="text" id='fristName' placeholder="frist name" value={data.fristName} name='fristName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="middleName">middle name</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-gray-300 rounded-lg  ' required type="text" id='middleName' placeholder="middleName" value={data.middleName} name='middleName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="email">middle name</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-gray-300 rounded-lg  ' required type="email" id='email' placeholder="email" value={data.email} name='email' />
          </div>

          <div className='w-[500px] mx-auto '>
            <button onClick={handleClik } className='p-3 bg-amber-300 rounded-lg '>Send</button>
          </div>
        </form>
      </div>
   
   </>
  )
}
else{
return(
<>
<p>Login: {data.login}</p>
<p>Password: {data.password}</p>
<p>Confirm Password: {data.confirmPassword}</p>
<p>Last name {data.lastName}</p>
<p>Frist name {data.fristName}</p>
<p>Obuna {data.subscription}</p>
<p>Middle name {data.middleName}</p>
<p>Email: {data.email}</p>
{/* <p>text {data.login}</p>
<p>text {data.login}</p> */}
</>
)
}
}

export default App
