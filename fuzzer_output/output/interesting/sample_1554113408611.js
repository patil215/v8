function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v4 = {exec:9007199254740991};
const v5 = {replace:9007199254740991,forEach:13.37,tan:v4,fromEntries:v3,global:v4,log:Math,getPrototypeOf:Math};
let v7 = undefined;
v5[v7] = v3;
delete v5.getPrototypeOf;
}
%NeverOptimizeFunction(main);
main();
