function main() {
const v1 = [1337,1337,1337];
const v4 = new Float64Array(1616);
for (let v8 = 0; v8 < 4; v8++) {
    const v9 = v4.includes(v1,1,v8);
}
}
%NeverOptimizeFunction(main);
main();
