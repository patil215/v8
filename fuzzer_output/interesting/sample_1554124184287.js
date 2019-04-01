function main() {
const v2 = "undefined".__proto__;
const v6 = [];
v2[1] = v6;
let v11 = undefined;
const v17 = [1337];
let v22 = undefined;
let v28 = undefined;
const v35 = "undefined"[10];
}
%NeverOptimizeFunction(main);
main();
