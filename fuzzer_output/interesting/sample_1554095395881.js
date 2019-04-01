function main() {
const v2 = {max:Function,isExtensible:10};
const v5 = {max:Function,setPrototypeOf:10};
const v8 = {max:Function,setPrototypeOf:10};
}
%NeverOptimizeFunction(main);
main();
