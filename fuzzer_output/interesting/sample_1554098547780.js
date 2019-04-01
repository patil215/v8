function main() {
const v3 = [13.37];
const v4 = [v3,13.37,BigInt64Array];
let v5 = 65536;
v5 = v4;
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
v11 = v12;
const v13 = v8 + 1;
v8 = v13;
v5[65536] = v8;
}
%NeverOptimizeFunction(main);
main();
