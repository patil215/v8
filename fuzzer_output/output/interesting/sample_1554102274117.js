function main() {
const v2 = [1000000000000.0];
const v4 = [1337,1337];
const v5 = [1000000000000.0,v2,v2];
const v6 = {setPrototypeOf:"delete",getInt32:v5,resolve:v4,ignoreCase:v5};
function v7(v8,v9,v10,v11) {
    let v13 = v6;
    const v14 = v13 + 1;
    v13 = v14;
    const v15 = v13.__proto__;
    return v15;
}
const v21 = [1337];
for (let v25 = 0; v25 < 100; v25++) {
    const v26 = v7(10,Function,1337,v21,Function);
}
}
%NeverOptimizeFunction(main);
main();
