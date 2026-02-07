import React, { useState } from "react";
import Washroom from "./components/Washroom";

const App = () => {
  // const [num, setnum] = useState(0);
  // const arr = ["Chinmay", "Satyarth", "Shivam", "Rohit", "Satyarth"];
  // const [Marks, setMarks] = useState([90, 80, 70, 60, 28]);
  const [Gender, setGender] = useState("Male")

  function changeGender() {
    if(Gender === "Male") return setGender("Female")
      else if(Gender === "Female") return setGender("Other")
    else return setGender("Male")
  }

  return (
    <div className="bg-red-900 h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-6xl text-white font-bold">Your Gender is ~{Gender}</h1>
      <button onClick={changeGender} className="active:scale-90 bg-red-700 text-white px-4 py-2 text-1xl rounded-2xl font-medium">Change Gender</button>
      <Washroom user = {Gender} />
    </div>
  );
};

export default App;
