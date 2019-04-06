function main() {
const v2 = {lastIndexOf:"function",source:"function",reduce:"function",concat:-65535,asin:-65535,setUint32:-65535,trimEnd:-65535,MAX_SAFE_INTEGER:-65535,NaN:-65535};
const v3 = v2.__proto__;
v3[64] = v2;
const v8 = [13.37];
const v10 = [1337,1337,1337];
const v11 = [v10,13.37,"number",Set];
for (const v12 of v11) {
    v12[2147483648] = v12;
}
const v15 = v10.concat(v8,Math,13.37);
}
%NeverOptimizeFunction(main);
main();
