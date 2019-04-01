function main() {
const v2 = [1337];
const v5 = [1337];
with (v2) {
    pop = 13.37;
    const v8 = v2 != 1337;
    if (v8) {
        const v9 = v5 instanceof v2;
    } else {
    }
}
}
%NeverOptimizeFunction(main);
main();
