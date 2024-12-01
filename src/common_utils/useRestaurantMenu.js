import { RES_MENU_URL } from "../common_utils/constant";
import { useState, useEffect } from "react";

export const useRestaurantMenu = (resId) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    return ResInfo;
};

