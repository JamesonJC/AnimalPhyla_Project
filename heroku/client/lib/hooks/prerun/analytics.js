"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analytics_1 = require("../../analytics");
const telemetry = require("../../global_telemetry");
const analytics = async function (options) {
    global.cliTelemetry = telemetry.setupTelemetry(this.config, options);
    const analytics = new analytics_1.default(this.config);
    await analytics.record(options);
};
exports.default = analytics;
