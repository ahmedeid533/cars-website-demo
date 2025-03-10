import { makeNotification } from "./makeNotification";

const displayErrorMessages = (data: Record<string, string[]>) => {
    Object.keys(data).forEach((key) => {
        const messages = data[key];
        messages.forEach((message) => {
            makeNotification('error', message);
        });
    });
};

export default displayErrorMessages;