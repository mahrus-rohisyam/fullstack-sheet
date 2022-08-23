"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TwoDimensionalShape_1 = __importDefault(require("./TwoDimensionalShape"));
let square = new TwoDimensionalShape_1.default();
square.name = "Square";
square.width = 10;
square.length = 10;
console.log(square);
let rectangle = new TwoDimensionalShape_1.default();
rectangle.name = "Rectangle";
rectangle.width = 10;
rectangle.length = 15;
console.log(rectangle);
