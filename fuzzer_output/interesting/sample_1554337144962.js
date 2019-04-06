function main() {
const v4 = [1337,1337];
const v5 = [v4,1337];
const v6 = {};
const v7 = {repeat:-9007199254740993,setInt8:1337,message:1000000.0,values:v6,keyFor:1337,toPrecision:v5,isConcatSpreadable:v4,abs:v6,fill:v6};
const v10 = [NaN,v7,NaN,NaN];
const v11 = -Infinity;
const v12 = [v10,v11,v11,v11,"number"];
const v14 = {toUpperCase:-4203877410};
function v16(v17,v18,v19,v20) {
}
const v21 = v12.toLocaleString(v16,v14,-3.0);
const v22 = v21.toUpperCase(v10,Reflect,-4203877410);
}
%NeverOptimizeFunction(main);
main();
