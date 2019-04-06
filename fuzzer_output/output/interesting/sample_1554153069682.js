function main() {
const v2 = [];
const v5 = [-2.0,-2.0,-2.0];
const v6 = [v5];
const v8 = [13.37];
v6[95045741] = v8;
v6[1337] = 1337;
const v9 = v6.concat(v2,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
