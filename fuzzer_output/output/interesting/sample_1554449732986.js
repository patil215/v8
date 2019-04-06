function main() {
let v4 = 1337;
const v8 = String < 13.37;
let v9 = v8;
const v10 = String.fromCodePoint(1,v9,v9,1,v4);
}
%NeverOptimizeFunction(main);
main();
