import { useEffect, useState } from "react";
import { notify } from "../helpers/toast";

export const useApp = () => {
    

    const initialIsReducer = () : boolean => {
        const localStorageCart = localStorage.getItem('isReducer')
        return localStorageCart ? JSON.parse(localStorageCart) : false
    }

    const [isReducer, setIsReducer] = useState(initialIsReducer);

    const handleChange = () => {
        setIsReducer(!isReducer);
        localStorage.setItem('isReducer', JSON.stringify(!isReducer));

        notify("Se modifico a " + (isReducer ? "By UseHook" : "By Reducer"), "customId");
    }
    
    useEffect(() => {
        localStorage.setItem('isReducer', JSON.stringify(isReducer))
    }, [isReducer]);

    return {isReducer, handleChange}

}