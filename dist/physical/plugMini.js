import { SwitchbotBasic } from "../core.js";
export default class PlugMini extends SwitchbotBasic {
    turnOn() {
        return this._sendCommand("turnOn");
    }
    turnOff() {
        return this._sendCommand("turnOff");
    }
    toggle() {
        return this._sendCommand("toggle");
    }
    getStatus() {
        return super.getStatus();
    }
}
