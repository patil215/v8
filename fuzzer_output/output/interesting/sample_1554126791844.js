function main() {
let v1 = "undefined";
const v6 = Object.setPrototypeOf(100,Function,-2,v1);
}
%NeverOptimizeFunction(main);
main();
