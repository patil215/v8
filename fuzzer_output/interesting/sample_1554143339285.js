function main() {
const v0 = [];
let v1 = v0;
const v3 = [-1000000000.0];
const v5 = [1337,1337,1337,1337];
const v6 = v1.concat(v3,v5);
}
%NeverOptimizeFunction(main);
main();
