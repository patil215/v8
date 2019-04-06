function main() {
const v5 = [1337];
let v10 = undefined;
const v15 = "undefined".__proto__;
const v16 = [];
v15[3040074401] = v16;
let v24 = "undefined";
let v27 = 0;
do {
    const v28 = v24[v27];
    const v29 = v27 + 1;
    v27 = v29;
} while (v27 < 10);
}
%NeverOptimizeFunction(main);
main();
