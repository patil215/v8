function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v3 = [13.37,v2,1337];
const v5 = {getFloat64:1337,SQRT1_2:1337,flatMap:1337};
for (let v9 = 0; v9 < 100; v9++) {
    v5[v3] = 1;
    v3.__proto__ = v5;
}
}
%NeverOptimizeFunction(main);
main();
