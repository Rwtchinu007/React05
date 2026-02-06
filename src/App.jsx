import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function btnClickedPlus(){
    console.log("Button Clicked");
    setnum(num + 1)
  }
  function btnClickedMinus(){
    console.log("Button Clicked");
    setnum(num - 1)
  }
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center gap-5'>
      <h1 className=" font-bold underline text-9xl text-center text-blue-600">
        {num}
      </h1>

      <button onClick={btnClickedPlus} className='active:scale-95 ease-in-out duration-300 px-5 py-2 bg-emerald-500 rounded'>Increase</button>
      <button onClick={btnClickedMinus} className='active:scale-95 ease-in-out duration-300 px-5 py-2 bg-emerald-500 rounded'>Decrease</button>
      <div className="box w-40 h-40 bg-emerald-500 rounded-3xl"></div>
    </div>
  )
}

export default App