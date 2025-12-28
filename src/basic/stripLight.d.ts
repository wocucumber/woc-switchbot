import { CommandResponse, SwitchbotBasic } from "../core.js";
import { StripLightStatus } from "../status.js";



declare class StripLight extends SwitchbotBasic {
  setPower(power: boolean): Promise<CommandResponse>
  turnOn(): Promise<CommandResponse>
  turnOff(): Promise<CommandResponse>
  toggle(): Promise<CommandResponse>
  setBrightness(brightness: number): Promise<CommandResponse>
  setColor(color: string): Promise<CommandResponse>
  
  getStatus(): Promise<StripLightStatus>
}

export default StripLight;