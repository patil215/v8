function main() {
let v3 = Promise;
const v4 = new v3(Promise,1337,"log1p",v3);
}
%NeverOptimizeFunction(main);
main();
