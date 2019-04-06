function main() {
const v1 = {delete:13.37};
const v3 = [1337,1337,1337,1337];
const v4 = [];
let v5 = v4;
v4[2] = v3;
const v7 = [-670389.7735844178];
const v9 = [1337,v1,1337,1337];
const v10 = v5.concat(v7,v9);
}
%NeverOptimizeFunction(main);
main();
