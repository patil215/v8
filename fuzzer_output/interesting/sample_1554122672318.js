function main() {
const v4 = [13.37];
const v5 = !-3698561806;
const v6 = ["boolean",v4];
let v7 = arguments;
arguments[10000] = v5;
const v8 = typeof v4;
const v10 = v8 === "number";
let v13 = 0;
v7[257] = v6;
}
%NeverOptimizeFunction(main);
main();
