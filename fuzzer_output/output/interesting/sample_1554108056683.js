function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
const v8 = v1.shift(v3,Object,Function,Function,"undefined");
}
%NeverOptimizeFunction(main);
main();
