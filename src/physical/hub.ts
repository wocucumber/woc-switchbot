import { SwitchbotBasic } from "../core.js";
import type { Hub2Status, Hub3Status } from "../status.js";

export class Hub2 extends SwitchbotBasic {
  getStatus(): Promise<Hub2Status> {
    return super.getStatus();
  }
}

export class Hub3 extends SwitchbotBasic {
  getStatus(): Promise<Hub3Status> {
    return super.getStatus();
  }
}