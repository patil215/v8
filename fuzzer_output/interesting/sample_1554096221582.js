function main() {
const v2 = [1337];
const v3 = [v2];
let v4 = "undefined";
let v7 = 0;
do {
    const v8 = v4[v3];
    const v9 = ~v7;
    v7 = v9;
} while (v7 < 0);
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
