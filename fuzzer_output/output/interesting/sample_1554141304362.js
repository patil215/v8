function main() {
const v1 = [13.37];
const v3 = [1337,v1,1337,13.37];
const v5 = [13.37];
const v7 = [1337,1337,1337,1337];
const v8 = v5.concat(v3,v7);
}
%NeverOptimizeFunction(main);
main();
