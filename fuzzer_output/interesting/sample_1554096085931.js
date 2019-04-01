function main() {
const v4 = {max:2,setPrototypeOf:10};
const v6 = 10 - v4;
const v8 = {get:Function};
const v10 = Object.defineProperty(Function,"min",v8);
const v11 = "undefined" === v6;
const v17 = "undefined" != 1337;
}
%NeverOptimizeFunction(main);
main();
