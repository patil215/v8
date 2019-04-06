function main() {
let v2 = 0;
const v5 = [13.37,13.37,13.37];
let v7 = 1337;
v5.__proto__ = Symbol;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [];
v5.valueOf = v7;
const v15 = {setPrototypeOf:v14,set:1337,defineProperty:v14,apply:1337,has:v12};
const v17 = new Proxy(v12,v15);
Symbol.__proto__ = v17;
}
%NeverOptimizeFunction(main);
main();
