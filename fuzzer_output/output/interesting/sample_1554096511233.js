function main() {
let v3 = "undefined";
const v5 = [13.37,Function,Function,"undefined"];
const v9 = [1337];
const v10 = [v9];
let v12 = v10;
if (v10) {
} else {
}
let v17 = "undefined";
const v21 = v3.split(v5,1337);
}
%NeverOptimizeFunction(main);
main();
