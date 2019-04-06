function main() {
let v1 = 1337;
let v6 = 9007199254740992;
const v7 = parseInt(v6,16,"undefined");
}
%NeverOptimizeFunction(main);
main();
