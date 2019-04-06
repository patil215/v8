function main() {
const v1 = [1337,1337,1337,1337,1337];
const v4 = [13.37,13.37,13.37];
const v6 = [];
const v7 = {keys:v4,sqrt:13.37,trimEnd:v6,slice:"undefined",log2:"undefined",dotAll:1337,padStart:"undefined"};
const v9 = [v7,1337,1337,1337];
function v10(v11,v12,v13,v14) {
}
const v15 = {isExtensible:v10,deleteProperty:v10,has:v10,defineProperty:v10,set:v10,construct:v10,apply:v10};
const v17 = [13.37];
const v20 = "undefined" <= 10;
const v30 = new Proxy(v9,v15);
let v33 = 0;
const v34 = {toFixed:0,getUint8:Math,add:v6,cbrt:100,lastParen:"undefined",includes:v1,construct:8,..."undefined",...v30};
const v35 = v33 + 1;
v33 = v35;
}
%NeverOptimizeFunction(main);
main();
