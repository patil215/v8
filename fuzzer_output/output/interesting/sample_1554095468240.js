function main() {
let v15 = "undefined";
let v21 = 10;
for (const v23 in v15) {
    v21.toString = 1337;
}
}
%NeverOptimizeFunction(main);
main();
