import { SwitchbotBasic, type ResponseBase } from "../core.js";
import type { StripLightStatus } from "../status.js";
export default class StripLight extends SwitchbotBasic {
    turnOn(): Promise<ResponseBase>;
    turnOff(): Promise<ResponseBase>;
    toggle(): Promise<ResponseBase>;
    /**
     *
     * @param brightness Range: 1~100
     */
    setBrightness(brightness: number): Promise<ResponseBase>;
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
    getStatus(): Promise<StripLightStatus>;
}
//# sourceMappingURL=stripLight%20copy.d.ts.map