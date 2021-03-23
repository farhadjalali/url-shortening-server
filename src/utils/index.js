"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
function generateHash(num) {
    var letters = [];
    var characterMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charBase = characterMap.length;
    while (num > 0) {
        letters.push(characterMap[num % charBase]);
        num = Math.floor(num / charBase);
    }
    return letters.join("");
}
exports.generateHash = generateHash;
