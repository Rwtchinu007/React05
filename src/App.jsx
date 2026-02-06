import React, { useState } from "react";

const App = () => {
  // const arr = ["Chinmay", "Satyarth", "Shivam", "Rohit", "Satyarth"];
  const [Marks, setMarks] = useState([90, 80, 70, 60, 28]);

  function change() {
    if (num === arr.length - 1) {
      setnum(0);
    } else {
      setnum(num + 1);
    }
  }

function giveGrace(){
  const newMarks = Marks.map(function(elem){
    if (elem <33){
      return elem + 5;
    }
    else return elem;
  })
  setMarks(newMarks);
}

  const [num, setnum] = useState(0);
  return (
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center gap-5">
      {Marks.map(function (elem, index) {
        return (
          <h1 className="text-3xl text-white font-semibold" key={index}>
            Student {index + 1} got {elem} marks {elem <33? "[Fail]":"[Pass]"}
          </h1>
        );
      })}
      <button
        onClick={giveGrace}
        className="active:scale-95 bg-emerald-300 duration-200 ease-in px-5 py-3 mt-5 rounded-2xl font-medium text-1xl"
      >
        Give them Grace
      </button>
      {/* <h1 className=" font-bold underline text-9xl text-center text-blue-600">
        {arr[num]}
      </h1> */}
      {/* <button onClick={change} className='bg-amber-300 duration-200 ease-in px-5 py-3 mt-5 rounded-2xl font-medium text-1xl'>Change</button> */}
    </div>
  );
};

export default App;
