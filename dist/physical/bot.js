import { SwitchbotBasic } from "../core.js";
export default class Bot extends SwitchbotBasic {
    turnOn() {
        return this._sendCommand("turnOn");
    }
    turnOff() {
        return this._sendCommand("turnOff");
    }
    press() {
        return this._sendCommand("press");
    }
    getStatus() {
        return super.getStatus();
    }
}
