import { SwitchbotBasic } from "../core.js";
import type { KeypadStatus, KeypadTouchStatus } from "../status.js";
export declare class Keypad extends SwitchbotBasic {
    getStatus(): Promise<KeypadStatus>;
}
export declare class KeypadTouch extends SwitchbotBasic {
    getStatus(): Promise<KeypadTouchStatus>;
}
//# sourceMappingURL=keypad.d.ts.map