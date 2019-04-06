function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37];
const v8 = {getPrototypeOf:1337,apply:v7,call:1337,isExtensible:-521713708,construct:v6,ownKeys:v4,getOwnPropertyDescriptor:1337,get:-521713708,deleteProperty:13.37,preventExtension:v6};
const v10 = new Proxy(v4,v8);
delete v4[v7];
const v21 = typeof "number";
const v55 = gc();
}
%NeverOptimizeFunction(main);
main();
