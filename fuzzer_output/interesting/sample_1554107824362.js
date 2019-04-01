function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [13.37,v1,13.37,v3];
const v8 = new Set(v4,1337,1337,16);
}
%NeverOptimizeFunction(main);
main();
