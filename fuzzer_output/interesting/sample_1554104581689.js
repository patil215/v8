function main() {
let v4 = 0;
const v5 = v4 + 1;
const v6 = [1337,1337];
const v10 = {construct:v6,deleteProperty:3,ownKeys:6,setPrototypeOf:"J9.cPbxCJ6",has:1337,isExtensible:v5};
const v12 = new Proxy(Function,v10);
const v13 = v12[10];
}
%NeverOptimizeFunction(main);
main();
