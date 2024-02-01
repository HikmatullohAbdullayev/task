import React from 'react';
import { useState } from 'react';
import { preview } from 'vite';

const [step, setStep] = useState[1]

function Setep1(data) {

function  onChangeFun (event)  {
    console.log(event.target.value);

}

const handleClik = (e) => {
    e.preventDefault()

}


console.log(data);
    return (
      <div>
        <h1 className='text-2xl mb-10'>Setp -1</h1>
        <form className="w-[800px] container mx-auto grid gap-2  ">
          <div className='w-[500px]  flex flex-col text-start mx-auto '>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="login"> Login</label>
            <input onChange={onChangeFun} required className='w-full p-4 bg-gray-300 rounded-lg  ' id='login' type="text" placeholder="login" />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg mx-auto '>
            <label className='p-2 rounded-lg  bg-slate-600' htmlFor="password">Password</label>
            <input onChange={onChangeFun} className='w-full p-4 rounded-lg  bg-gray-300 ' required type="password" id='password' placeholder="password" />
          </div>
          <div className='w-[500px]  flex flex-col text-start rounded-lg  mx-auto'>
            <label className='p-2 bg-slate-600 rounded-lg ' htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChangeFun} className='w-full p-4 bg-gray-300 rounded-lg  ' required type="password" id='confirmPassword' placeholder="password" />
          </div>

          <div className='w-[500px] mx-auto '>
            <button onClick={handleClik } className='p-3 bg-amber-300 rounded-lg '>Send</button>
          </div>
        </form>
      </div>
    );
}

export default Setep1;