function main() {
let v9 = 13.37;
const v45 = [1337];
let v50 = undefined;
with (v9) {
    arguments[10] = arguments;
}
}
%NeverOptimizeFunction(main);
main();
