function main() {
const v2 = [1337];
const v3 = [v2,"ignoreCase","ignoreCase",v2];
const v5 = [1337];
function v6(v7,v8,v9,v10) {
    function v11(v12,v13,v14) {
    }
    const v15 = {deleteProperty:v11,construct:v11,get:v6,ownKeys:v6,preventExtension:v11,apply:v11};
    const v17 = new Proxy(v5,v15);
    v17.__proto__ = v3;
}
const v23 = [1337];
let v26 = 0;
const v27 = v26 + 1;
v26 = v27;
const v28 = v6(10,Function,1337,v23,Function);
}
%NeverOptimizeFunction(main);
main();
