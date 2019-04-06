function main() {
let v2 = 0;
let v4 = "undefined";
const v7 = [1337];
let v11 = 0;
v11 = 10;
const v13 = v4.match(v7,"undefined",3,"undefined");
let v17 = 0;
v17 = 10;
}
%NeverOptimizeFunction(main);
main();
