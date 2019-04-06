function main() {
const v1 = [1337];
const v2 = {exec:v1};
const v5 = [13.37,13.37,13.37,13.37];
const v7 = [1337];
let v8 = "getOwnPropertyDescriptor";
const v9 = v8.toLocaleLowerCase(v2,v5);
}
%NeverOptimizeFunction(main);
main();
