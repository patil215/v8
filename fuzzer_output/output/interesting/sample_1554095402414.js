function main() {
const v3 = "undefined" <= 10;
let v4 = "undefined";
if (v3) {
    v4[64] = 10;
    v4 = 10;
} else {
    v4 = v4;
}
}
%NeverOptimizeFunction(main);
main();
