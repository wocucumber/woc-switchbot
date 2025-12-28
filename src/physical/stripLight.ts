import { SwitchbotBasic, type ResponseBase } from "../core.js";
import type { StripLightStatus } from "../status.js";

export default class StripLight extends SwitchbotBasic {
  turnOn() {
    return this._sendCommand("turnOn");
  }
  turnOff() {
    return this._sendCommand("turnOff");
  }
  toggle() {
    return this._sendCommand("toggle");
  }
  /**
   * 
   * @param brightness Range: 1~100
   */
  setBrightness(brightness: number) {
    const value = typeof brightness === "number" ? brightness : Number(brightness);
    if (isNaN(value)) throw new Error("Brightness must be number");
    if (value < 1 || value > 100) throw new Error("Brightness must be between 1 and 100.");

    return this._sendCommand({
      command: "setBrightness",
      parameter: value
    });
  }

  /**
   * 
   * @param color Must be '{0-255}:{0-255}:{0-255}'
   */
  setColor(color: string): Promise<ResponseBase>;
  /**
   * 
   * @param r Must be between 0 and 255
   * @param g Must be between 0 and 255
   * @param b Must be between 0 and 255
   */
  setColor(r: number, g: number, b: number): Promise<ResponseBase>;
  setColor(r: string | number, g?: number, b?: number): Promise<ResponseBase> {
    let parsedColor: number[] = [];
    if (typeof r === "string") {
      parsedColor = r.split(":").map(Number);
    } else if (typeof r === "number" && g !== undefined && b !== undefined) {
      parsedColor = [r, g, b];
    }

    if (parsedColor.length !== 3 ||
        parsedColor.some(e => isNaN(e) || e < 0 || e > 255)
    ) {
      if (typeof r === "string")
        throw new Error("Color must be '{0-255}:{0-255}:{0-255}'.");
      else
        throw new Error("r,g and b must be between 0 and 255.");
    }

    return this._sendCommand({
      command: "setColor",
      parameter: parsedColor.join(":")
    });
  }

  getStatus(): Promise<StripLightStatus> {
    return super.getStatus();
  }
}