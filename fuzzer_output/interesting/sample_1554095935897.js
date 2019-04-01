function main() {
const v2 = {max:Function,setPrototypeOf:10};
const v5 = [13.37,13.37,13.37,13.37];
Function.__proto__ = v2;
Function.__proto__ = v5;
}
%NeverOptimizeFunction(main);
main();
