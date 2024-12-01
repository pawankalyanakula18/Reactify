import { useState, useEffect } from "react";

export const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        check_status();

    },[]);

const check_status = () =>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    }
    //Boolean Value
    return onlineStatus;
};
