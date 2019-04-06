function main() {
const v1 = {getFloat64:1337,SQRT1_2:1337,flatMap:1337};
const v5 = [13.37];
const v6 = v5.flatMap(Object,13.37,v1);
const v7 = v5[v6];
}
%NeverOptimizeFunction(main);
main();
