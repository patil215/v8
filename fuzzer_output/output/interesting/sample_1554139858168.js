function main() {
const v3 = [268435456];
const v5 = [];
v5[1337] = 1337;
const v6 = v5.includes(v5,v3,1337,10);
}
%NeverOptimizeFunction(main);
main();
