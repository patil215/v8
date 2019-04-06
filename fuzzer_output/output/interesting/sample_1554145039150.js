function main() {
const v1 = new Int32Array(Int32Array);
let v6 = 0;
do {
    for (const v7 in v1) {
        let v10 = 0;
        const v11 = v10 + 1;
        v10 = v11;
    }
    const v12 = v6 + 1;
    v6 = v12;
} while (v6 < 8);
}
%NeverOptimizeFunction(main);
main();
