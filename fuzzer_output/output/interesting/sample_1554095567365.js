function main() {
const v4 = [13.37,13.37,13.37,13.37];
let v7 = 0;
v7.__proto__ = v4;
const v8 = v7 + 1;
v7 = v8;
let v11 = 0;
do {
    for (const v12 in v4) {
        const v13 = v11.parseFloat;
    }
    const v14 = v11 + 1;
    v11 = v14;
} while (v11 < 6);
}
%NeverOptimizeFunction(main);
main();
