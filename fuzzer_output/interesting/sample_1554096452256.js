function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v4 = {exec:9007199254740991};
const v5 = {replace:9007199254740991,forEach:13.37,tan:v4,fromEntries:v3,global:v4,log:Math,getPrototypeOf:Math};
let v6 = v5;
const v11 = [1337];
v11.__proto__ = v6;
}
%NeverOptimizeFunction(main);
main();
