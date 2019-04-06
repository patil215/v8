function main() {
let v2 = "undefined";
let v5 = 0;
let v16 = 0;
const v17 = v16.toString(13.37,1337);
const v18 = v16 + 1;
v16 = v18;
}
%NeverOptimizeFunction(main);
main();
