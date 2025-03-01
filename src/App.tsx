import { useState } from "react";

 
function App() {
  const [hour,setHour]=useState(0);
  const [min,setMin]=useState(0);
const [msec,setMsec]=useState(0);
const [sec,setSec]=useState(0);
  function startSW(){
    setInterval(()=>{
      setMsec((prevMsec)=>prevMsec+1);
      if( msec===100){
        setSec(sec+1);
        setMsec(0);
      }
      if(sec===60){
        setMin(min+1);
        setSec(0);
      }
      if(min===60){
        setHour(hour+1);
        setMin(0);
      }
    },10)
  }
  return (
    <>
      <h1 className="underline text-5xl text-center">Stopwatch</h1>
      <h1 className="text-center text-6xl bg-amber-100">{hour===0?"00": hour}:{min===0?"00":min}:{sec===0?"00":sec}:{msec%100}</h1>
      <div className="flex justify-center"><button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={startSW}>Start</button></div>
    </>
  )
}

export default App
