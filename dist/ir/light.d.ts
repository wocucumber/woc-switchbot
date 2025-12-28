import { IR_Base, type IR_CommandResponse } from "../core.js";
export default class Light extends IR_Base {
    turnOn(): Promise<IR_CommandResponse>;
    turnOff(): Promise<IR_CommandResponse>;
    upBrightness(): Promise<IR_CommandResponse>;
    downBrightness(): Promise<IR_CommandResponse>;
}
//# sourceMappingURL=light.d.ts.map