function main() {
const v1 = [1337];
const v2 = [v1];
const v3 = {};
const v5 = new Proxy(v2,v3);
v5.fill = Function;
let v10 = 0;
v10 = 10;
let v14 = 0;
v14 = 10;
}
%NeverOptimizeFunction(main);
main();
