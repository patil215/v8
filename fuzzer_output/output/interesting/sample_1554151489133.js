function main() {
const v3 = [1337,1337,1337,1337,1337];
const v4 = {};
const v6 = new Proxy(String,v4);
let v7 = 1337;
const v9 = new v6(v7,13.37,-781851460);
}
%NeverOptimizeFunction(main);
main();
