"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TwoDimensionShape_1 = __importDefault(require("./TwoDimensionShape"));
class ShapeOperation extends TwoDimensionShape_1.default {
    circumference() {
        return 2 * (this.width + this.length);
    }
    area() {
        return this.width * this.length;
    }
}
exports.default = ShapeOperation;
