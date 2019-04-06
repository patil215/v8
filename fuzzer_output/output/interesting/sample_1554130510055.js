function main() {
const v1 = [1337];
const v2 = {exec:v1};
const v6 = new Uint8Array(Function,-0.0,v2);
for (let v10 = 0; v10 < 100; v10++) {
    for (const v14 in v6) {
        let v17 = 0;
        const v18 = v17 + 1;
        v17 = v18;
    }
}
}
%NeverOptimizeFunction(main);
main();
