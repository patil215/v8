function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
let v10 = 0;
do {
    const v11 = Function.name;
    const v12 = v10 + 1;
    v10 = v12;
} while (v10 < 3);
}
%NeverOptimizeFunction(main);
main();
