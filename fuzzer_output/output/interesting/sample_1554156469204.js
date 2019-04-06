function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [1337,v4,-1777286928];
const v6 = {a:v2,defineProperty:v5,substring:v4,asyncIterator:v4,sticky:-1777286928,getUint8:v4,rightContext:v2,race:v5,startsWith:13.37};
const v10 = new Uint32Array(0);
const v11 = {trunc:1337,unicode:v6,setFloat64:v2,...v10,...v2};
}
%NeverOptimizeFunction(main);
main();
