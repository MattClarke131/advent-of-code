"use strict";
exports.__esModule = true;
exports.Combinatorics = void 0;
var Combinatorics = /** @class */ (function () {
    function Combinatorics() {
    }
    Combinatorics.iterateComboWithCallback = function (array, choose, callback, chosenArray) {
        if (chosenArray === void 0) { chosenArray = []; }
        for (var i = 0; i < array.length - choose + 1; i++) {
            if (choose === 1) {
                var element = array[i];
                var combination = chosenArray.concat(element);
                callback(combination);
            }
            else {
                var subArray = array.slice(i + 1);
                var newChoose = choose - 1;
                var element = array[i];
                var newChosenArray = chosenArray.concat(element);
                this.iterateComboWithCallback(subArray, newChoose, callback, newChosenArray);
            }
        }
    };
    return Combinatorics;
}());
exports.Combinatorics = Combinatorics;
