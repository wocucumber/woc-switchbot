import { IR_Base } from "../core.js";
export default class TV extends IR_Base {
    /**If your TV remote controller has only power button, you should use this.  */
    togglePower() {
        return this.turnOn();
    }
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOn() {
        return this._sendCommand("turnOn");
    }
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOff() {
        return this._sendCommand("turnOff");
    }
    setChannel(channel) {
        return this._sendCommand({
            command: "SetChannel",
            parameter: channel
        });
    }
    volumeAdd() {
        return this._sendCommand("volumeAdd");
    }
    volumeDown() {
        return this._sendCommand("volumeSub");
    }
    channelAdd() {
        return this._sendCommand("channelAdd");
    }
    channelDown() {
        return this._sendCommand("channelSub");
    }
}
