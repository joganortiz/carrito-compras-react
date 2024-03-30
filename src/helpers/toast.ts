import { toast } from "react-toastify";

export const notify = (text: string, id: string) => {
    try {
        toast.success(text,{
            toastId: id,
            theme: "colored",
        })
    } catch (error) {}
};