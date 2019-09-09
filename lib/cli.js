"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = __importStar(require("inquirer"));
var index_1 = __importDefault(require("./index"));
inquirer
    .prompt([
    {
        type: 'number',
        name: 'hourlyRate',
        message: 'What is your hourly wage? $',
    },
    {
        type: 'number',
        name: 'numHours',
        message: 'How many hours?'
    }
])
    .then(function (answers) {
    var result = new index_1.default(answers.numHours, answers.hourlyRate).paycheck;
    console.log("Your paycheck is $" + result);
});
