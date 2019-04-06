function main() {
const v1 = [1337];
const v4 = new Float64Array(v1);
for (let v8 = 0; v8 < 4; v8++) {
    const v9 = v4.reverse(v8,1616,v8);
}
}
%NeverOptimizeFunction(main);
main();
