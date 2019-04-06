function main() {
function v0(v1,v2,v3,v4) {
    const v6 = "undefined".__proto__;
    const v7 = [];
    v6[1] = v7;
    let v12 = "undefined";
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Function);
}
let v27 = 0;
let v30 = 0;
const v31 = v30 + 1;
v30 = v31;
const v32 = v27 + 1;
v27 = v32;
}
%NeverOptimizeFunction(main);
main();
