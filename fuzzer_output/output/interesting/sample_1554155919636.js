function main() {
const v2 = {EPSILON:Promise};
let v3 = v2;
const v5 = [String];
const v7 = [1337];
const v11 = Promise.all(1337,v7,v5,0,v3);
}
%NeverOptimizeFunction(main);
main();
