function main() {
let v2 = 0;
const v3 = v2 + 1;
v2 = v3;
const v7 = [1337,1337];
const v8 = [v7,1337];
const v9 = {};
const v10 = {repeat:-9007199254740993,setInt8:1337,message:1000000.0,values:v9,keyFor:1337,toPrecision:v8,isConcatSpreadable:v7,abs:v9,fill:v9};
const v13 = [NaN,v10,NaN,NaN];
const v14 = -Infinity;
const v15 = [v13,v14,v14,v14,v14];
const v17 = {toUpperCase:-4203877410};
function v19(v20,v21,v22,v23) {
}
const v24 = v15.toLocaleString(v19,v17,-3.0);
const v25 = v24.toUpperCase(v13,Reflect,-4203877410);
}
%NeverOptimizeFunction(main);
main();
