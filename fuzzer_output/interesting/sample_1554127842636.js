function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
let v4 = v1;
const v13 = new Float64Array(56953);
v13[512] = v4;
}
%NeverOptimizeFunction(main);
main();
