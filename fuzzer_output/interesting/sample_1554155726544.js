function main() {
const v2 = [1337,1337,1337];
Promise.resolve = v2;
let v10 = 0;
}
%NeverOptimizeFunction(main);
main();
