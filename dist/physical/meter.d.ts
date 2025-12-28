import { SwitchbotBasic } from "../core.js";
import type { MeterPlusStatus, MeterProCO2Status, MeterProStatus, MeterStatus, OutdoorMeterStatus } from "../status.js";
export declare class Meter extends SwitchbotBasic {
    getStatus(): Promise<MeterStatus>;
}
export declare class MeterPlus extends SwitchbotBasic {
    getStatus(): Promise<MeterPlusStatus>;
}
export declare class OutdoorMeter extends SwitchbotBasic {
    getStatus(): Promise<OutdoorMeterStatus>;
}
export declare class MeterPro extends SwitchbotBasic {
    getStatus(): Promise<MeterProStatus>;
}
export declare class MeterProCO2 extends SwitchbotBasic {
    getStatus(): Promise<MeterProCO2Status>;
}
//# sourceMappingURL=meter.d.ts.map