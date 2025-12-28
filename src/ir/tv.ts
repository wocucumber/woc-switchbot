import { IR_Base, type IR_CommandResponse } from "../core.js";

export default class TV extends IR_Base {
  /**If your TV remote controller has only power button, you should use this.  */
  togglePower(): Promise<IR_CommandResponse> {
    return this.turnOn();
  }
  /**If your TV remote controller has only power button, you should use this.togglePower. */
  turnOn(): Promise<IR_CommandResponse> {
    return this._sendCommand("turnOn");
  }
  /**If your TV remote controller has only power button, you should use this.togglePower. */
  turnOff(): Promise<IR_CommandResponse> {
    return this._sendCommand("turnOff");
  }

  setChannel(channel: number): Promise<IR_CommandResponse> {
    return this._sendCommand({
      command: "SetChannel",
      parameter: channel
    });
  }

  volumeAdd(): Promise<IR_CommandResponse> {
    return this._sendCommand("volumeAdd");
  }
  volumeDown(): Promise<IR_CommandResponse> {
    return this._sendCommand("volumeSub");
  }
  channelAdd(): Promise<IR_CommandResponse> {
    return this._sendCommand("channelAdd");
  }
  channelDown(): Promise<IR_CommandResponse> {
    return this._sendCommand("channelSub");
  }
}