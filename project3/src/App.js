import { useState } from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
//let count=0;
const [count,setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1);

  }
  
  function increaseHandler(){
    setCount(count+1);

  }
  function resetHandler(){
    setCount(0);
  }
  return (
    
    <div className='w-[100vw] h-[100vh] flex justify-centre items-center bg-[#344151] flex-col gap-10 py-9'>
      <div className='text-[#0398d4] font-medium '>Increment & Decrement</div>
      <div className='flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
      <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
        -
      </button>
      <div className='font-bold gap-12 text-5xl'>
      {count}
      </div>
      <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
        +
      </button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
    </div>
  );
}

export default App;
