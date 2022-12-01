import { app } from "electron";

export default () => {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const fs = require("fs");
  try {
    if (isDevelopment) {
      return JSON.parse(
        fs.readFileSync(
          app.getAppPath().substring(0, app.getAppPath().lastIndexOf("\\")) +
            "\\egu-config.json"
        )
      );
    } else {
      return JSON.parse(
        fs.readFileSync(
          process.env.PORTABLE_EXECUTABLE_DIR + "\\egu-config.json"
        )
      );
    }
  } catch (e) {
    throw new Error(e);
  }
};
