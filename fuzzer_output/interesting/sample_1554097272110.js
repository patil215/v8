function main() {
const v1 = [13.37];
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
v1[1337] = 3;
}
%NeverOptimizeFunction(main);
main();
