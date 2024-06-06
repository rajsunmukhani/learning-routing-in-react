import React from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    navigate('/');
  };

  return (
    <div>
      Users

      <form onSubmit={submitHandler} className='mt-10 ml-5'>
        <h1>Enter your name below :</h1>
        <input className='h-8 px-3 w-18 rounded-full bg-zinc-200' type="text"/>
        <br />
        <br />
        <input type="submit" className='bg-red-800 px-5 py-2 rounded-full text-zinc-100' value="submit" />
      </form>

    </div>
  )
}

export default Users