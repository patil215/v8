function main() {
let v1 = 1;
const v2 = v1 + 1;
const v5 = {fromEntries:"function",source:v2,slice:"function",concat:-65535,asin:-65535,setUint32:-65535,from:-65535,MAX_SAFE_INTEGER:-65535,NaN:-65535};
const v6 = v5.__proto__;
v6[0] = v5;
const v9 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
const v10 = v9.sort(parseFloat,parseFloat);
}
%NeverOptimizeFunction(main);
main();
