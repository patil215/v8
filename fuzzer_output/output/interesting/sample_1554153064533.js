function main() {
const v0 = [];
let v1 = v0;
v1.length = 1;
let v8 = v1;
const v11 = v8.concat(1337,1337,100,13.37);
}
%NeverOptimizeFunction(main);
main();
