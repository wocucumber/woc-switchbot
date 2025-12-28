import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { BotStatus } from "../status.js";
export default class Bot extends SwitchbotBasic {
    turnOn(): Promise<CommandResponse>;
    turnOff(): Promise<CommandResponse>;
    press(): Promise<CommandResponse>;
    getStatus(): Promise<BotStatus>;
}
//# sourceMappingURL=bot.d.ts.map