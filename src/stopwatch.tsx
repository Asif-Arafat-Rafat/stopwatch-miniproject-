import { useEffect, useState } from "react";

function stopwatch(){
    const [ time ,setTime]=useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval:any;
        if(isRunning){
            interval=setInterval(() => {
                setTime((prevTime)=>{
                    return prevTime+10;
                })
            }, 10);
        }
        else if(!isRunning){
            setTime(0);
            return ()=>clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);
 

    return (
        <>
            <h1 className="underline text-5xl text-center">Stopwatch</h1>
            <h1 className="text-center text-6xl bg-amber-100">{("0"+Math.floor((time/360000)%60)).slice(-2)}:{("0"+Math.floor((time/60000)%60)).slice(-2)}:{("0"+Math.floor((time/1000)%60)).slice(-2)}:{("0"+Math.floor((time/10)%100)).slice(-2)}</h1>
            <div className="flex justify-center">{!isRunning&&<button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning(true)}>Start</button>}
            {isRunning&&<div><button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning(false)}>Stop</button> <button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning(false)}>Pause</button></div>}</div>
        </>
        )
}
export default stopwatch;   