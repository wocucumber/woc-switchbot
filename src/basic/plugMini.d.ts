import { CommandResponse, SwitchbotBasic } from "../core.js";
import { PlugMiniStatus } from "../status.js";

declare class PlugMini extends SwitchbotBasic {
  setPower(power: boolean): Promise<CommandResponse>
  turnOn(): Promise<CommandResponse>
  turnOff(): Promise<CommandResponse>
  toggle(): Promise<CommandResponse>
  
  getStatus(): Promise<PlugMiniStatus>
}

export default PlugMini;