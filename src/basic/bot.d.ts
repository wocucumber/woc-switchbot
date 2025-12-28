import { CommandResponse, SwitchbotBasic } from "../core.js";
import { BotStatus } from "../status.js";

declare class Bot extends SwitchbotBasic {
  setPower(power: boolean): Promise<CommandResponse>
  turnOn(): Promise<CommandResponse>
  turnOff(): Promise<CommandResponse>
  press(): Promise<CommandResponse>
  
  getStatus(): Promise<BotStatus>
}

export default Bot;