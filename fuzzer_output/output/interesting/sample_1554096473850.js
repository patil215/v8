function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v4 = {exec:9007199254740991};
for (const v5 of v3) {
    with (v5) {
        const v6 = {split:v5,getUint16:v5,getUint32:v5,MIN_VALUE:v4,padEnd:Math};
    }
}
}
%NeverOptimizeFunction(main);
main();
