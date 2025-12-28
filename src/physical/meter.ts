import { SwitchbotBasic } from "../core.js";
import type { MeterPlusStatus, MeterProCO2Status, MeterProStatus, MeterStatus, OutdoorMeterStatus } from "../status.js";

export class Meter extends SwitchbotBasic {
  getStatus(): Promise<MeterStatus> {
    return super.getStatus();
  }
}

export class MeterPlus extends SwitchbotBasic {
  getStatus(): Promise<MeterPlusStatus> {
    return super.getStatus();
  }
}

export class OutdoorMeter extends SwitchbotBasic {
  getStatus(): Promise<OutdoorMeterStatus> {
    return super.getStatus();
  }
}

export class MeterPro extends SwitchbotBasic {
  getStatus(): Promise<MeterProStatus> {
    return super.getStatus();
  }
}

export class MeterProCO2 extends SwitchbotBasic {
  getStatus(): Promise<MeterProCO2Status> {
    return super.getStatus();
  }
}