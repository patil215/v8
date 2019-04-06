function main() {
const v1 = [13.37,13.37,13.37,13.37];
v1[16] = 13.37;
const v10 = [1337];
for (let v14 = 0; v14 < 100; v14++) {
    let v16 = undefined;
    let v19 = 0;
    for (const v20 in v1) {
    }
    const v21 = v19 + 1;
    v19 = v21;
}
}
%NeverOptimizeFunction(main);
main();
