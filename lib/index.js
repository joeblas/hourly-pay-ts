"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HourlyCalculator = /** @class */ (function () {
    function HourlyCalculator(hours, hourlyRate) {
        this._hours = hours;
        this._hourlyRate = hourlyRate;
    }
    Object.defineProperty(HourlyCalculator.prototype, "paycheck", {
        get: function () {
            return this._hours * this._hourlyRate;
        },
        enumerable: true,
        configurable: true
    });
    return HourlyCalculator;
}());
exports.default = HourlyCalculator;
