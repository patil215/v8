function main() {
const v2 = [1337];
const v3 = {exec:v2};
Function.__proto__ = v3;
function v5(v6,v7,v8,v9) {
    const v12 = {max:Function,setPrototypeOf:10};
    const v14 = [1337];
    let v16 = "undefined";
    for (const v19 in Function) {
        const v20 = new BigUint64Array(v12,v14,v19,13.37);
        v20.a = v20;
    }
    let v23 = 0;
    const v24 = v23 + 1;
    v23 = v24;
}
const v30 = [1337];
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v5(10,Function,1337,v30,Function);
}
}
%NeverOptimizeFunction(main);
main();
