import { useState } from 'react'
import './App.css'

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
  
  const [disable,setDisable] = useState(false)
 

  function  onChangeFun (event)  {
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
}
const handleClikDec =(e) => {
 setStep(step - 1)
}

if (step == 1){

  return (
    
 
    <>
      <div>
        <h1 className='text-2xl mb-10'>Setp - {step}</h1>
       {data.login ?  <h1 className='text-green-700 p-2 w-[400px] mx-auto m-1 rounded-lg text-xl font-bold bg-green-200 '>{data.login }</h1> : <h1 className='text-green-700 p-2 w-[400px] mx-auto m-1 rounded-lg text-xl font-bold bg-green-200 '>Marhamat ma'lumotingiz kiriting</h1>}
        {data.password == data.confirmPassword ?  <p className='text-green-700 p-4 w-[400px] mx-auto m-3 rounded-lg text-xl font-bold bg-green-300 '>Hammasi joyda, davom eting</p>  :  <p className=' text-red-700 p-4 rounded-lg text-xl font-bold bg-red-200 w-[400px] mx-auto m-3'>Parol xatoga o'xshaydi,  parolni qaytadan tering</p>  }
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
            <label className='p-3 bg-orange-300 m-3 rounded-lg  ' htmlFor="login"> Login</label>
            <input   onChange={onChangeFun} required className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600 ' id='login' type="text" placeholder="Login" value={data.login} name='login' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg mx-auto '>
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="password">Password</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600 ' required type="password" id='password' placeholder="Password" value={data.password} name='password' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600 ' required type="password" id='confirmPassword' placeholder="Confirm Password" value={data.confirmPassword} name='confirmPassword' />
          </div>
          <div className='w-[500px] mx-auto '>
            <button onClick={handleClik }
              disabled={disable} className='p-3 bg-amber-300 rounded-lg ' type='submit'> Keyingisi</button>
          </div>
        </form>
      </div>
   
      
   </>
  )
}else if (step == 2) {
  return (
    
    
    <>
      <div>
        <h1 className='text-2xl mb-10'>Setp - {step}</h1>
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
        
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="narxi">Narxni Tanlash</label>

<select   id="subscription" className='w-full p-4 bg-orange-100 rounded-lg  '  name="subscription" >

  <option onChange={onChangeFun} required className='w-full p-4 bg-orange-300 rounded-lg  ' value={data.subscription}  name='subscription'   >Oylik</option>
  <option onChange={onChangeFun} required className='w-full p-4   bg-orange-300 rounded-lg  ' value={data.subscription}  name='subscription'>Yillik</option>
  <option onChange={onChangeFun} required className='w-full p-4 bg-orange-300 rounded-lg  ' value={data.subscription}  name='subscription'>Kunlik</option>
</select>
              
          </div>
          

          <div className='w-[500px] mx-auto flex justify-center gap-2 '> 
            <button onClick={handleClikDec }  className='p-3  bg-amber-300 rounded-lg '>Ortga</button>
            <button onClick={handleClik } className='p-3  bg-amber-300 rounded-lg '>Keyingisi</button>
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
        <h1 className='text-2xl mb-10'>Setp - {step}</h1>
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="lastName"> Last name</label>
            <input onChange={onChangeFun} required className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600  ' id='lastName' type="text" placeholder="Last name" value={data.lastName} name='lastName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg mx-auto '>
          <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="fristName">Frist name</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600  ' required type="text" id='fristName' placeholder="Frist name" value={data.fristName} name='fristName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="middleName">Middle Name</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600   ' required type="text" id='middleName' placeholder="Middle Name" value={data.middleName} name='middleName' />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 rounded-lg  bg-orange-300 m-3' htmlFor="email">Email</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-orange-100 rounded-lg placeholder:text-orange-600   ' required type="email" id='email' placeholder="Email" value={data.email} name='email' />
          </div>

          <div className='w-[500px] mx-auto '>
            <button onClick={handleClik } className='p-3 bg-amber-300 rounded-lg '>Yuborish</button>
          </div>
        </form>
      </div>
   
   </>
  )
}
else{
return(
<>
<div className="flex flex-col gap-2 text-start mx-auto">
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Login:</span> {data.login}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Password:</span> {data.password}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Confirm Password:</span>{data.confirmPassword}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Last Name:</span> {data.lastName}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Frist Name:</span> {data.fristName}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Subscription:</span> {data.subscription}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Middle Name:</span> {data.middleName}</p>
<p className='text-orange-500 text-xl font-bold'><span className='text-2xl mr-2 text-blue-600 font-medium'>Email:</span> {data.email}</p>
</div>

</>
)
}
}

export default App
