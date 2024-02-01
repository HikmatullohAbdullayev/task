import React from 'react';

function Setep1(props) {
    return (
      <div>
        <h1 className='text-2xl'>Setp -1</h1>
        <form className="w-[800px] container mx-auto ">
          <div className='w-[500px]  flex flex-col  '>
            <label className='' htmlFor="login"> Login</label>
            <input required className='w-full block' id='login' type="text" placeholder="login" />
          </div>
          <div className='w-[500px] mx-auto '>
            <label htmlFor="password">Password</label>
            <input required type="password" id='password' placeholder="password" />
          </div>
          <div className='w-[500px] mx-auto '>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input required type="password" id='confirmPassword' placeholder="password" />
          </div>

          <div className='w-[500px] mx-auto '>
            <button className='p-3 bg-amber-300'>Send</button>
          </div>
        </form>
      </div>
    );
}

export default Setep1;