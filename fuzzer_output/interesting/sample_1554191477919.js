function main() {
for (let v3 = 0; v3 < 1337; v3++) {
    const v4 = 1 - v3;
    const v5 = [v4];
    let v6 = v5;
    const v11 = [1337,1337,1337];
    const v12 = [v11,13.37,"number",this];
    for (const v13 of v12) {
        v13[v6] = v13;
    }
}
}
%NeverOptimizeFunction(main);
main();
