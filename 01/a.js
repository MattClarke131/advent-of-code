"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var appartmentDirectionParser_1 = require("../models/appartmentDirectionParser");
var pathName = path.join(__dirname, './input.txt');
var input = fs.readFileSync(pathName, 'utf-8');
var parser = new appartmentDirectionParser_1.AppartmentDirectionParser(input);
console.log(parser.getFloor());
