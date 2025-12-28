import { CommandResponse, IR_Base } from "../core.js";

declare class IR_Light extends IR_Base {
  setPower(power: boolean): Promise<CommandResponse>
  turnOn(): Promise<CommandResponse>
  turnOff(): Promise<CommandResponse>
  upBrightness(): Promise<CommandResponse>
  downBrightness(): Promise<CommandResponse>
}

export default IR_Light;