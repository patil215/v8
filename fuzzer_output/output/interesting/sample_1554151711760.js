function main() {
let v1 = 1337;
const v3 = [13.37,13.37,13.37];
const v5 = -1777286928 && -1777286928;
const v8 = [v1];
v8[9] = v5;
const v10 = [1337,v8];
const v11 = [1337,v10,v8];
const v12 = {a:v8,defineProperty:v11,substring:v10,asyncIterator:v10,sticky:-1777286928,getUint8:v10,rightContext:v8,race:v11,startsWith:13.37};
const v13 = {name:SharedArrayBuffer,MAX_SAFE_INTEGER:1337,revocable:v10,acosh:-1777286928,exp:SharedArrayBuffer,race:v3,includes:v10};
const v15 = v8.indexOf(1337,SharedArrayBuffer,v12,v13,-9007199254740991);
}
%NeverOptimizeFunction(main);
main();
