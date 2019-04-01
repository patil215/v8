function main() {
const v5 = [1337];
const v9 = [13.37,13.37,13.37,13.37];
const v10 = {getFloat64:9007199254740991};
for (const v12 of v9) {
    with (v12) {
        const v13 = {split:v12,getUint16:v12,getUint32:v12,MIN_VALUE:v10,padEnd:Math};
    }
    const v14 = v12 in v10;
    v5.length = 2;
}
}
%NeverOptimizeFunction(main);
main();
