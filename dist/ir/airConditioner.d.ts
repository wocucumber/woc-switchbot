import { IR_Base, type IR_CommandResponse } from "../core.js";
declare enum AIR_CONDITIONER_MODE {
    AUTO = 1,
    COOL = 2,
    DRY = 3,
    FAN = 4,
    HEAT = 5
}
declare enum AIR_CONDITIONER_FAN_SPEED {
    AUTO = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4
}
declare enum AIR_CONDITIONER_POWER {
    ON = "on",
    OFF = "off"
}
interface SetArgment {
    temperature: number;
    mode: AIR_CONDITIONER_MODE;
    fanSpeed?: AIR_CONDITIONER_FAN_SPEED;
    power?: AIR_CONDITIONER_POWER;
}
export default class AirConditioner extends IR_Base {
    static get MODE(): typeof AIR_CONDITIONER_MODE;
    static get FAN_SPEED(): typeof AIR_CONDITIONER_FAN_SPEED;
    static get POWER(): typeof AIR_CONDITIONER_POWER;
    set({ temperature, mode, fanSpeed, power }: SetArgment): Promise<IR_CommandResponse>;
    stop(): Promise<IR_CommandResponse>;
}
export {};
//# sourceMappingURL=airConditioner.d.ts.map