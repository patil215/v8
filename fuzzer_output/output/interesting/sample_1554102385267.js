function main() {
for (let v3 = 0; v3 < 5; v3++) {
    let v7 = 0;
    v7 = 10;
    const v11 = [13.37,13.37,13.37,13.37];
    let v14 = 0;
    do {
        v11[1337] = "undefined";
        const v15 = v14 + 1;
        v14 = v15;
    } while (v14 < 4);
}
}
%NeverOptimizeFunction(main);
main();
