function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [13.37,v4];
const v8 = {match:v6,unscopables:"string",apply:1337,normalize:v7,getUint16:v7,NEGATIVE_INFINITY:13.37,sticky:Set};
const v13 = [1337];
const v17 = {concat:13.37,NaN:v6,isInteger:9007199254740992,assign:Set};
const v19 = [13.37,13.37];
function v20(v21,v22,v23,v24) {
}
function v25(v26,v27,v28,v29) {
}
const v31 = new Proxy(v19,v20);
v31.__proto__ = v17;
const v33 = {set:v25};
const v35 = Object.defineProperty(v31,-9007199254740993,v33);
const v37 = Symbol.unscopables;
v35[v37] = Proxy;
}
%NeverOptimizeFunction(main);
main();
