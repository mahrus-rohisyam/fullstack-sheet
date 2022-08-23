"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TwoDimensionShape {
    constructor() {
        this.name = '';
        this.width = 0;
        this.length = 0;
    }
    print() {
        console.log(`${this.name} has ${this.width} and ${this.length}`);
    }
}
exports.default = TwoDimensionShape;
