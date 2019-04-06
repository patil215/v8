function main() {
const v1 = [13.37,13.37];
const v3 = [1337];
const v5 = v3[9007199254740991];
let v8 = 0;
const v9 = v8 + 1;
v8 = v9;
const v10 = v1.includes(v5,"undefined",v1,v3);
}
%NeverOptimizeFunction(main);
main();
