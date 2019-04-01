function main() {
const v3 = [9007199254740993,9007199254740993];
const v4 = [13.37];
let v5 = v3;
let v9 = 0;
const v10 = v9 + 1;
v9 = v10;
const v16 = Boolean("undefined",v5,1337,"undefined",v4);
}
%NeverOptimizeFunction(main);
main();
