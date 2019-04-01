function main() {
const v4 = [13.37];
const v6 = [1337];
v6.__lookupSetter__ = 13.37;
const v7 = ["function",v4,-1522982082];
const v8 = 13.37 - 1;
const v9 = {startsWith:"function",raw:1337};
const v10 = {toPrecision:-1522982082,getUint32:13.37,fromEntries:v6,raw:RegExp,E:RegExp};
let v11 = -1522982082;
const v13 = {input:13.37,...v4,..."function",...v9,...RegExp,...v4,...RegExp,...v9};
const v14 = Object();
}
%NeverOptimizeFunction(main);
main();
