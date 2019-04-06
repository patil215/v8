function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [1337,v5,-1777286928];
const v7 = {a:v3,defineProperty:v6,substring:v5,asyncIterator:v5,sticky:-1777286928,getUint8:v5,rightContext:v3,race:v6,startsWith:13.37};
const v8 = {name:SharedArrayBuffer,MAX_SAFE_INTEGER:1337,revocable:v5,acosh:-1777286928,exp:SharedArrayBuffer,race:1337,includes:v5};
let v11 = Promise;
const v12 = new v11(v11,-2054218014);
v12.parseFloat = v7;
const v16 = 100 === v8;
}
%NeverOptimizeFunction(main);
main();
