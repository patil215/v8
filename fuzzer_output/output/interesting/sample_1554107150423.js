function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [13.37,v1,13.37,v3];
Function.__proto__ = Proxy;
v4.__proto__ = Object;
}
%NeverOptimizeFunction(main);
main();
