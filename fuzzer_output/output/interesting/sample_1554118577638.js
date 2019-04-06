function main() {
const v1 = [1337,1337];
const v8 = [1337];
let v13 = undefined;
let v15 = "undefined";
const v18 = new Uint8ClampedArray(v1);
let v19 = "undefined";
let v23 = 0;
const v24 = v23 + 1;
v23 = v24;
}
%NeverOptimizeFunction(main);
main();
