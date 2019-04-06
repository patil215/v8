function main() {
const v2 = new Int16Array(14909);
const v5 = Reflect.defineProperty(v2,6,Reflect);
}
%NeverOptimizeFunction(main);
main();
