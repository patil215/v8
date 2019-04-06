function main() {
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v7 = [1337];
const v8 = [v7];
with (v8) {
    entries = Function;
}
}
%NeverOptimizeFunction(main);
main();
