import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { LockProStatus, LockStatus, LockUltraStatus } from "../status.js";
declare class LockBase extends SwitchbotBasic {
    lock(): Promise<CommandResponse>;
    unlock(): Promise<CommandResponse>;
    /**disengage deadbolt or latch */
    deadbolt(): Promise<CommandResponse>;
}
export declare class Lock extends LockBase {
    getStatus(): Promise<LockStatus>;
}
export declare class LockPro extends LockBase {
    getStatus(): Promise<LockProStatus>;
}
export declare class LockUltra extends LockBase {
    getStatus(): Promise<LockUltraStatus>;
}
export {};
//# sourceMappingURL=lock.d.ts.map