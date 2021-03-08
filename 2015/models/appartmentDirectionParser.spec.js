"use strict";
exports.__esModule = true;
var appartmentDirectionParser_1 = require("./appartmentDirectionParser");
describe('AppartmentDirectionParser', function () {
    describe('getFloor()', function () {
        test(' "(" parses to 1', function () {
            var input = '(';
            var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
            expect(parser.getFloor()).toBe(1);
        });
        test(' ")" parses to -1', function () {
            var input = ')';
            var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
            expect(parser.getFloor()).toBe(-1);
        });
        test(' "()" parses to 0', function () {
            var input = '()';
            var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
            expect(parser.getFloor()).toBe(0);
        });
    });
    describe('getFirstBasementFloor()', function () {
        test(' ")" returns 1', function () {
            var input = ')';
            var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
            expect(parser.getFirstBasementFloor()).toBe(1);
        });
        test(' "()())" returns 5', function () {
            var input = '()())';
            var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
            expect(parser.getFirstBasementFloor()).toBe(5);
        });
    });
});
