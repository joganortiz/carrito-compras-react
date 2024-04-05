import { ReactNode } from "react";
import { toast } from "react-toastify";

export const notifyToast = (Type: "success" | "info" | "warn" | "error", text: ReactNode, id: string) => {
    const config = {
        theme: "light",
        toastId: id,
    }

    switch (Type) {
        case "success":
            toast.success(text, config);
        break;
        case "info":
            toast.info(text,config)
        break;
        case "warn":
            toast.warn(text,config)
        break;
        case "error":
            toast.error(text,config)
        break;
        default:
            throw new Error("No se reconoce el tipo de notificación");
        break;
    }
};

export const closeAllToasts = () => toast.dismiss()