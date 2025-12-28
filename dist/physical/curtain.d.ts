import { SwitchbotBasic } from "../core.js";
import type { Curtain3Status, CurtainStatus } from "../status.js";
declare enum CURTAIN_MODE {
    PerformanceMode = "0",
    SilentMode = "1",
    DefaultMode = "ff"
}
interface PositionArgument {
    index?: number;
    mode?: CURTAIN_MODE;
    /**0 means open, 100 means closed */
    position: number;
}
declare class CurtainBase extends SwitchbotBasic {
    static get MODE(): typeof CURTAIN_MODE;
    setPosition({ index, mode, position }: PositionArgument): Promise<import("../core.js").ResponseBase>;
    /**equivalent to set position to 0 */
    turnOn(): Promise<import("../core.js").ResponseBase>;
    /**equivalent to set position to 100 */
    turnOff(): Promise<import("../core.js").ResponseBase>;
    pause(): Promise<import("../core.js").ResponseBase>;
}
export declare class Curtain extends CurtainBase {
    getStatus(): Promise<CurtainStatus>;
}
export declare class Curtain3 extends CurtainBase {
    getStatus(): Promise<Curtain3Status>;
}
export {};
//# sourceMappingURL=curtain.d.ts.map