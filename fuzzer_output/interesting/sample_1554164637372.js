function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,v2,1337,1337,1337];
const v5 = {construct:13.37,delete:2545607727,cosh:2545607727,MIN_SAFE_INTEGER:2545607727,toStringTag:13.37,clz32:v4};
const v8 = [1337];
const v9 = v8.unshift(v5,13.37);
v8.length = 1;
}
%NeverOptimizeFunction(main);
main();
