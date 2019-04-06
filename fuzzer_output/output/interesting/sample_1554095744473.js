function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v5 = [-4096];
const v6 = {exec:v5};
v1.valueOf = Function;
v6[-4096] = 524626.4523452423;
v1[129] = "undefined";
}
%NeverOptimizeFunction(main);
main();
