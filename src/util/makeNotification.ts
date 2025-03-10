import { toast } from "react-toastify"

export function makeNotification(status: "success" | "error", message: string) {
    toast[status](message)
}