function main() {
const v0 = [];
let v1 = v0;
const v3 = [1337,1337,1337,1337];
v1[4096] = v3;
const v5 = [1337,1337];
const v6 = v1.join(v1,v5);
}
%NeverOptimizeFunction(main);
main();
