function main() {
let v7 = "undefined";
const v13 = [-536870912];
const v15 = [1337];
const v16 = [v15];
with (v13) {
    v7 = v16;
}
}
%NeverOptimizeFunction(main);
main();
