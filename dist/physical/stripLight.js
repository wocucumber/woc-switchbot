import { SwitchbotBasic } from "../core.js";
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
    setBrightness(brightness) {
        const value = typeof brightness === "number" ? brightness : Number(brightness);
        if (isNaN(value))
            throw new Error("Brightness must be number");
        if (value < 1 || value > 100)
            throw new Error("Brightness must be between 1 and 100.");
        return this._sendCommand({
            command: "setBrightness",
            parameter: value
        });
    }
    setColor(r, g, b) {
        let parsedColor = [];
        if (typeof r === "string") {
            parsedColor = r.split(":").map(Number);
        }
        else if (typeof r === "number" && g !== undefined && b !== undefined) {
            parsedColor = [r, g, b];
        }
        if (parsedColor.length !== 3 ||
            parsedColor.some(e => isNaN(e) || e < 0 || e > 255)) {
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
    getStatus() {
        return super.getStatus();
    }
}
