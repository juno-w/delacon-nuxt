import path from "path";
import logger from "consola";

export default function (moduleOptions) {
  if (!moduleOptions.mid || !moduleOptions.cid) {
    logger.warn("MID and at least one CID is required.");
    return;
  }

  const cids = Array.isArray(moduleOptions.cid) ? moduleOptions.cid.join("-") : [];

  const options = {
    mid: moduleOptions.mid,
    cid: cids,
  };

  // Add Plugin
  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    fileName: "delacon-nuxt.js",
    ssr: false,
    options: {
      ...options,
    },
  });
}

module.exports.meta = require("../package.json");
