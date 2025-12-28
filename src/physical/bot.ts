import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { BotStatus } from "../status.js";

export default class Bot extends SwitchbotBasic {
  turnOn(): Promise<CommandResponse> {
    return this._sendCommand("turnOn");
  }
  turnOff(): Promise<CommandResponse> {
    return this._sendCommand("turnOff");
  }
  press(): Promise<CommandResponse> {
    return this._sendCommand("press");
  }

  getStatus(): Promise<BotStatus> {
    return super.getStatus();
  }
}