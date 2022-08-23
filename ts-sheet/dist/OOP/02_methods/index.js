"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TwoDimensionalShape_1 = __importDefault(require("./TwoDimensionalShape"));
let rectangle = new TwoDimensionalShape_1.default();
rectangle.width = 10;
rectangle.length = 15;
rectangle.print();
