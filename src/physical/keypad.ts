import { SwitchbotBasic } from "../core.js";
import type { KeypadStatus, KeypadTouchStatus } from "../status.js";

export class Keypad extends SwitchbotBasic {
  getStatus(): Promise<KeypadStatus> {
    return super.getStatus();
  }
}

export class KeypadTouch extends SwitchbotBasic {
  getStatus(): Promise<KeypadTouchStatus> {
    return super.getStatus();
  }
}