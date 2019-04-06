function main() {
function v1(v2,v3,v4,v5) {
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        v10 = v11;
    } while (v10 < v5);
    return v10;
}
const v16 = [1337];
const v20 = v1(10,Function,this,v16,Function);
let v23 = 0;
const v24 = v23 + 1;
v23 = v24;
let v27 = 0;
const v28 = v27 + 1;
v27 = v28;
}
%NeverOptimizeFunction(main);
main();
