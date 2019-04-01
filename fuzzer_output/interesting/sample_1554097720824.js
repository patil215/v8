function main() {
const v1 = [13.37];
const v2 = {toPrimitive:v1};
const v4 = [13.37,13.37,13.37,13.37];
let v7 = 0;
v4.length = 2;
const v9 = v7 + 1;
v7 = v9;
}
%NeverOptimizeFunction(main);
main();
