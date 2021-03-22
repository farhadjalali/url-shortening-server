"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
function generateHash(num) {
    const letters = [];
    const characterMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charBase = characterMap.length;
    while (num > 0) {
        letters.push(characterMap[num % charBase]);
        num = Math.floor(num / charBase);
    }
    return letters.join("");
}
exports.generateHash = generateHash;
//# sourceMappingURL=index.js.map