import { CommandResponse, SwitchbotBasic } from "../core";
import { CurtainStatus, Curtain3Status } from "../status";

export enum CURTAIN_MODE {
  PerformanceMode = "0",
  SilentMode      = "1",
  DefaultMode     = "ff"
}
interface PositionArgument {
  index?: number,
  mode?: CURTAIN_MODE,
  /**0 means open, 100 means closed */
  position: number
}

declare class CurtainBase extends SwitchbotBasic {
  static get MODE(): typeof CURTAIN_MODE

  setPosition({index, mode, position}: PositionArgument): Promise<CommandResponse>;

  setPower(power: boolean): Promise<CommandResponse>;

  /**equivalent to set position to 0 */
  turnOn(): Promise<CommandResponse>

  /**equivalent to set position to 100 */
  turnOff(): Promise<CommandResponse>

  /**set to PAUSE state */
  pause(): Promise<CommandResponse>
}

declare class Curtain extends CurtainBase {
  getStatus(): Promise<CurtainStatus>
}
declare class Curtain3 extends CurtainBase {
  getStatus(): Promise<Curtain3Status>
}

export { Curtain, Curtain3 };