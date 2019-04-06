function main() {
const v1 = [1337];
const v4 = new Float64Array(1616);
for (let v7 = 0; v7 < v1; v7++) {
    const v9 = v4.lastIndexOf(13.37,1,v7);
}
}
%NeverOptimizeFunction(main);
main();
