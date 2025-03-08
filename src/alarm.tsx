import { useEffect, useState } from "react";

function Alarm() {
    const date = new Date();
    const [hours,setHours] = useState(date.getHours());
    const [minutes,setMinutes] = useState(date.getMinutes());
    const [seconds,setSeconds] = useState(date.getSeconds());
    useEffect(()=>{
        let interval=setInterval(()=>{
            const date = new Date();
            setHours( date.getHours() );
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        },1000)
        return ()=>clearInterval(interval);
    },[])
    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-white text-4xl">{(hours%12)==0? 12 : ("0"+(hours%12)).slice(-2)}:{("0"+minutes).slice(-2)}:{("0"+seconds).slice(-2)}{ (hours>=12) ? " PM":" AM"}</h1>
            </div>
        </>
    )
} 
export default Alarm    