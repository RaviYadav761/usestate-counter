import React, { useState } from 'react'

const App = () => {

let [count , setcount] = useState(0);

  function incrementnum(){
   setcount(count+1);
  console.log({count});
}
function decrementnum(){
   setcount(count-1);
  console.log({count});

}


  return (


    <div className='w-[400px] h-[500px] text-white mx-auto
     flex flex-col items-center justify-center
      bg-black'>
      <h1 className='border mb-7 px-22 py-3 bg-green-500'>{count}</h1>
      <div className='flex gap-4'>
      <div className='border p-2 bg-green-500' onClick={incrementnum}>increment</div>
      <div className='border p-2 bg-green-500' onClick={decrementnum}>decrement</div>
    </div>
    </div>
  )
}

export default App