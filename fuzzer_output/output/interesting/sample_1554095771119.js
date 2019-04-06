function main() {
const v2 = {};
const v4 = new Proxy(Function,v2);
const v5 = [1337];
const v6 = v4.preventExtensions;
}
%NeverOptimizeFunction(main);
main();
