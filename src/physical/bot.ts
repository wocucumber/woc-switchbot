import { SwitchbotBasic } from "../core.js";
import type { BotStatus } from "../status.js";

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

  getStatus(): Promise<BotStatus> {
    return super.getStatus();
  }
}