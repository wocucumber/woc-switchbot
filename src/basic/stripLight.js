import { SwitchbotBasic } from "../core.js";

class StripLight extends SwitchbotBasic {
	async setPower(power){
    if (power)
      return await this.turnOn();
    else
      return await this.turnOff();
	}
	turnOn() {
		return this.___sendCommand({
			command: "turnOn"
		})
	}
	turnOff() {
		return this.___sendCommand({
			command: "turnOff"
		})
	}
	toggle() {
		return this.___sendCommand({
			command: "toggle"
		})
	}
	setBrightness(brightness) {
		const value = Number(brightness);
		if (isNaN(value)) this.___warn("Brightness must be number.");
		if (value < 1 || value > 100) this.___warn("Brightness must be greater than or equal to 1 and less than or qual to 100");
		return this.___sendCommand({
			command: "setBrightness",
			parameter: value
		});
	}
	setColor(color) {
		if (typeof color !== "string") this.___warn("Color should be string.");
		const parsedColor = color.split(":").map(Number);
		if (parsedColor.length !== 3 ||
			parsedColor.some(e => isNaN(e) || e < 0 || e > 255)
		) this.___warn("Color should be \"{0-255}:{0-255}:{0-255}\"");

		return this.___sendCommand({
			command: "setColor",
			parameter: color
		});
	}
}

export default StripLight;