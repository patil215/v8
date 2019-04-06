function main() {
const v1 = Reflect.set(Reflect,Reflect);
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = v3 <= v5;
}
%NeverOptimizeFunction(main);
main();
