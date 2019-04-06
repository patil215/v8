function main() {
const v1 = {};
const v3 = new Proxy(Function,v1);
const v4 = Proxy instanceof v3;
}
%NeverOptimizeFunction(main);
main();
