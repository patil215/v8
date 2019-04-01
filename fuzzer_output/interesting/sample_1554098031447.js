function main() {
const v2 = {max:Function,setPrototypeOf:10};
function v3(v4,v5,v6,v7) {
}
const v9 = {get:v3};
const v11 = Object.defineProperty(v2,"map",v9);
const v14 = {max:parseFloat,setPrototypeOf:10};
v14.constructor = -1.7976931348623157e+308;
}
%NeverOptimizeFunction(main);
main();
