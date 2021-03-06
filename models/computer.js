"use strict";
exports.__esModule = true;
exports.Program = exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer(a) {
        if (a === void 0) { a = 0; }
        this.a = a;
        this.b = 0;
        this.offset = 0;
    }
    Computer.prototype.runProgram = function (program) {
        while (this.offset < program.instructions.length) {
            this.run(program.instructions[this.offset]);
        }
    };
    Computer.prototype.run = function (instruction) {
        switch (instruction.instruction) {
            case 'hlf': {
                this[instruction.register] /= 2;
                this.offset++;
                break;
            }
            case 'tpl': {
                this[instruction.register] *= 3;
                this.offset++;
                break;
            }
            case 'inc': {
                this[instruction.register]++;
                this.offset++;
                break;
            }
            case 'jmp': {
                this.offset += instruction.offset;
                break;
            }
            case 'jie': {
                if (this[instruction.register] % 2 === 0) {
                    this.offset += instruction.offset;
                }
                else {
                    this.offset++;
                }
                break;
            }
            case 'jio': {
                if (this[instruction.register] === 1) {
                    this.offset += instruction.offset;
                }
                else {
                    this.offset++;
                }
                break;
            }
        }
    };
    Computer.prototype.getA = function () { return this.a; };
    Computer.prototype.getB = function () { return this.b; };
    return Computer;
}());
exports.Computer = Computer;
var Program = /** @class */ (function () {
    function Program(stringInput) {
        this.instructions = stringInput.map(function (input) { return new Instruction(input); });
    }
    return Program;
}());
exports.Program = Program;
var INSTRUCTION_MAP = {
    'hlf': 'hlf',
    'tpl': 'tpl',
    'inc': 'inc',
    'jmp': 'jmp',
    'jie': 'jie',
    'jio': 'jio'
};
var REGISTER_MAP = {
    'a': 'a',
    'b': 'b'
};
var Instruction = /** @class */ (function () {
    function Instruction(inputString) {
        var words = inputString.split(' ');
        this.instruction = INSTRUCTION_MAP[words[0]];
        if (words[0] === 'jmp') {
            this.offset = parseInt(words[1]);
        }
        else if (['hlf', 'tpl', 'inc'].includes(words[0])) {
            this.register = REGISTER_MAP[words[1]];
        }
        else {
            this.register = REGISTER_MAP[words[1][0]];
            this.offset = parseInt(words[2]);
        }
    }
    return Instruction;
}());
