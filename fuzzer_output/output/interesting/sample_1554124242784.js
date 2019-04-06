function main() {
let v1 = "cos";
v1 = -65535;
const v5 = [1337,v1,1337,1337];
const v7 = v5.includes(1337,-369022.65758638864);
}
%NeverOptimizeFunction(main);
main();
