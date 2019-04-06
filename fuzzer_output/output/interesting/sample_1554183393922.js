function main() {
const v0 = [];
let v1 = v0;
let v3 = 0;
v0[2] = v3;
const v5 = [-1000000000.0];
const v7 = [1337,1337,1337,1337];
const v8 = v1.concat(v5,v7);
}
%NeverOptimizeFunction(main);
main();
