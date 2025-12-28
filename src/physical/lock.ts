import { SwitchbotBasic } from "../core.js";
import type { LockProStatus, LockStatus, LockUltraStatus } from "../status.js";

class LockBase extends SwitchbotBasic {
  lock() {
    return this._sendCommand("lock");
  }
  unlock() {
    return this._sendCommand("unlock");
  }
  /**disengage deadbolt or latch */
  deadbolt() {
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