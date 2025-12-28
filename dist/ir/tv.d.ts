import { IR_Base, type IR_CommandResponse } from "../core.js";
export default class TV extends IR_Base {
    /**If your TV remote controller has only power button, you should use this.  */
    togglePower(): Promise<IR_CommandResponse>;
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOn(): Promise<IR_CommandResponse>;
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOff(): Promise<IR_CommandResponse>;
    setChannel(channel: number): Promise<IR_CommandResponse>;
    volumeAdd(): Promise<IR_CommandResponse>;
    volumeDown(): Promise<IR_CommandResponse>;
    channelAdd(): Promise<IR_CommandResponse>;
    channelDown(): Promise<IR_CommandResponse>;
}
//# sourceMappingURL=tv.d.ts.map