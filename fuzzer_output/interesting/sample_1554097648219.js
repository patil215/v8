function main() {
let v5 = 0;
const v6 = Boolean(v5,-2,"undefined");
const v7 = v5 + 1;
v5 = v7;
}
%NeverOptimizeFunction(main);
main();
