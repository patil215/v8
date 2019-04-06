function main() {
let v1 = 13.37;
const v4 = {lastIndexOf:"function",source:"function",reduce:"function",concat:-65535,asin:-65535,setUint32:-65535,trimEnd:-65535,MAX_SAFE_INTEGER:-65535,NaN:-65535};
const v5 = v4.__proto__;
v5[2966170018] = v4;
const v10 = [13.37];
const v12 = [1337,1337,1337];
const v13 = [v12,13.37,"number",Set];
for (const v14 of v13) {
    v14[2147483648] = v14;
}
const v17 = v12.concat(v10,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
