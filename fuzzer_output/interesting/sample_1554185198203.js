function main() {
const v1 = ["object"];
const v2 = [];
let v3 = v2;
let v5 = 0;
v2[2] = v5;
const v7 = [-201121.9461013449];
const v9 = [1337,1337,v1,1337];
const v10 = v3.concat(v7,v9);
}
%NeverOptimizeFunction(main);
main();
