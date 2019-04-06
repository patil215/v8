function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = {charAt:13.37,isFinite:1337,b:Map,toPrimitive:v4};
let v8 = 0;
do {
    for (const v9 in v5) {
        for (const v10 in v2) {
            v5[-2] = v10;
        }
    }
    const v11 = v8 + 1;
    v8 = v11;
} while (v8 < 5);
const v13 = [13.37,13.37,13.37,13.37];
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
