import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { LockProStatus, LockStatus, LockUltraStatus } from "../status.js";

class LockBase extends SwitchbotBasic {
  lock(): Promise<CommandResponse> {
    return this._sendCommand("lock");
  }
  unlock(): Promise<CommandResponse> {
    return this._sendCommand("unlock");
  }
  /**disengage deadbolt or latch */
  deadbolt(): Promise<CommandResponse> {
    return this._sendCommand("deadbolt");
  }
}

export class Lock extends LockBase {
  getStatus(): Promise<LockStatus> {
    return super.getStatus();
  }
}
export class LockPro extends LockBase {
  getStatus(): Promise<LockProStatus> {
    return super.getStatus();
  }
}
export class LockUltra extends LockBase {
  getStatus(): Promise<LockUltraStatus> {
    return super.getStatus();
  }
}