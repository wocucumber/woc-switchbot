import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { PlugMiniStatus } from "../status.js";
export default class PlugMini extends SwitchbotBasic {
    turnOn(): Promise<CommandResponse>;
    turnOff(): Promise<CommandResponse>;
    toggle(): Promise<CommandResponse>;
    getStatus(): Promise<PlugMiniStatus>;
}
//# sourceMappingURL=plugMini.d.ts.map