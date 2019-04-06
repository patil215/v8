function main() {
const v1 = [1337,1337,1337,1337];
const v3 = v1.unshift(1337,1337);
let v6 = 0;
}
%NeverOptimizeFunction(main);
main();
