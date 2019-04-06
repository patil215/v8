function main() {
const v1 = [13.37,13.37,13.37];
const v2 = [];
let v3 = v2;
let v6 = 13.37;
const v17 = v2.indexOf(1337,v3,v1);
}
%NeverOptimizeFunction(main);
main();
