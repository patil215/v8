function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v2 = [];
const v3 = typeof v1;
const v5 = v3 === "string";
v1.__proto__ = v2;
let v10 = 0;
v10 = 10;
let v13 = 0;
const v14 = v13 + 1;
v13 = v14;
let v16 = "undefined";
let v20 = 0;
v20 = 10;
const v22 = {set:Function};
const v24 = Object.defineProperty(v2,0,v22);
}
%NeverOptimizeFunction(main);
main();
