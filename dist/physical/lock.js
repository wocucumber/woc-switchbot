import { SwitchbotBasic } from "../core.js";
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
    getStatus() {
        return super.getStatus();
    }
}
export class LockPro extends LockBase {
    getStatus() {
        return super.getStatus();
    }
}
export class LockUltra extends LockBase {
    getStatus() {
        return super.getStatus();
    }
}
//# sourceMappingURL=lock.js.map