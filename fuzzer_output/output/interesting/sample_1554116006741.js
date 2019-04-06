function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [];
const v5 = {keys:v2,sqrt:13.37,trimEnd:v4,slice:"undefined",log2:"undefined",dotAll:1337,padStart:"undefined"};
const v7 = [v5,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    return v9;
}
const v16 = {isExtensible:v8,deleteProperty:v8,has:v8,defineProperty:v8,set:v8,construct:v8,apply:v8};
const v18 = new Proxy(v7,v16);
v18.__proto__ = v5;
}
%NeverOptimizeFunction(main);
main();
