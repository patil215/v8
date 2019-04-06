function main() {
const v3 = [268435456];
const v5 = [];
v5[2] = -4294967295;
const v6 = v5.includes(v5,v3,1337,268435456);
}
%NeverOptimizeFunction(main);
main();
