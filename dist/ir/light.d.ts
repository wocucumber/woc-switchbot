import { IR_Base } from "../core.js";
export default class Light extends IR_Base {
    turnOn(): Promise<import("../core.js").ResponseBase>;
    turnOff(): Promise<import("../core.js").ResponseBase>;
    upBrightness(): Promise<import("../core.js").ResponseBase>;
    downBrightness(): Promise<import("../core.js").ResponseBase>;
}
//# sourceMappingURL=light.d.ts.map