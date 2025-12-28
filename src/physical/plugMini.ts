import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { PlugMiniStatus } from "../status.js";

export default class PlugMini extends SwitchbotBasic {
  turnOn(): Promise<CommandResponse> {
    return this._sendCommand("turnOn");
  }
  turnOff(): Promise<CommandResponse> {
    return this._sendCommand("turnOff");
  }
  toggle(): Promise<CommandResponse> {
    return this._sendCommand("toggle");
  }

  getStatus(): Promise<PlugMiniStatus> {
    return super.getStatus();
  }
}