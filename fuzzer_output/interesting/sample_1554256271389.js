function main() {
const v2 = new Float64Array(1616);
for (let v6 = 0; v6 < 1616; v6++) {
    const v7 = v2.fill(v6,1,v6);
}
}
%NeverOptimizeFunction(main);
main();
