import { useEffect, useState } from "react";

function stopwatch(){
    const [ time ,setTime]=useState(0)
    const [isRunning, setIsRunning] = useState("stop");

    useEffect(() => {
        let interval:any;
        if(isRunning==="start"){
            console.log("start detected");
            interval=setInterval(() => {
                setTime((prevTime)=>{
                    return prevTime+10;
                })
            }, 10);
        }
        else if(isRunning==="stop"){
            console.log("stop detected");
            setTime(0);

        }
        return ()=>clearInterval(interval);

    }, [isRunning]);
 

    return (
        <>
            <h1 className="underline text-5xl text-center">Stopwatch</h1>
            <h1 className="text-center text-6xl bg-amber-100">{("0"+Math.floor((time/360000)%60)).slice(-2)}:{("0"+Math.floor((time/60000)%60)).slice(-2)}:{("0"+Math.floor((time/1000)%60)).slice(-2)}:{("0"+Math.floor((time/10)%100)).slice(-2)}</h1>
            <div className="flex justify-center">{isRunning!="start"&&<button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning("start")}>Start</button>}
            {isRunning=="start" &&<div><button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning("stop")}>Stop</button> <button className="bg-green-400 w-24 h-12 rounded-lg text-2xl m-2" onClick={()=>setIsRunning("pause")}>Pause</button></div>}</div>
        </>
        )
}
export default stopwatch;   