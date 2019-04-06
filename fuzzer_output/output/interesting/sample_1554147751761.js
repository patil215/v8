function main() {
const v4 = [13.37,13.37];
const v6 = Reflect.set(v4,-1073741824,ArrayBuffer);
}
%NeverOptimizeFunction(main);
main();
