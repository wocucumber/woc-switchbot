import { SwitchbotBasic } from "../core.js";
import type { LockProStatus, LockStatus, LockUltraStatus } from "../status.js";
declare class LockBase extends SwitchbotBasic {
    lock(): Promise<import("../core.js").ResponseBase>;
    unlock(): Promise<import("../core.js").ResponseBase>;
    /**disengage deadbolt or latch */
    deadbolt(): Promise<import("../core.js").ResponseBase>;
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