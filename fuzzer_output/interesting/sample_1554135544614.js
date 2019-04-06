function main() {
const v2 = [1337,1337,1337,1337,1337];
let v3 = v2;
const v8 = v3.concat(1337,1337,100,13.37);
}
%NeverOptimizeFunction(main);
main();
