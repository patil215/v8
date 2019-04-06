function main() {
const v6 = [1337];
const v8 = [2.0,2.0,2.0,2.0];
const v10 = v8.unshift(2.0,"undefined",v6,13.37,3);
}
%NeverOptimizeFunction(main);
main();
