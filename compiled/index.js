"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var askDev_1 = require("./utils/askDev");
var askPackageManager_1 = require("./utils/askPackageManager");
var askTechFront_1 = require("./utils/askTechFront");
var nuxt_1 = require("./utils/installers/nuxt");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var inquirer = require("inquirer");
var shell = require("shelljs");
var cli = require("clui");
var Spinner = cli.Spinner;
clear();
console.log(chalk.yellow(figlet.textSync('AllStacks', { horizontalLayout: 'fill' })));
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var stack, Stack, manager, Package, tool, Tech;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askDev_1.askAboutStack()];
            case 1:
                stack = _a.sent();
                Stack = stack.Stack;
                return [4 /*yield*/, askPackageManager_1.askAboutPackageManager()];
            case 2:
                manager = _a.sent();
                Package = manager.Package;
                if (!(Stack === 'fe')) return [3 /*break*/, 4];
                return [4 /*yield*/, askTechFront_1.askAboutTechFront()];
            case 3:
                tool = _a.sent();
                Tech = tool.Tech;
                if (Tech === 'nuxt') {
                    // run nuxt
                    nuxt_1.nuxtInstaller(Package, chalk);
                }
                else if (Tech === 'Vue') {
                    // run vue
                }
                else if (Tech === 'React') {
                    // run react
                }
                else if (Tech === 'angular') {
                    // run angular
                }
                else if (Tech === 'js') {
                    // install js
                }
                else if (Tech === 'ts') {
                    // install ts
                }
                return [3 /*break*/, 5];
            case 4:
                if (Stack === 'be') {
                    // go for be
                }
                else {
                    // go for full
                }
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
run();
