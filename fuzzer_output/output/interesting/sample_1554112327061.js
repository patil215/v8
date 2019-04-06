function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = ["number",RegExp,v4];
const v8 = v6.__proto__;
v7[RegExp] = "number";
const v9 = {log1p:RegExp};
const v10 = {};
let v11 = 1337;
function v12(v13,v14,v15,v16) {
    let v21 = v14;
    const v22 = parseInt(v21,-2,"undefined");
    let v24 = "undefined";
    let v28 = 0;
    const v29 = v28 + 1;
    v28 = v29;
    let v32 = v14;
    const v34 = v32.__proto__;
    v34.toString = v12;
    const v40 = [1337];
    let v41 = "undefined";
    const v43 = [13.37,13.37,13.37,13.37];
    let v45 = "undefined";
    v8[2147483649] = v7;
    const v63 = ["undefined",13.37,13.37,13.37];
    function v66(v67,v68,v69) {
        const v70 = v68 > v69;
        return v21;
    }
    let v72 = 0;
    v72 = 10;
    return v8;
}
const v79 = [1337];
for (let v83 = 0; v83 < 100; v83 = v83 + 1337) {
    const v84 = v12(10,Function,1337,v79,Function);
}
}
%NeverOptimizeFunction(main);
main();
