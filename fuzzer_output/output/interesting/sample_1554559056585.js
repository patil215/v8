function main() {
const v2 = {delete:1337,getOwnPropertyDescriptor:1337};
let v3 = v2;
const v9 = [9007199254740993,9007199254740993,Symbol,9007199254740993,-2.220446049250313e-16];
const v10 = new Uint16Array(v9,1337);
const v12 = new Uint8Array(v10);
const v15 = [13.37,13.37,13.37];
const v17 = [1337,1337,1337];
const v18 = [v17,gc,v15,1385843039];
const v19 = {isNaN:v18,unscopables:1385843039,replace:v18};
const v26 = v12.subarray(Reflect,Uint16Array,v19,v3);
}
%NeverOptimizeFunction(main);
main();
