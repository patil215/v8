function main() {
function v1(v2,v3,v4,v5) {
    const v6 = v2 === v4;
    const v7 = {...1337};
    let v13 = 0;
    const v14 = v13 + 1;
    v13 = v14;
}
const v20 = [1337];
let v23 = 0;
const v24 = v23 + 1;
v23 = v24;
for (let v28 = 0; v28 < 100; v28++) {
    const v29 = v1(10,Function,1337,v20,Function);
}
let v32 = 0;
const v33 = v32 + 1;
v32 = v33;
}
%NeverOptimizeFunction(main);
main();
