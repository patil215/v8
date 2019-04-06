function main() {
let v1 = 1337;
function v3(v4,v5,v6,v7) {
    let v9 = v1;
    do {
        let v11 = 0;
        const v12 = v11 + 1;
        v11 = v12;
    } while (v9 < "number");
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v3(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
