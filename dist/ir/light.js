import { IR_Base } from "../core.js";
export default class Light extends IR_Base {
    turnOn() {
        return this._sendCommand("turnOn");
    }
    turnOff() {
        return this._sendCommand("turnOff");
    }
    upBrightness() {
        return this._sendCommand("brightnessUp");
    }
    downBrightness() {
        return this._sendCommand("brightnessDown");
    }
}
//# sourceMappingURL=light.js.map