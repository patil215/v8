function main() {
const v3 = [13.37,13.37];
const v5 = Reflect.set(v3,1337,-2);
let v8 = 0;
const v9 = v8 + 1;
v8 = v9;
}
%NeverOptimizeFunction(main);
main();
