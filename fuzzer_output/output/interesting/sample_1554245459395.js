function main() {
const v1 = [-236013646,-236013646,-236013646];
const v4 = new Float64Array(1616);
for (let v8 = 0; v8 < 1616; v8++) {
    const v9 = v4.fill(v1,1,v8);
}
}
%NeverOptimizeFunction(main);
main();
