function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [1337,v4,-1777286928];
const v6 = {a:v2,defineProperty:v5,substring:v4,asyncIterator:v4,sticky:-1777286928,getUint8:v4,rightContext:v2,race:v5,startsWith:13.37};
const v8 = [1337];
const v9 = [v8];
const v13 = new Uint32Array(25365);
v13[6] = v6;
}
%NeverOptimizeFunction(main);
main();
