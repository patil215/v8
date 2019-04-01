function main() {
const v1 = [1337,1337];
let v2 = v1;
const v4 = [1337];
v2[1337] = v4;
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
