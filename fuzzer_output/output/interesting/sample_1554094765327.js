function main() {
const v2 = [13.37];
let v5 = 0;
do {
    v2.__proto__ = Error;
    const v6 = v5 + 1;
    v5 = v6;
} while (v5 < 7);
}
%NeverOptimizeFunction(main);
main();
