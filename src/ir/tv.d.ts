import { CommandResponse, IR_Base } from "../core.js";

declare class IR_TV extends IR_Base {
  togglePower(): Promise<CommandResponse>
  setChannel(channel: number): Promise<CommandResponse>
  volumeUp(): Promise<CommandResponse>
  volumeDown(): Promise<CommandResponse>
}

export default IR_TV;