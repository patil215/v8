function main() {
const v2 = [13.37];
const v5 = [1337];
let v7 = 0;
const v8 = v7 + 1;
const v10 = new Set(v2,v8,1337,0);
}
%NeverOptimizeFunction(main);
main();
