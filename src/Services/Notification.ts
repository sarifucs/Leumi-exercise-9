import { Notyf } from "notyf";

export enum SccMsg {
    ADDED_TODO = 'Added todo successfully',
}
export enum ErrMsg {
    ADDED_TODO = 'Added todo went wrong',
}

class Notify {
    private notification = new Notyf({ duration: 5000, position: { x: "center", y: "top" } });

    public success(message: string) {
        const msg = this.extractMsg(message);
        this.notification.success(msg);
    }

    public error(message: string) {
        const msg = this.extractMsg(message);
        this.notification.error(msg);
    }

    private extractMsg(err: any): string {

        if (typeof err === 'string') {
            return err;
        }

        if (typeof err?.response?.data === 'string') { //Backend exact error
            return err.response.data;
        }

        if (Array.isArray(err?.response?.data)) { // Backend exact error list
            return err?.response?.data[0];
        }

        // Must be last
        if (typeof err?.message === 'string') {
            return err.message;
        }

        return "An error occurred, please try again.";


    }
}

const notify = new Notify();
export default notify;