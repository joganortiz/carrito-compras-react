import { useEffect, useState } from "react";
import { notifyToast } from "../helpers/toast";

export const useApp = () => {
    

    const initialIsReducer = () : boolean => {
        const localStorageCart = localStorage.getItem('isReducer')
        return localStorageCart ? JSON.parse(localStorageCart) : false
    }

    const [isReducer, setIsReducer] = useState(initialIsReducer);

    const handleChange = () => {
        notifyToast("success", "Se modifico a <b>" + (isReducer ? "By UseHook" : "By Reducer") +"</b>", "customId");
        setIsReducer(!isReducer);
        localStorage.setItem('isReducer', JSON.stringify(!isReducer));

    }
    
    useEffect(() => {
        localStorage.setItem('isReducer', JSON.stringify(isReducer))
    }, [isReducer]);

    return {isReducer, handleChange}

}