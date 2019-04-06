function main() {
const v2 = {max:Function,setPrototypeOf:10};
const v3 = v2 in v2;
const v9 = "undefined" != 1337;
}
%NeverOptimizeFunction(main);
main();
