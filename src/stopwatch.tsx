import { useEffect, useState } from "react";

function stopwatch(){
    const [ time ,setTime]=useState(0)
    const [isRunning, setIsRunning] = useState("stop");
    const [lap,setLap]=useState<number[]>([])
    const addLap=()=>{
        setLap((prevLap:number[])=>{
            return [...prevLap,time]})
    }
    const removelap=(index:number)=>{
        setLap((prevLap) => prevLap.filter((_, i) => i !== index));

    }
    
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
        <><div className="flex justify-center">
            <div className="border-6 w-2xl border-y-zinc-400 border-x-yellow-900 rounded-4xl p-10">
                    <h1 className=" pb-10 text-white text-5xl text-center">Stopwatch</h1>
                    <div className="flex justify-center items-center gap-3">
                        <h1 className="text-center text-6xl text-white pb-10">{("0"+Math.floor((time/360000)%60)).slice(-2)}:{("0"+Math.floor((time/60000)%60)).slice(-2)}:{("0"+Math.floor((time/1000)%60)).slice(-2)}</h1><h1 className="text-white text-4xl">{("0"+Math.floor((time/10)%100)).slice(-2)}</h1>
                    </div>
                    <div className="flex justify-center">{isRunning!="start"&&<button className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3" onClick={()=>setIsRunning("start")}>Start</button>}
                    {isRunning=="start" &&<div> <button className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3" onClick={()=>setIsRunning("pause")}>Pause</button><button className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3" onClick={()=>setIsRunning("stop")}>Stop</button> <button onClick={addLap} className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3">Lap</button>
                    </div>}
                    {isRunning=="pause" &&<div><button className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3" onClick={()=>setIsRunning("stop")}>Stop</button><button onClick={addLap} className="bg-green-400 rounded-lg text-2xl m-2 px-10 py-3">Lap</button></div>}
                    </div>
            <div >
                {lap.map((l,index)=>{
                    return <div className="flex justify-center items-end gap-3" key={index}><p className="text-4xl text-white">{("0"+Math.floor(l/360000)%60).slice(-2)}:{("0"+Math.floor(l/60000)%60).slice(-2)}:{("0"+Math.floor(l/1000)%60).slice(-2)}</p><p className="text-2xl text-white">{("0"+Math.floor(l/10)%100).slice(-2)}</p> <button className="text-white" onClick={()=>removelap(index)}>X</button></div>
                })}
            </div>
        </div>
        </div></>
        )
}
export default stopwatch;   