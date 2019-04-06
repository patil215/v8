function main() {
const v1 = [1337];
const v6 = [1337,1337];
const v7 = [v6,v6];
const v8 = {race:4096,all:1337,E:v7,unicode:"trimRight",asyncIterator:13.37,getPrototypeOf:v6,species:4096,call:"trimRight"};
let v9 = 13.37;
function v10(v11,v12,v13,v14) {
    let v15 = v9;
    v15 = v14;
    const v16 = v15.isSafeInteger(v9,v8,v12,4096,v11);
    return v16;
}
for (let v24 = 0; v24 < 100; v24++) {
    const v26 = v10(10,Function,2806098644,Number,Function);
}
}
%NeverOptimizeFunction(main);
main();
