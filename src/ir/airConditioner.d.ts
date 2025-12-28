import { CommandResponse, IR_Base } from "../core.js";


export enum AIR_CONDITIONER_MODE {
  AUTO = 1,
  COOL = 2,
  DRY  = 3,
  FAN  = 4,
  HEAT = 5
}
export enum AIR_CONDITIONER_FAN_SPEED {
  AUTO  = 1,
  LOW   = 2,
  MEDIUM= 3,
  HIGH  = 4
}
export enum AIR_CONDITIONER_POWER {
  ON  = "on",
  OFF = "off"
}

declare class IR_AirConditioner extends IR_Base {
  static get MODE(): typeof AIR_CONDITIONER_MODE;
  static get FAN_SPEED(): typeof AIR_CONDITIONER_FAN_SPEED;
  static get POWER(): typeof AIR_CONDITIONER_POWER;

  set({temperature, mode, fanSpeed, power}: {temperature?: number, mode: AIR_CONDITIONER_MODE, fanSpeed: AIR_CONDITIONER_FAN_SPEED, power: AIR_CONDITIONER_POWER}): Promise<CommandResponse>;
  stop(): Promise<CommandResponse>;
}

export default IR_AirConditioner;