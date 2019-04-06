function main() {
const v3 = [];
const v6 = [-2.0,-2.0,-2.0];
const v7 = [v6];
const v9 = [13.37];
v7[2147483648] = v9;
v7[3111294814] = 1337;
const v10 = v7.concat(v3,"bA3/7D9Jkc");
const v11 = typeof -65535;
const v13 = v11 === "boolean";
}
%NeverOptimizeFunction(main);
main();
