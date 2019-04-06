function main() {
const v2 = Boolean.__proto__;
const v3 = [13.37];
const v5 = {toLowerCase:Boolean,endsWith:1337};
const v7 = [4294967296];
const v8 = [v7];
const v9 = [v8];
const v11 = new BigInt64Array(v9,BigInt64Array);
const v12 = v11.reverse(v5,v2,v5,v3,4294967296);
}
%NeverOptimizeFunction(main);
main();
