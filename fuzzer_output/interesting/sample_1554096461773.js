function main() {
const v3 = [13.37,13.37,Math,13.37];
v3.toString = Math;
const v4 = {exec:9007199254740991};
const v5 = {replace:9007199254740991,forEach:13.37,tan:v4,fromEntries:v3,global:v4,log:Math,getPrototypeOf:Math};
Function[10] = Function;
for (let v11 = 0; v11 < 6; v11++) {
    const v13 = [1337];
    const v14 = {exec:v13};
    v14.__proto__ = v5;
    const v16 = [13.37];
    v14.all = v16;
}
}
%NeverOptimizeFunction(main);
main();
