function main() {
const v2 = [13.37,13.37];
const v4 = {ceil:13.37,is:v2,raw:1337};
const v5 = "symbol" || v4;
const v7 = [1337];
let v10 = 0;
for (const v14 in v7) {
    const v15 = v5.includes(v7,v14,v14,1337);
}
}
%NeverOptimizeFunction(main);
main();
