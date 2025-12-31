# woc-switchbot
Easily control your SwitchBot devices with Node.js.
⚠️This module supports __the SwitchBot OpenAPI__ but doesn't support Bluetooth Low Energy (BLE).

## ⚠️ Disclaimer
__This is an unofficial library and is not affiliated with or endorsed by SwitchBot.__ This project uses the official SwitchBot API to interact with your devices.


## Installation
```sh
npm install woc-switchbot
```

## Usage
```JavaScript
import { Bot, Config, StripLight, SwitchBotAPI } from "woc-switchbot";

// token and secret
const conf = new Config(process.env.TOKEN, process.env.SECRET);

// deviceListGetter
const sb = new SwitchBotAPI(conf);

// get devices
sb.getDevices().then(devices => {
  console.log("devices:", devices);
});

// create a bot instance
const bot = new Bot(conf, "xxxxxxxx");
// get status of the bot
bot.getStatus().then(status => {
  console.log("status:", status);
});

// press with the bot
bot.press().then(() => {
  console.log("OK");
});


// create a stripLight instance
const stripLight = new StripLight(conf, "xxxxxxxx");
// get status of the stripLight
stripLight.getStatus().then(status => {
  console.log("currentColor:", status.color);
});

// change color
stripLight.setColor(255, 0, 0).then(e => {
  console.log("OK");
});
```

## ✅Supported Devices
Supports both physical devices (Bot, Curtain, etc) and infrared devices.
### Physical Devices
- Bot
- Curtain(1, 3)
- meter
  - Meter
  - Meter Plus
  - Outdoor Meter
  - Meter Pro
  - Meter Pro CO2
- lock
  - Lock
  - Lock Pro
  - Lock Ultra
- Remote (Only device list item)
- keypad
  - Keypad
  - Keypad Touch
- StripLight
- PlugMini

### Infrared (IR) Devices
- AirConditioner
- Light
- TV

### Other
- Scene
  - Get
  - Executes