import type { SwitchbotDevicesResponse } from "./deviceGetter.js";

export default function generateIdFile(type: "module" | "commonjs", devices: SwitchbotDevicesResponse) {
  const res: string[] = [];
  function add(key: string, value: string) {
    if (type === "module") {
      res.push("export const "+key+" = \""+value+"\";");
    } else {
      res.push("exports."+key+" = \""+value+"\";");
    }
  }

  function parseDeviceKey(type: "normal" | "infrared", typeName: string) {
    let start = "";
    if (type === "infrared") {
      start = "IR_";
    }
    return start + typeName.replace("DIY ", "").replaceAll(" ", "_").replace(/[^a-zA-Z0-9_]/g, "");
  }
  const normalDevices = devices.deviceList;
  if (normalDevices.length !== 0) {
    for (const item of normalDevices) {
      add(parseDeviceKey("normal", item.deviceType), item.deviceId);
    }
  }

  const irDevices = devices.infraredRemoteList;
  if (irDevices.length !== 0) {
    for (const item of irDevices) {
      add(parseDeviceKey("infrared", item.remoteType), item.deviceId);
    }
  }

  return res.join("\n");
}