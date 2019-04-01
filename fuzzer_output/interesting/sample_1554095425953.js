function main() {
const v1 = [1337];
const v2 = {exec:v1};
const v5 = [1337];
const v6 = {freeze:v5};
const v7 = {exec:10};
}
%NeverOptimizeFunction(main);
main();
