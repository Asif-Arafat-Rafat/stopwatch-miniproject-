import { useState } from "react";
import Stopwatch from "./stopwatch";
import Timer from "./timer";
import Alarm from "./alarm";
 
function App() {
  const [ctype, setCtype] = useState("stopwatch");
  return (
    <>
    
      {ctype!="stopwatch" &&<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setCtype("stopwatch")} >Stopwatch</button>}
      {ctype!="timer" &&<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setCtype("timer")}>Timer</button>}
      {ctype!="alarm" &&<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setCtype("alarm")}>Alarm</button>}

      {ctype==="stopwatch" && <Stopwatch/>}
      {ctype==="timer" && <Timer/>}
      {ctype==="alarm" && <Alarm/>}
    </>
  )
}

export default App
