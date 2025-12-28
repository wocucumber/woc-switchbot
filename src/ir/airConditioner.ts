import { IR_Base, type IR_CommandResponse } from "../core.js";


enum AIR_CONDITIONER_MODE {
  AUTO = 1,
  COOL = 2,
  DRY  = 3,
  FAN  = 4,
  HEAT = 5
}
enum AIR_CONDITIONER_FAN_SPEED {
  AUTO  = 1,
  LOW   = 2,
  MEDIUM= 3,
  HIGH  = 4
}
enum AIR_CONDITIONER_POWER {
  ON  = "on",
  OFF = "off"
}

interface SetArgment {
  temperature: number,
  mode: AIR_CONDITIONER_MODE,
  fanSpeed?: AIR_CONDITIONER_FAN_SPEED,
  power?: AIR_CONDITIONER_POWER
}

export default class AirConditioner extends IR_Base {
  static get MODE() {
    return AIR_CONDITIONER_MODE;
  }
  static get FAN_SPEED() {
    return AIR_CONDITIONER_FAN_SPEED;
  }
  static get POWER() {
    return AIR_CONDITIONER_POWER;
  }

  set({temperature, mode, fanSpeed=AirConditioner.FAN_SPEED.AUTO, power=AirConditioner.POWER.ON}: SetArgment): Promise<IR_CommandResponse> {
    return this._sendCommand({
      command: "setAll",
      parameter: temperature+","+mode+","+fanSpeed+","+power
    });
  }
  stop(): Promise<IR_CommandResponse> {
    return this.set({temperature: 20, mode: AirConditioner.MODE.HEAT, power: AirConditioner.POWER.OFF});
  }
}