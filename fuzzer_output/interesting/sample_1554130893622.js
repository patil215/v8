function main() {
const v1 = [13.37];
const v3 = [1337,1337];
let v4 = 13.37;
const v6 = [];
const v8 = v4.toExponential(13.37,v6,1337,v6,v3);
let v9 = 0;
let v12 = 0;
const v13 = typeof v1;
const v15 = v13 === "boolean";
}
%NeverOptimizeFunction(main);
main();
