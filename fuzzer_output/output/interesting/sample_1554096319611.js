function main() {
const v2 = [1337];
const v3 = {exec:v2};
const v5 = [1337];
const v6 = [v5];
let v13 = 0;
do {
    Function.__proto__ = v3;
    const v14 = v13 + 1;
    v13 = v14;
} while (v13 < 6);
for (const v16 in Function) {
}
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
