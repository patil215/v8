function main() {
const v1 = [1337,1337,1337,1337];
const v2 = {round:1337,keyFor:v1,has:v1,ceil:v1};
const v3 = v1 + v2;
const v6 = v3.localeCompare(1337,7);
}
%NeverOptimizeFunction(main);
main();
