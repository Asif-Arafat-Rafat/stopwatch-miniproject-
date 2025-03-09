import { useState } from "react";
import Stopwatch from "./stopwatch";
import Timer from "./timer";
  
function App() {
  const [ctype, setCtype] = useState("stopwatch");
  return (
    <>
        <div className="flex justify-center items-center flex-col gap-10">
          {ctype!="stopwatch" &&<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setCtype("stopwatch")} >Stopwatch</button>}
          {ctype!="timer" &&<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setCtype("timer")}>Timer</button>}
        </div>
        {ctype==="stopwatch" && <Stopwatch/>}
        {ctype==="timer" && <Timer/>}
    </>
  )
}

export default App
