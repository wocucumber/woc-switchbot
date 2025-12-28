import { SwitchbotBasic } from "../core.js";
import type { PlugMiniStatus } from "../status.js";
export default class PlugMini extends SwitchbotBasic {
    turnOn(): Promise<import("../core.js").ResponseBase>;
    turnOff(): Promise<import("../core.js").ResponseBase>;
    toggle(): Promise<import("../core.js").ResponseBase>;
    getStatus(): Promise<PlugMiniStatus>;
}
//# sourceMappingURL=plugMini.d.ts.map