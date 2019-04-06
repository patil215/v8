function main() {
const v3 = new Uint8Array(19311);
const v4 = typeof "function";
const v6 = v4 === "boolean";
const v9 = [1337];
let v10 = Math;
const v12 = [1337];
const v13 = v10.exp(v6,v9,v12);
}
%NeverOptimizeFunction(main);
main();
