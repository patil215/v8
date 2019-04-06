function main() {
function v0(v1,v2,v3,v4) {
    for (let v8 = 0; v8 < 100; v8++) {
        let v9 = 1;
        const v11 = typeof 1337;
        const v12 = 1 * v8;
    }
}
const v17 = [Function];
const v18 = v0(10,Function,1337,v17,Function);
}
%NeverOptimizeFunction(main);
main();
