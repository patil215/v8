function main() {
const v1 = [];
const v4 = [13.37,13.37,13.37];
const v5 = [v4];
v5[4096] = 1337;
const v6 = v5.concat(v1,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
