function main() {
const v5 = [1337];
for (let v9 = 0; v9 < 10; v9++) {
    let v11 = undefined;
    const v14 = [13.37,13.37,13.37,13.37,13.37];
    const v16 = [13.37,13.37,13.37,13.37];
    const v18 = [13.37,13.37,13.37,13.37];
    for (const v19 of v18) {
        v16[8] = v19;
    }
    v16[1337] = v14;
    let v21 = "undefined";
    let v26 = 0;
    const v27 = v26 + 1;
    v26 = v27;
    let v30 = 0;
}
}
%NeverOptimizeFunction(main);
main();
