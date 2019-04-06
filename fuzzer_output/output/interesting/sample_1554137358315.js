function main() {
const v3 = [13.37];
const v4 = [-2155004223,"eDrFlotFFs",v3];
const v7 = [13.37,v4,1337];
const v9 = {getFloat64:1337,SQRT1_2:1337,flatMap:1337};
for (let v13 = 0; v13 < 100; v13++) {
    v9[v7] = 1;
    v7.__proto__ = v9;
}
}
%NeverOptimizeFunction(main);
main();
