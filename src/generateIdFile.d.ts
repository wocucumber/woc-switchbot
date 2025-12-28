import { SwitchbotDevices } from "./deviceGetter";

declare function generateIdFile(type: "commonjs" | "module", devices: SwitchbotDevices): void;

export default generateIdFile;