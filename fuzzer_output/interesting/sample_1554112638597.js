function main() {
const v3 = [1337];
const v4 = [v3,"ignoreCase","ignoreCase",v3];
const v9 = BigInt(10,1337,"ignoreCase",v3,v4);
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
v15 = v16;
const v17 = v12 + 1;
v12 = v17;
}
%NeverOptimizeFunction(main);
main();
