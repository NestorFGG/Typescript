"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loggedIn_1 = __importDefault(require("./loggedIn"));
function default_1(user, formInfo) {
    if (user.userName !== formInfo.userName)
        return;
    if (user.password !== formInfo.password)
        return;
    localStorage.setItem('userName', formInfo.userName);
    loggedIn_1.default();
}
exports.default = default_1;
