"use strict";
exports.__esModule = true;
exports.InstructionBooklet = void 0;
var InstructionBooklet = /** @class */ (function () {
    function InstructionBooklet(rawInstructions) {
        this.instructions = rawInstructions;
    }
    InstructionBooklet.prototype.getInstructionFromIdentifier = function (identifier) {
        return this.instructions
            .filter(function (instruction) {
            return instruction.endsWith(' ' + identifier);
        })[0];
    };
    return InstructionBooklet;
}());
exports.InstructionBooklet = InstructionBooklet;
