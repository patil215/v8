function main() {
let v8 = 0;
while (v8 < 6) {
    const v9 = v8 + 1;
    v8 = v9;
    if (0) {
    } else {
    }
}
for (let v93 = 0; v93 < 5; v93++) {
    continue;
    const v96 = "undefined" != 1337;
    for (const v104 of v93) {
        const v105 = v96 instanceof v104;
    }
}
}
%NeverOptimizeFunction(main);
main();
