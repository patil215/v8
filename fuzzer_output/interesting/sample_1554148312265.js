function main() {
const v3 = [268435456];
const v8 = [];
v8[2] = 2;
const v9 = v8.includes(v8,v3,1337,-4294967295);
}
%NeverOptimizeFunction(main);
main();
