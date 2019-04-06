function main() {
let v1 = "undefined";
const v3 = [13.37,13.37,13.37,13.37];
let v4 = v1;
const v6 = [1337];
const v7 = [v6];
const v8 = {};
const v10 = new Proxy(v7,v8);
v10.unscopables = Function;
}
%NeverOptimizeFunction(main);
main();
