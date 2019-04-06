function main() {
let v1 = 1337;
const v3 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
const v5 = -1777286928 && -1777286928;
const v8 = [1000000000.0];
v8[9] = v5;
const v10 = [4294967295,4294967295];
const v11 = [4294967295,v10,v8];
const v12 = {a:v8,defineProperty:v11,substring:v10,asyncIterator:v10,sticky:-1777286928,getUint8:v10,rightContext:v8,race:v11,startsWith:1000000000.0};
const v13 = {name:SharedArrayBuffer,MAX_SAFE_INTEGER:4294967295,revocable:v10,acosh:-1777286928,exp:SharedArrayBuffer,race:v3,includes:v10};
const v15 = v8.indexOf(4294967295,SharedArrayBuffer,v12,v13,-9007199254740991);
}
%NeverOptimizeFunction(main);
main();
