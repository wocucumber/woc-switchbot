import type { CommandResponse } from "../core.js";
import { SwitchbotBasic } from "../core.js";
import type { StripLightStatus } from "../status.js";
export default class StripLight extends SwitchbotBasic {
    turnOn(): Promise<CommandResponse>;
    turnOff(): Promise<CommandResponse>;
    toggle(): Promise<CommandResponse>;
    /**
     *
     * @param brightness Range: 1~100
     */
    setBrightness(brightness: number): Promise<CommandResponse>;
    /**
     *
     * @param color Must be '{0-255}:{0-255}:{0-255}'
     */
    setColor(color: string): Promise<CommandResponse>;
    /**
     *
     * @param r Must be between 0 and 255
     * @param g Must be between 0 and 255
     * @param b Must be between 0 and 255
     */
    setColor(r: number, g: number, b: number): Promise<CommandResponse>;
    getStatus(): Promise<StripLightStatus>;
}
//# sourceMappingURL=stripLight.d.ts.map