"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBinary = addBinary;
function addBinary(a, b) {
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let rest = 0;
    let result = "";
    while (Math.min(aIndex, bIndex) >= 0) {
        const sum = parseInt(a[aIndex]) + parseInt(b[bIndex]);
        switch (sum) {
            case 1:
                result = "1" + result;
                rest = 0;
                break;
            case 0:
                result = "0" + result;
                rest = 0;
                break;
            case 2:
                result = "0" + result;
                rest = 1;
                break;
            case 3:
                result = "1" + result;
                rest = 1;
                break;
        }
        aIndex -= 1;
        bIndex -= 1;
    }
    console.log(rest);
    console.log(result);
}
