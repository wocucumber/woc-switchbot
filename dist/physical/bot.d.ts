import { SwitchbotBasic } from "../core.js";
import type { BotStatus } from "../status.js";
export default class Bot extends SwitchbotBasic {
    turnOn(): Promise<import("../core.js").ResponseBase>;
    turnOff(): Promise<import("../core.js").ResponseBase>;
    press(): Promise<import("../core.js").ResponseBase>;
    getStatus(): Promise<BotStatus>;
}
//# sourceMappingURL=bot.d.ts.map