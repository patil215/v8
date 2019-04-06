function main() {
const v2 = [1337];
let v3 = "undefined";
const v6 = {set:Function};
const v8 = Object.defineProperty(v2,"create",v6);
v2[2] = v3;
let v12 = 0;
v12 = 10;
}
%NeverOptimizeFunction(main);
main();
