function main() {
Function.length = 2;
Function[10] = "undefined";
const v10 = {max:Function,setPrototypeOf:10};
const v19 = 10 - v10;
const v20 = {};
const v21 = [v20,v20,v20];
}
%NeverOptimizeFunction(main);
main();
