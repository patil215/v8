function main() {
let v2 = 0;
while (v2 < 6) {
    const v3 = v2 + 1;
    v2 = v3;
    this.__proto__ = Proxy;
}
for (let v9 = 0; v9 < 5; v9++) {
    continue;
    const v12 = "undefined" != 1337;
    for (const v13 of v9) {
        const v14 = v12 instanceof v13;
    }
}
}
%NeverOptimizeFunction(main);
main();
