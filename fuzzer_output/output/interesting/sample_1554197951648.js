function main() {
const v2 = [13.37];
const v4 = new Proxy(v2,Math);
v4.length = 0;
}
%NeverOptimizeFunction(main);
main();
