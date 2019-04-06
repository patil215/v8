function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    const v8 = [1337];
    const v9 = v6 & v8;
    const v10 = v9.__proto__;
    let v13 = 0;
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Function);
}
}
%NeverOptimizeFunction(main);
main();
