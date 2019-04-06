function main() {
const v5 = [1337];
let v10 = undefined;
const v12 = [-2.0,-2.0];
const v14 = [1337];
const v16 = v14[9007199254740991];
const v17 = v12.includes(v16,"undefined",v12,v14);
}
%NeverOptimizeFunction(main);
main();
