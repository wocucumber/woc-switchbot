import { IR_Base, type IR_CommandResponse } from "../core.js";

export default class Light extends IR_Base {
  turnOn(): Promise<IR_CommandResponse> {
    return this._sendCommand("turnOn");
  }
  turnOff(): Promise<IR_CommandResponse> {
    return this._sendCommand("turnOff");
  }
  upBrightness(): Promise<IR_CommandResponse> {
    return this._sendCommand("brightnessUp");
  }
  downBrightness(): Promise<IR_CommandResponse> {
    return this._sendCommand("brightnessDown");
  }
}