function main() {
let v1 = "undefined";
for (let v4 = 0; v4 < 5; v4 = v4 + v1) {
}
}
%NeverOptimizeFunction(main);
main();
