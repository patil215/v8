function main() {
let v4 = 13.37;
const v5 = parseInt(v4,16,"undefined");
}
%NeverOptimizeFunction(main);
main();
