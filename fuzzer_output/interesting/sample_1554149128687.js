function main() {
const v1 = [13.37,13.37,13.37];
const v4 = [v1];
const v6 = [];
v6[2] = 2;
const v7 = v6.includes(v6,v4,1337,-4294967295);
}
%NeverOptimizeFunction(main);
main();
