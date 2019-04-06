function main() {
const v4 = [1337,1337,1337];
const v5 = [Atomics,"function",v4,13.37];
const v8 = [13.37];
const v10 = [v8,13.37,SharedArrayBuffer];
const v11 = {getFloat64:1337,SQRT1_2:1337,flatMap:1337};
const v12 = {isExtensible:v10,apply:13.37};
const v14 = new Proxy(v5,v12);
function v16(v17,v18,v19,v20) {
    const v21 = v14[v11];
    const v23 = [1337];
    const v24 = {exec:v23};
    let v29 = v24;
}
const v35 = [1337];
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v16(10,Function,1337,v35,Function);
}
}
%NeverOptimizeFunction(main);
main();
