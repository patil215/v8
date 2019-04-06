function main() {
let v1 = "unicode";
const v6 = [v1];
const v8 = [1337,1337];
const v9 = [1337,v8,v6];
const v10 = {a:v6,defineProperty:v9,substring:v8,asyncIterator:v8,sticky:-1777286928,getUint8:v8,rightContext:v6,race:v9,startsWith:13.37};
const v11 = {name:SharedArrayBuffer,MAX_SAFE_INTEGER:1337,revocable:v8,acosh:-1777286928,exp:SharedArrayBuffer,race:1337,includes:v8};
const v13 = v6.indexOf("string",SharedArrayBuffer,v10,v11,-9007199254740991);
}
%NeverOptimizeFunction(main);
main();
