function main() {
let v6 = undefined;
let v9 = "undefined";
const v10 = v9.indexOf(3,"undefined",Function,10,v6);
}
%NeverOptimizeFunction(main);
main();
