function main() {
let v2 = "undefined";
const v3 = typeof 13.37;
const v5 = v3 === "string";
const v10 = [13.37];
let v11 = "undefined";
let v13 = "undefined";
const v16 = v11.includes(1337,v10,1337,v2,Function);
}
%NeverOptimizeFunction(main);
main();
