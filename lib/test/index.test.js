"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var mockCalculator = new index_1.default(10, 10);
test('calc', function () {
    var result = mockCalculator.paycheck;
    expect(result).toBe(100);
});
