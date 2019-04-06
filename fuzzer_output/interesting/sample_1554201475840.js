function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
with (v2) {
    const v8 = toLocaleString(toLocaleString,0,4);
}
}
%NeverOptimizeFunction(main);
main();
