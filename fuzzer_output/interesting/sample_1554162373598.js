function main() {
const v1 = [1337,1337,1337];
const v6 = [v1];
let v8 = undefined;
for (let v11 = 0; v11 < 1337; v11++) {
    const v12 = 1 - v11;
    const v13 = [v12];
    let v14 = v13;
    const v19 = [1337,1337,1337];
    const v20 = [v19,13.37,"number",Set];
    for (const v21 of v20) {
        v21[v14] = v21;
    }
}
}
%NeverOptimizeFunction(main);
main();
