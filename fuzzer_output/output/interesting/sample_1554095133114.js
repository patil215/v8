function main() {
const v5 = [1337,1337,1337,1337];
let v11 = 0;
const v12 = v11 + 1;
v11 = v12;
const v16 = [1337,1337,1337,1337];
const v19 = {preventExtension:10,deleteProperty:v5,get:10,getOwnPropertyDescriptor:v11,construct:v16,setPrototypeOf:-521713708};
}
%NeverOptimizeFunction(main);
main();
