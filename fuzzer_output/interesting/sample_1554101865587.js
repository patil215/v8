function main() {
const v1 = {};
const v3 = new Proxy(Function,v1);
let v10 = 0;
const v12 = [1337];
const v13 = [v12];
v3[0] = Proxy;
let v17 = 0;
v17 = 10;
let v20 = 0;
const v21 = v20 + 1;
v20 = v21;
let v23 = "undefined";
let v27 = 0;
v27 = 10;
}
%NeverOptimizeFunction(main);
main();
