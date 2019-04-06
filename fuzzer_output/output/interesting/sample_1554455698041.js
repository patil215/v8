function main() {
const v0 = {};
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [13.37,v2,1337];
const v7 = [13.37,13.37,13.37,13.37];
function v10(v11,v12,v13,v14) {
    const v16 = [13.37,13.37,13.37,13.37,13.37];
    const v18 = [v16,4294967297,13.37,4294967297];
    const v20 = [v18];
    const v21 = {};
    const v23 = new Map(v20,v21);
    Map.__proto__ = v23;
}
let v24 = v4;
const v25 = v10(2388009467,13.37,v24);
const v26 = v10(0,v7,13.37,v24,v0);
}
%NeverOptimizeFunction(main);
main();
