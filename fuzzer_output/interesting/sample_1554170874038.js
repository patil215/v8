function main() {
const v1 = [1337,1337,1337,1337];
const v2 = [];
let v3 = v2;
v2[2] = v1;
const v5 = [-670389.7735844178];
const v7 = [1337,1337,1337,1337];
const v8 = v3.concat(v5,v7);
}
%NeverOptimizeFunction(main);
main();
