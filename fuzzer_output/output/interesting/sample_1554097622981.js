function main() {
const v2 = [1337,1337];
let v3 = v2;
let v6 = 0;
do {
    const v7 = v3[4193181720];
    const v8 = v6 + 1;
    v6 = v8;
} while (v6 < 4);
}
%NeverOptimizeFunction(main);
main();
