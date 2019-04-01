function main() {
const v4 = [1337];
let v6 = "undefined";
const v8 = [1337];
const v9 = [v8];
const v14 = {max:Function,setPrototypeOf:10};
let v17 = 0;
const v18 = Function.__defineGetter__(v14,Function,v6,v9);
function v20(v21,v22,v23,v24) {
    let v26 = "undefined";
    let v28 = "undefined";
    for (const v30 in Function) {
    }
    let v33 = 0;
    const v34 = v33 + 1;
    v33 = v34;
}
const v40 = [1337];
for (let v44 = 0; v44 < 100; v44++) {
    const v45 = v20(10,Function,1337,v40,Function);
}
}
%NeverOptimizeFunction(main);
main();
