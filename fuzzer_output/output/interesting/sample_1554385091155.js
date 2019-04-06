function main() {
const v1 = Reflect.setPrototypeOf(Reflect,Reflect);
}
%NeverOptimizeFunction(main);
main();
