function main() {
const v4 = [1337,1337];
const v5 = [v4,v4];
const v6 = {race:-1397580116,all:1337,E:v5,unicode:"trimRight",asyncIterator:13.37,getPrototypeOf:v4,species:-1397580116,call:"trimRight"};
const v7 = v6.__proto__;
const v9 = new Int16Array(v7);
function v12(v13,v14,v15,v16) {
}
const v18 = {leftContext:v12};
const v19 = new Proxy(v18,v9,9);
v19[0] = 1337;
}
%NeverOptimizeFunction(main);
main();
