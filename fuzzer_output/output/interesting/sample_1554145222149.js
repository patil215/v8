function main() {
const v2 = new Uint8ClampedArray(61555);
for (const v3 in v2) {
}
const v4 = {};
const v9 = new Uint8ClampedArray(61555);
for (const v10 in v9) {
}
for (let v14 = 0; v14 < 100; v14 = v14 + v4) {
    const v16 = v14 != undefined;
}
}
%NeverOptimizeFunction(main);
main();
