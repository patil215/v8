function main() {
for (let v5 = 0; v5 < 100; v5++) {
    const v7 = v5.toExponential("undefined",v5,v5,1,-2);
}
}
%NeverOptimizeFunction(main);
main();
