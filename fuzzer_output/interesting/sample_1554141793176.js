function main() {
const v1 = [];
const v4 = [-2.0,-2.0,-2.0];
const v5 = [v4];
const v8 = [13.37];
v5[1.0] = v8;
v5[1337] = 1337;
const v9 = v5.concat(v1,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
