function main() {
const v1 = [1337];
const v2 = [v1];
const v6 = [13.37,13.37,13.37,13.37];
const v8 = [1337];
const v9 = [v8];
let v10 = "undefined";
let v13 = 0;
v8[1337] = v6;
let v16 = 0;
const v17 = v16 + 1;
v16 = v17;
const v18 = typeof v10;
const v20 = v18 === "symbol";
let v22 = "undefined";
const v23 = v9 == 1337;
}
%NeverOptimizeFunction(main);
main();
