function main() {
const v1 = [13.37];
const v4 = [13.37,13.37];
let v5 = Reflect;
const v6 = v5.getOwnPropertyDescriptor(v4,v1,v4);
}
%NeverOptimizeFunction(main);
main();
