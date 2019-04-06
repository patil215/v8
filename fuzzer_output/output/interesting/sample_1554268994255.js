function main() {
const v1 = {};
const v3 = new Proxy(Object,v1);
const v5 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    const v12 = new v3(v9,-65536,v5,v8);
}
const v18 = [1337];
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v7(10,Function,1337,v18,Function);
}
}
%NeverOptimizeFunction(main);
main();
