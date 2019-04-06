function main() {
const v4 = new Float32Array(36344);
const v5 = v4.__proto__;
const v7 = [13.37,13.37,13.37,13.37,13.37];
const v9 = {map:-4294967295,charAt:v7,exec:parseInt,reject:1337,SQRT2:v7,hasOwnProperty:-4294967295,isSafeInteger:13.37};
v5[v9] = -4294967295;
}
%NeverOptimizeFunction(main);
main();
