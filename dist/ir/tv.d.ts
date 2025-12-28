import { IR_Base } from "../core.js";
export default class TV extends IR_Base {
    /**If your TV remote controller has only power button, you should use this.  */
    togglePower(): Promise<import("../core.js").ResponseBase>;
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOn(): Promise<import("../core.js").ResponseBase>;
    /**If your TV remote controller has only power button, you should use this.togglePower. */
    turnOff(): Promise<import("../core.js").ResponseBase>;
    setChannel(channel: number): Promise<import("../core.js").ResponseBase>;
    volumeAdd(): Promise<import("../core.js").ResponseBase>;
    volumeDown(): Promise<import("../core.js").ResponseBase>;
    channelAdd(): Promise<import("../core.js").ResponseBase>;
    channelDown(): Promise<import("../core.js").ResponseBase>;
}
//# sourceMappingURL=tv.d.ts.map