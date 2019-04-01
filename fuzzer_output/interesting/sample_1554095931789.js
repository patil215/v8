function main() {
const v1 = {replace:10,getOwnPropertyDescriptor:10,localeCompare:10,isPrototypeOf:10,toPrimitive:10,toLocaleUpperCase:10,push:10};
const v2 = v1 % 10;
}
%NeverOptimizeFunction(main);
main();
