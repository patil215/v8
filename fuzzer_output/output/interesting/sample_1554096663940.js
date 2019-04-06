function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {exec:9007199254740991};
const v8 = {replace:9007199254740991,forEach:13.37,tan:v7,fromEntries:v3,global:v7,log:Math,getPrototypeOf:Math};
let v9 = v8;
let v12 = 0;
while (v12 < 2) {
    const v13 = v5[2];
    const v14 = v12 + 1;
    v12 = v14;
}
const v18 = [13.37,13.37,13.37,13.37];
const v19 = {exec:9007199254740991};
for (const v20 of v18) {
    with (v20) {
        v3[8] = v20;
    }
}
}
%NeverOptimizeFunction(main);
main();
