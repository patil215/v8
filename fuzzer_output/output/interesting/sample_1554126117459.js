function main() {
let v4 = 1337;
const v5 = parseInt(v4,-9007199254740992,"undefined");
}
%NeverOptimizeFunction(main);
main();
