function main() {
const v2 = new Int16Array(14909);
let v5 = undefined;
const v8 = Reflect.defineProperty(v2,6,v2);
}
%NeverOptimizeFunction(main);
main();
