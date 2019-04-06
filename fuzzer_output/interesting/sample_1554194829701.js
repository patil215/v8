function main() {
const v1 = [1337];
let v2 = v1;
const v4 = new Float64Array(v2);
for (let v8 = 0; v8 < 4; v8 = v8 + 1337) {
    const v9 = v4.indexOf(v8,1337,v8);
}
}
%NeverOptimizeFunction(main);
main();
