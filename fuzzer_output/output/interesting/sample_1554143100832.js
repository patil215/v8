function main() {
const v0 = [];
let v1 = v0;
let v4 = v1;
const v7 = v4.concat(1337,1337,100,13.37);
}
%NeverOptimizeFunction(main);
main();
