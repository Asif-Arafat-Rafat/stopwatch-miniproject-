import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let interval:any;
  useEffect(()=>{
    if(time===0){
      setIsActive(false);
    }
    if (isActive){
      interval=setInterval(()=>{
        setTime((prevTime)=>{
          return prevTime - 10;
        }) 
      },10)
    }
    else{
      return clearInterval(interval)
    }
  },[isActive])
  return (
    <>        
    <div className="flex flex-col justify-center items-center gap-3 border-4 border-white rounded-lg p-10">
      <h1 className="text-5xl text-white font-bold">Timer Here</h1>
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col j w-25 gap-3 text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => {setTime(time + 1 * 60 * 60 * 1000);}}>+</button>
            <h1 className="text-5xl text-white font-bold text-center ">{("0" + Math.max(0,Math.floor((time / 3600000) % 60))).slice(-2)}</h1>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => {setTime(time - 1 * 60 * 60 * 1000);}}>-</button>
          </div>
          <h1 className="text-white text-4xl">:</h1>
          <div className="flex flex-col gap-3 w-25 text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => {setTime(time + 1 * 60 * 1000);}}>+</button>
            <h1 className="text-5xl text-white font-bold">{("0" + Math.max(0,Math.floor((time / 60000) % 60))).slice(-2)}</h1>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => {setTime(Math.max(0,time - 1 * 60 * 1000));}}>-</button>
          </div>
          <h1 className="text-white text-4xl">:</h1>
          <div className="flex flex-col gap-3 w-25 text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => {setTime(time + 1 * 1000);}}>+</button>
            <h1 className="text-5xl text-white font-bold">{("0" + Math.max(0,Math.floor((time / 1000) % 60))).slice(-2)}</h1>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-10 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={() => {setTime(time - 1 * 1000);}}>-</button>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-4xl" onClick={()=>{setIsActive(true)}}>Start</button>
    </div>

    </>
  );
}
export default Timer;
