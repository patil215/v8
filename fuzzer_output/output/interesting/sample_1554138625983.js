function main() {
let v4 = 1337;
const v5 = parseInt(v4,8,"undefined");
}
%NeverOptimizeFunction(main);
main();
