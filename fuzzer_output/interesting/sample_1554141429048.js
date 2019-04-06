function main() {
const v5 = [13.37];
const v7 = [1337,1337,1337,1337];
const v8 = v5.concat(v5,v7);
}
%NeverOptimizeFunction(main);
main();
