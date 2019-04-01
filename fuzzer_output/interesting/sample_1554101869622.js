function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337];
const v5 = {pop:65535,atanh:65535,setInt8:13.37,fromCodePoint:v4};
delete v5.atanh;
}
%NeverOptimizeFunction(main);
main();
