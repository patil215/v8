function main() {
const v3 = {lastIndexOf:"function",source:"function",reduce:"function",concat:-65535,asin:-65535,setUint32:-65535,trimEnd:-65535,MAX_SAFE_INTEGER:-65535,NaN:-65535};
const v4 = v3.__proto__;
v4[2966170018] = v3;
const v6 = new Int16Array(v4);
let v7 = 1337;
const v8 = typeof v7;
const v10 = v8 === "symbol";
function v13(v14,v15,v16,v17) {
}
const v25 = {get:v13};
const v27 = new Proxy(v25,Object,1337);
v27[0] = 1337;
}
%NeverOptimizeFunction(main);
main();
