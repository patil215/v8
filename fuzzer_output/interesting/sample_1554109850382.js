function main() {
function v1(v2,v3,v4,v5) {
    let v12 = 0;
    const v13 = "undefined" + 1;
    v12 = v13;
    const v14 = v12.__proto__;
}
const v20 = [1337];
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v1(10,Function,1337,v20,Function);
}
}
%NeverOptimizeFunction(main);
main();
