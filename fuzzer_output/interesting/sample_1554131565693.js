function main() {
const v4 = [13.37,13.37];
const v5 = ["number",RegExp,v4];
const v7 = [1337,1337,1337];
v7[1073741824] = "flat";
let v15 = "undefined";
let v21 = 0;
let v28 = undefined;
v7.length = 1;
let v32 = 0;
const v33 = v32 + 1;
v32 = v33;
}
%NeverOptimizeFunction(main);
main();
