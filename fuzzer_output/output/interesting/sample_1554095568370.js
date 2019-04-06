function main() {
const v1 = [1337];
const v2 = {exec:v1};
let v6 = 0;
const v8 = [13.37];
const v9 = {exec:10};
v2.all = v8;
}
%NeverOptimizeFunction(main);
main();
