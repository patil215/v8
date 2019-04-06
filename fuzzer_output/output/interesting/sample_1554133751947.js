function main() {
let v2 = 0;
const v7 = [13.37];
function v9(v10,v11,v12,v13) {
    const v14 = Function.__proto__;
    const v20 = [1337];
    for (let v24 = 0; v24 < 100; v24++) {
        let v26 = undefined;
        const v29 = [1337];
        const v30 = [v29];
        Function[10] = v30;
    }
    v14.__proto__ = v7;
    let v32 = "undefined";
}
const v45 = [1337];
for (let v49 = 0; v49 < 100; v49++) {
    const v50 = v9(10,Function,1337,v45,Function);
}
}
%NeverOptimizeFunction(main);
main();
